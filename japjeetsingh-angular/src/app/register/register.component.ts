import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform = {
    name : '',
    email:'',
    password:''
  }
  constructor(private router : Router,private customerservice : CustomerService,private toastr : ToastrService){}
  ngOnInit(): void {
    
  }

  reg(){
    // console.log(this.registerform)
    this.router.navigateByUrl("/layout/login")
    this.customerservice.add(this.registerform).subscribe({
      next:(result:any)=>{

        console.log(result)
        if(result.success)
        {
          this.toastr.success(result.message)
          this.router.navigateByUrl("/layout/login")
        }
        else{
          this.toastr.error(result.message)
        }
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error(err)
      }
    })
  }
}

