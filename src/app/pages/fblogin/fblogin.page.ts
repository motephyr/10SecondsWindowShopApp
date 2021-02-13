import {Component} from '@angular/core';
import {FacebookLoginPlugin} from '@capacitor-community/facebook-login';
import {Plugins, registerWebPlugin} from '@capacitor/core';
import {isPlatform} from '@ionic/angular';

import {FacebookLogin} from '@capacitor-community/facebook-login';
import {AuthService} from '../../auth/auth.service';
registerWebPlugin(FacebookLogin);

@Component({
  selector: 'app-fblogin',
  templateUrl: 'fblogin.page.html',
  styleUrls: ['fblogin.page.scss'],
})
export class FbloginPage {
  fbLogin: FacebookLoginPlugin;
  user = null;
  token = null;
  accesstoken = null;
  constructor(private authService: AuthService) {
    this.setupFbLogin();
  }

  async setupFbLogin() {
    this.accesstoken = await this.authService.getAccessToken()
    if (isPlatform('desktop')) {
      this.fbLogin = FacebookLogin;
    } else {
      // Use the native implementation inside a real app!
      const {FacebookLogin} = Plugins;
      this.fbLogin = FacebookLogin;
    }
  }

  async login() {
    const FACEBOOK_PERMISSIONS = ['email'];
    const result = await this.fbLogin.login({permissions: FACEBOOK_PERMISSIONS});

    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.authService.loadUserData(this.token.userId, this.token.token).subscribe((data) => {
        this.user = data.user
        this.accesstoken = data.user.access_token
      })
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      this.getCurrentToken();
    } else {
      // Login failed
    }
  }

  async getCurrentToken() {
    const result = await this.fbLogin.getCurrentAccessToken();

    if (result.accessToken) {
      this.token = result.accessToken;
      this.authService.loadUserData(this.token.userId, this.token.token).subscribe((data) => {
        this.user = data.user
                this.accesstoken = data.user.access_token
      })
    } else {
      // Not logged in.
    }
  }


  async logout() {
    await this.authService.logout();
    await this.fbLogin.logout();
    this.user = null;
    this.token = null;
    this.accesstoken = null;
  }
}
