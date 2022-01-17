import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LoginRegisterModule } from './Components/login-register/login-register.module';
import { TermsModule } from './Components/terms/terms.module';
import { SharedModule } from './Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule } from './Components/dashboard/dashboard.module';
import { PlatformModule } from './Components/platform/platform.module';
import { AdminModule } from './admin/admin.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AuthInterceptorService } from './Components/login-register/Services/auth-interceptor.service';
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HomeModule,
    LoginRegisterModule,
    DashboardModule,
    TermsModule,
    DashboardModule,
    NgbModule,
    PlatformModule,
    AdminModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }