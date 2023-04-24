import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("")

  constructor(private http: HttpClient) { }
  //api to view all products
  ViewAllProduct() {
    return this.http.get('http://localhost:3000/products')
  }

  //view single product 
  ViewProduct(pid: any) {
    return this.http.get('http://localhost:3000/products/' + pid)
  }

  deleteProduct(pid: any) {
    return this.http.delete('http://localhost:3000/products/' + pid)
  }
}
