import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const materialComponents = [MatSlideToggleModule,MatButtonModule,MatCheckboxModule,MatMenuModule,MatDialogModule,MatFormFieldModule,MatInputModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialsModule { }
