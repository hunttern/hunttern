import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  producSales: any[];
  producSalesMulti: any[];
  //size of the chart
  view: [number, number] = [400 , 200];
  //bars color
  colorShema = {
    domain: ['#cefa0a','#fa0a0a']
  };
  schemaType: any = "ordinal"; // ordinal or linear
  gradiant: boolean = true;
  //if x or y axis should be visible
  xAxis: boolean = false;
  yAxis: boolean = false;
  //legends
  legendTitle: string = 'Product';
  legendTitleMulti: string = 'multi';
  legendPosition: any = 'below'; // below or right
  legend: boolean = true;
  //axis labels
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  XAxisLabel: string = 'xLabel';
  YAxisLabel: string = 'yLabel';
  //animation on load
  animation: boolean = true;
  
  showGridLines: boolean = true;
  showDataLabel: boolean = true;

  barPadding: number = 7;
  tooltipDisabled: boolean = false;
  roundEdge: boolean = true;



  constructor() { 
    this.producSales = [
      {name: 'leftdays',value: 12},
      {name: 'all', value: 48}
    ];
    this.producSalesMulti = [
      {name: 'book1', series: [{name: "jan",value: 123}]},
      {name: 'book2', series: [{name: "feb",value: 654}]},
      {name: 'book3', series: [{name: "mar",value: 789}]},
      {name: 'book4', series: [{name: "apr",value: 456}]},
      {name: 'book5', series: [{name: "may",value: 321}]},
    ];
  }

  ngOnInit(): void {
  }

}
