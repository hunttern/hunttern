import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { PlansComponent } from './Components/plans/plans.component';
import { FeaturesComponent } from './Components/features/features.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path:'plans', component: PlansComponent},
    {path: '', redirectTo: 'plans', pathMatch: 'full'},
    {path:'features', component: FeaturesComponent},
    {path:'users', component: UsersComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
