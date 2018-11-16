import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  isActive:any
  
  constructor(private service:ServiceService) {

  }

  ngOnInit() {
   
    this.isActive = window.location.href.split('/')[3]

  }

  logout() {
    this.service.clearLocalStorage()
  }
}
