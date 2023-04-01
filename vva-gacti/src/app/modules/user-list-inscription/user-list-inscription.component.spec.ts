import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListInscriptionComponent } from './user-list-inscription.component';

describe('UserListInscriptionComponent', () => {
  let component: UserListInscriptionComponent;
  let fixture: ComponentFixture<UserListInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
