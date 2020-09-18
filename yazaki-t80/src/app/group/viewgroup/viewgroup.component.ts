import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {GrpService} from '../../service/data/grp.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit {

  constructor( private route: ActivatedRoute , private grpservice: GrpService) { }
  datag: any;
  postsr:any;
  RegNumber: string;
  userid:string;
  ngOnInit() {
    this.userid=localStorage.getItem("user");
   this.refreshdata();

   
  }

  
  public formcmnt = {
    content: null,
    postid:null,
    userid:null


  };

  addcmnt($a,$b){
    this.formcmnt.content  =this.postsr[$b].name;
    this.formcmnt.postid=$a;
    this.formcmnt.userid=localStorage.getItem("user");
    this.grpservice.addcomment(localStorage.getItem("token"),this.formcmnt).subscribe(
      data =>{ this.refreshdata();
       }
    
      );
      this.postsr[$b].name="";

  }

  deletepst(aq)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove Your Post!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.grpservice.deletepost(localStorage.getItem("token"),aq).subscribe(
          data =>{   Swal.fire(
            'Deleted!',
            'Your Post has been deleted',
            'success'
          );  this.refreshdata();}
        
          );
     
      }
    })
  }

  deletemem(aq)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove your Comment!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.grpservice.deletecomnt(localStorage.getItem("token"),aq).subscribe(
          data =>{   Swal.fire(
            'Deleted!',
            'Your Comment has been deleted.',
            'success'
          );  this.refreshdata();}
        
          );
     
      }
    })
  }
  refreshdata(){
    this.grpservice.GetGrp(localStorage.getItem("token"),this.route.snapshot.paramMap.get("prefix")).subscribe(
      data =>{ this.datag=data;
        this.grpservice.Grpposts(localStorage.getItem("token"),this.datag.id).subscribe(
         
          dataq =>{ this.postsr=dataq;this.postsr[0].comments[0].nomuser= "hi"; ;console.log(this.postsr[0].comments[0]); 
            this.postsr[0].comments.forEach(obj => {
              console.log( obj.user_id);
              this.grpservice.getusername(localStorage.getItem("token"),obj.user_id.toString()).subscribe(
                data =>{ obj.nomuser =data[0]; console.log(obj);}
              
                );

            });
          }
        
          );
       }
    
      );
      
      

  }

  public form = {
    regcode: null,
    Grp:null

  };
  Adduser(grp : string){

    this.form.regcode = this.RegNumber;
    this.form.Grp=grp;
   
   

    this.grpservice.Membergoup(localStorage.getItem("token"),this.form).subscribe(
      data =>{this.handleResponse();this.refreshdata(); },
      error =>{this.erorhandle();}
    
      );  

      this.RegNumber="";
  

  }

  erorhandle()
  {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Oops...',
      text: 'Registration Number Not Found Or Already exists',
      showConfirmButton: false,
      timer: 2500
    })


  }

  handleResponse()
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ' Group Has Been Created Successfully',
      showConfirmButton: false,
      timer: 2500
    })


  }

}
