import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imgUrl: string = '';
  @Input() soon: boolean = false;

}
