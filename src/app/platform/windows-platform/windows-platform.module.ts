import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'src/app/platform/Chart/chart.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { RowDirective } from './Directives/row.directive';
import { ColDirective } from './Directives/col.directive';

import { WindowsPlatformComponent } from './windows-platform.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { ApiService } from '../Services/api.service';
import { SignalRService } from '../Services/signal-r.service';
import { HarmoonicService } from '../Services/Patterns/Services/Prediction/harmoonic.service';
import { ReversalService } from '../Services/Patterns/Services/reversal.service';
import { ContinuationService } from '../Services/Patterns/Services/continuation.service';
import { PredictionReversalService } from '../Services/Patterns/Services/Prediction/reversal.service';
import { ZigzagService } from '../Services/Patterns/Services/zigzag.service';
import { HarmonicService } from '../Services/Patterns/Services/harmonic.service';
import { TradingComponent } from './components/screener/trading/trading.component';
import { ToolsComponent } from './components/tools/tools.component';
import { WhatchlistComponent } from './components/tools/whatchlist/whatchlist.component';
import { ListComponent } from './components/tools/whatchlist/list/list.component';
import { ScreenerComponent } from './components/screener/screener.component';
import { SettingsComponent } from './components/screener/settings/settings.component';
import { HarmonicComponent } from './components/inputs/harmonic/harmonic.component';
import { ClassicComponent } from './components/inputs/classic/classic.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogComponent } from './components/tools/whatchlist/dialog/dialog.component';
import { CandleComponent } from './components/inputs/candle/candle.component';

const materials = [MatSlideToggleModule,MatButtonModule,MatFormFieldModule,MatRadioModule,MatExpansionModule,MatCheckboxModule,MatDialogModule];
@NgModule({
  declarations: [WindowsPlatformComponent, TradingComponent,
     ToolsComponent, WhatchlistComponent, ListComponent,
      ScreenerComponent, SettingsComponent, HarmonicComponent,
      InputsComponent,ProfileComponent, DialogComponent, CandleComponent, ClassicComponent,
      RowDirective, ColDirective],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ChartModule,
    PlatformRoutingModule,
    materials
  ],
  exports: [WindowsPlatformComponent],
  providers: [ApiService,SignalRService,HarmonicService,ZigzagService,PredictionReversalService,ContinuationService,ReversalService,HarmoonicService]
})
export class WindowsPlatformModule { }
