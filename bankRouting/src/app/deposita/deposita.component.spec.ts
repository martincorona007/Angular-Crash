import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositaComponent } from './deposita.component';

describe('DepositaComponent', () => {
  let component: DepositaComponent;
  let fixture: ComponentFixture<DepositaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
