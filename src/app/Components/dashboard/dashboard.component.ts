import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  @Input() username: string = "Angella Jones";
  @Input() email: string = "Angella4jones@gmail.com";
}
