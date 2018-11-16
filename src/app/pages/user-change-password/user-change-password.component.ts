import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

  userForm:FormGroup
  userId:any
  constructor(private activeRoute:ActivatedRoute, private service:ServiceService, private fb:FormBuilder) {

    this.userForm = this.fb.group({
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
    this.userForm.value['userId'] = this.userId
    this.userForm.value['userRole'] = "USER"
    delete this.userForm.value['confPassword']
    this.service.post('resetPassword', this.userForm.value, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/view-user/'+this.userId)
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
    this.service.routerLink('/view-user/'+this.userId)
  }


keypress(keyCode){
  
  if(keyCode == 32){
    return false
  }
  return true
}

}
