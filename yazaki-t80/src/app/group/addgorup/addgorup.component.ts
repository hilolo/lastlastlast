import { Component, OnInit  } from '@angular/core';
import {FormControl, Validators,FormsModule } from '@angular/forms';
import {Group} from '../../model/group';
import {GrpService} from '../../service/data/grp.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addgorup',
  templateUrl: './addgorup.component.html',
  styleUrls: ['./addgorup.component.css']
})
export class AddgorupComponent  {

  constructor(private Groups : GrpService , private _router : Router ) { }

 
   

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

 
  grp = new Group();

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
     
        '';
  }

  
public changetitle()
{
  if(this.grp.title  != undefined )
this.grp.prefix =this.grp.title.slice(0,3);

}


  public confirmAdd(): void {

    this.grp.user_id = parseInt( localStorage.getItem("user"));
    console.log(this.grp);
    
    this.Groups.InsertGroup(localStorage.getItem("token"),this.grp).subscribe(
      data => console.log(data)
      );
        this._router.navigate(['/Grp']);
  

  }

  handleResponse(data)
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
