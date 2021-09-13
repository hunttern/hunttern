import { Component, OnInit } from '@angular/core';
import { ChartingLibraryWidgetOptions, IChartingLibraryWidget, IChartWidgetApi, ResolutionString, widget } from 'src/scripts/charting_library/charting_library';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-chart',
  template: `<div id="container" #container></div>`,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  tvWidget: IChartingLibraryWidget;
  chartObject: IChartWidgetApi;
  widgetOptions: ChartingLibraryWidgetOptions;

  constructor(private bfAPI: ApiService) { }

  ngOnInit(){
    this.bfAPI.ws._createSocket();
    this.widgetOptions = {
      container_id: "container",
      datafeed: this.bfAPI,
      library_path: "/scripts/charting_library/",
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
    });
  }
  componentDidMount() {
    this.tvWidget = new window.TradingView.widget(this.widgetOptions);
  }
  getLocalLanguage() {
    return navigator.language.split('-')[0] || 'en'
  }
}
