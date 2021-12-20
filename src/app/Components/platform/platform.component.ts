import { Component } from '@angular/core';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  windowsize: boolean;
  constructor() {
    this.windowsize = window.innerWidth > 700 ? true : false;
  }
}
