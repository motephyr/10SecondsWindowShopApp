import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user = null
  appPagesInit = [
    {title: 'Items', url: '/dashboard', icon: 'heart'},
    {title: 'FB login', url: '/fblogin', icon: 'mail'},
  ];
  appPageBuyer = [
    {title: 'Items', url: '/dashboard', icon: 'heart'},
    {title: 'Logout', url: '/fblogin', icon: 'mail'}
  ];
  appPageSeller = [
    {title: 'Photo', url: '/photo', icon: 'paper-plane'},
    {title: 'Logout', url: '/fblogin', icon: 'mail'}
  ];
  public appPages = this.appPagesInit

  constructor(private authService: AuthService,private http: HttpClient, private storage: Storage) {
    // this.init()
  }

  onMenuOpen() {
    this.authService.getUser().subscribe((data) => {
      this.user = data
      this.appPages = (this.user) ? (this.user.role === 'buyer' ? this.appPageBuyer : this.appPageSeller) : this.appPagesInit
    });
  }

  changeRole(role){
    const changeToRole = role === 'buyer' ? 'seller' : 'buyer';
    this.http.post('/v1/users/update', {role: changeToRole}).subscribe(async(data) => {
      await this.storage.set("USER", JSON.stringify(data.user));
      this.onMenuOpen()
    }, (error) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n${error.error}`;
      }
      console.log(errorMessage);
    })
  }
}
