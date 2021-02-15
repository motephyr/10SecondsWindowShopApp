import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AllitemsPageRoutingModule} from './allitems-routing.module';

import {AllitemsPage} from './allitems.page';
import {ItemServie} from '../../services/item.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllitemsPageRoutingModule
  ],
  declarations: [AllitemsPage],
  providers: [ItemServie]
})
export class AllitemsPageModule {}
