import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
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
  appPageLogin = [
    {title: 'Items', url: '/dashboard', icon: 'heart'},
    {title: 'Photo', url: '/photo', icon: 'paper-plane'},
    {title: 'Logout', url: '/fblogin', icon: 'mail'}
  ];
  public appPages = this.appPagesInit

  constructor(private authService: AuthService) {
    // this.init()
  }

  onMenuOpen() {
    this.authService.getUser().subscribe((data) => {
      this.user = data
      this.appPages = (this.user) ? this.appPageLogin : this.appPagesInit
    });
  }
}
