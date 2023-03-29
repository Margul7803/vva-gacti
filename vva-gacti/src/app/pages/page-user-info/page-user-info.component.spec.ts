import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserInfoComponent } from './page-user-info.component';

describe('PageUserInfoComponent', () => {
  let component: PageUserInfoComponent;
  let fixture: ComponentFixture<PageUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageUserInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
