import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComboService {
  URL = environment.api;

  private modals: any[] = [];

  constructor(private http: HttpClient) { }

  createListPost(data: any) {
    return this.http.post<any>(this.URL, data);
  }
  getListPost() {
    return this.http.get<any>(this.URL);
  }
  updateListPost(data: any, id: number) {
    return this.http.put<any>(this.URL + id, data);
  }
  deleteListPost(id: number) {
    return this.http.delete<any>(this.URL + id);
  }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.URL + '/combo/all?page=0&size=100');
  }



  addCombo(body: any) {
    return this.http.post<any>(this.URL + '/combo', body);
  }

  updateCombo(id: string | number, body: any) {
    return this.http.put<any>(`${this.URL}/combo?id=${id}`, body);
  }

  deleteCombo(id: any) {
    return this.http.delete<any>(this.URL + '/combo?id=' + id);
  }


}
