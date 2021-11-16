import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { warehouseData } from './warehouse.data';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css'],
})
export class WarehouseComponent implements OnInit {
  @ViewChild('categoryName', { static: true }) categoryInput: ElementRef;

  warehouseData = warehouseData;
  orders = [];

  constructor() {}
  ngOnInit(): void {}

  onOrder(order: { name: string }) {
    this.orders.push(order.name);
  }

  addCategory() {
    warehouseData.push({
      name: this.categoryInput.nativeElement.value,
      products: [],
    });
  }
}
