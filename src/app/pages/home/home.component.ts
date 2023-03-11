import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined

  constructor(private cartService: CartService) { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

  onAddToCart(newProduct: Product) {
    this.cartService.addToCart({
      product: newProduct.img,
      name: newProduct.title,
      price: newProduct.price,
      quantity: 1,
      _id: newProduct._id
    })
  }
}
