import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SubdashboardComponent } from './subdashboard/subdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'dashboard',component: SubdashboardComponent},
    {path: 'Profile',component: ProfileComponent},
    {path: 'Payments',component: PlansComponent},
    {path: 'changepassword',component: ChangepasswordComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
