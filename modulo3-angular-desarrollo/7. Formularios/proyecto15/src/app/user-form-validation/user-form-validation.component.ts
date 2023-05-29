import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent  {

  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    salary: new FormControl(null, [Validators.required, Validators.min(16500), Validators.max(100000)]),
    nif: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]),
    phone: new FormControl(null, [Validators.pattern('^[679]{1}[0-9]{8}$')])
  });

  save(): void {
    if(this.userForm.valid) {
      console.log("Formulario correcto");
    } else {
      console.log("Formulario incorrecto, tiene errores de validación");
    }
    console.log(this.userForm.get('nickName'));
  }


}

