import { TestBed } from '@angular/core/testing';

import { MeasureActionsService } from './measure-actions.service';

describe('MeasureActionsService', () => {
  let service: MeasureActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasureActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
