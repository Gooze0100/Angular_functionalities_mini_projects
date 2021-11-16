import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[validationDiscount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidationNameDirective,
      multi: true,
    },
  ],
})
export class ValidationNameDirective implements Validator {
  constructor() {}

  validate(input: FormControl) {
    if (
      input.value === 'gamta2021-baltija' ||
      input.value === 'gamta2021-gintaras' ||
      input.value === 'gamta2021-vytauto'
    ) {
      return {
        promo: true,
      };
    }
    return null;
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
