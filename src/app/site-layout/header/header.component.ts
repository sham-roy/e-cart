import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  SearchTerm:any

  constructor(private ps:ProductService){

  }

  searchData(event:any){
    this.SearchTerm=event.target.value

    // send the data to behaviour subject
    this.ps.search.next(this.SearchTerm)


  }

}
