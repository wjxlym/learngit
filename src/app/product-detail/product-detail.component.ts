import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  protected proTitle: String;
  constructor(private routInfo: ActivatedRoute) { }

  ngOnInit() {
    this.proTitle = this.routInfo.snapshot.params['proTitle'];
  }

}
