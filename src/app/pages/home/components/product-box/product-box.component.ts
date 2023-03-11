import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false

  product: Product = {
    _id: '101',
    title: 'Snickers',
    price: 150,
    category: 'shoes',
    description: 'Description',
    img: 'https://via.placeholder.com/150'
  }

  @Output() addToCart = new EventEmitter()

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
