import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './na/error404/error404.component';
import { AfterLoginService } from './service/after-login.service';
import { BeforeLoginService } from './service/before-login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  GroupindexComponent } from './group/groupindex/groupindex.component';
import {  ExternedataComponent } from './externe/externedata/externedata.component';
import { UsersComponent } from './users/users.component';
import { CostsComponent } from './costs/costs.component';
import { AddcostsComponent} from './costs/addcosts/addcosts.component';
import { HomeComponent} from './dashboard/home/home.component';
import {ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {AddgorupComponent } from './group/addgorup/addgorup.component';
import {ViewgroupComponent } from './group/viewgroup/viewgroup.component';
import {AddpostComponent} from './post/addpost/addpost.component';
import {MembersgroupComponent} from './group/membersgroup/membersgroup.component';
import { ViewcostComponent } from './costs/viewcost/viewcost.component';
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full'  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'Reset-password',
    component: ResetpasswordComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'costs',
    component: CostsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'Viewcost/:id',
    component: ViewcostComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'Grp',
    component: GroupindexComponent,
    canActivate: [AfterLoginService]
  },  
  {
    path: 'AddGrp',
    component: AddgorupComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'viewgroup/:prefix',
    component: ViewgroupComponent,
    canActivate: [AfterLoginService]

  },
  {
   path: 'Groupe/members/:idgrp',
   component: MembersgroupComponent,
   canActivate: [AfterLoginService]
  },
   {
    path: 'Posts/:idgrp',
    component: AddpostComponent,
    canActivate: [AfterLoginService]
   },
  {
    path: 'Externedata',
    component: ExternedataComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'Addcosts',
    component: AddcostsComponent,
    canActivate: [AfterLoginService]
  },
  { path: '**', 
  component: Error404Component
 }

];




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
