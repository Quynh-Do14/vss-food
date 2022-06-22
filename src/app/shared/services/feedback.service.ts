import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  URL = environment.api;

  constructor(private http: HttpClient) { }

  getFeedback(params:any):Observable<any>{
    return this.http.get<any>(this.URL+'/feedback/all',params);
  }



}
