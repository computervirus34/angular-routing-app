import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUser } from './sub-user';

describe('SubUser', () => {
  let component: SubUser;
  let fixture: ComponentFixture<SubUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
