import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    sinopsis: new FormControl('', [Validators.maxLength(1000)]),
    releases: new FormControl(null, [Validators.required]),
    numPages: new FormControl(0, [Validators.min(30)]),
    price: new FormControl(0, [Validators.required, Validators.min(5), Validators.max(500)]),
    // photo: new FormControl(''),
    // authorId: new FormControl(null,[Validators.required])
  });
}
