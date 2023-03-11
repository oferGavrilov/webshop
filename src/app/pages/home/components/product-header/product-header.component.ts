import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-header',
  templateUrl: 'product-header.component.html',
})
export class ProductHeaderComponent implements OnInit {
  @Output()  columnsCountChange = new EventEmitter<number>()
  sort = 'desc'
  itemsShowCount = 12
  constructor() { }
  ngOnInit() { }

  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
