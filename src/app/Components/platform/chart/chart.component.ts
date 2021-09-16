import { AfterViewInit, Component, OnInit } from '@angular/core';
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
      interval: '5' as ResolutionString
    };    
    this.componentDidMount();
  }
  chartReady () {
    if (!this.tvWidget) return
    this.tvWidget.onChartReady(() => {
      this.chartObject = this.tvWidget.activeChart();
      const from = Date.now() / 1000 - 500 * 24 * 3600;
      const to = Date.now() / 1000;
      console.log(from);
      this.chartObject.createMultipointShape(
        [{ time: from, price: 32000 }, { time: to, price: 30000 }],
        {
          shape: "trend_line",
          lock: true,
          disableSelection: false,
          disableSave: true,
          disableUndo: true,
          text: "Test"
        }
      );
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
