import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { ChangepasswordComponent } from '../profile/changepassword/changepassword.component';

@Component({
  selector: 'app-subdashboard',
  templateUrl: './subdashboard.component.html',
  styleUrls: ['./subdashboard.component.scss']
})
export class SubdashboardComponent implements OnInit {

  @Input() username: string = 'saeed';
  @Input() email: string = 'saeed';
  @Input() plan: string = 'dimond';

  constructor(private enroll: EnrollmentService,private modal: NgbModal) { }
  ngOnInit(): void {
    // this.enroll.getData();
  }
  editInfo(){
    const modal = this.modal.open(ChangepasswordComponent,{animation: true});
    modal.closed.subscribe(console.log)
  }
}
