import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { activites } from 'src/app/mock/activite';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';
import {
  selectActiviteAction,
  selectActvitieList,
} from 'src/app/state/activite-state';
import {
  selectAnimationAction,
  selectAnimationList,
} from 'src/app/state/animation-state';

@Component({
  selector: 'app-page-espace-encadrant-activite',
  templateUrl: './page-espace-encadrant-activite.component.html',
  styleUrls: ['./page-espace-encadrant-activite.component.scss'],
})
export class PageEspaceEncadrantActiviteComponent implements OnInit, OnDestroy {
  @Output()
  newSelectedActivite = new EventEmitter<Activite>();

  private destroyed$ = new Subject<boolean>();

  activites = activites;
  public animationList$: Observable<Animation[]> | null = null;
  public activiteList$: Observable<Activite[]> | null = null;
  selectedAnimation!: Animation | null;
  selectedActivite!: Activite | null;

  constructor(private store: Store) {}

  ngOnInit() {
    this.animationList$ = this.store
      .select(selectAnimationList)
      .pipe(takeUntil(this.destroyed$));
    this.activiteList$ = this.store
      .select(selectActvitieList)
      .pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.store.dispatch(selectAnimationAction({ animation: null }));
    this.store.dispatch(selectActiviteAction({ activite: null }));
  }

  selectAnimation(): void {
    this.store.dispatch(
      selectAnimationAction({ animation: this.selectedAnimation })
    );
  }

  selectActivite(): void {
    this.store.dispatch(
      selectActiviteAction({ activite: this.selectedActivite })
    );
  }

  clearSelectionCode(): void {
    this.selectedActivite = null;
  }

  clearSelectionDate(): void {
    this.selectedActivite = null;
  }

  convertDate(date: string | undefined): string {
    if (date !== undefined) {
      const dateParts = date.split('-');
      const day = dateParts[2];
      const month = dateParts[1];
      const year = dateParts[0];
      return `${day}/${month}/${year}`;
    }
    return '';
  }
}
