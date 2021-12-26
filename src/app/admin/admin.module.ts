import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PlansComponent } from './Components/plans/plans.component';
import { PlanCardComponent } from './Components/plan-card/plan-card.component';
import { EditModalComponent } from './Components/plan-card/edit-modal/edit-modal.component';
import { FeaturesComponent } from './Components/features/features.component';



@NgModule({
  declarations: [AdminComponent, PlansComponent, PlanCardComponent, EditModalComponent, FeaturesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
