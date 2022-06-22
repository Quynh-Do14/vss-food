import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  deleteOrder(id: number) {

  }
  URL = environment.api;

  private modals: any[] = [];

  constructor(private http: HttpClient) { }


  getAllOrder(params: any): Observable<any> {
    return this.http.get<any>(this.URL + '/order/all?page=0&size=10');
  }



  updateOrder(id: any, status: any) {
    return this.http.patch<any>(this.URL + `/order?id=${id}&newStatus=${status}`, null);
  }

  getOrder(status: any) {

    return this.http.get<any>(this.URL + '/order?status=' + status);
  }

}
