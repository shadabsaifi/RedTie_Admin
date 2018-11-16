import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
declare var $:any
@Component({
  selector: 'app-static-content-management',
  templateUrl: './static-content-management.component.html',
  styleUrls: ['./static-content-management.component.css']
})
export class StaticContentManagementComponent implements OnInit {

  contentObject:any = {}
  editorOn:Boolean = false
  whichContent:String = ""
  type:any
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.getStaticContent()
  }

  getStaticContent(){
    this.service.get('getStaticContent', 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.contentObject = res['datas'][0]
        console.log("getStaticContent res===>>>"+JSON.stringify(res['datas'][0]))
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

  view(type){
    this.editorOn = true
    this.whichContent = this.contentObject[type]
  }

  delete(type){
    this.type = type
    $('#delete').modal('show')
    
  }

  yes(){
    console.log("type=====>>>>",this.type)
    $('#delete').modal('hide')
    this.service.post('deleteStaticContent', this.type, 1).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
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

  back(){
    this.editorOn = false
  }

}
