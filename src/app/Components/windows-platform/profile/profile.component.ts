import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  darkTheme: boolean = true;
  tab: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onChangeTheme(){
    this.darkTheme = !this.darkTheme;
  }
  displayTab(){
    this.tab = !this.tab;
  }
  navigate(){
    this.router.navigate(['/home'])
  }
}
