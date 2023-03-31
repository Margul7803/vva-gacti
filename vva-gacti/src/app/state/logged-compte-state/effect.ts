import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from 'rxjs';
import { LoggedCompteService } from 'src/app/services/logged-compte.service';
import * as CompteAction from './action';

@Injectable()
export class LoggedCompteEffects {
  constructor(
    private readonly actions$: Actions,
    private loggedCompteService: LoggedCompteService,
    private router: Router,
    private store: Store
  ) {}

  loginCompte$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompteAction.loginCompte),
      mergeMap(data =>
        this.loggedCompteService.loginCompteService(data.loginData).pipe(
          map(result => CompteAction.loginCompteSuccess({ compte: result })),
          catchError(async error => CompteAction.loginCompteError(error))
        )
      )
    );
  });

  loginCompteSuccessRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CompteAction.loginCompteSuccess),
        tap(() => {
          this.router.navigate(['/accueil']);
        })
      );
    },
    { dispatch: false }
  );

  logoutCompte$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompteAction.logoutCompte),
      map(() => CompteAction.logoutCompteSuccess()),
      tap(() => this.router.navigate(['/login']))
    );
  });
}
