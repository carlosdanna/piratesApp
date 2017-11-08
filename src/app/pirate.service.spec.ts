import { TestBed, inject } from '@angular/core/testing';

import { PirateService } from './pirate.service';

describe('PirateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PirateService]
    });
  });

  it('should be created', inject([PirateService], (service: PirateService) => {
    expect(service).toBeTruthy();
  }));
});
