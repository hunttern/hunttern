import { Component, Input, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-subdashboard',
  templateUrl: './subdashboard.component.html',
  styleUrls: ['./subdashboard.component.scss']
})
export class SubdashboardComponent implements OnInit {

  @Input() username: string = 'saeed';
  @Input() plan: string = 'dimond';

  constructor(private enroll: EnrollmentService) { }
  ngOnInit(): void {
    // this.enroll.getData();
  }

}
