/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Activite } from 'src/app/models/activite';
import { Compte } from 'src/app/models/compte';
import { selectActivite } from 'src/app/state/activite-state';
import { selectLoggedCompte } from 'src/app/state/logged-compte-state';

@Component({
  selector: 'app-user-list-inscription',
  templateUrl: './user-list-inscription.component.html',
  styleUrls: ['./user-list-inscription.component.scss'],
})
export class UserListInscriptionComponent {
  constructor(private store: Store) {}

  selectedActivite$ = this.store.select(selectActivite);
  LoggedCompte$ = this.store.select(selectLoggedCompte);

  destroy$ = new Subject<boolean>();

  isInscrit(compte: Compte,activite: Activite): boolean {
    if (activite.Inscription) 
    {
      console.log(activite)
      const inscriptionActivite = activite.Inscription?.find(inscr => inscr.username === compte.username)
      if (inscriptionActivite)
      {
        console.log(inscriptionActivite)
        const inscriptionCompte = compte.Inscription?.find(inscr => inscr.dateAnnule === null && inscr.noInscrip === inscriptionActivite?.noInscrip)
        return inscriptionCompte ? true : false
      }
      return false;
    }
    const inscriptionCompte = compte.Inscription?.find(inscr => inscr.date === activite.date && inscr.codeAnimation === activite.codeAnimation && inscr.dateAnnule === null)
    console.log(inscriptionCompte)
    return inscriptionCompte ? true : false
  }
}
