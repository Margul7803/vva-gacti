import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAnimationList } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'vva-gacti';

  constructor(private store: Store){}
  ngOnInit(): void {
    console.log("cc")
    this.store.dispatch(loadAnimationList());
  }
}
