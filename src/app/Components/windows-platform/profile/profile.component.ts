import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  darkTheme: boolean = true;
  tab: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onChangeTheme(){
    this.darkTheme = !this.darkTheme;
  }
  displayTab(){
    this.tab = !this.tab;
  }
}
