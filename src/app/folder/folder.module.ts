import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { NgWpRestApiModule, PostsService } from 'ng-wp-rest-api';
import { TimeagoModule } from 'ngx-timeago';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FolderPageRoutingModule,
    NgWpRestApiModule,
    TimeagoModule,
  ],
  declarations: [FolderPage],
  providers: [
    {provide: 'wpApiBaseUrl', useValue: 'https://techeconomy.in/wp-json'},
    PostsService,
    GoogleAnalytics
  ]
})
export class FolderPageModule {}
