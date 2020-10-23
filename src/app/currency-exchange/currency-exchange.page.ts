import { Component, OnInit } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

import {convertCurrency, getCurrencyRate, getCurrencyRateList} from 'currencies-exchange-rates';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.page.html',
  styleUrls: ['./currency-exchange.page.scss'],
})
export class CurrencyExchangePage implements OnInit {

  exchangeRatesList: any;
  amountToConvert: any;
  baseCurrency = 'INR';

  currencies = [
    {
      name: 'Indian Ruppee',
      short: 'INR'
    },
    {
      name: 'United States Dollar',
      short: 'USD'
    },
    {
      name: 'Euro',
      short: 'EUR'
    },
    {
      name: 'Australian Dollar',
      short: 'AUD'
    },
    {
      name: 'Canadian Dollar',
      short: 'CAD'
    },
    {
      name: 'Pound Sterling',
      short: 'GBP'
    },
    {
      name: 'Japanese Yen',
      short: 'JPY'
    },
    {
      name: 'Chinese Yuan',
      short: 'CNY'
    },
    {
      name: 'Hong Kong Dollar',
      short: 'HKD'
    },
  ];

  constructor(private analytics: GoogleAnalytics) { }

  ngOnInit() {
    getCurrencyRateList(this.baseCurrency)
      .then(res => {
        this.exchangeRatesList = res;
      });
    this.analytics.trackView('Currency Exchange Page');
  }

  changeCurrency() {
    getCurrencyRateList(this.baseCurrency)
      .then(res => {
        this.exchangeRatesList = res;
        this.analytics.trackEvent('Currency Tool', 'Currency Exchange', this.baseCurrency);
      });
  }

}
