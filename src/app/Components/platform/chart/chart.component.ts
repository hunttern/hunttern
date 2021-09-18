import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ABCDPatterns } from 'src/app/Patterns/ABCD.class';
import { ChartingLibraryWidgetOptions, IChartingLibraryWidget, IChartWidgetApi, ResolutionString,widget } from '../../../../assets/charting_library/charting_library';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-chart',
  template: `<div id="container" #container></div>`,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit , AfterViewInit {
  tvWidget: IChartingLibraryWidget;
  chartObject: IChartWidgetApi;
  widgetOptions: ChartingLibraryWidgetOptions;

  constructor(private bfAPI: ApiService) { }
  ngAfterViewInit(): void {
    
  }

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
    this.componentDidMount();
  }
  chartReady () {
    if (!this.tvWidget) return
    this.tvWidget.onChartReady(() => {
      this.chartObject = this.tvWidget.activeChart();
      ABCDPatterns.chart = this.chartObject;
      ABCDPatterns.patterns.forEach((pattern: any) => {
        const Aprice = pattern.Price[0];
        const Bprice = pattern.Price[1];
        const Cprice = pattern.Price[2];
        const Dprice = pattern.Price[3];
        const Atime = (Date.parse(pattern.Time[0]) / 1000);
        console.log(Atime);
        const Btime = (Date.parse(pattern.Time[1]) / 1000);
        console.log(Btime);
        const Ctime = (Date.parse(pattern.Time[2]) / 1000);
        console.log(Ctime);
        const Dtime = (Date.parse(pattern.Time[3]) / 1000);
        console.log(Dtime);
        ABCDPatterns.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
          {
            shape: "abcd_pattern",
            lock: false,
            disableSelection: false,
            disableSave: true,
            disableUndo: true
          })
      });
      this.chartObject.createStudy('MACD',false,true,[]);
      setTimeout(() => {
        this.chartObject.getAllStudies().forEach(({ name, id }) => console.log(this.chartObject.exportData({ includeTime: false, includedStudies: [id] })));
     }, 1500);
    });
  }
  componentDidMount() {
    this.tvWidget = new widget(this.widgetOptions);
    this.chartReady();
  }
  getLocalLanguage() {
    return navigator.language.split('-')[0] || 'en'
  }
}
