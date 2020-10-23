import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';
import { PostDetailPage } from './postdetail/postdetail.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
    // redirectTo: '/home',
    // pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'detail/:id',
    component: PostDetailPage
    // loadChildren: () => import('./postdetail/postdetail.module').then( m => m.PostdetailModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'currency-exchange',
    loadChildren: () => import('./currency-exchange/currency-exchange.module').then( m => m.CurrencyExchangePageModule)
  },
  {
    path: 'currency-convert',
    loadChildren: () => import('./currency-convert/currency-convert.module').then( m => m.CurrencyConvertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
