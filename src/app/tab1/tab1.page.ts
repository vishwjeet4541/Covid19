import { Component } from '@angular/core';
import { httpService } from '../serivices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Total: Object;
  Totalsummary: Object;
  globle: any;
  TotalConfirmed: any;
  TotalRecovered: any;
  TotalDeaths: any;
  Carddata: any;
  items: any;
  loadingMap: boolean;
  constructor(  private http: httpService) {

 setTimeout(() => {
  this.summary()
 },1000);
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.loadingMap = true;
  console.log("in time")
    },3000);
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
}
