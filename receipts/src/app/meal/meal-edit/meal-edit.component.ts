import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataReceipts } from 'src/app/data.service';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css'],
})
export class MealEditComponent implements OnInit {
  receipts;
  id;
  meal;

  constructor(
    private route: ActivatedRoute,
    private dataReceipts: DataReceipts,
    private router: Router
  ) {}

  edit(description, proteins, carbs, fat, calories) {
    this.meal.description = description.value;
    this.meal.proteins = proteins.value;
    this.meal.carbs = carbs.value;
    this.meal.fat = fat.value;
    this.meal.calories = calories.value;

    this.router.navigate(['/meal', this.id]);
  }

  addIngredient() {}

  ngOnInit(): void {
    this.receipts = this.dataReceipts.receipts;
    this.id = this.route.snapshot.params['id'];
    this.meal = this.receipts[this.id];
  }
}
