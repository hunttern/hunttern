import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[Row]'
})
export class RowDirective {

  private sub: Subscription[] = [];
  private dif: number;
  @Output() relative: EventEmitter<number> = new EventEmitter();

  @HostListener('mousedown',['$event']) onMousedown(event: any){
    const move: Subscription = fromEvent(document.body,'mousemove').pipe(
      tap((event: any) => {
        const EY: number = event.pageY;
        const WY: number = window.innerHeight;
        this.dif = EY/WY;
        this.relative.emit(Math.ceil(this.dif * 100));
        this.sub.push(move);
      })
    ).subscribe();
  }
  @HostListener('mouseup') onMouseup(){
    this.sub.forEach(element => {
      element.unsubscribe();
    });
  }
}
