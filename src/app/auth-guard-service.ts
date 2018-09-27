import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin();
    }
    checkLogin(): boolean {
        let isSessionvalue = JSON.parse(localStorage.getItem("isLoggedin"));
        if (isSessionvalue) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}