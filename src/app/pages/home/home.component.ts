import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit, OnDestroy {
  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined
  products!: Product[]
  sort = 'desc'
  count = '12'
  productSubscription !: Subscription
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productSubscription = this.productService.query(this.count, this.sort).subscribe(_products => this.products = _products)
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

  onAddToCart(newProduct: Product) {
    this.cartService.addToCart({
      product: newProduct.image,
      name: newProduct.title,
      price: newProduct.price,
      quantity: 1,
      _id: newProduct._id
    })
  }

  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString()
    this.getProducts()
  }

  onSortChange(newSort: string): void {
    this.sort = newSort
    this.getProducts()
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }
}
