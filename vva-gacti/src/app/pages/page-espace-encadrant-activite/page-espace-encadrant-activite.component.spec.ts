import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEspaceEncadrantActiviteComponent } from './page-espace-encadrant-activite.component';

describe('PageEspaceEncadrantActiviteComponent', () => {
  let component: PageEspaceEncadrantActiviteComponent;
  let fixture: ComponentFixture<PageEspaceEncadrantActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEspaceEncadrantActiviteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEspaceEncadrantActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
