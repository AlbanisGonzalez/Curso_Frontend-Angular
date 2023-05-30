import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  hide = true;
  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    salary: new FormControl(null, [Validators.min(16500), Validators.max(100000)])

      // Password con opción de ver contraseña
      // Varios campos en la misma línea
      // Formato númerico
      // Datepicker
      // Stepper
      // Radio
      // Chips
      // Select
      // autocomplete
      // Sidle toggle
      // Slider

  });

  save(): void{

  }
}
