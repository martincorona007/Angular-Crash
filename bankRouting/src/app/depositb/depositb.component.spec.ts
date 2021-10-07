import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositbComponent } from './depositb.component';

describe('DepositbComponent', () => {
  let component: DepositbComponent;
  let fixture: ComponentFixture<DepositbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
