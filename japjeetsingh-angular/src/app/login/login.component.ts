import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../shared/customer/customer.service';


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
  constructor(private router : Router ,private toastr: ToastrService , private customerservice : CustomerService){}
  ngOnInit(): void {
  }

  submit(){
    this.customerservice.login(this.loginform.value).subscribe({
      next:(res:any)=>{
        // console.log(res.success)
        if(res.success)
        {
          // this.authservice.setdata(res)
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/about")
        }
        else{
          this.toastr.error(res.message)
        }
      },
      error:(err:any)=>{
        this.toastr.error(err)
      }
    })
  }
  
  }

// admin@kizatextiles.com