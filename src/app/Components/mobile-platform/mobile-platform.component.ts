import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-platform',
  templateUrl: './mobile-platform.component.html',
  styleUrls: ['./mobile-platform.component.scss']
})
export class MobilePlatformComponent {

  panel: string = '';

  signalPanel(){
    this.panel = (this.panel == '') ? 'signal': '';
  }
}
