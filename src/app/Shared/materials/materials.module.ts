import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'


const materialComponents = [MatSlideToggleModule,MatButtonModule,MatCheckboxModule,MatMenuModule,
  MatDialogModule,MatFormFieldModule,MatInputModule,MatCardModule,MatIconModule,MatSelectModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialsModule { }
