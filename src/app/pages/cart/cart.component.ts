import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'Snickers',
      price: 150,
      quantity: 1,
      _id: '101'
    }]
  }
  dataSource: CartItem[] = []
  displayedColumns: string[] = [
    'product', 'name', 'price', 'quantity', 'total', 'action'
  ]

  ngOnInit() {
    this.dataSource = this.cart.items
  }

  getTotal(items: CartItem[]): number {
    return items.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr , 0)
  }
}
