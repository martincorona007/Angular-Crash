import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpTemplateComponent } from './log-up-template.component';

describe('LogUpTemplateComponent', () => {
  let component: LogUpTemplateComponent;
  let fixture: ComponentFixture<LogUpTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogUpTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
