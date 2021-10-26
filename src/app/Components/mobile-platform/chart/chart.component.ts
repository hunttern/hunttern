import { AfterViewInit, Component, OnInit } from '@angular/core';
import { patternClass } from 'src/app/Patterns/Patterns.class';
import { ChartingLibraryWidgetOptions, IChartingLibraryWidget, IChartWidgetApi, ResolutionString,widget } from '../../../../assets/charting_library/charting_library';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-chart',
  template: `<button (click)="changeTheme()">Change Theme</button> <div id="container" #container></div>`,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {
  tvWidget: IChartingLibraryWidget;
  chartObject: IChartWidgetApi;
  widgetOptions: ChartingLibraryWidgetOptions;

  constructor(private bfAPI: ApiService) { }

  ngOnInit(){
    this.widgetOptions = {
      container_id: "container",
      datafeed: this.bfAPI,
      library_path: "/assets/charting_library/",
      locale: 'en',
      debug: true,
      fullscreen: false,
      symbol: 'BTCUSDT',
      autosize: true,
      theme: 'Dark',
      interval: '5' as ResolutionString
    };
  }
  ngAfterViewInit(){
    this.tvWidget = new widget(this.widgetOptions);
    this.chartReady();
  }
  changeTheme(){
    const theme: string = this.tvWidget.getTheme() as string;
    if(theme === "light"){
      this.tvWidget.changeTheme('Dark');
    }else{
      this.tvWidget.changeTheme('Light');
    }
  }
  chartReady () {
    if (!this.tvWidget) return
    this.tvWidget.onChartReady(() => {
      patternClass.chart = this.tvWidget.activeChart();
    });
  }
  getLocalLanguage() {
    return navigator.language.split('-')[0] || 'en'
  }
  drawIndicaor(indicatorName: string){
    const chart = this.tvWidget.activeChart();
    chart.createStudy( indicatorName, false, true, []);
  }
  getIndicatorValue(){
    setTimeout(() => {
      this.chartObject.getAllStudies().forEach(({ name, id }) => console.log(this.chartObject.exportData({ includeTime: false, includedStudies: [id] }).then(val => {console.log(val)})));
   }, 1500);
  }
}