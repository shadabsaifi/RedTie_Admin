import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  image: any;
  venueId: string;
  menuForm: FormGroup;
  viewVenueDetail:any = { images:[] }
  constructor(private fb: FormBuilder, private service:ServiceService, private activeRouter:ActivatedRoute,private ng2ImgMaxService:Ng2ImgMaxService) {

  }
  
    ngOnInit() {

      this.activeRouter.paramMap.subscribe(params=>{
        this.venueId = params.get('venueId')
      })
      this.venueDetail()
      this.menuForm = this.fb.group({
        categoryName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        categoryImage: ['', Validators.required],
        menuItems: this.fb.array([])
      })
      this.newAdd()
    }

    newAdd() {
      const arrayControl = <FormArray>this.menuForm.controls['menuItems']
      let form = this.fb.group({
        itemName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
        itemImage:['', Validators.required],
        itemPrice:['', Validators.required],
        itemCode:['', Validators.required],
        discount:['', Validators.required],
        itemDescription:['', Validators.required]
      })
      arrayControl.push(form)
    }


    venueDetail(){
      this.service.spinnerShow()
      this.service.get('getVenueDetail/'+this.venueId, 1).subscribe(res=>{
       
        if(res['responseCode'] == 200){
          this.service.spinnerHide()
          this.viewVenueDetail = res['data']
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



    addMenu() {

      this.menuForm.value['venueId'] = this.venueId
      console.log("menuForm Value===>>>>",this.menuForm.value)

      this.service.spinnerShow()
      this.service.post('addMenu', this.menuForm.value, 1).subscribe(res=>{
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

    removeItem(i) {
      const arrayControl = <FormArray>this.menuForm.controls['menuItems']
      arrayControl.removeAt(i)
    }

    onImageChange(event, index, imgType) {

      console.log('fil => ', this.menuForm.value)
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
                    console.log("categoryImage")
                    self.menuForm.controls['categoryImage'].setValue(event.target.result)
                  }
                  if(imgType == 'itemImage'){ 
                    const arrayControl = <FormArray>this.menuForm.controls['menuItems']
                    arrayControl.controls[index]['controls']['itemImage'].setValue(event.target.result)
                    console.log(this.menuForm.value)

                  }  
                //Validate the File Height and Width.
            } 
          }
        )
    }
  
    }
  
    removeImage(index, imageType){
      if(imageType == 'categoryImage'){
        this.menuForm.controls['categoryImage'].setValue('')
      }
      if(imageType == 'itemImage'){
        const arrayControl = <FormArray>this.menuForm.controls['menuItems']
        arrayControl.controls[index]['controls']['itemImage'].setValue('')
      }
    }

    keypress(keyCode){
      if((keyCode >= 48 && keyCode <= 57))
        return true
      return false
    }

    cancel(){
      this.service.routerLink('/view-venue/'+this.venueId)
    }
    

}
