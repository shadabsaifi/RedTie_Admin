import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-edit-category-item',
  templateUrl: './edit-category-item.component.html',
  styleUrls: ['./edit-category-item.component.css']
})
export class EditCategoryItemComponent implements OnInit {

  itemDetail: any = {};
  venueId: any
  categoryId: any
  itemId: any
  categoryDetail: any = {}
  itemForm: FormGroup
  image: any
  constructor(private service: ServiceService, private activateRoute: ActivatedRoute, private fb: FormBuilder, private ng2ImgMaxService: Ng2ImgMaxService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.venueId = params.get('venueId')
      this.categoryId = params.get('categoryId')
      this.itemId = params.get('itemId')
    })
    this.itemForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      itemImage: ['', [Validators.required]],
      itemPrice: ['', [Validators.required]],
      itemCode: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      itemDescription: ['', [Validators.required]],
    })
    this.getCategoryDetailOfVenue()
    this.getItemDetailOfCategory()
  }

  getCategoryDetailOfVenue() {
    this.service.spinnerShow()
    let url = 'getCategoryDetailOfVenue/' + this.venueId + '/' + this.categoryId
    this.service.get(url, 1).subscribe(res => {
      this.service.spinnerHide()
      if (res['responseCode'] == 200) {
        this.categoryDetail = res['data']
        console.log("resresfjsdfyuak===>>>" + JSON.stringify(this.categoryDetail))
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

  getItemDetailOfCategory() {

    let url = 'getItemDetailOfCategory/' + this.venueId + '/' + this.categoryId + '/' + this.itemId
    this.service.get(url, 1).subscribe(res => {
      if (res['responseCode'] == 200) {
        this.itemDetail = res['data']
        console.log("resresfjsdfyuak===>>>" + JSON.stringify(this.itemDetail))
        this.itemForm.controls['itemName'].setValue(this.itemDetail.itemName)
        this.itemForm.controls['itemImage'].setValue(this.itemDetail.itemImage)
        this.itemForm.controls['itemPrice'].setValue(this.itemDetail.itemPrice)
        this.itemForm.controls['itemCode'].setValue(this.itemDetail.itemCode)
        this.itemForm.controls['itemDescription'].setValue(this.itemDetail.itemDescription)
        this.itemForm.controls['discount'].setValue(this.itemDetail.discount)

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

    var self = this;
    if (event.target.files && event.target.files[0]) {
      let image = event.target.files[0];
      this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(result => {

        var reader = new FileReader();
        reader.readAsDataURL(result); // read file as data url
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.image = new Image();

          //Set the Base64 string return from FileReader as source.
          this.image.src = event.target.result;
          self.itemForm.controls['itemImage'].setValue(event.target.result)
        }
      }
      )
    }

  }
  removeImage() {
    this.itemForm.controls['itemImage'].setValue("")
  }

  saveItem() {
    this.itemForm.value['venueId'] = this.venueId
    this.itemForm.value['categoryId'] = this.categoryId
    this.itemForm.value['itemId'] = this.itemId
    console.log("saveItem===>>>>", this.itemForm.value)
    this.service.spinnerShow()
    this.service.post('editItemOfCategory', this.itemForm.value, 1).subscribe(res => {
      this.service.spinnerHide()
      if (res['responseCode'] == 200) {
        this.service.success(res['responseMessage'])
        this.service.routerLink('/view-menu-items/' + this.venueId + '/' + this.categoryId)
        console.log("resresfjsdfyuak===>>>" + JSON.stringify(this.categoryDetail))
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

  cancel() {
    this.service.routerLink('/view-menu-items/' + this.venueId + '/' + this.categoryId)
  }

  keypress(keyCode){
    if((keyCode >= 48 && keyCode <= 57))
      return true
    return false
  }

}
