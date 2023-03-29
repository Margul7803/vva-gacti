import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { animations } from 'src/app/mock/animations';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';
import {
  selectAnimation,
  selectAnimationAction,
  selectAnimationList,
} from 'src/app/state/animation-state';

@Component({
  selector: 'app-page-espace-encadrant-animation',
  templateUrl: './page-espace-encadrant-animation.component.html',
  styleUrls: ['./page-espace-encadrant-animation.component.scss'],
})
export class PageEspaceEncadrantAnimationComponent
  implements OnInit, OnDestroy
{
  @Output()
  newSelectedAnimation = new EventEmitter<Activite>();

  selectedAnimation!: Animation | null;

  public animationList$: Observable<Animation[]> | null = null;
  private destroyed$ = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.animationList$ = this.store
      .select(selectAnimationList)
      .pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.store.dispatch(selectAnimationAction({ animation: null }));
  }

  selectAnimation(): void {
    this.store.dispatch(
      selectAnimationAction({ animation: this.selectedAnimation })
    );
  }

  clearSelection(): void {
    this.selectedAnimation = null;
  }
}
