import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './Components/footer/footer.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

@NgModule({
  declarations: [FooterComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, NavigationComponent]
})
export class SharedModule { }
