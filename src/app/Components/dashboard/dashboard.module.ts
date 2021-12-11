import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { PlansComponent } from './plans/plans.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubdashboardComponent } from './subdashboard/subdashboard.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [DashboardComponent,PlansComponent,ProfileComponent,StatisticsComponent,SubdashboardComponent,ChangepasswordComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
