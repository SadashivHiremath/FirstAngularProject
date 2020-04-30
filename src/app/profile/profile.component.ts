import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName: string="";
  responseBack : any;

  constructor(private httpRef : HttpClient) { }

  ngOnInit() {
  }

  searchForUser(){
    let obs = this.httpRef.get("http://localhost:8083//get/restaurantById/{restaurantId}" + this.userName);
    obs.subscribe((responseBack) => {
    this.responseBack = responseBack;
    console.log(this.responseBack);
    });
  }



}
