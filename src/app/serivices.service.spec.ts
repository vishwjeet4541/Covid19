import { TestBed } from '@angular/core/testing';

import { SerivicesService } from './serivices.service';

describe('SerivicesService', () => {
  let service: SerivicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
