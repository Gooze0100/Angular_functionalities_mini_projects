import { Component, OnInit } from '@angular/core';
import { CatalogService } from './../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  catalog;
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalog = this.catalogService.catalog;
  }
}
