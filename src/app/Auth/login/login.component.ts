import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/Shared/state/shared.action';
import { LoginRegisterComponent } from '../login-register.component';
import { loginStart } from '../management/user.action';
import { User } from '../management/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  constructor(private builder: FormBuilder,private dialog: MatDialogRef<LoginRegisterComponent>,private store: Store<{user: User}>){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  loginForm: FormGroup = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onLogin(){
    const data = {email: this.loginForm.value.email, password: this.loginForm.value.password};
    this.store.dispatch(setLoading({status: true}));
    this.store.dispatch(loginStart({loginForm: data}));
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.dialog.close();
  }
}