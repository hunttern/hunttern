import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor() { }
  @Output() panel: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  activePanel(name: string){
    this.panel.emit(name);
  }
}
