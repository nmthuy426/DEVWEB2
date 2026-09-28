import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CustomerGroupComponent } from './ex18/customer-group/customer-group';
import { ServiceProductImageEventComponent } from './ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './ex13/service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalogComponent } from './ex14/product-catalog/product-catalog';

@NgModule({
  declarations: [
    App,
    CustomerGroupComponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    ProductCatalogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
