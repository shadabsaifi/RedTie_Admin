import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
declare var $: any
@Component({
  selector: 'app-venue-management',
  templateUrl: './venue-management.component.html',
  styleUrls: ['./venue-management.component.css']
})
export class VenueManagementComponent implements OnInit {

  venueList: any = { docs: [] }
  listLength: any = [];
  currentPage: Number = 1;
  searchWord: String = "";
  limit: Number = 3
  total: Number;
  data: any = { venueId: '', requestType: '' }
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.spinnerShow()
    this.getAllVenues()
  }

  getAllVenues() {
    let data = {
      adminId: localStorage.getItem('adminId'),
      userRole: localStorage.getItem('userRole'),
      page: this.currentPage,
      limit: this.limit,
      search: this.searchWord
    }
    console.log("data===>>>>",data)
    this.service.post('getAllVenues', data, 1).subscribe(res => {
      this.service.spinnerHide()
      if (res['responseCode'] == 200) {
        console.log("getAllVenuess===>>>>" + JSON.stringify(res))
        this.venueList = res['datas']
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


  search() {
    this.getAllVenues()
  }

  pageChanged(page) {
    this.currentPage = page
    this.getAllVenues()
  }

  delete(venueId, requestType) {
    this.data['venueId'] = venueId
    this.data['requestType'] = requestType
    $('#delete').modal('show')
  }

  viewAndEdit(venueId, type) {
    if (type == 'view')
      this.service.routerLink('/view-venue/' + venueId)
    else
      this.service.routerLink('/edit-venue/' + venueId)
  }

  yes() {

    this.service.post('deleteVenue', this.data, 1).subscribe(res => {
      if (res['responseCode'] == 200) {
        this.service.success(res['responseMessage'])
        $('#delete').modal('hide')
        this.getAllVenues()
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
