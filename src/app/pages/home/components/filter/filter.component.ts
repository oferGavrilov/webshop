import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'filter',
  templateUrl: 'filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>()

  categoriesSubscription !: Subscription
  categories !: string[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(res => this.categories = res)
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe()
    }
  }
}
