import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductImage, ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
})
export class ServiceProductImageEventComponent {
  public products: ProductImage[];

  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: ProductImage): void {
    this.router.navigate(['/service-product-image-event', f.ProductId]);
  }
}