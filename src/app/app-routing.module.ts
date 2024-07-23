import { ListuserComponent } from './listuser/listuser.component';
import { ThemnhanvienComponent } from './themnhanvien/themnhanvien.component';
import { XemnhanvienComponent } from './xemnhanvien/xemnhanvien.component';
import { ThemdonviComponent } from './themdonvi/themdonvi.component';
import { SuadonviComponent } from './suadonvi/suadonvi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { XemdanhsachdonviComponent } from './xemdanhsachdonvi/xemdanhsachdonvi.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent},
  {path:'user/info', component: UserinfoComponent},
  {path:'user/list', component: ListuserComponent},
  {path:'admin/listunit',component: XemdanhsachdonviComponent},
  {path:'admin/editunit',component: SuadonviComponent},
  {path:'admin/addunit',component: ThemdonviComponent},
  {path:'unitadmin/listmember',component: XemnhanvienComponent},
  {path:'unitadmin/addmember',component:ThemnhanvienComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
