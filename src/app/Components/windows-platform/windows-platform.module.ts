import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'src/app/Chart/chart.module';

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
import { DialogComponent } from './tools/whatchlist/dialog/dialog.component';
import { CandleComponent } from './inputs/candle/candle.component';
import { ClassicComponent } from './inputs/classic/classic.component';

import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const materials = [MatSlideToggleModule,MatButtonModule,MatFormFieldModule,MatRadioModule,MatExpansionModule,MatCheckboxModule,MatDialogModule];
@NgModule({
  declarations: [WindowsPlatformComponent, InputsComponent, TabComponent, StrategyComponent, TradingComponent,
     ToolsComponent, WhatchlistComponent, ListComponent, InformationComponent, PerformanceComponent,
      ScreenerComponent, SettingsComponent, HarmonicComponent, RowDirective, ColDirective,
      ProfileComponent, DialogComponent, CandleComponent, ClassicComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ChartModule,
    materials
  ],
  exports: [WindowsPlatformComponent]
})
export class WindowsPlatformModule { }
