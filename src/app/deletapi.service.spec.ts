import { TestBed } from '@angular/core/testing';

import { DeletapiService } from './deletapi.service';

describe('DeletapiService', () => {
  let service: DeletapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
