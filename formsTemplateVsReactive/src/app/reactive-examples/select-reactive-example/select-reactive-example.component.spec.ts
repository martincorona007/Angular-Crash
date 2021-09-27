import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReactiveExampleComponent } from './select-reactive-example.component';

describe('SelectReactiveExampleComponent', () => {
  let component: SelectReactiveExampleComponent;
  let fixture: ComponentFixture<SelectReactiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReactiveExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReactiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
