// import { Injectable } from '@angular/core';
// import { IAccessPoint } from '@models';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs';
// import { AccessPointService } from 'src/app/services';
// import * as ApAction from './action';
// import * as AppAction from '../app-state';

// @Injectable()
// export class ApEffects {
//   constructor(
//     private readonly actions$: Actions,
//     private apService: AccessPointService
//   ) {}

//   loadApList$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ApAction.loadAPList, AppAction.appLoadAction),
//       mergeMap(() =>
//         this.apService.loadApListService().pipe(
//           map((result) => ApAction.loadAPListSuccess({ aps: result })),
//           catchError(async (error) => ApAction.loadAPListError(error))
//         )
//       )
//     );
//   });

//   deleteAp$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ApAction.deleteAPAction),
//       mergeMap((selectedAp) =>
//         this.apService.deleteAp(selectedAp.ap).pipe(
//           map((result: IAccessPoint) =>
//             ApAction.deleteAPActionSuccess({ ap: result })
//           ),
//           catchError(async (error) => ApAction.deleteAPActionError(error))
//         )
//       )
//     );
//   });

//   createAp$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ApAction.createAPAction),
//       mergeMap((selectedAp) =>
//         this.apService.createAp(selectedAp.ap).pipe(
//           map((result: IAccessPoint) =>
//             ApAction.createAPActionSuccess({ ap: result })
//           ),
//           catchError(async (error) => ApAction.createAPActionError(error))
//         )
//       )
//     );
//   });

//   updateAp$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ApAction.updateAPAction),
//       mergeMap((updatedAp) =>
//         this.apService.updateAp(updatedAp.ap).pipe(
//           map((result: IAccessPoint) =>
//             ApAction.updateAPActionSuccess({ ap: result })
//           ),
//           catchError(async (error) => ApAction.updateAPActionError(error))
//         )
//       )
//     );
//   });
// }
