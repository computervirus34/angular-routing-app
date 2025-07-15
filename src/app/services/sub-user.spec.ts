import { TestBed } from '@angular/core/testing';

import { SubUser } from './sub-user';

describe('SubUser', () => {
  let service: SubUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
