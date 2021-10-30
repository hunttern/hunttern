import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-platform',
  templateUrl: './mobile-platform.component.html',
  styleUrls: ['./mobile-platform.component.scss'],
  animations: [
    trigger('Inputpanel',[
      state('void', style({
        transform: 'translateX(-300px)'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('close', style({
        transform: 'translateX(-300px)'
      })),
      transition('open => close', animate(500)),
      transition('void => open', animate(500))
    ])
  ]
})
export class MobilePlatformComponent {

  panel: string = '';
  state: 'close' | 'open' = 'close';
  signalPanel(){
    setTimeout(() => {
      this.panel = (this.panel == '') ? 'signal': '';
      
    }, 502);
    this.state = (this.state == 'close') ? 'open' : 'close';
  }
}
