import { Component } from '@angular/core';

@Component({
  selector: 'app-windows-platform',
  templateUrl: './windows-platform.component.html',
  styleUrls: ['./windows-platform.component.scss']
})
export class WindowsPlatformComponent { 
  tool: string = 'inputs';
  h1: number = 95;
  h2: number = 5;

  w1: number = 0;
  w2: number = 100;
  w3: number = 0;
  
  rightPanel: boolean = false;
  screener: boolean = true;
  
  setTool(name: string){
    
    if(this.tool === name){
      if(this.rightPanel){
        const close = setInterval(() => {
          if(this.w3 !== 0){
            this.w3--;
            this.w2++;
          }else{
            this.rightPanel = false;
            clearInterval(close);
          }
        }, 10);
      }else{
        const close = setInterval(() => {
          if(this.w3 !== 22){
            this.w3++;
            this.w2--;
          }else{
            clearInterval(close);
            this.rightPanel = true;
          }
        }, 10);
      }
    }else{
      this.tool = name;
    }
  }
  Minitrade(){
    const close = setInterval(() => {
      if(this.h2 > 5){
        this.h2--;
        this.h1++;
      }else{
        this.screener = true;
        clearInterval(close);
      }
    },10);
  }
  Maxitrade(){
    const open = setInterval(() => {
      this.screener = false;
      if(this.h2 < 41){
        this.h2++;
        this.h1--;
      }else{
        clearInterval(open);
      }
    },10);
  }
  setPerY1(result: any){
    this.h1 = result - 3;
    this.h2 = 100 - result;
  }
  setPerX1(result: any){
    this.w1 = result;
    this.w2 = 97 - result - this.w3;
    if(result === 0){
      this.w1 = 0;
      this.w2 == 97 - this.w3
    }
  }
  setPerX2(result: any){
    this.w3 = 98 - result;
    this.w2 = result - this.w1;
  }
  openInputPanel(open: boolean){
    if(open){
      const close = setInterval(() => {
        if(this.w1 !== 0){
          this.w1--;
          this.w2++;
        }else{
          clearInterval(close);
        }
      }, 10);
    }else{
      const close = setInterval(() => {
        if(this.w1 < 20){
          this.w1++;
          this.w2--;
        }else{
          clearInterval(close);
        }
      }, 10);
    }
  }
}
