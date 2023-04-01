import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopinContentComponent, PopinData } from './models/popin-data';
import { PopinDirective } from './directives/popin.directive';

@Component({
  selector: 'app-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss'],
})
export class PopinComponent implements OnInit {
  @ViewChild(PopinDirective, { static: true }) popinContent!: PopinDirective;

  public title: string;

  constructor(
    public dialogRef: MatDialogRef<PopinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopinData
  ) {
    this.title = data.title;
  }

  ngOnInit(): void {
    const viewContainerRef = this.popinContent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef =
      viewContainerRef.createComponent<PopinContentComponent>(
        this.data.component
      );
    componentRef.instance.dialog = this.dialogRef;
    componentRef.instance.isNew = this.data.isNew;
  }

  onClick(): void {
    this.dialogRef.close();
  }
}
