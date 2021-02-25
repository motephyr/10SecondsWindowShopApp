import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user = null
  appPagesInit = [
    {title: 'Items', url: '/allitems', icon: 'heart'},
    {title: 'FB login', url: '/fblogin', icon: 'mail'},
  ];
  appPageBuyer = [
    {title: 'Browse', url: '/one-item', icon: 'heart'},
    {title: 'My Bought Items', url: '/allitems', icon: 'heart'},
    {title: 'Logout', url: '/fblogin', icon: 'mail'}
  ];
  appPageSeller = [
    {title: 'Manage My Items', url: '/dashboard', icon: 'heart'},
    {title: 'Publish Item', url: '/photo', icon: 'paper-plane'},
    {title: 'Edit My Information', url: '/edit-my-information', icon: 'paper-plane'},
    {title: 'Logout', url: '/fblogin', icon: 'mail'}
  ];
  public appPages = this.appPagesInit

  constructor(private authService: AuthService, private http: HttpClient, private storage: Storage, private router: Router) {
    // this.init()
  }

  onMenuOpen() {
    this.authService.getUser().subscribe((data) => {
      this.user = data
      this.appPages = (this.user) ? (this.user.role === 'buyer' ? this.appPageBuyer : this.appPageSeller) : this.appPagesInit
    });
  }

  changeRole(role) {
    const changeToRole = role === 'buyer' ? 'seller' : 'buyer';
    this.http.post('/v1/users/update', {role: changeToRole}).subscribe(async (data) => {
      await this.storage.set("USER", JSON.stringify(data['user']));
      this.onMenuOpen()
      if (data['user']['role'] === 'buyer') {
        this.router.navigate(['/allitems'])
      } else {
        this.router.navigate(['/dashboard'])
      }
    })

  }
}
