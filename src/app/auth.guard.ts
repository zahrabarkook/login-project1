import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  auth: any;
  check: any;
  
  constructor(private authservis:AuthService  , private router:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {




      if (localStorage.getItem('EmailAddress')) {
        return true
      }
      else {
        this.router.navigate(['/login'])
        return false
      }
    //   return this.check = this.authservis.getUserLoggedIn().subscribe((data: any) => {this.check=data
    //     console.log(data);
      
    //     if (this.check ==  ''||null) {
    //       return true;

    //     } else {
    //       // alert('else');
    //       this.router.navigate(['/login']);
    //       return false;
      
    //   }});
    }
        
    }
