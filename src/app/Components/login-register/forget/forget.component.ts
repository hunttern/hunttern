import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent{

  constructor(private builder: FormBuilder,private activeModal: NgbActiveModal) { }
  @Output() page: EventEmitter<string> = new EventEmitter();
  forgetForm: FormGroup = this.builder.group({
    email: ['',Validators.required]
  })
  onSubmit(){
    this.activeModal.close(this.forgetForm);
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.activeModal.close();
  }
}
