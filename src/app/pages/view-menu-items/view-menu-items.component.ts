import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
declare var $:any
@Component({
  selector: 'app-view-menu-items',
  templateUrl: './view-menu-items.component.html',
  styleUrls: ['./view-menu-items.component.css']
})
export class ViewMenuItemsComponent implements OnInit {

  data:any = { itemId:'', status: 'delete', categoryId:'', venueId:'' };
  categoryDetail: any = {  };
  itemList: any = { itemList:[] } ;
  viewVenueDetail:any = { }
  venueId:any
  categoryId:any
  searchWord:any = ""
  currentPage:any = 1
  constructor( private activateRouter:ActivatedRoute, private service:ServiceService ) { }

  ngOnInit() {

    this.activateRouter.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId')
      this.categoryId = params.get('categoryId')
    })
    console.log("venueId==>>>",this.venueId)
    console.log("categoryId==>>>",this.categoryId)
    this.getAllItemOfCategory()
    this.getCategoryDetailOfVenue()
  }


  getCategoryDetailOfVenue(){
    this.service.get('getCategoryDetailOfVenue/'+this.venueId+'/'+this.categoryId, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.categoryDetail = res['data']
        console.log("resresfjsdfyuak===>>>"+JSON.stringify(this.categoryDetail))
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

  getAllItemOfCategory(){
    let data = { 
      venueId:this.venueId,
      categoryId:this.categoryId,
      search:this.searchWord,
      page:this.currentPage
    }
    this.service.post('getAllItemOfCategory', data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.itemList = res['datas']
        console.log("resres===>>>"+JSON.stringify(res['datas']))
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

  editOrDelete(itemId, requestType){
    if(requestType == 'edit'){
      this.service.routerLink('/edit-category-item/'+this.venueId+'/'+this.categoryId+'/'+itemId)
    }
    if(requestType == 'delete'){
      $('#delete').modal('show')
      this.data['itemId'] = itemId
      this.data['categoryId'] = this.categoryId
      this.data['venueId'] = this.venueId
      console.log("itemId===>>>>",this.data)
    }
  }

  yes(){

    this.service.spinnerShow()
    this.service.post('deleteItemOfCategory', this.data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.spinnerHide()
        this.service.success(res['responseMessage'])
        $('#delete').modal('hide')
        this.getAllItemOfCategory()
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

  pageChanged(page){
    this.currentPage = page
    this.getAllItemOfCategory()
  }

  search(){
    this.getAllItemOfCategory()
  }

  addMoreItem(){
    this.service.routerLink('/add-more-category-items/'+this.venueId+'/'+this.categoryId)
  }

}
