import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  logoutCompte,
  selectLoggedCompte,
} from 'src/app/state/logged-compte-state';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.scss'],
})
export class ToolbarNavigationComponent {
  constructor(private store: Store) {}

  loggedCompte$ = this.store.select(selectLoggedCompte);

  logoutCompte(): void {
    this.store.dispatch(logoutCompte({ action: null }));
  }
}
