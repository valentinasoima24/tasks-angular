import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTask2Component } from './button-task2.component';

describe('ButtonTask2Component', () => {
  let component: ButtonTask2Component;
  let fixture: ComponentFixture<ButtonTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTask2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
