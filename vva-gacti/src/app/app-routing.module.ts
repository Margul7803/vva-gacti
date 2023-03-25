import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAnimationComponent } from './modules/card-animation/card-animation.component';

const routes: Routes = [{
  path: 'animation',
  component: CardAnimationComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
