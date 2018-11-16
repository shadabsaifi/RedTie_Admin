import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-edit-venue-category',
  templateUrl: './edit-venue-category.component.html',
  styleUrls: ['./edit-venue-category.component.css']
})
export class EditVenueCategoryComponent implements OnInit {

  categoryForm:FormGroup
  categoryId:any;
  venueId:any
  venueDetail:any = {  }
  categoryDetail:any = { }
  image:any

  constructor( private fb:FormBuilder, private service:ServiceService, private activateRoute:ActivatedRoute, private ng2ImgMaxService:Ng2ImgMaxService) {
    this.categoryForm = this.fb.group({
      categoryName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      categoryImage:['', Validators.required]
    })

  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramms=>{
      this.venueId = paramms.get('venueId')
      this.categoryId = paramms.get('categoryId')
    })
    this.getVenueDetail()
    this.getCategoryDetailOfVenue()
  }

  getVenueDetail(){
    this.service.get('getVenueDetail/'+this.venueId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.venueDetail = res['data']
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

  getCategoryDetailOfVenue(){
    this.service.get('getCategoryDetailOfVenue/'+this.venueId+'/'+this.categoryId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.categoryDetail = res['data']
        console.log("getCategoryDetailOfVenue res=====>>>",this.categoryDetail)
        this.categoryForm.controls['categoryName'].setValue(this.categoryDetail.categoryName)
        this.categoryForm.controls['categoryImage'].setValue(this.categoryDetail.categoryImage)
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

    var self = this;
    if (event.target.files && event.target.files[0]) {
      let image = event.target.files[0];
      this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(result => {
          
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = (event:any) => { // called once readAsDataURL is completed
                this.image = new Image();

                //Set the Base64 string return from FileReader as source.
                this.image.src = event.target.result;
                  console.log("categoryImage")
                  self.categoryForm.controls['categoryImage'].setValue(event.target.result)
          } 
        }
      )
  }

  }
  removeImage(){
    this.categoryForm.controls['categoryImage'].setValue("")
  }

  saveCategory(){
    console.log("saveCategory =====>>>",this.categoryForm.value)
    this.categoryForm.value['categoryId'] = this.categoryId
    this.service.spinnerShow()
    this.service.post('editCategoryOfVenue', this.categoryForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/menu-management/'+this.venueId)
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
  cancel(){
    this.service.routerLink('/menu-management/'+this.venueId)
  }

}
