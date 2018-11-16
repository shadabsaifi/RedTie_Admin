import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
declare var $:any
@Component({
  selector: 'app-view-venue-speciality',
  templateUrl: './view-venue-speciality.component.html',
  styleUrls: ['./view-venue-speciality.component.css']
})
export class ViewVenueSpecialityComponent implements OnInit {

  venueId: string;
  searchWord:String = ""
  specialityList:any = { specialityList:[] }
  venueDetail:any = { images:[] }
  data:any = { }
  currentPage:any = 1
  constructor( private activateRoute:ActivatedRoute, private service:ServiceService ) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(params=>{
      this.venueId = params.get('venueId')
    })
    this.getVenueDetail()
    this.getAllSpecialityOfVenue()
  }


  getVenueDetail(){
    this.service.spinnerShow()
    this.service.get('getVenueDetail/'+this.venueId, 1).subscribe(res=>{
     
      if(res['responseCode'] == 200){
        this.service.spinnerHide()
        this.venueDetail = res['data']
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

  getAllSpecialityOfVenue(){

    let data = {
       venueId:this.venueId,
       search:this.searchWord,
       page:this.currentPage
    }

    this.service.post('getAllSpecialityOfVenue', data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.specialityList = res['datas']
        console.log("res===>>>"+JSON.stringify(res['datas']))
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

  editOrDelete(categoryId, type){
    if(type == 'edit'){
      this.service.routerLink('/edit-venue-speciality/'+this.venueId+'/'+categoryId)
    }
    if(type == 'delete'){
      this.data.categoryId = categoryId
      this.data.status = type
      $('#delete').modal('show')
    }
  }

  yes(){
    $('#delete').modal('hide')
    this.service.post('deleteSpecialityOfVenue', this.data, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.getAllSpecialityOfVenue()
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

  addSpeciality(){
    this.service.routerLink('/add-venue-speciality/'+this.venueId)
  }

  pageChanged(page){
    this.currentPage = page
  }
  search(){
    this.getAllSpecialityOfVenue()
  }

  

}
