import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from  './auth/auth.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MediaCapture, File],
  bootstrap: [AppComponent],
})
export class AppModule {}
