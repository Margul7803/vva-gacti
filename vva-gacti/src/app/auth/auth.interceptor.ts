import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { EMPTY, first, mergeMap, Observable } from 'rxjs';
import { logoutCompte, selectCompteToken } from '../state/logged-compte-state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  durationInSeconds = 4;
  constructor(private readonly store: Store, private _snackBar: MatSnackBar) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectCompteToken).pipe(
      first(),
      mergeMap(token => {
        if (req.url.includes('login')) {
          return next.handle(req);
        }

        if (!token) {
          this.store.dispatch(logoutCompte({ action: 'error' }));
          return EMPTY;
        }

        if (this.tokenExpired(token)) {
          this.store.dispatch(logoutCompte({ action: 'TOKEN_EXPIRES' }));
          this._snackBar.open('Connexion expiré', 'OK', {
            duration: this.durationInSeconds * 1000,
            panelClass: ['error-snackbar'],
          });
          return EMPTY;
        }

        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(req);
      })
    );
  }

  private tokenExpired(token: string | null): boolean {
    if (!token) {
      return false;
    }
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
