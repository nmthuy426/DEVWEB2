import { Component, OnInit } from '@angular/core';
import { CatalogCategory, CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalogComponent implements OnInit {
  categories: CatalogCategory[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }

  trackCategory(index: number, category: CatalogCategory): string {
    return category.Cateid;
  }

  trackProduct(index: number, product: { ProductId: string }): string {
    return product.ProductId;
  }
}
