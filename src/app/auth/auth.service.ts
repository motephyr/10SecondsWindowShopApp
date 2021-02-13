import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';

import {Storage} from '@ionic/storage';
import {AuthResponse} from './auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  loadUserData(userId, token) {
    const params = {
      userId: userId,
      token: token
    }

    return this.httpClient.post('/facebook/token', params).pipe(
      tap(async (res: AuthResponse) => {
        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          this.authSubject.next(res.user);
        }
      })
    );
  }
  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    this.authSubject.next(null);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
  async getAccessToken() {

    return await this.storage.get("ACCESS_TOKEN");
  }
}
