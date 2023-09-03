import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authserice :AuthService ,private router  : Router ) { }

  canActivate():boolean{
    if(this.authserice.getToken ==null ){
      this.router.navigateByUrl("/layout/login")
      return false
    }
    else{
      // this.router.navigateByUrl("/layout/home")
      return true
    }
  }

}
