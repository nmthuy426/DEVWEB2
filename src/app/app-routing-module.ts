import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGroupComponent } from './ex18/customer-group/customer-group';
import { ServiceProductImageEventComponent } from './ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './ex13/service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalogComponent } from './ex14/product-catalog/product-catalog';

const routes: Routes = [
  { path: '', redirectTo: 'ex18', pathMatch: 'full' },
  { path: 'ex18', component: CustomerGroupComponent },
  { path: 'ex14', component: ProductCatalogComponent },
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: '**', redirectTo: 'ex18' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}