import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.auth.isAuth()) {
          return true
        } else {
          this.auth.logout();
          this.router.navigate(['/admin', 'login'], {
            queryParams:  {
              loginAgain: true
            }
          })
        }
  }
}
