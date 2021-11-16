import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataReceipts } from 'src/app/data.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent implements OnInit {
  receipts;
  id;
  meal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataReceipts: DataReceipts
  ) {}

  add(ingredientName, ingredientUnits, ingredientAmount) {
    if (
      ingredientName.value !== '' &&
      ingredientUnits.value !== '' &&
      ingredientAmount.value !== ''
    ) {
      this.meal.ingredients.push({
        name: ingredientName.value,
        units: ingredientUnits.value,
        amount: ingredientAmount.value,
      });
    }
    this.router.navigate(['/meal', this.id, 'edit']);
  }

  back() {
    this.router.navigate(['/meal', this.id, 'edit']);
  }

  ngOnInit(): void {
    this.receipts = this.dataReceipts.receipts;
    this.id = this.route.snapshot.params['id'];
    this.meal = this.receipts[this.id];
  }
}
