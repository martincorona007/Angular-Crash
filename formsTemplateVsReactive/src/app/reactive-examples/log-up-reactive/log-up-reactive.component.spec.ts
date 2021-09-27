import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpReactiveComponent } from './log-up-reactive.component';

describe('LogUpReactiveComponent', () => {
  let component: LogUpReactiveComponent;
  let fixture: ComponentFixture<LogUpReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogUpReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
