import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/Interfaces/Inews';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent{

  @Input() author:string = "Camilla Jones";
  @Input() time:string = "December 21 , 2021";

  list: number[] = [1,2,3];
}
