import { TestBed, inject } from '@angular/core/testing';

import { ListActionService } from './list-action.service';

describe('ListActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListActionService]
    });
  });

  it('should be created', inject([ListActionService], (service: ListActionService) => {
    expect(service).toBeTruthy();
  }));
});
