
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from "moment";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 // Data
 chartData: ChartDataSets[] = [{ data: [],  label: 'Cases per day' } ];
 chartLabels: Label[];

 // Options
 chartOptions = {
   responsive: true,
   title: {
     display: true,
     text: 'Cases per day',
    
   },
   pan: {
     enabled: true,
     mode: 'xy'
   },
   zoom: {
     enabled: true,
     mode: 'xy'
   }
 };
 chartColors: Color[] = [
   {
    
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
     borderDashOffset: 0.0,
     borderJoinStyle: 'miter',
     pointBorderColor: 'rgba(75,192,192,1)',
     pointBackgroundColor: '#fff',
     pointBorderWidth: 1,
     pointHoverRadius: 5,
     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
     pointHoverBorderColor: 'rgba(220,220,220,1)',
     pointHoverBorderWidth: 2,
     pointRadius: 1,
   }
 ];
 chartType = 'line';
 showLegend = false;

 // For search
 stock = '';

 constructor(private http: HttpClient) {
   this. getData()
 }

 getData() {
     this.http.get(`https://api.covid19api.com/summary`).subscribe(res => {
       console.log(res['Countries'])
     const history = res['Countries'];
  
     this.chartLabels = [];
     this.chartData[0].data = [];
    

    for (let entry of history) {
      this.chartLabels.push(`${moment(entry.Date ).format("YYYY-MM-DD") }` );
    
    }
     for (let entry of history) {

        
        this.chartData[0].data.push(entry.NewConfirmed);
     }
   });
 }

 typeChanged(e) {
   const on = e.detail.checked;
   this.chartType = on ? 'line' : 'bar';
 }
   
}
