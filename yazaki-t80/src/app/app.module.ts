import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './na/error404/error404.component';

import { AuthapiService } from './service/authapi.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { AfterLoginService } from './service/after-login.service';
import { BeforeLoginService } from './service/before-login.service';
import {UserService} from './service/data/user.service'
import { DataTablesModule } from 'angular-datatables';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { from } from 'rxjs';
import { TypereformatPipe } from './pipes/typereformat.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserComponent } from './datatable/user/user.component';
import { AddComponent } from './dialogs/user/add/add.component';
import { DeleteComponent } from './dialogs/user/delete/delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { SignaturePadModule } from '@ng-plus/signature-pad';

import { UsersComponent } from './users/users.component';
import { CostsComponent } from './costs/costs.component';
import { AddcostsComponent } from './costs/addcosts/addcosts.component';
import { CostsdataComponent } from './datatable/costsdata/costsdata.component';

import { MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { DatePipe } from '@angular/common';
import { ChartsModule,ThemeService  } from 'ng2-charts';
import {ChartsService} from './service/data/charts.service';
import { HomeComponent } from './dashboard/home/home.component';
import { GroupindexComponent } from './group/groupindex/groupindex.component';
import { ExternedataComponent } from './externe/externedata/externedata.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddgorupComponent } from './group/addgorup/addgorup.component';
import { ViewgroupComponent } from './group/viewgroup/viewgroup.component';
import { AddpostComponent } from './post/addpost/addpost.component';
;
import { CKEditorModule } from 'ng2-ckeditor';
import { MembersgroupComponent } from './group/membersgroup/membersgroup.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SignatureComponent } from './costs/signature/signature.component';
import { ViewcostComponent } from './costs/viewcost/viewcost.component';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    DashboardComponent,
    SidemenuComponent,
    NavbarComponent,
    TypereformatPipe,
    UserComponent,
    AddComponent,
    DeleteComponent,
    UsersComponent,
    CostsComponent,
    AddcostsComponent,
    CostsdataComponent,
    HomeComponent,
    GroupindexComponent,
    ExternedataComponent,
    ResetpasswordComponent,
    AddgorupComponent,
    ViewgroupComponent,
    AddpostComponent,
    MembersgroupComponent,
    SignatureComponent,
    ViewcostComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatAutocompleteModule, 
        MatFormFieldModule,
        MatSelectModule,
        ChartsModule,
        CKEditorModule,
        MatSlideToggleModule,
        SignaturePadModule ,
        NgxPrintModule
  ],
  exports: [
      MatDatepickerModule, 
      MatNativeDateModule ,
      MatDialogModule,
    
  ]
  ,
    entryComponents: [
      AddComponent,
      DeleteComponent,
      SignatureComponent
  ],
  providers: [AuthapiService, TokenService, AuthService, AfterLoginService, BeforeLoginService,UserService,DatePipe,ChartsService,ChartsModule,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NgAppModule { }