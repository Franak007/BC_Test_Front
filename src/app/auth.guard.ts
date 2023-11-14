// import {CanActivateFn, Router} from '@angular/router';
// import {inject} from "@angular/core";
//
// export const authGuard: CanActivateFn = (route, state) => {
//   return inject(Router).navigate(['login']);
// };

import {Injectable} from "@angular/core";
import {  ActivatedRouteSnapshot,  CanActivate,  Router,  RouterStateSnapshot,} from "@angular/router";
import {AuthService} from "./service/auth.service";



@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(private route: Router, private auth: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isLogged()){
      return true;
    } else {
      this.route.navigate(['login'])
      return false
    }
  }

}
