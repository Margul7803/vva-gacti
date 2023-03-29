import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Activite } from '../models/activite';
import { activites } from '../mock/activite';

@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  private static BASE_PATH = 'activite';
  //constructor(
  //  private http: HttpClient,
  //  @Inject(CONFIG) private config: IConfig
  //) {}

  loadActiviteListService(): Observable<Activite[]> {
    return of(activites);
  }

  deleteActivite(activiteToDelete: Activite): Observable<Activite> {
    return of(activiteToDelete);
  }

  updateActivite(activiteToUpdate: Activite): Observable<Activite> {
    return of(activiteToUpdate);
  }

  createActivite(activiteCreated: Activite): Observable<Activite> {
    return of(activiteCreated);
  }

  //private endpoint(): string {
  //  return `${this.config.api}/${AccessPointService.BASE_PATH}`;
  //}
}
