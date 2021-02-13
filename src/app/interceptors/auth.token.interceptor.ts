import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.authService.getAccessToken())
      .pipe(
        map(value => {
          return value;
        }),
        switchMap(token => {
          const transformedReq = req.clone({
            url: `http://192.168.43.68:3333${req.url}`,
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(transformedReq);
        })
      )

  }

}
