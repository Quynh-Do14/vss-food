import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post-Interface/post';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  URL = environment.api
  private currentUserSubject: BehaviorSubject<any>;
  public curentUser: Observable<any>
  constructor(private router: Router, private http: HttpClient) {
    // this.currentUserSubject= new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    // this.currentUserSubject= new BehaviorSubject<any>(localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')): null);

    // this.curentUser= this.currentUserSubject.asObservable()

    // this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser') || '{}');

    const userJson = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(userJson !== null ? JSON.parse(userJson) : null);

    this.curentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): Post {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return this.currentUserSubject.next(user)
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.URL + '/login', { username, password })
      .pipe(map(user => {
        localStorage.setItem('token', JSON.stringify(user.data.accessToken));

        return user;
      }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
    this.router.navigate(['login'])
  }

  getUser(username: any) {
    return this.http.get<any>(this.URL + '/user?username=' + username)
  }

}
