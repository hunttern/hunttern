import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FeaturesComponent } from './Components/features/features.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { ServicesComponent } from './Components/services/services.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [HomeComponent,HeaderComponent,FeaturesComponent,PackagesComponent,ServicesComponent,SubscribeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
