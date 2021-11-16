import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-child',
  templateUrl: './register-child.component.html',
  styleUrls: ['./register-child.component.css'],
})
export class RegisterChildComponent implements OnInit {
  constructor() {}

  minYear = 2009;
  maxYear = 2003;

  ngOnInit(): void {}

  registration: {
    name: string;
    birthYear: number;
    email: string;
    phone: string;
    class: number;
    schoolsName: string;
    discountCode: string;
  };

  @ViewChild('form') registrationForm: NgForm;

  onSubmit(form: NgForm) {
    this.registration = {
      name: this.registrationForm.value.name,
      birthYear: this.registrationForm.value.birthYear,
      email: this.registrationForm.value.email,
      phone: this.registrationForm.value.phone,
      class: this.registrationForm.value.class,
      schoolsName: this.registrationForm.value.schoolsName,
      discountCode: this.registrationForm.value.discountCode,
    };
    this.registrationForm.reset();
  }
}
