import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialsModule } from 'src/app/Shared/materials/materials.module';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServiceComponent } from './Components/services/service/service.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MarketsComponent } from './Components/markets/markets.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { FAQComponent } from './Components/faq/faq.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, ServicesComponent, ServiceComponent, AboutUsComponent, MarketsComponent, SubscribeComponent, FAQComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
