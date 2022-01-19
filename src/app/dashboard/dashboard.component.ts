import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  @Input() username: string = "Angella Jones";
  constructor(private _router: Router){
  }
  ngOnInit(): void {
      this._router.navigate(['/dashboard/dashboard']);
  }
}
