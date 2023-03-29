import { Component, Input } from '@angular/core';
import { activite } from 'src/app/mock/activite';

@Component({
  selector: 'app-card-activite',
  templateUrl: './card-activite.component.html',
  styleUrls: ['./card-activite.component.scss'],
})
export class CardActiviteComponent {
  @Input()
  activiteCard = activite;

  panelOpenState = false;

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  FormatDateToShortDate(date: Date | null): string {
    if (date !== null) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (month < 10) {
        return day + '/' + '0' + month + '/' + year;
      } else {
        return day + '/' + month + '/' + year;
      }
    } else {
      return '';
    }
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
}
