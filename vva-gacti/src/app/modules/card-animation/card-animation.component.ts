import { Component, Input, OnInit } from '@angular/core';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';

@Component({
  selector: 'app-card-animation',
  templateUrl: './card-animation.component.html',
  styleUrls: ['./card-animation.component.scss'],
})
export class CardAnimationComponent {
  @Input()
  animationCard!: Animation;

  @Input()
  activitesCard!: Activite[] | null;

  panelOpenState = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  VerifExistAct(activitesCard: Activite[] | null) {
    return Array.isArray(activitesCard) && activitesCard.length > 0;
  }
}
