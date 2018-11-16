import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-merchant-change-password',
  templateUrl: './merchant-change-password.component.html',
  styleUrls: ['./merchant-change-password.component.css']
})
export class MerchantChangePasswordComponent implements OnInit {
  merchantForm:FormGroup
  userId:any
  constructor(private activeRoute:ActivatedRoute, private service:ServiceService, private fb:FormBuilder) {

    this.merchantForm = this.fb.group({
      password:['', [Validators.required, Validators.minLength(8)]],
      confPassword:['', Validators.required]
    })

  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params=>{
      this.userId = params.get('userId')
    })
  }

  save(){

    this.merchantForm.value['userId'] = this.userId
    this.merchantForm.value['userRole'] = "MERCHANT"
    delete this.merchantForm.value['confPassword']
    this.service.post('resetPassword', this.merchantForm.value, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/view-merchant/'+this.userId)
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

  back(){
    this.service.routerLink('/view-merchant/'+this.userId)
  }

keypress(keyCode){
  
  if(keyCode == 32){
    return false
  }
  return true
}

}
