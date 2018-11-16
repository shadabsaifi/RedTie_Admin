import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order-user',
  templateUrl: './view-order-user.component.html',
  styleUrls: ['./view-order-user.component.css']
})
export class ViewOrderUserComponent implements OnInit {

  userList:any = { docs:[] }
  currentPage:Number = 1
  tableId:any
  itemId:any
  searchWord: String = ""
  constructor(private service:ServiceService, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=>{
      this.tableId = params.get('tableId')
      this.itemId = params.get('itemId')
    })
    this.getUserList();
  }

  getUserList(){
    let data = {
      page:this.currentPage,
      tableId:this.tableId,
      itemId:this.itemId,
      search:this.searchWord
    }
    this.service.post('getAllUserOfOrderItem', data, 1).subscribe(res=>{
      console.log("getAllOrder===>>>>"+JSON.stringify(res))
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
      this.service.error('somthing went wrong.')
  })
}

search() {
  this.getUserList()
}

pageChanged(page) {
  this.currentPage = page
}

  // view_order(itemId){
  //   this.service.routerLink('/view-order-user/'+this.tableId+'/'+itemId)
  // }

}
