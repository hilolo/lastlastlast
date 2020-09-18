import { Component, OnInit } from '@angular/core';

import {GrpService} from '../../service/data/grp.service';
import {Group} from '../../model/group';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-groupindex',
  templateUrl: './groupindex.component.html',
  styleUrls: ['./groupindex.component.css']
})
export class GroupindexComponent implements OnInit {

  constructor(private grps : GrpService,    private route: ActivatedRoute, private _router : Router) { }
  datag :any;
  userid:string;

  ngOnInit() {

    
    this.userid=localStorage.getItem("user");
    this.grps.GetAllGrps(localStorage.getItem("token")).subscribe(
      data =>{ this.datag=data;console.log(this.datag); }
    
      );
  }

  view( groupt : Group) {
    this._router.navigate(['/viewgroup/'+groupt.prefix]);
  }
  view2( qta : number) {
    this._router.navigate(['/Posts/'+qta]);
  }

}
