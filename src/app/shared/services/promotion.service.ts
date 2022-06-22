import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  URL= environment.api

  constructor(private http: HttpClient) { }

  getAll(params:any):Observable<any>{
    return this.http.get<any>(this.URL+'/promotion/all',params);
  }

  addPromotion(body:any){
    return this.http.post<any>(this.URL+'/promotion',body);
  }

  updatePromotion(id:string |number,body:any){
    return this.http.put<any>(`${this.URL}/promotion?id=${id}`,body);
  }

  deletePromotion(id:any){
    return this.http.delete<any>(this.URL+'/promotion?id='+id);
  }



}
