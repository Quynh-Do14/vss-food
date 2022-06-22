import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  URL = environment.api
  constructor(private http: HttpClient) { }

  getReportMonth(params:any):Observable<any>{
    return this.http.get<any>(this.URL+'/revenue/month', params)
  }

  
  getReportYear(params:any):Observable<any>{
    return this.http.get<any>(this.URL+'/revenue/year?date=2022', params)
  }
}
