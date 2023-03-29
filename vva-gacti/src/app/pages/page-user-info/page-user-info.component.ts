import { Component } from '@angular/core';
import { user } from 'src/app/mock/user';

@Component({
  selector: 'app-page-user-info',
  templateUrl: './page-user-info.component.html',
  styleUrls: ['./page-user-info.component.scss'],
})
export class PageUserInfoComponent {
  user = user;
}
