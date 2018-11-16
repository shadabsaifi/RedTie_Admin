import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-add-promotion-banner',
  templateUrl: './add-promotion-banner.component.html',
  styleUrls: ['./add-promotion-banner.component.css']
})
export class AddPromotionBannerComponent implements OnInit {

  bannerImage:any = ""
  bannerForm:FormGroup
  image:any;


  constructor( private ng2ImgMaxService:Ng2ImgMaxService, private service:ServiceService, private fb:FormBuilder) { 

    this.bannerForm = this.fb.group({
      bannerName:['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      link:['',[Validators.required]],
      description:['',[Validators.required]],
      bannerImage:['', Validators.required]
    })

  }

  ngOnInit() {

  }

  addBanner(){
    this.service.spinnerShow()
    this.service.post('addAddsOn', this.bannerForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/promotion-banner-management')
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
              // this.bannerImage = event.target.result
              this.bannerForm.controls['bannerImage'].setValue(event.target.result)      
              //Validate the File Height and Width.
          } 
        },
        error => {
          console.log('😢 Oh no!', error);
        }
      )
  }

  }

  removeImage(){
    this.bannerForm.controls['bannerImage'].setValue("")    
  }

}
