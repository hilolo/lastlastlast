import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { CostsService } from '../../service/data/costs.service';
import { Indivcost } from '../../model/indivcost';
import { SignatureComponent } from '../../costs/signature/signature.component';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
@Component({
  selector: 'app-viewcost',
  templateUrl: './viewcost.component.html',
  styleUrls: ['./viewcost.component.css']
})
export class ViewcostComponent implements OnInit {

  constructor(public dialog: MatDialog, private route: ActivatedRoute,private costservice: CostsService ) { }
 
  dataco:any;
  ngOnInit() {
    const secondsCounter = interval(2000);
    secondsCounter.subscribe(a => this.datarefresh());

  }

  datarefresh(){
    this.costservice.GetCost(localStorage.getItem("token"),this.route.snapshot.paramMap.get("id"))
    .subscribe( 
      data => {this.dataco=data; }
    );

  }

  calculateMealTotal(products: Indivcost[]): number {
    return products.reduce((acc, product) => acc + product.amount, 0)
  }

  validate() {
    
    const dialogRef = this.dialog.open(SignatureComponent, {
      data: { id: this.route.snapshot.paramMap.get("id") }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.datarefresh();
       
        
      }
    });
  }


}
