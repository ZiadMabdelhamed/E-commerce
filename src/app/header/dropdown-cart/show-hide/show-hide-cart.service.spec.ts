import { TestBed } from '@angular/core/testing';

import { ShowHideCartService } from './show-hide-cart.service';

describe('ShowHideCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowHideCartService = TestBed.get(ShowHideCartService);
    expect(service).toBeTruthy();
  });
});
