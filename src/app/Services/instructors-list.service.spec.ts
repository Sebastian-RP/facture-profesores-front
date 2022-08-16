import { TestBed } from '@angular/core/testing';

import { InstructorsListService } from './instructors-list.service';

describe('InstructorsListService', () => {
  let service: InstructorsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
