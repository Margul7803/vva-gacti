import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnimationComponent } from './card-animation.component';

describe('CardAnimationComponent', () => {
  let component: CardAnimationComponent;
  let fixture: ComponentFixture<CardAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAnimationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
