import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopinComponent } from '../popin.component';

export class PopinBuilder {
  private title = '';
  private component: any = null;
  private isNew = false;

  constructor(private dialog: MatDialog) {}

  setComponent(component: any): PopinBuilder {
    this.component = component;
    return this;
  }

  setTitle(title: string): PopinBuilder {
    this.title = title;
    return this;
  }

  setIsNew(isNew = false) {
    this.isNew = isNew;
    return this;
  }

  build(): MatDialogRef<PopinComponent> {
    return this.dialog.open(PopinComponent, {
      data: {
        title: this.title,
        component: this.component,
        isNew: this.isNew,
      },
    });
  }
}
