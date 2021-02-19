import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMyInformationPage } from './edit-my-information.page';

const routes: Routes = [
  {
    path: '',
    component: EditMyInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMyInformationPageRoutingModule {}
