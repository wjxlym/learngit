import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import 'rxjs/Rx';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   protected products: Array<Product>;
  protected keyword: string;
  protected titleFilter: FormControl = new FormControl();
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

