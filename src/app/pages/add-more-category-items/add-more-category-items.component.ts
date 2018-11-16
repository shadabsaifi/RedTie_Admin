import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-add-more-category-items',
  templateUrl: './add-more-category-items.component.html',
  styleUrls: ['./add-more-category-items.component.css']
})
export class AddMoreCategoryItemsComponent implements OnInit {

  image: HTMLImageElement;
  menuForm: FormGroup;
  categoryDetail: any = { } ;
  categoryId: string;
  venueId:any
  constructor( private service:ServiceService, private activeRoute:ActivatedRoute, private fb:FormBuilder, private ng2ImgMaxService:Ng2ImgMaxService) { }

  ngOnInit() {

    this.activeRoute.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId') 
      this.categoryId = params.get('categoryId') 
    }) 
    this.getCategoryDetailOfVenue()

    // this.menuItems = this.fb.array([])
    this.menuForm = this.fb.group({
      menuItems:this.fb.array([])
    })
    this.newAdd()

  }

  newAdd() {
    const arrayControl = <FormArray>this.menuForm.controls['menuItems']
    let form = this.fb.group({
      itemName: ['', Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      itemImage:['', Validators.required],
      itemPrice:['', Validators.required],
      itemCode:['', Validators.required],
      discount:['', Validators.required],
      itemDescription:['', Validators.required]

    })
    arrayControl.push(form)
  }

  getCategoryDetailOfVenue(){
    this.service.get('getCategoryDetailOfVenue/'+this.venueId+'/'+this.categoryId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.categoryDetail = res['data']
        console.log("resresfjsdfyuak===>>>"+JSON.stringify(this.categoryDetail))
      }
      else
        this.service.error('somthing went wrong.')  
    }, err=>{
      if(err.error['responseCode'] == 400){
        localStorage.removeItem("token");
        localStorage.removeItem("adminId");
        localStorage.removeItem("type");
        this.service.routerLink('/login')
      }
      this.service.error(err.error['responseMessage'])
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

  addMoreItem(){
    this.menuForm.value['venueId'] = this.venueId
    this.menuForm.value['categoryId'] = this.categoryId
    console.log("final data===>>>>",this.menuForm.value)
    this.service.spinnerShow()
    this.service.post('addMoreItems', this.menuForm.value, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.spinnerHide()
        this.service.success(res['responseMessage'])
        this.service.routerLink('/view-menu-items/'+this.venueId+'/'+this.categoryId)
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
    this.service.routerLink('/view-menu-items/'+this.venueId+'/'+this.categoryId)
  }

}
