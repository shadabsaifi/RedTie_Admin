import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html',
  styleUrls: ['./view-merchant.component.css']
})
export class ViewMerchantComponent implements OnInit {

  
  userId:any
  viewUserDetail:any = {  }
  constructor(private service:ServiceService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params=>{
      this.userId = params.get('userId')
    })
    this.userDetail()
  }

  userDetail(){
    this.service.get('getUserProfile/'+this.userId, 1).subscribe(res=>{
     
      if(res['responseCode'] == 200){
        this.viewUserDetail = res['data']
        console.log("res=====>>",res['data'])
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
  changePassword(url){
    this.service.routerLink(url+this.userId)
  }
}
