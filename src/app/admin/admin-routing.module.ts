import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansComponent } from './Components/plans/plans.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path:'plans', component: PlansComponent},
    {path: '**', redirectTo: 'plans', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
