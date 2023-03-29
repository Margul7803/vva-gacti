import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnimationListComponent } from './page-animation-list.component';

describe('PageAnimationListComponent', () => {
  let component: PageAnimationListComponent;
  let fixture: ComponentFixture<PageAnimationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAnimationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAnimationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
