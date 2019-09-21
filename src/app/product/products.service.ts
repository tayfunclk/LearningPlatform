import { Injectable } from '@angular/core';
import { CommonService } from '../model/common.service';
import Product from '../model/product';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private cs: CommonService, private router: Router) { }
  addProduct(product: Product) {
    this.cs.post("/add", product).subscribe(
      res => {
        console.log('Done');
        this.router.navigate(['products']);
      }, err => {
        console.log('something wrong');
      });
  }

  getProducts() {
    return this.cs.get("");
  }

  editProduct(id) {
    return this.cs.get(`/edit/${id}`);
  }

  updateProduct(product: any) {
    this.cs.post(`/update/${product._id}`, product).subscribe(
      res => {
        console.log('Done');
        this.router.navigate(['products']);
      });
  }

  deleteProduct(id) {
    return this.cs.get(`/delete/${id}`);
  }
}
