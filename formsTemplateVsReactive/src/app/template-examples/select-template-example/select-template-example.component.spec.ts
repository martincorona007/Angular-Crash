import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTemplateExampleComponent } from './select-template-example.component';

describe('SelectTemplateExampleComponent', () => {
  let component: SelectTemplateExampleComponent;
  let fixture: ComponentFixture<SelectTemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTemplateExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
