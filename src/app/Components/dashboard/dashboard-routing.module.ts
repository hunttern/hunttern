import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PlansComponent } from './plans/plans.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubdashboardComponent } from './subdashboard/subdashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'dashboard',component: SubdashboardComponent},
    {path: 'Profile',component: ProfileComponent},
    {path: 'Statistics',component: StatisticsComponent},
    {path: 'Payments',component: PlansComponent},
    {path: 'changepassword',component: ChangepasswordComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],exports: [RouterModule]
})
export class DashboardRoutingModule { }
