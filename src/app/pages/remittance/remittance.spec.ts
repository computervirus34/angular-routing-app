import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remittance } from './remittance';

describe('Remittance', () => {
  let component: Remittance;
  let fixture: ComponentFixture<Remittance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remittance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remittance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
