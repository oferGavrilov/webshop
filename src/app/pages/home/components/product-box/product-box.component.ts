import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false

  @Input() product!: Product

  @Output() addToCart = new EventEmitter()

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
