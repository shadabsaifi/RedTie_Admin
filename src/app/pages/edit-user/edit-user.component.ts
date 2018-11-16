import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

    
  viewUserDetail: any = { };
  userForm:FormGroup
  userId:any
  constructor(private service:ServiceService,private fb:FormBuilder, private activateRoute:ActivatedRoute) {
    
    this.userForm = this.fb.group({
      
      firstName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      lastName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email:['', [Validators.required, Validators.pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
      phone:[''],
      gender:['', [Validators.required]]

    })

    
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=>{
      this.userId = params.get('userId')
    })
    $("#lastName, #firstName").on("keypress", function(e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
    });
    this.userDetail()
  } 
 
userDetail(){
    this.service.get('getUserProfile/'+this.userId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.viewUserDetail = res['data']
        this.userForm.controls['firstName'].setValue(this.viewUserDetail.firstName)
        this.userForm.controls['lastName'].setValue(this.viewUserDetail.lastName)
        this.userForm.controls['email'].setValue(this.viewUserDetail.email)
        this.userForm.controls['phone'].setValue(this.viewUserDetail.phone)
        this.userForm.controls['gender'].setValue(this.viewUserDetail.gender)
        console.log("form=====>>>>",this.userForm.value)
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

  save(){
    this.service.spinnerShow()
    this.userForm.value['userId'] = this.userId
    console.log("merchant Form====>>>>",this.userForm.value)
    this.service.post('editUserProfile', this.userForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/user-management')
      }
      else if (res['responseCode'] == 402) {
        this.service.error(res['responseMessage'])
        this.service.clearLocalStorage()
      }
      else {
        this.service.error(res['responseMessage'])
      }

    }, err => {
      this.service.spinnerHide()
      this.service.error('somthing went wrong.')
    })
  }

  keypress(keyCode){
    if(keyCode == 32)
      return false
    return true
  }

  

  
}
