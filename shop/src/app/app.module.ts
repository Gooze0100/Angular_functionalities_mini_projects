import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserOrdersComponent } from './users/user-orders/user-orders.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsComponent } from './catalog/products/products.component';
import { OrderProductComponent } from './catalog/products/order-product/order-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserOrdersComponent,
    AddUserComponent,
    CatalogComponent,
    ProductsComponent,
    OrderProductComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
