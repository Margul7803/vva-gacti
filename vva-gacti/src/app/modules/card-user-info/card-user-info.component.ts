import { Component, Input } from '@angular/core';
import { Compte } from 'src/app/models/compte';

@Component({
  selector: 'app-card-user-info',
  templateUrl: './card-user-info.component.html',
  styleUrls: ['./card-user-info.component.scss'],
})
export class CardUserInfoComponent {
  @Input()
  userCard!: Compte | null;
}
