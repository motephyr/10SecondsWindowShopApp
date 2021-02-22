import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DashboardPageRoutingModule} from './dashboard-routing.module';

import {DashboardPage} from './dashboard.page';
import {ItemServie} from '../../services/item.service';
import {PipesModule} from '../../modules/pipes.module'; // -> imported filter pipe

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    PipesModule
  ],
  declarations: [DashboardPage],
  providers: [ItemServie]

})
export class DashboardPageModule {}


