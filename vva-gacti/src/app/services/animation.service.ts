import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animation } from '../models/animation';
import { animations } from '../mock/animations';
import { Activite } from '../models/activite';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private static BASE_PATH = 'animations';
  //constructor(
  //  private http: HttpClient,
  //  @Inject(CONFIG) private config: IConfig
  //) {}

  loadAnimationListService(): Observable<Animation[]> {
    return of(animations);
  }

  deleteAnimation(animationToDelete: Animation): Observable<Animation[]> {
    const animationIndex = animations.findIndex(
      animation => animation.codeAnimation === animationToDelete.codeAnimation
    );
    if (animationIndex !== undefined) {
      animations.splice(animationIndex, 1);
      return of(animations);
    }
    return of(animations);
  }

  updateAnimation(animationToUpdate: Animation): Observable<Animation> {
    return of(animationToUpdate);
  }

  createAnimationActivite(animationToUpdate: Activite): Observable<Activite> {
    return of(animationToUpdate);
  }

  updateAnimationActivite(animationToUpdate: Activite): Observable<Activite> {
    return of(animationToUpdate);
  }

  createAnimation(animationCreated: Animation): Observable<Animation> {
    return of(animationCreated);
  }

  //private endpoint(): string {
  //  return `${this.config.api}/${AccessPointService.BASE_PATH}`;
  //}
}
