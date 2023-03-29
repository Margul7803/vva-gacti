import { Component, Input } from '@angular/core';
import { activites } from 'src/app/mock/activite';
import { animation1 } from 'src/app/mock/animations';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';

@Component({
  selector: 'app-card-animation',
  templateUrl: './card-animation.component.html',
  styleUrls: ['./card-animation.component.scss'],
})
export class CardAnimationComponent {
  @Input()
  animationCard = animation1;

  @Input()
  activitesCard!: Activite[] | null;

  panelOpenState = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
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

  VerifExistAct(activitesCard: Activite[] | null) {
    return Array.isArray(activitesCard) && activitesCard.length > 0;
  }
}
