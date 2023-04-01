import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONFIG, IConfig } from '../config/config';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private static BASE_PATH = 'inscription';
  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: IConfig
  ) {}

  inscrCompteService(compteToUpdate: Inscription): Observable<Inscription> {
    return this.http.post<Inscription>(`${this.endpoint()}`, {
      date: compteToUpdate.date,
      dateAnnule: compteToUpdate.dateAnnule,
      noInscrip: compteToUpdate.noInscrip,
      dateInscrip: compteToUpdate.dateInscrip,
      username: compteToUpdate.username,
      codeAnimation: compteToUpdate.codeAnimation,
    });
  }

  deinscrCompteService(compteToUpdate: Inscription): Observable<Inscription> {
    return this.http.patch<Inscription>(
      `${this.endpoint()}/${compteToUpdate.noInscrip}`,
      {
        dateAnnule: compteToUpdate.dateAnnule,
      }
    );
  }

  private endpoint(): string {
    return `${this.config.api}/${CompteService.BASE_PATH}`;
  }
}
