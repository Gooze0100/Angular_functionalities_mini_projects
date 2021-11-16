import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [],
})
export class AddUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser(name, surname) {
    this.userService.addUser(name.value, surname.value);
  }
}
