import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConvertPage } from './currency-convert.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyConvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyConvertPageRoutingModule {}
