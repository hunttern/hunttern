import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
