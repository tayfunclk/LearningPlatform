import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import Product from 'src/app/model/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  angForm: FormGroup;
  product: Product;
  constructor(private route: ActivatedRoute, private productsService: ProductsService, private fb: FormBuilder) {
    this.createForm();
    this.product = new Product();
  }
  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if (params['id']) {
        this.productsService.editProduct(params['id']).subscribe((res: Product) => {
          this.product = res;
        });
      }

    });
  }

  updateProduct() {
    this.productsService.updateProduct(this.product);
  }

  addProduct(product: Product) {
    this.productsService.addProduct(product);
  }
}  