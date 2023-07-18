import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondListComponentComponent } from './second-list-component.component';

describe('SecondListComponentComponent', () => {
  let component: SecondListComponentComponent;
  let fixture: ComponentFixture<SecondListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
