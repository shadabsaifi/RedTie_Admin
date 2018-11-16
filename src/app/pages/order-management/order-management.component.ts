import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  orderList:any = { docs:[] }
  searchWord:String = ""
  payment:String = ""
  currentPage:Number = 1
  limit:Number = 10
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.getAllOrderList()
  }

  getAllOrderList(){
    var data = {
      search:this.searchWord,
      page:this.currentPage,
      payment:this.payment,
      limit:this.limit
    }
    this.service.post('getAllOrder', data, 1).subscribe(res=>{
      console.log("getAllOrder===>>>>"+JSON.stringify(res))
        if(res['responseCode'] == 200){
          this.orderList = res['datas']
        }
        else if(res['responseCode'] == 402){
          this.service.error(res['responseMessage'])
          this.service.clearLocalStorage()
        }
        else{
          this.service.error(res['responseMessage'])
        }

    }, err=>{
        this.service.error('somthing went wrong.')
    })
  }

  pageChanged(page){
    this.currentPage = page
  }
  search(){
    this.getAllOrderList()
  }
  selectPayment(payment){
    this.payment = payment
    this.getAllOrderList()
  }
  view_order(tableId){
    this.service.routerLink('/view-order-item/'+tableId)
  }

}
