import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Profil } from '../models/compte';
import { selectLoggedCompteProfil } from '../state/logged-compte-state';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store
      .select(selectLoggedCompteProfil)
      .pipe(map(profil => profil === Profil.ADMIN));
  }
}
