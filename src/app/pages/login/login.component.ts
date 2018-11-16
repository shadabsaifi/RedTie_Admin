import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  constructor(private service:ServiceService, private fb:FormBuilder ) {

    this.loginForm = this.fb.group({

      'email': ['', [Validators.required, Validators.pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
      'password':['', [Validators.required, Validators.minLength(4)]]

    })

  }

  ngOnInit() {

  }

  loginSubmit(){

    console.log("loginForm====>>>",this.loginForm.value)
    this.service.post('login', this.loginForm.value, 0).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        localStorage.setItem('adminId', res['data']._id)
        localStorage.setItem('userRole', res['data'].userRole)
        localStorage.setItem('token', res['data'].token)
        this.service.routerLink('/dashboard')
      }
      else if(res['responseCode'] == 402){
        this.service.error(res['responseMessage'])
        this.service.clearLocalStorage()
      }
      else{
        this.service.error(res['responseMessage'])
      }

  }, err=>{
      this.service.error('somthing went wrong.')
  })
}

keypress(keyCode){
  
  if(keyCode == 32){
    return false
  }
  return true
}

}
