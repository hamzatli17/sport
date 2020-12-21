import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTableColor]'
})
export class TableColorDirective {

  constructor(private el: ElementRef) {
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  changeColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
