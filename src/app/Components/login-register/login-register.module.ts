import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './management/user.selector';
import { AuthReducer } from './management/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './management/auth.effects';
@NgModule({
  declarations: [LoginRegisterComponent, ForgetComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer)
  ],
  exports: [LoginRegisterComponent]
})
export class LoginRegisterModule { }
