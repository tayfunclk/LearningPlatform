import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  deleteProduct(id) {
    this.productsService.deleteProduct(id).subscribe(res => {
      //this.products.splice(id, 1);
      this.getProducts();
    });
  }

  getProducts() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, err => {
      console.error(err);
    });
  }

}  