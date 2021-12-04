import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialsModule } from './materials/materials.module';

import { FooterComponent } from './Components/footer/footer.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { CardComponent } from './Components/card/card.component';


@NgModule({
  declarations: [FooterComponent, NavigationComponent,CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule
  ],
  exports: [FooterComponent, NavigationComponent, CardComponent]
})
export class SharedModule { }
