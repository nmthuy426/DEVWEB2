import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImage, ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.html',
  styleUrl: './service-product-image-event-detail.css',
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct?: ProductImage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.selectedProduct = this.productService.getProductDetail(id);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/service-product-image-event']);
  }
}