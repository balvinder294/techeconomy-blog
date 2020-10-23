import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyExchangePageRoutingModule } from './currency-exchange-routing.module';

import { CurrencyExchangePage } from './currency-exchange.page';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyExchangePageRoutingModule,
  ],
  providers: [GoogleAnalytics],
  declarations: [CurrencyExchangePage]
})
export class CurrencyExchangePageModule {}
