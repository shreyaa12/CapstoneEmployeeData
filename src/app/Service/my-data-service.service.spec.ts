import { TestBed } from '@angular/core/testing';

import { MyDataServiceService } from './my-data-service.service';

describe('MyDataServiceService', () => {
  let service: MyDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
