import { TestBed } from '@angular/core/testing';
import { UpcomingMeasuresService } from './upcoming-measures.service';

describe('UpcomingMeasuresService', () => {
  let service: UpcomingMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
