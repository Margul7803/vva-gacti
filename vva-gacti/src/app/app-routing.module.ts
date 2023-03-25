import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEspaceEncadrantAnimationComponent } from './pages/page-espace-encadrant-animation/page-espace-encadrant-animation.component';

const routes: Routes = [{
  path: 'espace-encadrant-animation',
  component: PageEspaceEncadrantAnimationComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
