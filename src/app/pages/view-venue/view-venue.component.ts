import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-view-venue',
  templateUrl: './view-venue.component.html',
  styleUrls: ['./view-venue.component.css']
})
export class ViewVenueComponent implements OnInit {

  venueId:any
  address:any
  city:any
  viewVenueDetail:any = { images:[] }
  constructor(private service:ServiceService,private activeRouter:ActivatedRoute) { }

  ngOnInit() {

    this.activeRouter.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId')
    })
    this.getVenueDetail()
  }

  getVenueDetail(){
    this.service.spinnerShow()
    this.service.get('getVenueDetail/'+this.venueId, 1).subscribe(res=>{
     
      if(res['responseCode'] == 200){
        this.service.spinnerHide()
        this.viewVenueDetail = res['data']
        this.address = res['data']['location'].address
        this.city = res['data']['location'].city
        console.log("venueDetail res=====>>"+JSON.stringify(res['data']))
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

  AddOrViewMenu(routerLink){
    this.service.routerLink(routerLink+this.venueId)
  }

  
}