import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appVisible]',
})
export class VisibleDirective {
  @Input() set appVisible(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  // ngOnChanges() {
  //   if (this.appVisible) {
  //     this.vcRef.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.vcRef.clear;
  //   }
  // }
}
