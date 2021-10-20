import { TestBed } from '@angular/core/testing';

import { FoodPartnerServiceService } from './food-partner-service.service';

describe('FoodPartnerServiceService', () => {
  let service: FoodPartnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodPartnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
