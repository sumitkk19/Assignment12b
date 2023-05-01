import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customStyle]'
})
export class CustomStyleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
