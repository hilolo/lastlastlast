import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {CostsService} from '../../service/data/costs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignatureComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private costservice: CostsService, private router: Router) { }

  ngOnInit() {
   

  }

  points = [];
  signatureImage;
  public form = {
    id: null,
    imgdata: null,
    nameid:null
  };

 
  validate(blob: Blob) {
    if(confirm("Are you sure you wanna confirme this costs")) {
      this.form.id=this.data.id
      this.form.imgdata=blob
      this.form.nameid=localStorage.getItem("user")
      this.costservice.va(localStorage.getItem("token"),this.form).subscribe(
        data => console.log(data)
        );
        this.dialogRef.close();

 
   
  }
  }


 




}
