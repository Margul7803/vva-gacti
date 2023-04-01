import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPopinContent]',
})
export class PopinDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
