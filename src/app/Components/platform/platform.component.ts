import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  windowsize: boolean;
  constructor() {
    window.innerWidth > 700 ? true : false
    fromEvent(window,'resize').pipe(
      tap( (window: any) => {
        this.windowsize = window.target.innerWidth > 700 ? true : false;
      })
    ).subscribe();
  }
}
