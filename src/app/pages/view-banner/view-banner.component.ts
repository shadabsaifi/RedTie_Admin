import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-banner',
  templateUrl: './view-banner.component.html',
  styleUrls: ['./view-banner.component.css']
})
export class ViewBannerComponent implements OnInit {

  viewBannerDetail: any = {};
  bannerId: any;
  constructor(private service:ServiceService,private activeRouter:ActivatedRoute) { }

  ngOnInit() {

    this.activeRouter.paramMap.subscribe(params=>{
      this.bannerId = params.get('bannerId')
    })
    this.bannerDetail()
  }

  bannerDetail(){
    this.service.spinnerShow()
    this.service.get('getBannerDetail/'+this.bannerId, 1).subscribe(res=>{
      console.log("res=====>>"+JSON.stringify(res))
      if(res['responseCode'] == 200){
        this.service.spinnerHide()
        this.viewBannerDetail = res['data']
        console.log("res=====>>"+JSON.stringify(res['data']))
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
