import { Component, Input } from '@angular/core';
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

  panelOpenState: boolean = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState
  }

  FormatDateToString(date: Date | null): string {
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
