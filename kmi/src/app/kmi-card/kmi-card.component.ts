import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi-card',
  templateUrl: './kmi-card.component.html',
  styleUrls: ['./kmi-card.component.css'],
})
export class KmiCardComponent implements OnInit {
  svoris: number = 0;
  ugis: number = 0;
  rezultatas: number = 0;

  constructor() {}
  ngOnInit(): void {}

  kmi() {
    this.rezultatas = this.svoris / Math.pow(this.ugis / 100, 2);
  }

  rezultatasAppear() {
    if (this.svoris <= 0 || this.ugis <= 0 || this.rezultatas <= 0) {
      return false;
    } else {
      return true;
    }
  }
}
