import { Component, OnInit , Input, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
class MemberModel{
  acc="";
  displayname="";
  ngaysinh="";
  donvi="";
}
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  list: Array<MemberModel> = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    fetch("http://localhost:81/api/user/list",{
      method: "POST",
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      credentials: "include",
      body: ``
    }).then(rsp=>rsp.json()).then((l: Array<String>)=>{
      this.list = l.map((e: String)=>{
        var p = e.split(",");
        return {acc:p[0],displayname:p[1],ngaysinh:p[3],donvi:p[2]};
      });
    });
  }
  addMember(){
    var data = new MemberListuserComponent(this.dialog);
    data.parent = this;
    const dialogRef = this.dialog.open(DialogContent, {
      width: '450px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.list.push(data);
      }
    });
  }
  remove(acc: String){
    this.list = this.list.filter(model=>model.acc!=acc);
  }
  add(member: MemberModel){
    this.list.push(member);
  }
}
@Component({
  selector: 'member',
  templateUrl: './listuser.member.component.html',
})
export class MemberListuserComponent implements OnInit {
  @Input() acc="";
  @Input() displayname="";
  @Input() ngaysinh="";
  @Input() donvi="";
  isedit = false;
  @Input() parent:ListuserComponent | undefined;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.acc!=""){
      this.isedit = true;
    }
  }
  delete(){
    fetch("http://localhost:81/api/user/delete",{
      method: "POST",
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      credentials: "include",
      body: `account=${this.acc}`
    }).then(rsp=>rsp.text()).then(t=>{
      if(t == "true"){
        this.parent?.remove(this.acc);
      }else{
        alert("Lỗi hệ thống");
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContent, {
      width: '450px',
      data: this,
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialogcontent.html',
})
export class DialogContent {
  constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: MemberListuserComponent,
  ) {

  }

  onNoClick(){
    this.dialogRef.close();
  }
  save(){
    var acc =(document.getElementById("account") as HTMLInputElement)?.value;
    var name =(document.getElementById("displayname") as HTMLInputElement)?.value;
    var donvi =(document.getElementById("donvi") as HTMLInputElement)?.value;
    var ngaysinh =(document.getElementById("ngaysinh") as HTMLInputElement)?.value;
    var pass =(document.getElementById("password") as HTMLInputElement)?.value;
    var api = "http://localhost:81/api/user/" + (this.data.isedit?"update":"add");
    var body = `account=${acc}&displayname=${name}&ngaysinh=${ngaysinh}&donvi=${donvi}` + (this.data.isedit?"":`&pass=${pass}`);
    fetch(api,{
      method: "POST",
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      credentials: "include",
      body: body
    }).then(rsp=>rsp.text()).then(t=>{
      if(t == "true"){
        this.data.displayname = name;
        this.data.donvi = donvi;
        this.data.ngaysinh =ngaysinh;
        this.data.acc = acc;
        this.data.isedit = true;
        this.dialogRef.close(true);
      }else if(t=="exist"){
        alert("Tài khoản đã tồn tại.");
      }
      else {
        alert("Vui lòng kiểm tra thông tin.");
      }
    });
    
  }
}