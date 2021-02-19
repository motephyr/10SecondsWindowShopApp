import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneItemPageRoutingModule } from './one-item-routing.module';

import { OneItemPage } from './one-item.page';
import {ItemServie} from 'src/app/services/item.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneItemPageRoutingModule
  ],
  declarations: [OneItemPage],
    providers: [ItemServie]
})
export class OneItemPageModule {}
