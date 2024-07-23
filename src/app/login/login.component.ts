import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  backend = "http://localhost:81";
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var acc = (document.getElementById("account") as HTMLInputElement)?.value;
    var pass = (document.getElementById("password")  as HTMLInputElement)?.value;
    var ghinho = (document.getElementById("ghinho")  as HTMLInputElement)?.checked;
    console.log(acc+pass);
    //location.href = "/user/info";
    fetch(`${this.backend}/api/login`, {
      method : "POST",
      headers: {"Content-Type":"application/x-www-form-urlencoded"},
      credentials: "include",
      body: "account="+acc+"&pass="+pass
    }).then(r=>r.text())
    .then(rs=>{
      if(rs=="false"){
        alert("Sai tài khoản hoặc mật khẩu.");
      }else if(rs=="true"){
        location.href = "/user/info";
      }
    });
  }
}