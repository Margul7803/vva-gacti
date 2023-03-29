import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';
import { AnimationService } from 'src/app/services/animation.service';
import * as animationAction from './action';

@Injectable()
export class AnimationEffects {
  constructor(
    private readonly actions$: Actions,
    private animationService: AnimationService
  ) {}
  loadAnimationList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(animationAction.loadAnimationList),
      mergeMap(() =>
        this.animationService.loadAnimationListService().pipe(
          map(result =>
            animationAction.loadAnimationListSuccess({ animations: result })
          ),
          catchError(async error =>
            animationAction.loadAnimationListError(error)
          )
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
  createAnimation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(animationAction.createAnimationAction),
      mergeMap(selectedAnimation =>
        this.animationService.createAnimation(selectedAnimation.animation).pipe(
          map((result: Animation) =>
            animationAction.createAnimationActionSuccess({ animation: result })
          ),
          catchError(async error =>
            animationAction.createAnimationActionError(error)
          )
        )
      )
    );
  });
  updateAnimation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(animationAction.updateAnimationAction),
      mergeMap(updatedAnimation =>
        this.animationService.updateAnimation(updatedAnimation.animation).pipe(
          map((result: Animation) =>
            animationAction.updateAnimationActionSuccess({ animation: result })
          ),
          catchError(async error =>
            animationAction.updateAnimationActionError(error)
          )
        )
      )
    );
  });

  createAnimationActivite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(animationAction.createAnimationActivteAction),
      mergeMap(updatedActiviteAnimation =>
        this.animationService
          .createAnimationActivite(updatedActiviteAnimation.activite)
          .pipe(
            map((result: Activite) =>
              animationAction.createAnimationActivteSuccess({
                activite: result,
              })
            ),
            catchError(async error =>
              animationAction.createAnimationActivteError(error)
            )
          )
      )
    );
  });

  updateAnimationActiviteAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(animationAction.updateAnimationActiviteAction),
      mergeMap(updatedActiviteAnimation =>
        this.animationService
          .updateAnimationActivite(updatedActiviteAnimation.activite)
          .pipe(
            map((result: Activite) =>
              animationAction.updateAnimationActiviteSuccess({
                activite: result,
              })
            ),
            catchError(async error =>
              animationAction.updateAnimationActiviteError(error)
            )
          )
      )
    );
  });
}
