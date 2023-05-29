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
    email: new FormControl('', [Validators.required, Validators.email])
  });

  save(): void {
    if(this.userForm.valid) {
      console.log("Formulario correcto");
    } else {
      console.log("Formulario incorrecto, tiene errores de validación");
    }
    console.log(this.userForm.get('fullName'));
  }


}

