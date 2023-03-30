import { Component, Input } from '@angular/core';
import { Compte } from 'src/app/models/compte';

@Component({
  selector: 'app-card-user-info',
  templateUrl: './card-user-info.component.html',
  styleUrls: ['./card-user-info.component.scss'],
})
export class CardUserInfoComponent {
  @Input()
  userCard!: Compte;

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
