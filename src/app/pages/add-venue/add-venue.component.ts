import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Ng2ImgMaxService } from 'ng2-img-max';


declare var google: any;
declare var $: any;
@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit {


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

  constructor(private service:ServiceService, private ng2ImgMaxService: Ng2ImgMaxService, private fb:FormBuilder) {
    
    this.venueForm = this.fb.group({
      
      venueName:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      
      venueType:['', [Validators.required]],
      address:['', [Validators.required]],
      city:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      images:[[], [Validators.required]],
      logo:['', [Validators.required]],
      openTime:['', [Validators.required]],
      closeTime:['', [Validators.required]],
      status:['', [Validators.required]],
      totalTables:['', [Validators.required]],
      description:['', [Validators.required, Validators.minLength(20)]],

    })

    
  }

  ngOnInit() {

    google.maps.event.addDomListener(window, 'load', this.initialize());
    $('#address').on('input',function(e){
      this.addressField = false
      console.log("false====>>>",this.addressField)
    });
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

  keypress(keyCode){
    if(keyCode >= 48 && keyCode <=57)
      return true
    return false
  }

  addVenue(){

    this.service.spinnerShow()
    this.venueForm.value['location'] = { coordinates:[this.long, this.lat], address:this.address, city:this.venueForm.value.city }
    delete this.venueForm.value['city']
    delete this.venueForm.value['address']
    console.log("data====>>>>",this.venueForm.value)
    this.service.post('addVenue', this.venueForm.value, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.service.routerLink('/venue-management')
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


  onImageChange(event, imgType) {

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
                    if(imgType == 'images'){
                      var arr = self.venueForm.value.images
                      arr.push(event.target.result)
                      self.venueForm.controls['images'].setValue(arr)
                    }
                    if(imgType == 'logo'){
                      self.venueForm.controls['logo'].setValue(event.target.result)
                    }
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
      this.venueForm.value['images'].splice(index, 1)
      console.log("images Array===>>",this.venueImage)
    }
    if(imageType == 'logo'){
      this.venueImage.value['logo'].setValue('')
    }
  }

}
