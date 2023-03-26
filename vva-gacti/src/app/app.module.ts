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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EffectsModule } from '@ngrx/effects';
import { animationReducer } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    MatDatepickerModule,
    StoreModule.forRoot(
      {'animation-state': animationReducer,}
      ),

    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
