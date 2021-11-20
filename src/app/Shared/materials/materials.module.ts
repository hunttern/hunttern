import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog'

const materialComponents = [MatSlideToggleModule,MatButtonModule,MatCheckboxModule,MatDialogModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialsModule { }
