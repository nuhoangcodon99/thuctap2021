import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { XemdanhsachdonviComponent } from './xemdanhsachdonvi/xemdanhsachdonvi.component';
import { ThemdonviComponent } from './themdonvi/themdonvi.component';
import { SuadonviComponent } from './suadonvi/suadonvi.component';
import { XemnhanvienComponent } from './xemnhanvien/xemnhanvien.component';
import { ThemnhanvienComponent } from './themnhanvien/themnhanvien.component';
import { ListuserComponent, MemberListuserComponent } from './listuser/listuser.component';
import {MatButtonModule} from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { MatLabelModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserinfoComponent,
    XemdanhsachdonviComponent,
    ThemdonviComponent,
    SuadonviComponent,
    XemnhanvienComponent,
    ThemnhanvienComponent,
    ListuserComponent,
    MemberListuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
