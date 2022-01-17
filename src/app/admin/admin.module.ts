import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PlansComponent } from './Components/plans/plans.component';
import { PlanCardComponent } from './Components/plan-card/plan-card.component';
import { EditModalComponent } from './Components/plan-card/edit-modal/edit-modal.component';
import { FeaturesComponent } from './Components/features/features.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { UsersComponent } from './Components/users/users.component';

const materials = [MatCardModule,MatPaginatorModule,MatTableModule,MatSelectModule,MatCheckboxModule,MatFormFieldModule];

@NgModule({
  declarations: [AdminComponent, PlansComponent, PlanCardComponent, EditModalComponent, FeaturesComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    materials
  ]
})
export class AdminModule { }
