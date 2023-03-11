import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] })

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items]
    const itemInCart = items.find(currItem => currItem._id === item._id)
    if (itemInCart) {
      itemInCart.quantity += 1
    } else {
      items.push(item)
    }
    this.cart.next({ items })
    this._snackBar.open('1 item added to cart. ', 'Ok', { duration: 3000 })
  }
  getTotal(items: CartItem[]): number {
    return items.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)
  }

  clearCart(): void {
    this.cart.next({ items: [] })
    this._snackBar.open('Cart is cleared. ', 'Ok', { duration: 3000 })
  }
}