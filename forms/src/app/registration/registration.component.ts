import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor() {}
  @ViewChild('form') regForm: NgForm;
  ngOnInit(): void {}

  user: {
    name: string;
    email: string;
    age: number;
    password: string;
    gender: string;
  };

  onSubmit(form: NgForm) {
    this.user = {
      name: this.regForm.value.name,
      email: this.regForm.value.email,
      age: this.regForm.value.age,
      password: this.regForm.value.password,
      gender: this.regForm.value.gender,
    };
    this.regForm.reset();
  }

  randomPassword() {
    this.regForm.form.patchValue({
      password: Math.random() * 100000,
    });
  }
}
