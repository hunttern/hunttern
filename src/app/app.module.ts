import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LoginRegisterModule } from './Auth/login-register.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppState } from './State/app.state';

import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './Auth/management/auth.effects';

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
    HttpClientModule,
    LoginRegisterModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }