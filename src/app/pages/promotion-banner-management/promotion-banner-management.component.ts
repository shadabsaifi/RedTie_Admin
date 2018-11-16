import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
declare var $:any
@Component({
  selector: 'app-promotion-banner-management',
  templateUrl: './promotion-banner-management.component.html',
  styleUrls: ['./promotion-banner-management.component.css']
})
export class PromotionBannerManagementComponent implements OnInit {

  bannerList:any = { docs:[] }
  listLength: any = [];
  currentPage:Number = 1;
  searchWord:String = "";
  limit:Number = 3
  total:Number;
  bannerId:any
  constructor( private service:ServiceService ) { }

  ngOnInit() {
    this.service.spinnerShow()
    this.getAllBanner() 
  }
  
  getAllBanner() {

    let data = {
      adminId:localStorage.getItem('adminId'),
      userRole:localStorage.getItem('userRole'),
      page:this.currentPage,
      limit:this.limit,
      search:this.searchWord
    }
    this.service.post('getAllBanner', data, 1).subscribe(res=>{
      this.service.spinnerHide()
      if(res['responseCode'] == 200){
        console.log("getAllBanner===>>>>"+JSON.stringify(res))
        this.bannerList = res['datas']
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

  search(){
    this.getAllBanner()
  }
  pageChanged(page){
    this.currentPage = page
    this.getAllBanner()
  }

  viewAndDelete(bannerId, type){
    if(type == 'view')
      this.service.routerLink('/view-banner/'+bannerId)
    if(type == 'delete'){
      this.bannerId = bannerId
      $('#delete').modal('show')
    }

  }

  yes(){
    let data = { 
      bannerId:this.bannerId,
      requestType:'delete'
    }
    this.service.spinnerShow()
    this.service.post('deleteBanner', data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        $('#delete').modal('hide')
        this.service.spinnerHide()
        this.service.success(res['responseMessage'])
        this.getAllBanner()
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
