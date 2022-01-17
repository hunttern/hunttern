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
import { AuthEffects } from './management/auth.effects';
import { AUTH_STATE_NAME } from './management/user.selector';
import { AuthReducer } from './management/user.reducer';
import { EffectsModule } from '@ngrx/effects';

import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon';
import { LoadingModule } from 'src/app/Shared/loading/loading.module';

const materials = [MatSnackBarModule,MatIconModule];
@NgModule({
  declarations: [LoginRegisterComponent, ForgetComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    materials,
    LoadingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer)
  ],
  exports: [LoginRegisterComponent]
})
export class LoginRegisterModule { }
