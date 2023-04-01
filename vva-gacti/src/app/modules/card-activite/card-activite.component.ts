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
import { PopinBuilderService } from '../popin';
import { UserListInscriptionComponent } from '../user-list-inscription/user-list-inscription.component';
import { selectActiviteAction } from 'src/app/state/activite-state';
import { updateAnimationInscriptionActionSuccess } from 'src/app/state/animation-state';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-activite',
  templateUrl: './card-activite.component.html',
  styleUrls: ['./card-activite.component.scss'],
})
export class CardActiviteComponent implements OnInit, OnDestroy {
  @Input()
  nbplace!: number | null;

  @Input()
  activiteCard!: Activite;

  constructor(
    private store: Store,
    private popinBuilder: PopinBuilderService,
    private _snackBar: MatSnackBar
  ) {}

  durationInSeconds = 4;

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
    const inscriptionValid = this.activiteCard.Inscription?.filter(
      inscr => inscr.dateAnnule === null
    );
    console.log(inscriptionValid)
    console.log(this.nbplace)

    if (inscriptionValid && this.nbplace) {
      if (this.nbplace > inscriptionValid?.length) {
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
          const uid = uuidv4();
          this.loggedCompteUsername
            ? this.store.dispatch(
                inscriptionCompte({
                  inscription: {
                    username: this.loggedCompteUsername,
                    codeAnimation: this.activiteCard.codeAnimation,
                    date: this.activiteCard.date,
                    dateInscrip: new Date(),
                    noInscrip: uid,
                    dateAnnule: null,
                  },
                })
              )
            : null;
        }
      }else{this._snackBar.open('Pas de place disponible', 'OK', {
        duration: this.durationInSeconds * 1000,
        panelClass: ['error-snackbar'],
      });}
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

  userListInscr(activite: Activite): void {
    if (activite) {
      this.store.dispatch(selectActiviteAction({ activite }));
    }
    const myBuilder = this.popinBuilder.getBuilder();
    const popinRef = myBuilder
      .setTitle('Liste des utilisateurs inscrits')
      .setComponent(UserListInscriptionComponent)
      .build();
  }
}
