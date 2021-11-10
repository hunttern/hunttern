import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-windows-platform',
  templateUrl: './windows-platform.component.html',
  styleUrls: ['./windows-platform.component.scss']
})
export class WindowsPlatformComponent { 
  h1: number = 60;
  h2: number = 40;
  h3: number = 50;
  h4: number = 50;
  w1: number = 20;
  w2: number = 57;
  w3: number = 20;

  height1 = {"height": `${this.h1}%`};
  height2 = {"height": `${this.h2}%`};
  height3 = {"height": `${this.h3}%`};
  height4 = {"height": `${this.h4}%`};
  
  rightPanel: boolean = true;
  formGroup: FormGroup;

  setTool(name: string){
    if(this.rightPanel){
      const close = setInterval(() => {
        if(this.w3 !== 0){
          this.w3--;
          this.w2++;
        }else{
          this.rightPanel = false;
          clearInterval(close);
        }
      }, 15);
    }else{
      const close = setInterval(() => {
        if(this.w3 !== 20){
          this.w3++;
          this.w2--;
        }else{
          clearInterval(close);
          this.rightPanel = true;
        }
      }, 15);
    }
  }
  onFormSubmit(formValue: any) {
    alert(JSON.stringify(formValue, null, 2));
  }
  ClosePattern(){
    const close = setInterval( () => {
      if(this.w1 !== 0){
        this.w2++;
        this.w1--;
      }else{
        clearInterval(close);
      }
    },15);
  }
  Minitrade(){
    const close = setInterval(() => {
      if(this.h2 > 5){
        this.h2--;
        this.h1++;
      }else{
        clearInterval(close);
      }
    },15);
  }
  Maxitrade(){
    const open = setInterval(() => {
      if(this.h2 < 41){
        this.h2++;
        this.h1--;
      }else{
        clearInterval(open);
      }
    },15);
  }
  setPerY1(result: any){
    this.h1 = result;
    this.h2 = 100 - result;
  }
  setPerY2(result: any){  
    this.h3 = result;
    this.h4 = 100 - result;
  }
  setPerX1(result: any){
    this.w1 = result;
    this.w2 = 97 - result - this.w3;
  }
  setPerX2(result: any){
    this.w3 = 97 - result;
    this.w2 = result - this.w1;
  }
}
