import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AuthapiService } from '../service/authapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public error=[];
  public form = {
    Card : null,
    password : null,
    password_confirmation:null,
    resetToken :null
  }
  constructor(
    private route:ActivatedRoute,
    private auth: AuthapiService,
    private router:Router,
   
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit(){
    console.log(this.form);
   this.auth.changePassword(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   )
  }
  handleResponse(data){

    let _router = this.router;
    Swal.fire('Thank you...', 'Accout Activated!', 'success');
    _router.navigateByUrl('/login');
    
  }

  handleError(error){
    this.error = error.error.errors;
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Access Denied',
      text: 'Token or Registration number is incorrect access denied ! ',
      showConfirmButton: false,
      timer: 2500
    })
   
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}