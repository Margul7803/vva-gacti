import { Component, Input } from '@angular/core';
import { activite } from 'src/app/mock/activite';

@Component({
  selector: 'app-card-activite',
  templateUrl: './card-activite.component.html',
  styleUrls: ['./card-activite.component.scss']
})
export class CardActiviteComponent {
  @Input()
  activiteCard = activite;

  panelOpenState: boolean = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState
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

  FormatDateToTime(date: Date | null): string {
    if (date !== null) {
      const hour = date.getHours();
      const minute = date.getMonth() + 1;
      return hour + 'h' + minute;
    } else {
      return '';
    }
  }
}
