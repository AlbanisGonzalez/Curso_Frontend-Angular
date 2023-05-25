import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent  {

  userForm = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl('12600'),
    isStudent: new FormControl(true),
    birthday: new FormControl(null),
    entryHour: new FormControl(null),
    bookingDate: new FormControl(null),
    jobCategory: new FormControl(''),
    company: new FormControl(''), // Nota: no poner null ni dejarlo sin string
    hobbies: new FormControl([]), // selector multilple
    bio: new FormControl(''),
    avatar: new FormControl(), // archivo
  });

  save(): void {
    console.log(this.userForm.get('email')?.value);
    console.log(this.userForm.get('fullName')?.value);
    console.log(typeof this.userForm.get('age')?.value);
    console.log(this.userForm.get('salary')?.value);
    console.log(this.userForm.get('isStudent')?.value);
    console.log(typeof this.userForm.get('isStudent')?.value);
    console.log(this.userForm.get('birthday')?.value);
    console.log(this.userForm.get('entryHour')?.value);
    console.log(typeof this.userForm.get('bookingDate')?.value);
    console.log(this.userForm.get('jobCategory')?.value);
    console.log(this.userForm.get('company')?.value);
    console.log(this.userForm.get('bio')?.value);
    console.log(this.userForm.get('avatar')?.value);
    this.userForm.reset();
  }
  imageSrc: string | undefined;

  uploadFile(event: Event): void {
    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      let fileImg = target.files[0];
      //Opcional: mostrat la imagen al usuario
      let reader = new FileReader();
      reader.onload = ev=> this.imageSrc = reader.result as string; // Qué hacer cuando se lea la imagen
      reader.readAsDataURL(fileImg); // Leer la imagen
    }
  }
}

