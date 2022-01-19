import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  animations: [
    trigger('open-close', [
      state('expand', style({transform: 'translateY(0)',opacity: '100', zIndex: '100'})),
      state('shrink', style({transform: 'translateY(-100%)', opacity: '0', zIndex: '0'})),
      transition('expand <=> shrink', animate(250))
    ]),
    trigger('rotation', [
      state('expand',style({transform: 'rotate(0)'})),
      state('shrink',style({transform: 'rotate(-180deg)'})),
      transition('expand => shrink', animate('250ms ease-out')),
      transition('shrink => expand', animate('250ms ease-in'))
    ])
  ]
})
export class PrivacyPolicyComponent implements OnInit {

  cond: string = 'expand';
  constructor() { }

  ngOnInit(): void {
  }

  collpse(){
    this.cond = this.cond === 'expand' ? 'shrink' : 'expand';
  }

}
