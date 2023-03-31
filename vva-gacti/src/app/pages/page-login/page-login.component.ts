import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Login } from 'src/app/models/compte';
import {
  loginCompte,
  selectCompteLoginError,
} from 'src/app/state/logged-compte-state';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnDestroy {
  destroy$ = new Subject<boolean>();
  loginError$ = this.store
    .select(selectCompteLoginError)
    .pipe(takeUntil(this.destroy$));

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  loginAction(loginData: Login) {
    this.store.dispatch(loginCompte({ loginData }));
  }
}
