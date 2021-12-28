import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginRegisterComponent } from '../login-register.component';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent{

  constructor(private builder: FormBuilder,private dialog: MatDialogRef<LoginRegisterComponent>) { }
  @Output() page: EventEmitter<string> = new EventEmitter();
  forgetForm: FormGroup = this.builder.group({
    email: ['',Validators.required]
  })
  onSubmit(){
    this.dialog.close();
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.dialog.close();
  }
}
