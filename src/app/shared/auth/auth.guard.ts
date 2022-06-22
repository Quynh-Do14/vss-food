import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const curentUser = this.auth.currentUserValue

    // const curentUser = localStorage.getItem('token');
    // localStorage.getItem('currentUser')
    // console.log(curentUser);

    if (curentUser) {
      if (route.data['roleName'] && route.data['roleName'].indexOf(curentUser.roleName) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      return true
    }

    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return of(false)
  }

}
