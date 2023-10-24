import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontWeight]'
})
export class FontWeightDirective {
  public weight = 'bold';
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-weight',
      this.weight
    )
  }
}
