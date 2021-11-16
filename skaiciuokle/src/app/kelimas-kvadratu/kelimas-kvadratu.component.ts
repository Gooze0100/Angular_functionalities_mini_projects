import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelimas-kvadratu',
  templateUrl: './kelimas-kvadratu.component.html',
  styleUrls: ['./kelimas-kvadratu.component.css'],
})
export class KelimasKvadratuComponent implements OnInit {
  skaicius = 0;
  kvadratu = 0;

  constructor() {}
  ngOnInit(): void {}

  keltiKvadratu() {
    this.kvadratu = this.skaicius * this.skaicius;
  }
}
