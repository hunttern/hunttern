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
import { ProfileComponent } from './profile/profile.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TradingComponent } from './strategy/trading/trading.component';
import { ToolsComponent } from './tools/tools.component';
import { WhatchlistComponent } from './tools/whatchlist/whatchlist.component';
import { ListComponent } from './tools/whatchlist/list/list.component';
import { InformationComponent } from './tools/whatchlist/information/information.component';
import { PerformanceComponent } from './tools/whatchlist/information/performance/performance.component';
import { ScreenerComponent } from './screener/screener.component';
import { SettingsComponent } from './screener/settings/settings.component';
import { HarmonicComponent } from './inputs/harmonic/harmonic.component';
import { ContinuousComponent } from './inputs/continuous/continuous.component';

import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';
import { DialogComponent } from './tools/whatchlist/dialog/dialog.component';

@NgModule({
  declarations: [WindowsPlatformComponent, InputsComponent, TabComponent, StrategyComponent, TradingComponent, ToolsComponent, WhatchlistComponent, ListComponent, InformationComponent, PerformanceComponent, ScreenerComponent, SettingsComponent, HarmonicComponent, ContinuousComponent, RowDirective, ColDirective,ProfileComponent, DialogComponent],
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
