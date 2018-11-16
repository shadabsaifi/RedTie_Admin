import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
declare var $:any
@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css']
})
export class AddMerchantComponent implements OnInit {


  merchantForm:FormGroup
  image:any;
  constructor(private service:ServiceService, private ng2ImgMaxService: Ng2ImgMaxService, private fb:FormBuilder) {
    
    this.merchantForm = this.fb.group({
      
      firstName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confPassword:['', [Validators.required]],
      gender:['', Validators.required],
      profilePic:['', Validators.required]

    })

    
  }

  ngOnInit() {

   
  } 
 

  addMerchant(){

    this.service.spinnerShow()
    this.merchantForm.value['userRole'] = "MERCHANT"
    this.merchantForm.value['status'] = "ACTIVE"
    delete this.merchantForm.value['confPassword']
    this.service.post('addMerchant', this.merchantForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/merchant-management')
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

  keypress(keyCode){
  
    if(keyCode == 32){
      return false
    }
    return true
  }

  name(keyCode){
  
    if(keyCode == 32 && !this.merchantForm.value.firstName){
      return false
    }
    return true
  }
}
