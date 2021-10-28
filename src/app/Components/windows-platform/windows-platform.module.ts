import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WindowsPlatformComponent } from './windows-platform.component';
import { ChartComponent } from '../platform/chart/chart.component';
import { InputsComponent } from '../platform/inputs/inputs.component';
import { TabComponent } from '../platform/tab/tab.component';
import { StrategyComponent } from '../platform/strategy/strategy.component';
import { TradingComponent } from '../platform/strategy/trading/trading.component';
import { ToolsComponent } from '../platform/tools/tools.component';
import { WhatchlistComponent } from '../platform/tools/whatchlist/whatchlist.component';
import { AlertComponent } from '../platform/tools/alert/alert.component';
import { HotlistComponent } from '../platform/tools/hotlist/hotlist.component';
import { EventsComponent } from '../platform/tools/events/events.component';
import { ListComponent } from '../platform/tools/whatchlist/list/list.component';
import { InformationComponent } from '../platform/tools/whatchlist/information/information.component';
import { PerformanceComponent } from '../platform/tools/whatchlist/information/performance/performance.component';
import { ScreenerComponent } from '../platform/screener/screener.component';
import { SettingsComponent } from '../platform/screener/settings/settings.component';
import { HarmonicComponent } from '../platform/inputs/harmonic/harmonic.component';
import { CandleComponent } from '../platform/inputs/candle/candle.component';
import { ContinuousComponent } from '../platform/inputs/continuous/continuous.component';
import { ReversalComponent } from '../platform/inputs/reversal/reversal.component';
import { AngularSplitModule } from 'angular-split';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WindowsPlatformComponent, ChartComponent, InputsComponent, TabComponent, StrategyComponent, TradingComponent, ToolsComponent, WhatchlistComponent, AlertComponent, HotlistComponent, EventsComponent, ListComponent, InformationComponent, PerformanceComponent, ScreenerComponent, SettingsComponent, HarmonicComponent, CandleComponent, ContinuousComponent, ReversalComponent],
  imports: [
    CommonModule,
    AngularSplitModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [WindowsPlatformComponent]
})
export class WindowsPlatformModule { }
