import { TestBed, inject } from '@angular/core/testing';

import { GotServiceService } from './got-service.service';

describe('GotServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotServiceService]
    });
  });

  it('should be created', inject([GotServiceService], (service: GotServiceService) => {
    expect(service).toBeTruthy();
  }));
});
