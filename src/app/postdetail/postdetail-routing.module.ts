import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailPage } from './postdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PostDetailPage
  }
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class PostDetailRoutingModule {}
