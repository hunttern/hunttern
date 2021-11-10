import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'src/app/Chart/chart.module';
import { MaterialsModule } from 'src/app/Shared/materials/materials.module';

import { WindowsPlatformComponent } from './windows-platform.component';
import { InputsComponent } from './inputs/inputs.component';
import { TabComponent } from './tab/tab.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TradingComponent } from './strategy/trading/trading.component';
import { ToolsComponent } from './tools/tools.component';
import { WhatchlistComponent } from './tools/whatchlist/whatchlist.component';
import { AlertComponent } from './tools/alert/alert.component';
import { HotlistComponent } from './tools/hotlist/hotlist.component';
import { EventsComponent } from './tools/events/events.component';
import { ListComponent } from './tools/whatchlist/list/list.component';
import { InformationComponent } from './tools/whatchlist/information/information.component';
import { PerformanceComponent } from './tools/whatchlist/information/performance/performance.component';
import { ScreenerComponent } from './screener/screener.component';
import { SettingsComponent } from './screener/settings/settings.component';
import { HarmonicComponent } from './inputs/harmonic/harmonic.component';
import { CandleComponent } from './inputs/candle/candle.component';
import { ContinuousComponent } from './inputs/continuous/continuous.component';
import { ReversalComponent } from './inputs/reversal/reversal.component';

import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';

@NgModule({
  declarations: [WindowsPlatformComponent, InputsComponent, TabComponent, StrategyComponent, TradingComponent, ToolsComponent, WhatchlistComponent, AlertComponent, HotlistComponent, EventsComponent, ListComponent, InformationComponent, PerformanceComponent, ScreenerComponent, SettingsComponent, HarmonicComponent, CandleComponent, ContinuousComponent, ReversalComponent, RowDirective, ColDirective],
  imports: [
    CommonModule,
    AngularSplitModule,
    RouterModule,
    ReactiveFormsModule,
    ChartModule,
    MaterialsModule
  ],
  exports: [WindowsPlatformComponent]
})
export class WindowsPlatformModule { }
