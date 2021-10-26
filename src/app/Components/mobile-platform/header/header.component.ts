import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  // @ViewChild('hover', {static: true}) hover: HTMLElement;
  dropdown: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // fromEvent(this.hover, "click").subscribe(console.log);
    
  }
  showDropdown(){
    this.dropdown = !this.dropdown;
  }
}
