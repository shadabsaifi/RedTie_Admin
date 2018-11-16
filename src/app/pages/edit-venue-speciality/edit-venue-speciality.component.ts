import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-edit-venue-speciality',
  templateUrl: './edit-venue-speciality.component.html',
  styleUrls: ['./edit-venue-speciality.component.css']
})
export class EditVenueSpecialityComponent implements OnInit {

  image: any;
  venueId:any
  categoryId:any
  specialityForm:FormGroup
  venueDetail:any = {  }
  specialityDetail:any = {}
  constructor(private activateRoute:ActivatedRoute, private service:ServiceService, private fb:FormBuilder, private ng2ImgMaxService:Ng2ImgMaxService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId')
      this.categoryId = params.get('categoryId')
    })

    this.specialityForm = this.fb.group({
      categoryName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      categoryImage:['', [Validators.required]],
      categoryDescription:['', [Validators.required]]
    })

    this.getVenueDetail()
    this.getCategoryDetailOfSpeciality()
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

  getCategoryDetailOfSpeciality(){
    this.service.get('getCategoryDetailOfSpeciality/'+this.venueId+'/'+this.categoryId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        console.log("getCategoryDetailOfSpeciality res===>>>>"+JSON.stringify(res['data']))
        this.specialityDetail = res['data']
        this.specialityForm.controls['categoryName'].setValue(this.specialityDetail.categoryName)
        this.specialityForm.controls['categoryImage'].setValue(this.specialityDetail.categoryImage)
        this.specialityForm.controls['categoryDescription'].setValue(this.specialityDetail.categoryDescription)
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
                  self.specialityForm.controls['categoryImage'].setValue(event.target.result)
          } 
        }
      )
  }

  }
  removeImage(){
    this.specialityForm.controls['categoryImage'].setValue("")
  }

  saveCategory(){
    console.log("saveCategory =====>>>",this.specialityForm.value)
    this.specialityForm.value['categoryId'] = this.categoryId
    this.service.spinnerShow()
    this.service.post('editSpecialityOfVenue', this.specialityForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/view-venue-speciality/'+this.venueId)
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
    this.service.routerLink('/view-venue-speciality/'+this.venueId)
  }

}
