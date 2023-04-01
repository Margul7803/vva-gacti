import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { activite } from 'src/app/mock/activite';
import { Activite } from 'src/app/models/activite';
import { Inscription } from 'src/app/models/inscription';
import {
  deInscriptionCompte,
  inscriptionCompte,
  selectLoggedCompte,
  selectLoggedCompteInscription,
  selectLoggedCompteUsername,
} from 'src/app/state/logged-compte-state';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-card-activite',
  templateUrl: './card-activite.component.html',
  styleUrls: ['./card-activite.component.scss'],
})
export class CardActiviteComponent implements OnInit, OnDestroy {
  @Input()
  activiteCard!: Activite;

  constructor(private store: Store) {}

  loggedCompte$ = this.store.select(selectLoggedCompte);
  loggedCompteUsername!: string | null;
  loggedCompteInscriptions!: Inscription[] | null;

  panelOpenState = false;

  destroy$ = new Subject<boolean>();

  ngOnInit(): void {
    this.store
      .select(selectLoggedCompteUsername)
      .pipe(takeUntil(this.destroy$))
      .subscribe(loggedCompte => {
        this.loggedCompteUsername = loggedCompte;
      });
    this.store
      .select(selectLoggedCompteInscription)
      .pipe(takeUntil(this.destroy$))
      .subscribe(loggedCompte => {
        this.loggedCompteInscriptions = loggedCompte;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  inscrAction(): void {
    const inscription = this.loggedCompteInscriptions?.find(
      inscr =>
        inscr.date === this.activiteCard.date &&
        inscr.codeAnimation === this.activiteCard.codeAnimation
    );
    if (inscription) {
      this.store.dispatch(
        deInscriptionCompte({
          inscription: {
            noInscrip: inscription?.noInscrip,
            dateAnnule: null,
          },
        })
      );
    } else {
      this.loggedCompteUsername
        ? this.store.dispatch(
            inscriptionCompte({
              inscription: {
                username: this.loggedCompteUsername,
                codeAnimation: this.activiteCard.codeAnimation,
                date: this.activiteCard.date,
                dateInscrip: new Date(),
                noInscrip: uuidv4(),
                dateAnnule: null,
              },
            })
          )
        : null;
    }
  }

  deInscrAction(): void {
    const inscription = this.loggedCompteInscriptions?.find(
      inscr =>
        inscr.date === this.activiteCard.date &&
        inscr.codeAnimation === this.activiteCard.codeAnimation
    );
    if (inscription?.dateAnnule === null && inscription) {
      this.store.dispatch(
        deInscriptionCompte({
          inscription: {
            noInscrip: inscription?.noInscrip,
            dateAnnule: new Date(),
          },
        })
      );
    }
  }

  isInscrit(activite: Activite): boolean {
    const inscription = this.loggedCompteInscriptions?.find(
      inscr =>
        inscr.codeAnimation === activite.codeAnimation &&
        inscr.date === activite.date &&
        inscr.dateAnnule === null
    );
    return inscription ? true : false;
  }

  FormatDateToShortDate(date: Date | null): string {
    if (date !== null) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (month < 10) {
        return day + '/' + '0' + month + '/' + year;
      } else {
        return day + '/' + month + '/' + year;
      }
    } else {
      return '';
    }
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
