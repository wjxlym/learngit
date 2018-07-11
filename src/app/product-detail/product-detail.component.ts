import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment, Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  protected proTitle: String;
  product: Product;
  comments: Comment[];
  constructor(private routInfo: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    let productId = this.routInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId)
  }

}
