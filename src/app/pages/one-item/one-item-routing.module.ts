import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneItemPage } from './one-item.page';

const routes: Routes = [
  {
    path: '',
    component: OneItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneItemPageRoutingModule {}
