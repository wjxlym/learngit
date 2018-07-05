import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   private products: Array<Product>;


  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第1个商品', 1.99, 3.5, '这里是我的第1个商品，我正在学习Angular入门实战', ['电子商品', '学习教程']),
      new Product(2, '第2个商品', 2.99, 4.5, '这里是我的第2个商品，我正在学习Angular入门实战', ['衣服', '学习教程']),
      new Product(3, '第3个商品', 3.99, 2.5, '这里是我的第3个商品，我正在学习Angular入门实战', ['电子商品', '木制品']),
      new Product(4, '第4个商品', 4.99, 1.5, '这里是我的第4个商品，我正在学习Angular入门实战', ['艺术品', '学习教程']),
      new Product(5, '第5个商品', 5.99, 2.5, '这里是我的第5个商品，我正在学习Angular入门实战', ['电子商品']),
      new Product(6, '第6个商品', 6.99, 3.5, '这里是我的第6个商品，我正在学习Angular入门实战', ['电子商品', '生活用品'])

    ];
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
