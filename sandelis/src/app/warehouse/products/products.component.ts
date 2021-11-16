import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  pridetiVisible = false;
  @Input() products;
  @Output() orderEmitter = new EventEmitter<{ name: string }>();

  constructor() {}
  ngOnInit(): void {}

  order(name: string) {
    this.orderEmitter.emit({ name: name });
  }

  addProduct(
    inputPavadinimas: HTMLInputElement,
    inputKaina: HTMLInputElement,
    inputKiekis: HTMLInputElement,
    inputRezervuota: HTMLInputElement
  ) {
    this.products.push({
      name: inputPavadinimas.value,
      price: parseFloat(inputKaina.value),
      count: parseInt(inputKiekis.value),
      reserved: parseInt(inputRezervuota.value),
    });
    inputPavadinimas.value = '';
  }
}
