import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ABCDPatterns } from 'src/app/Patterns/ABCD.class';
import { ChartingLibraryWidgetOptions, IChartingLibraryWidget, IChartWidgetApi, ResolutionString,widget } from '../../../../assets/charting_library/charting_library';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-chart',
  template: `<button (click)="changeTheme()">Change Theme</button> <div id="container" #container></div>`,
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
  changeTheme(){
    const theme: string = this.tvWidget.getTheme() as string;
    if(theme === "light"){
      this.tvWidget.changeTheme('Dark');
    }else{
      console.log("light")
      this.tvWidget.changeTheme('Light');
    }
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
        const Btime = (Date.parse(pattern.Time[1]) / 1000);
        const Ctime = (Date.parse(pattern.Time[2]) / 1000);
        const Dtime = (Date.parse(pattern.Time[3]) / 1000);
        this.chartObject.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
          {
            shape: "abcd_pattern",
            lock: false,
            disableSelection: false,
            disableSave: true,
            disableUndo: true
          })
        this.chartObject.createMultipointShape([{ time: Atime, price: Aprice }],
          {
            shape: "text",
            lock: false,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: "test"
          })
      });
      this.chartObject.createStudy('Relative Strength Index',false,true,[]);
      setTimeout(() => {
        this.chartObject.getAllStudies().forEach(({ name, id }) => console.log(this.chartObject.exportData({ includeTime: false, includedStudies: [id] }).then(val => {console.log(val)})));
     }, 1500);
    });
  }
  componentDidMount() {
    this.tvWidget = new widget(this.widgetOptions);
    ABCDPatterns.widget = this.tvWidget;
    this.chartReady();
  }
  getLocalLanguage() {
    return navigator.language.split('-')[0] || 'en'
  }
}
