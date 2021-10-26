import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobilePlatformComponent } from './mobile-platform.component';
import { HeaderComponent } from './header/header.component';
import { SignalsComponent } from './signals/signals.component';
import { ToolsComponent } from './tools/tools.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [MobilePlatformComponent, HeaderComponent, SignalsComponent, ToolsComponent, ChartComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MobilePlatformComponent
  ]
})
export class MobilePlatformModule { }
