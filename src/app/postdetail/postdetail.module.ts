import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailRoutingModule } from './postdetail-routing.module';
import { PostDetailPage } from './postdetail.page';
import { NgWpRestApiModule, PostsService } from 'ng-wp-rest-api';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [PostDetailPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // PostDetailRoutingModule,
    NgWpRestApiModule,
    TimeagoModule,
  ],
  providers: [
    {provide: 'wpApiBaseUrl', useValue: 'https://techeconomy.in/wp-json'},
    PostsService
  ]
})
export class PostdetailModule { }
