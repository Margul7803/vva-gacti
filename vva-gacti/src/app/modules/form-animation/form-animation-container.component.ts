import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Animation } from 'src/app/models/animation';
import {
  createAnimationAction,
  selectAnimation,
  updateAnimationAction,
} from 'src/app/state/animation-state';

@Component({
  selector: 'app-form-animation-conatiner',
  template: `<app-form-animation
    [model]="animation$ | async"
    [isNew]="isNew"
    (newAnimation)="animationAction($event)"></app-form-animation>`,
  styles: [],
})
export class AnimationFormContainerComponent implements OnInit, OnDestroy {
  animation$!: Observable<Animation | null>;

  private destroyed$ = new Subject<boolean>();

  constructor(private store: Store) {}

  @Input()
  isNew!: boolean;

  ngOnInit(): void {
    this.animation$ = this.store
      .select(selectAnimation)
      .pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  animationAction(animation: Animation) {
    this.isNew
      ? this.store.dispatch(createAnimationAction({ animation: animation }))
      : this.store.dispatch(updateAnimationAction({ animation: animation }));
  }
}
