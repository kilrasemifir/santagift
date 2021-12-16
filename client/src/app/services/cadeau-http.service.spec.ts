import { TestBed } from '@angular/core/testing';

import { CadeauHttpService } from './cadeau-http.service';

describe('CadeauHttpService', () => {
  let service: CadeauHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadeauHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
