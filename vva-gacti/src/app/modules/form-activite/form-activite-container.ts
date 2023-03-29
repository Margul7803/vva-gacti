import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Activite } from 'src/app/models/activite';
import {
  createActiviteAction,
  selectActivite,
  updateActiviteAction,
} from 'src/app/state/activite-state';
import {
  createAnimationActivteAction,
  updateAnimationActiviteAction,
} from 'src/app/state/animation-state';

@Component({
  selector: 'app-form-activite-conatiner',
  template: `<app-form-activite
    [model]="activite$ | async"
    [isNew]="isNew"
    (newActivite)="activiteAction($event)"></app-form-activite>`,
  styles: [],
})
export class ActiviteFormContainerComponent implements OnInit, OnDestroy {
  activite$!: Observable<Activite | null>;

  private destroyed$ = new Subject<boolean>();

  constructor(private store: Store) {}

  @Input()
  isNew!: boolean;

  ngOnInit(): void {
    this.activite$ = this.store
      .select(selectActivite)
      .pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  activiteAction(activite: Activite) {
    this.isNew
      ? this.store.dispatch(
          createAnimationActivteAction({ activite: activite })
        )
      : this.store.dispatch(
          updateAnimationActiviteAction({ activite: activite })
        );
  }
}
