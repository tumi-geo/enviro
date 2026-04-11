import { TestBed } from '@angular/core/testing';

import { Permit } from './permit';

describe('Permit', () => {
  let service: Permit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Permit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
