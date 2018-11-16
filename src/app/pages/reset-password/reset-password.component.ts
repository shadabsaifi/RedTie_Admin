import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup
  adminId: any
  secretKey:any
  constructor(private service: ServiceService, private params: ActivatedRoute) {

    this.params.paramMap.subscribe(params => {
      this.adminId = params.get('adminId')
      this.secretKey = params.get('secretKey')
    })

    this.resetForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confPassword: new FormControl('', [Validators.required])
    })

  }

  ngOnInit() {

    var data = {
      secretKey:this.secretKey,
      adminId:this.adminId
    }
    this.service.post('verifySecretKey', data, 1).subscribe(res=>{
      if (res['responseCode'] == 200) {

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

  resetSubmit() {

    this.resetForm.value['userId'] = this.adminId
    console.log("resetPassword====>>>", this.resetForm.value)
    this.service.post('resetPassword', this.resetForm.value, 0).subscribe(res => {
      if (res['responseCode'] == 200) {
        console.log("res=====>>>" + JSON.stringify(res))
        this.service.success(res['responseMessage'])
        this.service.routerLink('/login')
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
  keypress(keyCode){
  
    if(keyCode == 32){
      return false
    }
    return true
  }
  

}
