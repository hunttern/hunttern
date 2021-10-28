import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobilePlatformComponent } from './mobile-platform.component';
import { HeaderComponent } from './header/header.component';
import { SignalsComponent } from './signals/signals.component';
import { ToolsComponent } from './tools/tools.component';
import { ChartComponent } from './chart/chart.component';
import { PatternsComponent } from './patterns/patterns.component';
import { InputsComponent } from './inputs/inputs.component';
import { HarmonicComponent } from './inputs/harmonic/harmonic.component';
import { CandleComponent } from './inputs/candle/candle.component';
import { ContinuousComponent } from './inputs/continuous/continuous.component';
import { ReversalComponent } from './inputs/reversal/reversal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [MobilePlatformComponent, SignalsComponent, HeaderComponent, ToolsComponent,
                ChartComponent, PatternsComponent, InputsComponent, HarmonicComponent, CandleComponent,
                ContinuousComponent, ReversalComponent
                ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    MobilePlatformComponent
  ]
})
export class MobilePlatformModule { }
