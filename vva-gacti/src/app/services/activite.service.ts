import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Activite } from '../models/activite';
import { activites } from '../mock/activite';
import { CONFIG, IConfig } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  private static BASE_PATH = 'activite';
  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: IConfig
  ) {}

  loadActiviteListService(): Observable<Activite[]> {
    return this.http.get<Activite[]>(`${this.endpoint()}`);
  }

  deleteActivite(activiteToDelete: Activite): Observable<Activite> {
    return this.http.delete<Activite>(
      `${this.endpoint()}/${activiteToDelete.codeAnimation}/${
        activiteToDelete.date
      }`
    );
  }

  updateActivite(activiteToUpdate: Activite): Observable<Activite> {
    return this.http.patch<Activite>(
      `${this.endpoint()}/${activiteToUpdate.codeAnimation}/${
        activiteToUpdate.date
      }`,
      {
        codeAnimationid: activiteToUpdate.codeAnimation,
        date: activiteToUpdate.date,
        codeEtatid: activiteToUpdate.codeEtat?.code,
        heureRendezVous: activiteToUpdate.heureRendezVous,
        heureDebut: activiteToUpdate.heureDebut,
        heureFin: activiteToUpdate.heureFin,
        prix: activiteToUpdate.prix,
        nomResponsable: activiteToUpdate.nomResponsable,
        prenomResponsable: activiteToUpdate.prenomResponsable,
        dateAnnule: activiteToUpdate.dateAnnule,
      }
    );
  }

  createActivite(activiteCreated: Activite): Observable<Activite> {
    return this.http.post<Activite>(`${this.endpoint()}`, {
      codeAnimationid: activiteCreated.codeAnimation,
      date: activiteCreated.date,
      codeEtatid: activiteCreated.codeEtat?.code,
      heureRendezVous: activiteCreated.heureRendezVous,
      heureDebut: activiteCreated.heureDebut,
      heureFin: activiteCreated.heureFin,
      prix: activiteCreated.prix,
      nomResponsable: activiteCreated.nomResponsable,
      prenomResponsable: activiteCreated.prenomResponsable,
      dateAnnule: activiteCreated.dateAnnule,
    });
  }

  private endpoint(): string {
    return `${this.config.api}/${ActiviteService.BASE_PATH}`;
  }
}
