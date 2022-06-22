import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ShipperService {
    URL = environment.api;

    private modals: any[] = [];

    constructor(private http: HttpClient) { }


    findAll(params: any): Observable<any> {
        return this.http.get<any>(this.URL + '/shipper/all?page=0&size=100');
    }



    addShipper(body: any) {
        return this.http.post<any>(this.URL + '/shipper', body);
    }

    updateShipper(id: string | number, body: any) {
        return this.http.put<any>(this.URL + '/shipper', body);
    }

    assignShipper(body: any) {
        return this.http.put<any>(this.URL + '/assign-shipper-orders', body);
    }
    deleteShipper(id: any) {
        return this.http.delete<any>(this.URL + '/shipper/' + id);
    }


}
