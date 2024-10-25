import { TestBed } from '@angular/core/testing';

import { ShoeSizesService } from './shoe-sizes.service';

describe('ShoeSizesService', () => {
  let service: ShoeSizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeSizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
