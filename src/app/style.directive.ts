import { Directive, HostBinding } from '@angular/core';
import { ColorDirective } from './color.directive';
import { FontWeightDirective } from './font-weight.directive';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {

  constructor(
    private colorDirective: ColorDirective,
    private fontweightDirective: FontWeightDirective
  ) {}

  @HostBinding('style.color') get color() {
    return this.colorDirective.color;
  }

  @HostBinding('style.font-weight') get fontWeight() {
    return this.fontweightDirective.weight;
  }

}
