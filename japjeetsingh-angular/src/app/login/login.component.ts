import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform =  new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password:  new FormControl("",[Validators.required,Validators.minLength(5)])
  })
  constructor(private router : Router){}
  ngOnInit(): void {
  }

  submit(){
    
  }
}
