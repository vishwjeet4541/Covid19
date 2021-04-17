import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map} from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class httpService {
  url: string;

  constructor(private http: HttpClient) { }


  summary(){  
    this.url =`${environment.apihost}summary`;
    return this.http.get(this.url)
    .pipe(map(
      data =>{
        return data
      }
    ))
  }
  Total(){
    this.url =`${environment.apihost}world/total`;
    return this.http.get(this.url)
    .pipe(map(
      data =>{
        return data
      }
    ))
  }
}
