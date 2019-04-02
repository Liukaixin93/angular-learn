import { TestBed } from '@angular/core/testing';

import { orderService } from './order.service';

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: orderService = TestBed.get(orderService);
    expect(service).toBeTruthy();
  });
});
