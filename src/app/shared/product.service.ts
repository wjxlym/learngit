import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor() { }
    private products:Product[] = [
    new Product(1, '第1个商品', 1.99, 3.5, '这里是我的第1个商品，我正在学习Angular入门实战', ['电子商品', '学习教程']),
    new Product(2, '第2个商品', 2.99, 4.5, '这里是我的第2个商品，我正在学习Angular入门实战', ['衣服', '学习教程']),
    new Product(3, '第3个商品', 3.99, 2.5, '这里是我的第3个商品，我正在学习Angular入门实战', ['电子商品', '木制品']),
    new Product(4, '第4个商品', 4.99, 1.5, '这里是我的第4个商品，我正在学习Angular入门实战', ['艺术品', '学习教程']),
    new Product(5, '第5个商品', 5.99, 2.5, '这里是我的第5个商品，我正在学习Angular入门实战', ['电子商品']),
    new Product(6, '第6个商品', 6.99, 3.5, '这里是我的第6个商品，我正在学习Angular入门实战', ['电子商品', '生活用品'])

  ];
  private comments:Comment[] = [
    new Comment(1, 1, '2012-02-04 22:22:22', '张三', 3.5, '真的很不错'),
    new Comment(2, 1, '2012-02-03 22:22:22', '李四', 4.5, '真的很不错1'),
    new Comment(3, 1, '2012-02-02 22:22:22', '张三三', 2.5, '真的很不错2'),
    new Comment(4, 2, '2012-02-01 22:22:22', '李四', 1.5, '真的很不错4')
  ];
  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}


