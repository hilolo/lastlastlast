import { Component, OnInit,ViewChild } from '@angular/core';
import {GrpService} from '../../service/data/grp.service';
import Swal from 'sweetalert2';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor", {static: false}) ckeditor: any;


  constructor( private route: ActivatedRoute,private _rt : Router ,private grpservice: GrpService) {
  
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  public form = {
    content: null,
    group:null
  };

  sub(){
    this.form.content=this.mycontent;
    this.form.group = this.route.snapshot.paramMap.get("idgrp");
    console.log(this.form);
      this.grpservice.Addposttogroup(localStorage.getItem("token"),this.form).subscribe(
      data =>{this.handleResponse();    this._rt.navigate(['/Grp']); }
    
      );

    

  }
  onChange($event: any): void {
   // console.log(this.mycontent);
    
  }

  handleResponse()
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ' Post  Has Been Added to your Group Successfully',
      showConfirmButton: false,
      timer: 2500
    })


  }
  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
}
