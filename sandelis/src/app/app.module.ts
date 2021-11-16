import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ProductsComponent } from './warehouse/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
