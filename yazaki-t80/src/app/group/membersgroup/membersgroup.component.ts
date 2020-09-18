import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute } from '@angular/router';
import {GrpService} from '../../service/data/grp.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-membersgroup',
  templateUrl: './membersgroup.component.html',
  styleUrls: ['./membersgroup.component.css']
})
export class MembersgroupComponent implements OnInit {

  constructor( private route: ActivatedRoute , private grpservice: GrpService) { }

  allmember :any;
  ngOnInit() {

   this.refresh();
  }

  refresh()
  {
    this.grpservice.Groupmembers(localStorage.getItem("token"),this.route.snapshot.paramMap.get("idgrp")).subscribe(
      data =>{ this.allmember=data }
    
      );
  }
  deletemem(ids : number){
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove member from this groupe!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.grpservice.Deletegrpmem(localStorage.getItem("token"),ids).subscribe(
          data =>{   Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );  this.refresh();}
        
          );
     
      }
    })
  }

}
