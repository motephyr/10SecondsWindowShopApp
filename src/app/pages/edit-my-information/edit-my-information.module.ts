import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMyInformationPageRoutingModule } from './edit-my-information-routing.module';

import { EditMyInformationPage } from './edit-my-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMyInformationPageRoutingModule
  ],
  declarations: [EditMyInformationPage]
})
export class EditMyInformationPageModule {}
