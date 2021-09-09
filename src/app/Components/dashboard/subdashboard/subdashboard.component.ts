import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-subdashboard',
  templateUrl: './subdashboard.component.html',
  styleUrls: ['./subdashboard.component.scss']
})
export class SubdashboardComponent implements OnInit {

  constructor(private enroll: EnrollmentService) { }

  ngOnInit(): void {
    this.enroll.getData();
  }

}
