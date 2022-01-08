import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent{

  email: string;
  onSubmit(data: any){
    console.log(data)
    // this.enroll.subscribe(data);
  }
}
