import { Component } from '@angular/core';
import { httpService } from '../serivices.service';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 chartOptions = {
   responsive: true,
   title: {
     display: true,
     text: 'Coronavirus Total Cases',
    
   },
   pan: {
     enabled: true,
     mode: 'xy'
   },
   zoom: {
     enabled: false,
     mode: 'xy'
   }
 };
 chartColors: Color[] = [
   {
    
    backgroundColor: [
      "rgb(0, 128, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 64, 255)",

    ],
    borderColor: [
      "rgb(0, 128, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 64, 255)",
  
    ],
    borderCapStyle: 'butt',
     borderDashOffset: 0.0,
     borderJoinStyle: 'miter',
     pointBorderColor: 'rgba(75,192,192,1)',
     pointBackgroundColor: '#fff',
     pointBorderWidth: 1,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
     pointHoverBorderColor: 'rgba(220,220,220,1)',
     pointHoverBorderWidth: 2,
     pointRadius: 1,
   }
 ];
 chartType = 'pie';
 showLegend = false;

 // For search
 stock = '';
  Total: Object;
  Totalsummary: Object;
  globle: any;
  TotalConfirmed: any;
  TotalRecovered: any;
  TotalDeaths: any;
  Carddata: any;
  items: any;
  loadingMap: boolean;
  totalcases: any;
  case: any;
  chartData: ChartDataSets[] = [{ data: [136069313,77585186],  label: 'Cases per day' } ];
  chartLabels: Label[];
  interval: any;
  constructor(  private http: httpService) {
  this.getData() 
  this.summary()

  }
  ngAfterViewInit() {

  }
  summary(){
    this.http.summary().subscribe(
      res=>{
        this.Totalsummary = res
        this.globle = res['Global']
        this.TotalConfirmed = this.globle.TotalConfirmed 
        this.TotalRecovered = this.globle.TotalRecovered
        this.TotalDeaths = this.globle.TotalDeaths
        this.Carddata = res['Countries']
        console.log(res['Countries'])
      
      }
    )
  }

  
  getData() {
    this.http.Total().subscribe(res => {
      console.log(res)
      this.case = res;
     this.totalcases = this.case.TotalConfirmed
     this.TotalDeaths = this.case.TotalDeaths
    this.TotalRecovered = this.case.TotalRecovered
    this.chartLabels = [];
    this.chartData[0].data = [];
    this.chartData[0].data.push(this.totalcases);
   this.chartData[0].data.push( this.TotalDeaths);
   this.chartData[0].data.push(this.TotalRecovered);
   this.chartLabels.push(`Totalcase` ,`Deaths`,`TotalRecovered`);
   });
}
}
