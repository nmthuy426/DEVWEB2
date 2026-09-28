import { Injectable } from '@angular/core';

export interface ProductImage {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  productsImage: ProductImage[] = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/h1.png' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/h2.png' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/h3.png' },
  ];

  getProductsWithImages(): ProductImage[] {
    return this.productsImage;
  }

  getProductDetail(id: string): ProductImage | undefined {
    return this.productsImage.find((product) => product.ProductId === id);
  }
}