import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAnimationComponent } from './modules/form-animation/form-animation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormActiviteComponent } from './modules/form-activite/form-activite.component';
import { CardAnimationComponent } from './modules/card-animation/card-animation.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardActiviteComponent } from './modules/card-activite/card-activite.component';
import { ToolbarNavigationComponent } from './modules/toolbar-navigation/toolbar-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PageEspaceEncadrantAnimationComponent } from './pages/page-espace-encadrant-animation/page-espace-encadrant-animation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { PageEspaceEncadrantActiviteComponent } from './pages/page-espace-encadrant-activite/page-espace-encadrant-activite.component';
import { EffectsModule } from '@ngrx/effects';
import { animationReducer } from './state/animation-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PageAnimationListComponent } from './pages/page-animation-list/page-animation-list.component';
import { PageUserInfoComponent } from './pages/page-user-info/page-user-info.component';
import { CardUserInfoComponent } from './modules/card-user-info/card-user-info.component';
import { AnimationEffects } from './state/animation-state/effect';
import { AnimationFormContainerComponent } from './modules/form-animation/form-animation-container.component';
import { ActiviteEffects } from './state/activite-state/effect';
import { ActiviteFormContainerComponent } from './modules/form-activite/form-activite-container';
import { activiteReducer } from './state/activite-state';

@NgModule({
  declarations: [
    AppComponent,
    FormAnimationComponent,
    FormActiviteComponent,
    CardAnimationComponent,
    CardActiviteComponent,
    ToolbarNavigationComponent,
    PageEspaceEncadrantAnimationComponent,
    PageEspaceEncadrantActiviteComponent,
    PageAnimationListComponent,
    PageUserInfoComponent,
    CardUserInfoComponent,
    AnimationFormContainerComponent,
    ActiviteFormContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    StoreModule.forRoot({
      'animation-state': animationReducer,
      'activite-state': activiteReducer,
    }),
    EffectsModule.forRoot([AnimationEffects, ActiviteEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
