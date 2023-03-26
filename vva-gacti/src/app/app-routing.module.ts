import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEspaceEncadrantActiviteComponent } from './pages/page-espace-encadrant-activite/page-espace-encadrant-activite.component';
import { PageEspaceEncadrantAnimationComponent } from './pages/page-espace-encadrant-animation/page-espace-encadrant-animation.component';

const routes: Routes = [
  {
    path: 'espace-encadrant-animation',
    component: PageEspaceEncadrantAnimationComponent,
  },
  {
    path: 'espace-encadrant-activite',
    component: PageEspaceEncadrantActiviteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
