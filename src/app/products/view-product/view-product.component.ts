import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  pid:any
  pData:any

  constructor (private ar:ActivatedRoute,private ps:ProductService) {}


  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data['id']
    })

    this.ps.viesProduct(this.pid).subscribe((item:any)=>{
      this.pData=item
    })
  }

}
