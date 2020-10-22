import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { IonicModule } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    IonicModule,
    AboutRoutingModule,
  ],
  providers: [Device]
})
export class AboutModule { }
