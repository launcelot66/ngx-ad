import { TestBed } from '@angular/core/testing';

import { RowService } from './table.service';

describe('TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RowService = TestBed.get(RowService);
    expect(service).toBeTruthy();
  });
});
