import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[Col]'
})
export class ColDirective {

  private dif: number;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Output() relative: EventEmitter<number> = new EventEmitter();

  @HostListener('mousedown',['$event']) onMousedown(event: any){
    const move: Subscription = fromEvent(document.body,'mousemove').pipe(
      tap((event: any) => {
        const EX: number = event.pageX;
        const WX: number = window.innerWidth;
        this.dif = EX/WX;
        const emit = Math.ceil(this.dif * 100);
        if(emit > this.max){
          this.relative.emit(this.max);
        }else if(emit < this.min){
          this.relative.emit(0);
        }else{
          this.relative.emit(emit);
        }
      })
    ).subscribe();
    fromEvent(document.body,'mouseup').pipe(
      tap(() => move.unsubscribe())).subscribe();
  }
}
