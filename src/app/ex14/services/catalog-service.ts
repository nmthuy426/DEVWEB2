import { Injectable } from '@angular/core';

export interface CatalogProduct {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

export interface CatalogCategory {
  Cateid: string;
  CateName: string;
  Products: CatalogProduct[];
}

@Injectable({ providedIn: 'root' })
export class CatalogService {
  datas: CatalogCategory[] = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/h1.png' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/h2.png' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/h3.png' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heleiken', Price: 500, Image: 'assets/h4.png' },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'assets/h5.png' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'assets/h6.png' },
      ],
    },
  ];

  getCategories(): CatalogCategory[] {
    return this.datas;
  }
}
