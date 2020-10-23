import { Component, OnInit } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

import {convertCurrency, getCurrencyRate, getCurrencyRateList} from 'currencies-exchange-rates';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.page.html',
  styleUrls: ['./currency-convert.page.scss'],
})
export class CurrencyConvertPage implements OnInit {

  showConvert = false;
  fromCurrency: string;
  toCurrency: string;
  currencyAmount: number;
  convertedValue: number;

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
    const sourceCurrency = 'INR';
    const targetCurrency = 'USD';
    const amount = 100;
    this.analytics.trackView('Currency Convert Page');
    // this.showDefaultConversion(sourceCurrency, targetCurrency, amount);
  }

  showDefaultConversion(sourceCurrency: string, targetCurrency: string, amount: number) {
    convertCurrency(sourceCurrency, targetCurrency, amount)
      .then(res => {
        this.convertedValue = res;
        this.showConvert = true;
      });
  }

  showConversion() {
    convertCurrency(this.fromCurrency, this.toCurrency, this.currencyAmount)
      .then(res => {
        this.convertedValue = res;
        this.showConvert = true;
        this.analytics.trackEvent('Currency Tool', 'Currency Convert', this.fromCurrency + ' to ' + this.toCurrency);
      });
  }

}
