import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnimationComponent } from './form-animation.component';

describe('FormAnimationComponent', () => {
  let component: FormAnimationComponent;
  let fixture: ComponentFixture<FormAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
