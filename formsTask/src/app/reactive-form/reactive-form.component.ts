import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  studForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.studForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(16),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(16),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      code: new FormControl(null, [this.evenNumber]),
    });
  }

  onSubmit() {
    console.log(this.studForm.value);
    console.log(this.studForm);
    if (
      this.studForm.value.firstName !== '' &&
      this.studForm.value.lastName !== '' &&
      this.studForm.value.email !== ''
    ) {
      this.studForm.reset();
    }
  }

  evenNumber(control: FormControl) {
    if (control.value % 2 !== 0) {
      return {
        codeNotValid: true,
      };
    }
    return null;
  }
}
