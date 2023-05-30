import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),


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
