import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllitemsPage } from './allitems.page';

const routes: Routes = [
  {
    path: '',
    component: AllitemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllitemsPageRoutingModule {}
