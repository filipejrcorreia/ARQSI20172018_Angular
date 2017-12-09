import { TestBed, inject } from '@angular/core/testing';

import { FarmacoService } from './farmaco.service';

describe('FarmacoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmacoService]
    });
  });

  it('should be created', inject([FarmacoService], (service: FarmacoService) => {
    expect(service).toBeTruthy();
  }));
});
