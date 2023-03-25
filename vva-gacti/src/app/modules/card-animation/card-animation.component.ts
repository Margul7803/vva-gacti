import { Component, Input } from '@angular/core';
import { activites } from 'src/app/mock/activite';
import { animation } from 'src/app/mock/animations';
import { Animation } from 'src/app/models/animation';

@Component({
  selector: 'app-card-animation',
  templateUrl: './card-animation.component.html',
  styleUrls: ['./card-animation.component.scss'],
})
export class CardAnimationComponent {
  @Input()
  animationCard = animation;

  @Input()
  activitesCard = activites;
  
  panelOpenState: boolean = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  FormatDateToShortDate(date: Date | null): string {
    if (date !== null) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return day + '/' + month + '/' + year;
    } else {
      return '';
    }
  }
}
