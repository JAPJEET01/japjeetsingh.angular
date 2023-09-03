import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
constructor( private router :Router  ,  private authservice :  AuthService){}

isloggedin:any = false

  ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute =()=>false
      if(this.authservice.getToken()!=null)
      {
        this.isloggedin =true
      }
  }

  logout(){
    this.authservice.removedata()
    this.isloggedin  =false  ; 
    this.router.navigateByUrl("/layout/login")
  }
}
