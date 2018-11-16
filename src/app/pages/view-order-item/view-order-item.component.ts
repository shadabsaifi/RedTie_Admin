import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.css']
})
export class ViewOrderItemComponent implements OnInit {

  orderList: any = { docs: [] }
  currentPage: Number = 1
  tableId: any
  searchWord: String = ""
  constructor(private service: ServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.tableId = params.get('tableId')
    })
    this.getOrderList();
  }

  getOrderList() {
    let data = {
      page: this.currentPage,
      tableId: this.tableId,
      search: this.searchWord
    }
    this.service.post('getOrderItems', data, 1).subscribe(res => {
      console.log("getAllOrder===>>>>" + JSON.stringify(res))
      if (res['responseCode'] == 200) {
        this.orderList = res['datas']
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
    this.getOrderList()
  }

  pageChanged(page) {
    this.currentPage = page
  }

  view(itemId) {
    this.service.routerLink('/view-order-user/' + this.tableId + '/' + itemId)
  }

}
