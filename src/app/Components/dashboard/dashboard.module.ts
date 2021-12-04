import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SubdashboardComponent } from './subdashboard/subdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { PlansComponent } from './plans/plans.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent,SubdashboardComponent,ProfileComponent,ChangepasswordComponent,PlansComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
