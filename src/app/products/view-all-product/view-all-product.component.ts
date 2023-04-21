import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent  implements OnInit{

  poductsData:any
  filterCategory : any

  constructor(private ps:ProductService) {

  }

  ngOnInit(): void {
    this.ps.viewAllProduct().subscribe((data:any)=>{
      this.poductsData=data
    })
  }

  filter(category:any){
    this.filterCategory=this.poductsData.filter((i:any)=>i.categoryId==category || category=="")
  }


}
