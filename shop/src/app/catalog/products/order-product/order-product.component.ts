import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
})
export class OrderProductComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;
  users;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  order(user) {
    this.userService.order(user.value, this.productName, this.productPrice);
  }
}
