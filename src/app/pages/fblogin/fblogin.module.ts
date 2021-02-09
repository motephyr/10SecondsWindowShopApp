import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbloginPageRoutingModule } from './fblogin-routing.module';

import { FbloginPage } from './fblogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FbloginPageRoutingModule
  ],
  declarations: [FbloginPage]
})
export class FbloginPageModule {}
