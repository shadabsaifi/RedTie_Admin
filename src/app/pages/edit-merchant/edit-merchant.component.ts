import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-merchant',
  templateUrl: './edit-merchant.component.html',
  styleUrls: ['./edit-merchant.component.css']
})
export class EditMerchantComponent implements OnInit {

  
  viewUserDetail: any = { };
  merchantForm:FormGroup
  image:any;
  userId:any
  constructor(private service:ServiceService, private ng2ImgMaxService: Ng2ImgMaxService, private fb:FormBuilder, private activateRoute:ActivatedRoute) {
    
    this.merchantForm = this.fb.group({
      
      firstName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email:['', [Validators.required, Validators.pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]]

    })

    
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=>{
      this.userId = params.get('userId')
    })
    this.userDetail()
  } 
 
userDetail(){
    this.service.get('getUserProfile/'+this.userId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.viewUserDetail = res['data']
        console.log("userDetail====>>>>"+JSON.stringify(res['data']))
        this.merchantForm.controls['firstName'].setValue(this.viewUserDetail.firstName)
        this.merchantForm.controls['email'].setValue(this.viewUserDetail.email)
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


  onImageChange(event) {

      var self = this
      if (event.target.files && event.target.files[0]) {
          let image = event.target.files[0];
          this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(
            result => {
                    var reader = new FileReader();
                    reader.readAsDataURL(result); // read file as data url
                    reader.onload = (event:any) => { // called once readAsDataURL is completed
                    this.image = new Image();
                    
                    //Set the Base64 string return from FileReader as source.
                    this.image.src = event.target.result;
                    self.merchantForm.controls['profilePic'].setValue(event.target.result)
              } 
            },
            error => {
              console.log('😢 Oh no!', error);
            }
          );
      }
  }

  removeImage(){
      this.merchantForm.controls['profilePic'].setValue('')
  }

  save(){
    this.service.spinnerShow()
    this.merchantForm.value['userId'] = this.userId
    console.log("merchant Form====>>>>",this.merchantForm.value)
    this.service.post('editUserProfile', this.merchantForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/merchant-management')
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
    if(keyCode == 32 && !this.merchantForm.value.firstName)
      return false
    return true
  }

}
