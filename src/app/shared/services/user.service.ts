import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = environment.api

  constructor(private http: HttpClient) { }

  getUser(params: any):Observable<any> {
    return this.http.get<any>(this.URL + '/user/search' , params);
  }

  updateUser( params:any) {
    return this.http.put<any>(this.URL+ '/user/edit' , params );
  }

  deleteUser(id: any) {
    return this.http.delete<any>(this.URL + '/user/delete/' + id);
  }



}
