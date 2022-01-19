import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsPlatformModule } from './windows-platform/windows-platform.module';
import { PlatformRoutingModule } from './platform-routing.module';

import { PlatformComponent } from './platform.component';

import { ApiService } from './Services/api.service';
import { SignalRService } from './Services/signal-r.service';
import { HarmoonicService } from './Services/Patterns/Services/Prediction/harmoonic.service';
import { PredictionReversalService } from './Services/Patterns/Services/Prediction/reversal.service';
import { ReversalService } from './Services/Patterns/Services/reversal.service';
import { ContinuationService } from './Services/Patterns/Services/continuation.service';
import { ZigzagService } from './Services/Patterns/Services/zigzag.service';
import { HarmonicService } from './Services/Patterns/Services/harmonic.service';

@NgModule({
  declarations: [PlatformComponent],
  imports: [
    CommonModule,
    WindowsPlatformModule,
    PlatformRoutingModule
  ],
  exports: [PlatformComponent],
  providers: [ApiService,SignalRService,HarmonicService,ZigzagService,PredictionReversalService,ContinuationService,ReversalService,HarmoonicService]
})
export class PlatformModule { }
