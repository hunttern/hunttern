import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartModule } from '@swimlane/ngx-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { PlansComponent } from './plans/plans.component';
import { ProfileComponent } from './profile/profile.component';
import { SubdashboardComponent } from './subdashboard/subdashboard.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { CardComponent } from './Shared/card/card.component';

@NgModule({
  declarations: [DashboardComponent,PlansComponent,ProfileComponent,SubdashboardComponent,ChangepasswordComponent,CardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PieChartModule
  ]
})
export class DashboardModule { }
