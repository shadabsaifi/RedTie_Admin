import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';
declare var $:any
declare var google:any
@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {

  venueImage:any = []
  logoImage:any = ""
  venueForm:FormGroup
  lat:any
  long:any
  address:any = "";
  country:any = "";
  state:any = "";
  city:any = "";
  image:any;
  imageString: String;
  logoString:String = "";
  addressField:Boolean = false;
  venueId:any
  viewVenueDetail:any = {}
  constructor( private service:ServiceService, private activeRouter:ActivatedRoute, private ng2ImgMaxService:Ng2ImgMaxService, private fb:FormBuilder ) { 
    
    this.venueForm = this.fb.group({
      venueName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      venueType:['', [Validators.required]],
      address:['', [Validators.required]],
      city:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      openTime:['', [Validators.required]],
      closeTime:['', [Validators.required]],
      status:['', [Validators.required]],
      description:['', [Validators.required, Validators.minLength(20)]],
      images:[[], [Validators.required]],
      logo:['', [Validators.required]]

    })
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId')
    })
    google.maps.event.addDomListener(window, 'load', this.initialize());
    $('#address').on('input',function(e){
      this.addressField = false
      console.log("false====>>>",this.addressField)
    });
    this.venueDetail()
  }

  initialize()  {
    var input = document.getElementById('address');
      var autocomplete = new google.maps.places.Autocomplete(input);
      var self = this;
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
          var place = autocomplete.getPlace();
          var array = ""
          self.addressField = true
          console.log("address===>>>",self.addressField)
          self.address = place.formatted_address
          self.lat = place.geometry.location.lat();
          self.long = place.geometry.location.lng();
      });
  }

  venueDetail(){

    this.service.get('getVenueDetail/'+this.venueId, 1).subscribe(res=>{
     
      if(res['responseCode'] == 200){
        this.addressField = true
        console.log("addrressfiels====>>>",this.addressField)
        this.viewVenueDetail = res['data']
        this.venueForm.controls['venueName'].setValue(this.viewVenueDetail.venueName)
        this.venueForm.controls['venueType'].setValue(this.viewVenueDetail.venueType)
        this.venueForm.controls['address'].setValue(this.viewVenueDetail['location'].address)
        this.venueForm.controls['city'].setValue(this.viewVenueDetail['location'].city)
        this.venueForm.controls['openTime'].setValue(this.viewVenueDetail.openTime)
        this.venueForm.controls['closeTime'].setValue(this.viewVenueDetail.closeTime)
        this.venueForm.controls['status'].setValue(this.viewVenueDetail.status)
        this.venueForm.controls['description'].setValue(this.viewVenueDetail.description)
        this.venueForm.controls['images'].setValue(this.viewVenueDetail.images)
        this.venueForm.controls['logo'].setValue(this.viewVenueDetail.logo)
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


  saveVenue(){

    this.venueForm.value['venueId'] = this.venueId
    this.venueForm.value['location'] = { address:this.address, coordinates:[this.long, this.lat], city:this.venueForm.value.city }
    delete this.venueForm.value['address']
    if(this.venueForm.value.city){
      delete this.venueForm.value['city']  
    }
    console.log("saveVenue===>>>>",this.venueForm.value)
    this.service.spinnerShow()
    this.service.post('editVenueDetail', this.venueForm.value, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.spinnerHide()
        this.service.success(res['responseMessage'])
        this.service.routerLink('/view-venue/'+this.venueId)
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
  onImageChange(event,imgType) {

      if (event.target.files && event.target.files[0]) {
          let image = event.target.files[0];
          var self = this
          this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(
            result => {
                    var reader = new FileReader();
                    reader.readAsDataURL(result); // read file as data url
                    reader.onload = (event:any) => { // called once readAsDataURL is completed
                    this.image = new Image();
                    
                    //Set the Base64 string return from FileReader as source.
                    this.image.src = event.target.result;
                    if(imgType == 'images'){
                      let array = self.venueForm.value.images
                      array.push(event.target.result)
                      self.venueForm.controls['images'].setValue(array)
                    }
                    if(imgType == 'logo'){
                      self.venueForm.controls['logo'].setValue(event.target.result)
                    }
                    this.venueImage.push(event.target.result);
                    this.imageString='';
              } 
            },
            error => {
              console.log('😢 Oh no!', error);
            }
          );
      }
  }

  removeImage(index, imageType){
    if(imageType == 'images'){
      let array = this.venueForm.value.images
      array.splice(index, 1)
      this.venueForm.controls['images'].setValue(array)
    }
    else{
      this.venueForm.controls['logo'].setValue("")
    }
  }

}
