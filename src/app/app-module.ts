import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { CustomerGroupComponent } from './customer-group/customer-group';

@NgModule({
  declarations: [App, CustomerGroupComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
