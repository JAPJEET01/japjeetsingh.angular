import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor( ) {}


  setdata(res:any){
    localStorage.setItem("email",res.data.email)  
    localStorage.setItem("token",res.token)  
  }

  getToken(){
    return localStorage.getItem("token")
  }
  removedata(){
    localStorage.clear()
  }
}
