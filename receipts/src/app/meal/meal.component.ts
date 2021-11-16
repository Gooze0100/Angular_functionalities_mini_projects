import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataReceipts } from '../data.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit {
  id;
  receipts;
  meal;

  constructor(
    private route: ActivatedRoute,
    private dataReceipts: DataReceipts
  ) {}

  ngOnInit(): void {
    this.receipts = this.dataReceipts.receipts;
    this.id = this.route.snapshot.params['id'];
    this.meal = this.receipts[this.id];
  }
}
