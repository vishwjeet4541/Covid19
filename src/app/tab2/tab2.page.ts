
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from "moment";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  
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
     text: 'Coronavirus Daily Cases',
    
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
    
    backgroundColor: 'rgb(0, 128, 255)',
  
                
   }
 ];
 chartType = 'line';
 showLegend = false;


 stock = '';
  skeleton: boolean;
  interval: any;

 constructor(private http: HttpClient) {

  this.interval = setInterval(() => {
    this. getData() 
}, 10000);

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

      this.skeleton = true
        this.chartData[0].data.push(entry.NewConfirmed );
     }
   });
 }


   
}
