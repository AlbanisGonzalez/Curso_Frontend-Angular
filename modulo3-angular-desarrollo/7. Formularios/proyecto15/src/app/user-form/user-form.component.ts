import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
userForm = new FormGroup({
  email: new FormControl(''),
  fullName: new FormControl(''),
  age:new FormControl(''),
  salary:new FormControl(''),
  isStudent: new FormControl(true),
  birthday: new FormControl(),
  entryHour: new FormControl(),
  bookingDate: new FormControl(),
  jobCategory: new FormControl(),

});
save(): void {
  console.log(this.userForm.get('email')?.value);
  console.log(this.userForm.get('fullName')?.value);
  console.log(typeof this.userForm.get('age')?.value);
  console.log(this.userForm.get('salary')?.value);
  console.log(this.userForm.get('isStudent')?.value);
  console.log(typeof this.userForm.get('isStudent')?.value)
  console.log(this.userForm.get('birthday')?.value);
  console.log(this.userForm.get('entryHour')?.value);
  console.log(typeof this.userForm.get('bookingDate')?.value);
  console.log(this.userForm.get('jobCategory')?.value);




  this.userForm.reset();
}
}
