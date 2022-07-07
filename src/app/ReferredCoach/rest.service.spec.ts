import { TestBed } from '@angular/core/testing';

import { ClientListService } from './rest.service';

describe('RestService', () => {
  let service: ClientListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
