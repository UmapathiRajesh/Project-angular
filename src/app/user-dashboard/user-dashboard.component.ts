import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  constructor(public rtr:Router){}

  Logout(){
    localStorage.clear();
    this.rtr.navigate(["Login"])
    
  }

  

  ngOnInit(): void {
  }

}
