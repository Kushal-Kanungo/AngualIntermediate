import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedBg]',
})
export class RedBgDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseOver() {
    this.el.nativeElement.classList.add('btn-success');
    this.el.nativeElement.classList.remove('btn-info');
  }
  @HostListener('mouseleave') onMouseOut() {
    this.el.nativeElement.classList.add('btn-info');
    this.el.nativeElement.classList.remove('btn-success');
  }
}
