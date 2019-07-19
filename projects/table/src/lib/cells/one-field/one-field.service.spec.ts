import {TestBed} from '@angular/core/testing';
import {OneFieldService} from './one-field.service';


describe('OneFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneFieldService = TestBed.get(OneFieldService);
    expect(service).toBeTruthy();
  });
});
