import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  URL = environment.api
  constructor(private http: HttpClient) { }

  forgetPassword(object: any){
    return this.http.post<any> (this.URL+ '/forgot-password', object )
  }

  changePassword(params: any){
    return this.http.post<any> (this.URL+ '/change-password', params)
  }
}
