import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staciakampio-plotas',
  templateUrl: './staciakampio-plotas.component.html',
  styleUrls: ['./staciakampio-plotas.component.css'],
})
export class StaciakampioPlotasComponent implements OnInit {
  plotis = 0;
  ilgis = 0;
  plotas = 0;
  constructor() {}

  skaiciuotiPlota() {
    this.plotas = this.ilgis * this.plotis;
  }

  ngOnInit(): void {}
}
