import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyConvertPageRoutingModule } from './currency-convert-routing.module';

import { CurrencyConvertPage } from './currency-convert.page';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyConvertPageRoutingModule
  ],
  declarations: [CurrencyConvertPage],
  providers: [GoogleAnalytics]
})
export class CurrencyConvertPageModule {}
