import { Component, OnInit, signal } from '@angular/core';
import { CustomerGroup } from '../models/customer';
import { CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group.html',
  styleUrl: './customer-group.css',
})
export class CustomerGroupComponent implements OnInit {
  readonly groups = signal<CustomerGroup[]>([]);
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');

  constructor(private readonly customerService: CustomerService) {}

  get customerCount(): number {
    return this.groups().reduce((total, group) => total + group.Customers.length, 0);
  }

  ngOnInit(): void {
    this.customerService.getCustomerGroups().subscribe({
      next: (groups) => {
        this.groups.set(groups);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Customer data could not be loaded.');
        this.isLoading.set(false);
      },
    });
  }

  onAvatarError(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.parentElement?.classList.add('avatar-fallback-active');
  }

  initials(name: string): string {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }
}
