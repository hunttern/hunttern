import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServiceComponent } from './Components/services/service/service.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, ServicesComponent, ServiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
