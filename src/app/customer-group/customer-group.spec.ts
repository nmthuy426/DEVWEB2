import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CustomerService } from '../services/customer-service';
import { CustomerGroupComponent } from './customer-group';

describe('CustomerGroupComponent', () => {
  let fixture: ComponentFixture<CustomerGroupComponent>;
  let component: CustomerGroupComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerGroupComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: {
            getCustomerGroups: () => of([
              {
                CustomerTypeId: 1,
                CustomerTypeName: 'VIP',
                Customers: [
                  { Id: 'Cus123', Name: 'Obama', Email: 'obama@gmail.com', Age: 67, Image: '' },
                ],
              },
            ]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('renders customers grouped by customer type', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('VIP');
    expect(text).toContain('Obama');
    expect(component.groups()).toHaveLength(1);
  });

  it('creates initials for avatar fallback', () => {
    expect(component.initials('Kim jong Un')).toBe('KJ');
  });
});
