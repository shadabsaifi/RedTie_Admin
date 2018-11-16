import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';
declare var $:any
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  listLength: any = [];
  currentPage:Number = 1;
  userList:any = {docs: []};
  searchWord:String = "";
  limit:Number = 10
  total:Number;
  data:any = { userId:'', requestType:'' }
  gender:String = ""
  status:String = ""

  constructor(private service:ServiceService ) { }

  ngOnInit() {
    this.getAllUser() 
  }

  getAllUser(){
    
    let data = {
      userRole:"USER",
      gender:this.gender,
      status:this.status,
      page:this.currentPage,
      limit:this.limit,
      search:this.searchWord
    }
    console.log("getAllUsers===>>>>",data)
    this.service.post('getAllUsers', data, 1).subscribe(res=>{
        console.log("getAllUsers===>>>>"+JSON.stringify(res))
        if(res['responseCode'] == 200){
          this.userList = res['datas']
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

  selectGender(gender){
    this.gender = gender
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
      this.service.routerLink('/view-user/'+userId)
    if(type == 'edit')
      this.service.routerLink('/edit-user/'+userId)
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



}
