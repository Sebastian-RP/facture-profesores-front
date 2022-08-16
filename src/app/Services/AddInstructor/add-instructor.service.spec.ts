import { TestBed } from '@angular/core/testing';

import { AddInstructorService } from './add-instructor.service';

describe('AddInstructorService', () => {
  let service: AddInstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
