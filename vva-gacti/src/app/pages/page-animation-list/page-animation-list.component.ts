import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Animation } from 'src/app/models/animation';
import { selectActiviteAction } from 'src/app/state/activite-state';
import { selectAnimationAction, selectAnimationList } from 'src/app/state/animation-state';

@Component({
  selector: 'app-page-animation-list',
  templateUrl: './page-animation-list.component.html',
  styleUrls: ['./page-animation-list.component.scss'],
})
export class PageAnimationListComponent implements OnInit, OnDestroy {
  public animationList$: Observable<Animation[]> | null = null;

  private destroyed$ = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.animationList$ = this.store
      .select(selectAnimationList)
      .pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.store.dispatch(selectActiviteAction({activite: null}))
  }
}
