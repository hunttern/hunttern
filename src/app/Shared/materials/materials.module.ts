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
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatRadioModule } from '@angular/material/radio'

const materialComponents = [MatSlideToggleModule,MatButtonModule,MatCheckboxModule,MatMenuModule,
  MatDialogModule,MatFormFieldModule,MatInputModule,MatCardModule,MatIconModule,MatSelectModule,
  MatPaginatorModule,MatTableModule,MatProgressSpinnerModule,MatExpansionModule,MatRadioModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialsModule { }
