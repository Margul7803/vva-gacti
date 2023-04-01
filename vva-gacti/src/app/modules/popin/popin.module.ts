import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PopinComponent } from './popin.component';
import { PopinDirective } from './directives/popin.directive';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  declarations: [PopinComponent, PopinDirective],
})
export class PopinModule {}
