import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $:any
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup
  email: any

  constructor(private service: ServiceService) {

    this.loginForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)])

    })

  }

  ngOnInit() {

  }

  forgotSubmit() {
    console.log("forgot====>>>", this.loginForm.value.email)
    this.email = this.loginForm.value.email
    this.service.post('forgotPassword', this.loginForm.value, 1).subscribe(res => {
      if (res['responseCode'] == 200) {
        this.service.success(res['responseMessage'])
        $('#delete').modal('show')
      }
      else if (res['responseCode'] == 402) {
        this.service.error(res['responseMessage'])
        this.service.clearLocalStorage()
      }
      else {
        this.service.error(res['responseMessage'])
      }

    }, err => {
      this.service.error('somthing went wrong.')
    })
  }


  yes(){
    $('#delete').modal('hide')
    this.service.routerLink('/login')
  }

  keypress(keyCode){
  
    if(keyCode == 32){
      return false
    }
    return true
  }

}


