import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewlist(){
    location.href = "/user/list";
  }
}
