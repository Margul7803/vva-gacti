import { Type } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface PopinData {
  title: string;
  component: Type<any>;
  isNew: boolean;
}

export interface PopinContentComponent {
  dialog: MatDialogRef<any>;
  isNew: boolean;
}
