import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { user } from 'src/app/mock/user';
import { selectLoggedCompte } from 'src/app/state/logged-compte-state';

@Component({
  selector: 'app-page-user-info',
  templateUrl: './page-user-info.component.html',
  styleUrls: ['./page-user-info.component.scss'],
})
export class PageUserInfoComponent {
  constructor(private store: Store) {}
  loggedCompte$ = this.store.select(selectLoggedCompte);
}
