import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animation } from '../models/animation';
import { animations } from '../mock/animations';
import { Activite } from '../models/activite';
import { CONFIG, IConfig } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private static BASE_PATH = 'animation';
  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: IConfig
  ) {}

  loadAnimationListService(): Observable<Animation[]> {
    return this.http.get<Animation[]>(`${this.endpoint()}`);
  }

  deleteAnimation(animationToDelete: Animation): Observable<Animation> {
    return this.http.delete<Animation>(
      `${this.endpoint()}/${animationToDelete.codeAnimation}`
    );
  }

  updateAnimation(animationToUpdate: Animation): Observable<Animation> {
    console.log(animationToUpdate);
    return this.http.patch<Animation>(
      `${this.endpoint()}/${animationToUpdate.codeAnimation}`,
      {
        codeAnimation: animationToUpdate.codeAnimation,
        nom: animationToUpdate.nom,
        codeTypeid: animationToUpdate.TypeAnim,
        commentaire: animationToUpdate.commentaire,
        description: animationToUpdate.description,
        dateValidite: animationToUpdate.dateValidite,
        difficulte: animationToUpdate.difficulte,
        duree: animationToUpdate.duree,
        limiteAge: animationToUpdate.limiteAge,
        nbPlaceDispo: animationToUpdate.nbPlaceDispo,
        tarif: animationToUpdate.tarif,
      }
    );
  }

  createAnimationActivite(animationToUpdate: Activite): Observable<Activite> {
    return this.http.post<Activite>(`${this.config.api}/activite`, {
      codeAnimationid: animationToUpdate.codeAnimation,
      date: animationToUpdate.date,
      codeEtatid: animationToUpdate.Etat,
      heureRendezVous: animationToUpdate.heureRendezVous,
      heureDebut: animationToUpdate.heureDebut,
      heureFin: animationToUpdate.heureFin,
      prix: animationToUpdate.prix,
      nomResponsable: animationToUpdate.nomResponsable,
      prenomResponsable: animationToUpdate.prenomResponsable,
      dateAnnule: animationToUpdate.dateAnnule,
    });
  }

  updateAnimationActivite(animationToUpdate: Activite): Observable<Activite> {
    return this.http.patch<Activite>(
      `${this.config.api}/activite/${animationToUpdate.codeAnimation}/${animationToUpdate.date}`,
      {
        codeAnimationid: animationToUpdate.codeAnimation,
        date: animationToUpdate.date,
        codeEtatid: animationToUpdate.Etat,
        heureRendezVous: animationToUpdate.heureRendezVous,
        heureDebut: animationToUpdate.heureDebut,
        heureFin: animationToUpdate.heureFin,
        prix: animationToUpdate.prix,
        nomResponsable: animationToUpdate.nomResponsable,
        prenomResponsable: animationToUpdate.prenomResponsable,
        dateAnnule: animationToUpdate.dateAnnule,
      }
    );
  }

  createAnimation(animationCreated: Animation): Observable<Animation> {
    return this.http.post<Animation>(`${this.endpoint()}`, {
      codeAnimation: animationCreated.codeAnimation,
      nom: animationCreated.nom,
      codeTypeid: animationCreated.TypeAnim,
      commentaire: animationCreated.commentaire,
      description: animationCreated.description,
      dateValidite: animationCreated.dateValidite,
      dateCreation: new Date().toISOString(),
      difficulte: animationCreated.difficulte,
      duree: animationCreated.duree,
      limiteAge: animationCreated.limiteAge,
      nbPlaceDispo: animationCreated.nbPlaceDispo,
      tarif: animationCreated.tarif,
    });
  }

  private endpoint(): string {
    return `${this.config.api}/${AnimationService.BASE_PATH}`;
  }
}
