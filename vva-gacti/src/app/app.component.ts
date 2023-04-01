import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadActiviteList } from './state/activite-state';
import { loadAnimationList } from './state/animation-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vva-gacti';

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/compte-connexion']); 
    this.store.dispatch(loadAnimationList());
    this.store.dispatch(loadActiviteList());
  }
}
