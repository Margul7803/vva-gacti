import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEspaceEncadrantAnimationComponent } from './page-espace-encadrant-animation.component';

describe('PageEspaceEncadrantAnimationComponent', () => {
  let component: PageEspaceEncadrantAnimationComponent;
  let fixture: ComponentFixture<PageEspaceEncadrantAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEspaceEncadrantAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEspaceEncadrantAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
