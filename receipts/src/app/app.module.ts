import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { MealComponent } from './meal/meal.component';
import { MealEditComponent } from './meal/meal-edit/meal-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './meal/meal-edit/add-ingredient/add-ingredient.component';

const appRoutes: Routes = [
  { path: '', component: ReceiptsComponent },
  { path: 'meal/:id', component: MealComponent },
  { path: 'meal/:id/edit', component: MealEditComponent },
  { path: 'meal/:id/edit/add', component: AddIngredientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ReceiptsComponent,
    MealComponent,
    MealEditComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
