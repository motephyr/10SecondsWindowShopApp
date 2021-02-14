import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap, map} from 'rxjs/operators';
import { BehaviorSubject, from} from 'rxjs';

import {Storage} from '@ionic/storage';
import {AuthResponse} from './auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  loadUserData(userId: string, token: string) {
    const params = {
      userId: userId,
      token: token
    }

    return this.httpClient.post('/facebook/token', params).pipe(
      tap(async (res: AuthResponse) => {
        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("USER", JSON.stringify(res.user));
          this.authSubject.next(res.user);
        }
      })
    );
  }
  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("USER");
    this.authSubject.next(null);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
  async getAccessToken() {
    return await this.storage.get("ACCESS_TOKEN");
  }

  getUser() {
    return from(this.storage.get("USER")).pipe(
      map((data: string) => {
          return JSON.parse(data);
      })
    );
  }
}
