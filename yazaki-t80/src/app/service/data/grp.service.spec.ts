import { TestBed } from '@angular/core/testing';

import { GrpService } from './grp.service';

describe('GrpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrpService = TestBed.get(GrpService);
    expect(service).toBeTruthy();
  });
});
