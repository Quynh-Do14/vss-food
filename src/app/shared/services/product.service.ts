import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    URL = environment.api;

    private modals: any[] = [];

    constructor(private http: HttpClient) { }



    getAll(params: any): Observable<any> {
        return this.http.get<any>(this.URL + '/food/all', params);
    }

    addProduct(body: any) {
        return this.http.post<any>(this.URL + '/food', body);
    }

    updateProduct(id: string | number, params: any, body: any) {
        return this.http.put(this.URL, body,
            {
                responseType: 'json',
                params: this.buildHttpParams(params)
            }

        );
    }
    buildHttpParams(paramObj: any): HttpParams {
        let params = new HttpParams();
        const keys = paramObj ? Object.keys(paramObj) : null;
        if (keys && keys.length > 0) {
            keys.forEach((key, i) => {
                if (key) {
                    params = params.set(key, `${paramObj[key]}`);
                }
            })
        }
        return params;
    }
    deleteProduct(id: any) {
        return this.http.delete<any>(this.URL + '/food?id=' + id);
    }


}
