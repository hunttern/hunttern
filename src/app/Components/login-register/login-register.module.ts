import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
@NgModule({
  declarations: [LoginRegisterComponent, ForgetComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [LoginRegisterComponent]
})
export class LoginRegisterModule { }
