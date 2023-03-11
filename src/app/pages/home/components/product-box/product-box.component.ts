import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-box',
  templateUrl:'./product-box.component.html'
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false
}
