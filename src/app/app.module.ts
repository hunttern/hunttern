import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LoginRegisterModule } from './Auth/login-register.module';
import { TermsModule } from './terms/terms.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PlatformModule } from './platform/platform.module';
import { AdminModule } from './admin/admin.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from './State/app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginRegisterModule,
    DashboardModule,
    TermsModule,
    DashboardModule,
    PlatformModule,
    AdminModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }