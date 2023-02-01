import { TestBed } from '@angular/core/testing';

import { EducationUnitsService } from './educationUnits.service';

describe('UnitsService', () => {
  let service: EducationUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
