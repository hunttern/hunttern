import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[Col]'
})
export class ColDirective {

  private sub: Subscription[] = [];
  private dif: number;
  @Output() relative: EventEmitter<number> = new EventEmitter();

  @HostListener('mousedown',['$event']) onMousedown(event: any){
    const move: Subscription = fromEvent(document.body,'mousemove').pipe(
      tap((event: any) => {
        const EX: number = event.pageX;
        const WX: number = window.innerWidth;
        this.dif = EX/WX;
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
