import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {




  constructor(private http:HttpClient) {}

  getChartData(): Observable<any> {
    return this.http.get('/assets/chart-data.json');
  }

}
