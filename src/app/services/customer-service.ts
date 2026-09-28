import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerGroup } from '../models/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly dataUrl = 'assets/data/customers.json';

  constructor(private readonly http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this.dataUrl);
  }
}
