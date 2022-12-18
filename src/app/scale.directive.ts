import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { elementAt } from 'rxjs';

/**
 * Scale up any element
 *
 */
@Directive({
  selector: '[appScale]',
})
export class ScaleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  element = this.el.nativeElement;
  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.element, 'transform', 'scale(102%)');
    this.renderer.setStyle(this.element, 'transition', 'all 0.2s ease-out');
  }
  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.element, 'transform', 'scale(100%)');
  }
}
