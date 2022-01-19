import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent{
  dark: boolean = true;
  changeTheme(){
    this.dark = !this.dark;
    // document.documentElement.style.setProperty('$platformBackground', '#fff');
    console.log(window.getComputedStyle(document.body).getPropertyValue('--platformBackground'));
    // console.log(getComputedStyle(document.documentElement).getPropertyValue('$platformBackground'));
  }
}
