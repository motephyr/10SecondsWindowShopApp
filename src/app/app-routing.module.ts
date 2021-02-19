import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./pages/photo/photo.module').then( m => m.PhotoPageModule)
  },
  {
    path: 'fblogin',
    loadChildren: () => import('./pages/fblogin/fblogin.module').then( m => m.FbloginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'allitems',
    loadChildren: () => import('./pages/allitems/allitems.module').then( m => m.AllitemsPageModule)
  },
  {
    path: 'edit-my-information',
    loadChildren: () => import('./pages/edit-my-information/edit-my-information.module').then( m => m.EditMyInformationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
