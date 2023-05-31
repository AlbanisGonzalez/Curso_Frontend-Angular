import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
interface ICompany {
  id: number,
  name: string;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  hobbies: string[] = ['sports', 'music', 'travel'];
  companies: ICompany[] = [
    { id: 1, name: "Axpe" },
    { id: 2, name: "Softex" },
    { id: 3, name: "Santander" },
    { id: 4, name: "Securitas" },

  ];
  hide = true;
  minBirthday = new Date(1910, 0, 1);
  maxBirthday = new Date(2005, 0, 1);
  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    salary: new FormControl(null, [Validators.min(16500), Validators.max(100000)]),
    // Radio
    department: new FormControl('', [Validators.required]),
    // Select
    company: new FormControl('', [Validators.required]),
    // select Multiple
    hobbies: new FormControl([]),

    city: new FormControl(''),
    postalCode: new FormControl([Validators.pattern('^[0-9]{5}$')]),
    // Datepicker
    birthday: new FormControl(null),
    jobStartDate: new FormControl(null),
    jobEndDate: new FormControl(null)



    // Password con opción de ver contraseña
    // Varios campos en la misma línea
    // Formato númerico
    // Stepper
    // Chips
    // autocomplete
    // Sidle toggle
    // Slider

  });

  save(): void {

  }
}
