import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getLoading } from 'src/app/platform/State/platform.selector';
import { iPlatformState } from '../State/platform.state';
import { SettingsComponent } from './components/screener/settings/settings.component';

@Component({
  selector: 'app-windows-platform',
  templateUrl: './windows-platform.component.html',
  styleUrls: ['./windows-platform.component.scss']
})
export class WindowsPlatformComponent {
  loading$: Observable<boolean> = this.store.select(getLoading);
  constructor(private modal: MatDialog,private store: Store<iPlatformState>) {
    if(window.innerWidth < 450){
      this.w3 = 10;
      this.w1 = 90;
      this.maxTrade = 30;
      this.maxTool = 50;
    }else if(window.innerWidth < 821){
      this.w3 = 5;
      this.w1 = 95;
      this.maxTrade = 30;
      this.maxTool = 25;
    }else{
      this.w3 = 3;
      this.w1 = 97;
      this.maxTrade = 41;
      this.maxTool = 22;
    }
    
    const windowSize = fromEvent(window, 'resize').pipe(
      tap((size: any) => {
        if(size.target.innerWidth < 450){
          this.w3 = 10;
          this.w1 = 90;
          this.maxTrade = 30;
          this.maxTool = 50;
        }else if(size.target.innerWidth < 821){
          this.w3 = 5;
          this.w1 = 95;
          this.maxTrade = 30;
          this.maxTool = 25;
        }else{
          this.w3 = 3;
          this.w1 = 97;
          this.maxTrade = 41;
          this.maxTool = 22;
        }
      })
    ).subscribe();
  }
  tool: string = 'inputs';
  h1: number = 95;
  h2: number = 5;

  w1: number = 97;
  w2: number = 0;
  w3: number = 3;
  
  rightPanel: boolean = false;
  screener: boolean = true;

  maxTrade: number = 41;
  maxTool: number = 22;
  
  setTool(name: string){
    
    if(this.tool === name){
      if(this.rightPanel){
        const close = setInterval(() => {
          if(this.w2 !== 0){
            this.w2--;
            this.w1++;
          }else{
            this.rightPanel = false;
            clearInterval(close);
          }
        }, 10);
      }else{
        const close = setInterval(() => {
          if(this.w2 !== this.maxTool){
            this.w2++;
            this.w1--;
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
      if(this.h2 < this.maxTrade){
        this.h2++;
        this.h1--;
      }else{
        clearInterval(open);
      }
    },10);
  }
  setPerY1(result: any){
    this.h1 = result - 2;
    this.h2 = 100 - this.h1;
    this.screener = this.h2 < 5 ? true : false;
  }
  
  setPerX2(result: any){
    this.w1 = result -2 ;
    this.w2 = 100 - this.w3 - this.w1;
  }

  onSetting(){
    const refDialog: MatDialogRef<SettingsComponent> = this.modal.open(SettingsComponent)
  }
}
