import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/Shared/state/shared.action';
import { LoginRegisterComponent } from '../login-register.component';
import { registerStart } from '../management/user.action';
import { AuthState } from '../management/user.state';
import { AuthService } from '../Services/auth.service';
import { checkPassword } from './Custome';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  hide1 = true;
  hide2 = true;
  constructor(private builder: FormBuilder,private dialog: MatDialogRef<LoginRegisterComponent>,private store: Store<AuthState>){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  registerForm = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {validator: checkPassword})
  onRegister(){
    const data = {email: this.registerForm.value.email, password: this.registerForm.value.password,confirmPassword: this.registerForm.value.confirmPassword};
    this.store.dispatch(setLoading({status: true}));
    this.store.dispatch(registerStart({registerForm: data}))
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.dialog.close();
  }
}
