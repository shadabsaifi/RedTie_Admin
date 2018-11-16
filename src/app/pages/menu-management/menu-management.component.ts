import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
declare var $:any
@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  venueId: any;
  categoryList:any = { categoryList:[] }
  listLength: any = [];
  currentPage:Number = 1;
  searchWord:String = "";
  limit:Number = 3
  total:Number;
  data:any = { venueId:'', requestType:'' }
  constructor( private service:ServiceService, private activeRouter:ActivatedRoute ) { }

  ngOnInit() {

    this.activeRouter.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId')
    })
    this.menuList() 
  }
  
  menuList(){

    let venueDetail = { 
      venueId:this.venueId,
      page:this.currentPage,
      limit:this.limit,
      search:this.searchWord
    }
    this.service.post('getAllCategoryOfVenue', venueDetail ,  1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.categoryList = res['datas']
        console.log("res=====>>",res['datas'])
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

  addMoreCategory(){
    this.service.routerLink('/add-menu/'+this.venueId)
  }


  search(){
    this.menuList()
  }

  pageChanged(page){
    this.currentPage = page
    this.menuList()
  }

  delete(categoryId, status){
    this.data['categoryId'] = categoryId
    this.data['status'] = status
    $('#delete').modal('show')
  }

  viewAndEdit(categoryId, type){
    if(type == 'view')
      this.service.routerLink('/view-menu-items/'+this.venueId+'/'+categoryId)
    else
      this.service.routerLink('edit-venue-category/'+this.venueId+'/'+categoryId)
  }

  yes(){

    this.service.post('deleteCategoryOfVenue', this.data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        $('#delete').modal('hide')
        this.menuList()
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
}
