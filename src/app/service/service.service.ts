import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = 'http:///localhost:1416/admin/'
  httpOptions:any
  constructor( private http:HttpClient, public toastr:ToastrService, private spinner: NgxSpinnerService, private router:Router) {

    this.httpOptions = { 
      headers: new  HttpHeaders({
        'Content-Type' : 'application/json',
        'token': localStorage.getItem('token')
      })
    }
  }

  post(url, data, isHeader){

    if(isHeader == 1){
      console.log("this.httpOptions",this.httpOptions)
      return this.http.post(this.baseUrl+url, data, this.httpOptions)
    }
      return this.http.post(this.baseUrl+url, data);

  }

  get(url, isHeader){
    if(isHeader == 1){
      return this.http.get(this.baseUrl+url, this.httpOptions)
    }
      return this.http.get(this.baseUrl+url)
  }

  spinnerShow(){
    this.spinner.show()
  }
  spinnerHide(){
    this.spinner.hide();
  }


  success(msg){
    this.toastr.success(msg)
  }
  error(msg){
    this.toastr.error(msg)
  }

  routerLink(pageName){
    this.router.navigate([pageName])
  }

  clearLocalStorage(){
    localStorage.setItem("token", "")
    localStorage.setItem("userRole", "")
    localStorage.setItem("adminId", "")
    this.routerLink('/login')
  }

  

}
