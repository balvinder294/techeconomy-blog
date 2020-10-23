import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Device } from '@ionic-native/device/ngx';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
})
export class AboutPage implements OnInit {

  deviceDetail: Device;

  constructor(
    private activatedRoute: ActivatedRoute,
    private device: Device,
    private platform: Platform,
    private analytics: GoogleAnalytics
  ) { }

  ngOnInit() {
    this.platform.ready()
      .then(() => {
        this.deviceDetail = this.device;
        this.analytics.trackView('About Page');
      });
  }

}
