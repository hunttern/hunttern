import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [FooterComponent,NavigationComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule
  ],
  exports: [FooterComponent,NavigationComponent]
})
export class SharedModule { }
