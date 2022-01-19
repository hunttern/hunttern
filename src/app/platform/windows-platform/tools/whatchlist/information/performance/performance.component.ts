import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnChanges,AfterViewInit{

  @Input() value: number;
  @Input() time: string;
  @Input() i: string;

  ngAfterViewInit(): void {
    const body = document.querySelector(`#body${this.i}`);
    const value = document.querySelector(`#value${this.i}`);
    this.setColor(value,body);
  }
  
  ngOnChanges() {
    const body = document.querySelector(`#body${this.i}`);
    const value = document.querySelector(`#value${this.i}`);
    this.setColor(value,body);
  }
  setColor(value: any, body: any){
    if(this.value < 0 && value && body){
      value.classList.add("negetivevalue");
      body.classList.add("negetivebody");
    }
    else if(this.value > 0 && value && body){
      value.classList.add("positivevalue");
      body.classList.add("positivebody");
    }
  }
}
