import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONFIG, IConfig } from '../config/config';
import { Login, IUserLogged } from '../models/compte';

@Injectable({
  providedIn: 'root',
})
export class LoggedCompteService {
  private static BASE_PATH = 'auth/login';
  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: IConfig
  ) {}

  loginCompteService(compteToConnect: Login): Observable<IUserLogged> {
    return this.http.post<IUserLogged>(`${this.endpoint()}`, {
      email: compteToConnect.email,
      password: compteToConnect.password,
    });
  }

  private endpoint(): string {
    return `${this.config.api}/${LoggedCompteService.BASE_PATH}`;
  }
}
