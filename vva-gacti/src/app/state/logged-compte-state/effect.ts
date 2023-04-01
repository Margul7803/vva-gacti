import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from 'rxjs';
import { LoggedCompteService } from 'src/app/services/logged-compte.service';
import { CompteService } from 'src/app/services/compte.service';
import * as LoggedCompteAction from './action';

@Injectable()
export class LoggedCompteEffects {
  constructor(
    private readonly actions$: Actions,
    private loggedCompteService: LoggedCompteService,
    private compteService: CompteService,
    private router: Router,
    private store: Store
  ) {}

  loginCompte$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoggedCompteAction.loginCompte),
      mergeMap(data =>
        this.loggedCompteService.loginCompteService(data.loginData).pipe(
          map(result =>
            LoggedCompteAction.loginCompteSuccess({ compte: result })
          ),
          catchError(async error => LoggedCompteAction.loginCompteError(error))
        )
      )
    );
  });

  loginCompteSuccessRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoggedCompteAction.loginCompteSuccess),
        tap(() => {
          this.router.navigate(['/accueil']);
        })
      );
    },
    { dispatch: false }
  );

  logoutCompte$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoggedCompteAction.logoutCompte),
      map(() => LoggedCompteAction.logoutCompteSuccess()),
      tap(() => this.router.navigate(['/login']))
    );
  });

  insrcCompte$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoggedCompteAction.inscriptionCompte),
      mergeMap(data =>
        this.compteService.inscrCompteService(data.inscription).pipe(
          map(result =>
            LoggedCompteAction.inscriptionCompteSuccess({ inscription: result })
          ),
          catchError(async error =>
            LoggedCompteAction.inscriptionCompteError(error)
          )
        )
      )
    );
  });

  deinsrcCompte$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoggedCompteAction.deInscriptionCompte),
      mergeMap(data =>
        this.compteService.deinscrCompteService(data.inscription).pipe(
          map(result =>
            LoggedCompteAction.deInscriptionCompteSuccess({
              inscription: result,
            })
          ),
          catchError(async error =>
            LoggedCompteAction.deInscriptionCompteError(error)
          )
        )
      )
    );
  });
}
