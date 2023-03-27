import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAnimationListComponent } from './pages/page-animation-list/page-animation-list.component';
import { PageEspaceEncadrantActiviteComponent } from './pages/page-espace-encadrant-activite/page-espace-encadrant-activite.component';
import { PageEspaceEncadrantAnimationComponent } from './pages/page-espace-encadrant-animation/page-espace-encadrant-animation.component';
import { PageUserInfoComponent } from './pages/page-user-info/page-user-info.component';

const routes: Routes = [
  {
    path: 'espace-encadrant-animation',
    component: PageEspaceEncadrantAnimationComponent,
  },
  {
    path: 'espace-encadrant-activite',
    component: PageEspaceEncadrantActiviteComponent,
  },
  {
    path: 'animation-list',
    component: PageAnimationListComponent,
  },
  {
    path: 'user-info',
    component: PageUserInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
