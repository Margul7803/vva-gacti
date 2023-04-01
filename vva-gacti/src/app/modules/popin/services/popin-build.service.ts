import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopinBuilder } from './popin-builder.model';

@Injectable({ providedIn: 'root' })
export class PopinBuilderService {
  constructor(public dialog: MatDialog) {}

  getBuilder(): PopinBuilder {
    return new PopinBuilder(this.dialog);
  }
}
