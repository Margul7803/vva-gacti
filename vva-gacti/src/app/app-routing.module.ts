import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageAnimationListComponent } from './pages/page-animation-list/page-animation-list.component';
import { PageEspaceEncadrantActiviteComponent } from './pages/page-espace-encadrant-activite/page-espace-encadrant-activite.component';
import { PageEspaceEncadrantAnimationComponent } from './pages/page-espace-encadrant-animation/page-espace-encadrant-animation.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageUserInfoComponent } from './pages/page-user-info/page-user-info.component';

const routes: Routes = [
  {
    path: 'espace-encadrant-animation',
    component: PageEspaceEncadrantAnimationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'espace-encadrant-activite',
    component: PageEspaceEncadrantActiviteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'animation-list',
    component: PageAnimationListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'compte-info',
    component: PageUserInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'accueil',
    component: PageHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'compte-connexion',
    component: PageLoginComponent,
  },
  { path: '**', redirectTo: 'compte-connexion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
