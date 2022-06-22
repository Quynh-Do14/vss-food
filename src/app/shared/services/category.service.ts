import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    URL = environment.api;

    private modals: any[] = [];
    constructor(private http: HttpClient) { }
    postCategory(data: any) {
        return this.http.post<any>(this.URL, data);
    }
    getCategory() {
        return this.http.get<any>(this.URL + '/category');
    }
    putCategory(data: any, id: number) {
        return this.http.put<any>(this.URL + id, data);
    }
    deleteCategory(id: number) {
        return this.http.delete<any>(this.URL + id);
    }
    findAll(params: any): Observable<any> {
        return this.http.get<any>(this.URL + '/category', params);
    }
    addCategory(body: any) {
        return this.http.post<any>(this.URL + '/category', body);
    }
    updateCate(id: string | number, body: any) {
        return this.http.put<any>(this.URL + '/category', body);
    }
    deleteCate(id: any) {
        return this.http.delete<any>(this.URL + '/category?id=' + id);
    }
}
