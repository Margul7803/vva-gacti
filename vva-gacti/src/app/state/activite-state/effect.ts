import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';
import { Activite } from 'src/app/models/activite';
import { ActiviteService } from 'src/app/services/activite.service';
import * as activiteAction from './action';

@Injectable()
export class ActiviteEffects {
  constructor(
    private readonly actions$: Actions,
    private activiteService: ActiviteService
  ) {}
  loadActiviteList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(activiteAction.loadActiviteList),
      mergeMap(() =>
        this.activiteService.loadActiviteListService().pipe(
          map(result =>
            activiteAction.loadActiviteListSuccess({ activites: result })
          ),
          catchError(async error => activiteAction.loadActiviteListError(error))
        )
      )
    );
  });
  //  deleteAp$ = createEffect(() => {
  //    return this.actions$.pipe(
  //      ofType(ApAction.deleteAPAction),
  //      mergeMap((selectedAp) =>
  //        this.apService.deleteAp(selectedAp.ap).pipe(
  //          map((result: IAccessPoint) =>
  //            ApAction.deleteAPActionSuccess({ ap: result })
  //          ),
  //          catchError(async (error) => ApAction.deleteAPActionError(error))
  //        )
  //      )
  //    );
  //  });
  createActivite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(activiteAction.createActiviteAction),
      mergeMap(selectedActivite =>
        this.activiteService.createActivite(selectedActivite.activite).pipe(
          map((result: Activite) =>
            activiteAction.createActiviteActionSuccess({ activite: result })
          ),
          catchError(async error =>
            activiteAction.createActiviteActionError(error)
          )
        )
      )
    );
  });
  updateActivite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(activiteAction.updateActiviteAction),
      mergeMap(updatedActivite =>
        this.activiteService.updateActivite(updatedActivite.activite).pipe(
          map((result: Activite) =>
            activiteAction.updateActiviteActionSuccess({ activite: result })
          ),
          catchError(async error =>
            activiteAction.updateActiviteActionError(error)
          )
        )
      )
    );
  });
}
