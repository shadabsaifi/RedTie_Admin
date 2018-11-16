import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
declare var $:any
@Component({
  selector: 'app-merchant-management',
  templateUrl: './merchant-management.component.html',
  styleUrls: ['./merchant-management.component.css']
})
export class MerchantManagementComponent implements OnInit {

  
  listLength: any = [];
  currentPage:Number = 1;
  merchantList:any = { docs: [] };
  searchWord:String = "";
  limit:Number = 10
  total:Number;
  status:String = ""
  data:any = { userId:'', requestType:'' }

  constructor(private service:ServiceService ) { }

  ngOnInit() {
    this.getAllUser() 
  }

  getAllUser(){
    
    let data = {
      status:this.status,
      page:this.currentPage,
      limit:this.limit,
      search:this.searchWord,
      userRole:"MERCHANT"
    }

    this.service.post('getAllUsers', data, 1).subscribe(res=>{
        console.log("getAllUsers===>>>>"+JSON.stringify(res))
        if(res['responseCode'] == 200){
          this.merchantList = res['datas']
        }
        else if(res['responseCode'] == 402){
          this.service.error(res['responseMessage'])
          this.service.clearLocalStorage()
        }
        else{
          this.service.error(res['responseMessage'])
        }

    }, err=>{
        this.service.spinnerHide()
        this.service.error('somthing went wrong.')
    })
  }

  search(){
    this.getAllUser()
  }
  selectStatus(status){
    this.status = status
    this.getAllUser()
  }
  
  pageChanged(page){
    this.currentPage = page
    this.getAllUser()
  }

  viewOrEdit(userId, type){
    if(type == 'view')
      this.service.routerLink('/view-merchant/'+userId)
    if(type == 'edit')
      this.service.routerLink('/edit-merchant/'+userId)
  } 

  deleteOrBlock(userId, requestType){
    this.data['userId'] = userId
    this.data['requestType'] = requestType
    $('#delete').modal('show')
  }

  yes(){

    this.service.post('deleteOrBlockUser', this.data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        $('#delete').modal('hide')
        this.getAllUser()
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

  hello(){
    $('#delete').modal('show')
  }

}
