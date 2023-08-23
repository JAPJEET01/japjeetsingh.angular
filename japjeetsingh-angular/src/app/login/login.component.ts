import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
  constructor(private router : Router ,private toastr: ToastrService){}
  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginform.value)
    if(this.loginform.value.email =="japjeet@gmail.com" && this.loginform.value.password=="123456" ){
      setTimeout(() => {
        this.toastr.success('Hello world!', 'Toastr fun!');
      }, 4000);
      
    }
    else{
      setTimeout(() => {
        this.toastr.error('Hello world!', 'Toastr fun!');
      }, 4000);
      
    }
    
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
 }
}
