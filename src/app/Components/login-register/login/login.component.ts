import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,private activeModal: NgbActiveModal){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  loginForm: FormGroup = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(){
    this.activeModal.close(this.loginForm);
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.activeModal.close();
  }
}
