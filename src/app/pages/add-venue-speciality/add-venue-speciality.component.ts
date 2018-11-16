import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-add-venue-speciality',
  templateUrl: './add-venue-speciality.component.html',
  styleUrls: ['./add-venue-speciality.component.css']
})
export class AddVenueSpecialityComponent implements OnInit {

  image: any;
  venueId: string;
  venueDetail:any = { images:[] }
  specialityForm: FormGroup;
  constructor(private fb: FormBuilder, private service:ServiceService, private activeRouter:ActivatedRoute,private ng2ImgMaxService:Ng2ImgMaxService) {

  }
  
    ngOnInit() {

      this.activeRouter.paramMap.subscribe(params=>{
        this.venueId = params.get('venueId')
      })
      
      this.specialityForm = this.fb.group({
        specialityList: this.fb.array([])
      })
      this.newAdd()
      this.getVenueDetail()
    }

    newAdd() {
      const arrayControl = <FormArray>this.specialityForm.controls['specialityList']
      let form = this.fb.group({
        categoryName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        categoryDescription:['', Validators.required],
        categoryImage:['', Validators.required]
      })
      arrayControl.push(form)
    }

    getVenueDetail(){
      this.service.spinnerShow()
      this.service.get('getVenueDetail/'+this.venueId, 1).subscribe(res=>{
        if(res['responseCode'] == 200){
          this.service.spinnerHide()
          this.venueDetail = res['data']
          console.log("getVenueDetail res====>>>"+JSON.stringify(res['data']))
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




    addVenueSpeciality() {

      this.specialityForm.value['venueId'] = this.venueId
      console.log("specialityForm Value===>>>>",this.specialityForm.value)
      this.service.spinnerShow()
      this.service.post('addVenueSpeciality', this.specialityForm.value, 1).subscribe(res=>{
        console.log("res===>>>>"+JSON.stringify(res))
        if(res['responseCode'] == 200){
          this.service.spinnerHide()
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

    removeItem(i) {
      const arrayControl = <FormArray>this.specialityForm.controls['specialityList']
      arrayControl.removeAt(i)
    }

    onImageChange(event, index, imgType) {

      console.log('fil => ', this.specialityForm.value)
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
                  if(imgType == 'categoryImage'){ 
                    const arrayControl = <FormArray>this.specialityForm.controls['specialityList']
                    arrayControl.controls[index]['controls']['categoryImage'].setValue(event.target.result)
                    console.log(this.specialityForm.value)

                  }  
                //Validate the File Height and Width.
            } 
          }
        )
      }
  
    }
  
    removeImage(index, imageType){
      if(imageType == 'categoryImage'){
        const arrayControl = <FormArray>this.specialityForm.controls['specialityList']
        arrayControl.controls[index]['controls']['categoryImage'].setValue('')
      }
    }

    cancel(){
      this.service.routerLink('/view-venue-speciality/'+this.venueId)
    }
    

}
