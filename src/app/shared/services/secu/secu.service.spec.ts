import { TestBed } from '@angular/core/testing';

import { SecuService } from './secu.service';

describe('SecuService', () => {
  let service: SecuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
