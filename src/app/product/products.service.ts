import { Injectable } from '@angular/core';
import { CommonService } from '../model/common.service';
import Product from '../model/product';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  class = "products";
  constructor(private cs: CommonService, private router: Router) { }
  addProduct(product: Product) {
    this.cs.post(`${this.class}/add`, product).subscribe(
      res => {
        console.log('Done');
        this.router.navigate(['products']);
      }, err => {
        console.log('something wrong');
      });
  }

  getProducts() {
    return this.cs.get(`${this.class}`);
  }

  editProduct(id) {
    return this.cs.get(`${this.class}/edit/${id}`);
  }

  updateProduct(product: any) {
    this.cs.post(`${this.class}/update/${product._id}`, product).subscribe(
      res => {
        console.log('Done');
        this.router.navigate(['products']);
      });
  }

  deleteProduct(id) {
    return this.cs.get(`${this.class}/delete/${id}`);
  }
}
