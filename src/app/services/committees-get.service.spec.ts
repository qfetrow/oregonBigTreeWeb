import { TestBed } from '@angular/core/testing';

import { CommitteesGetService } from './committees-get.service';

describe('CommitteesGetService', () => {
  let service: CommitteesGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteesGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
