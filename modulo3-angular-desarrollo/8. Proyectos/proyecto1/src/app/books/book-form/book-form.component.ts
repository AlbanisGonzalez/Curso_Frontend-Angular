import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/authors/services/author.service';
import { IAuthor } from 'src/app/authors/models/author.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
/*
2. En HTML agregar un nuevo matformfield disabled que muestre id pero no lo edite
3. En save hacer la distinción de guardar o editar
4. en loadForm hay que cargar el id*/

export class BookFormComponent implements OnInit {

  bookForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    sinopsis: new FormControl('', [Validators.maxLength(1000)]),
    numPages: new FormControl(0, [Validators.min(30)]),
    price: new FormControl(0, [Validators.required, Validators.min(5), Validators.max(500), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")]),
    release: new FormControl(new Date()),
    authorId: new FormControl(0,[Validators.required])

    // // photo: new FormControl(''),
  });
  authors: IAuthor[] = [];

  constructor(
    private bookService: BookService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private authorService: AuthorService
    ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.bookService.findById(id).subscribe(book => this.loadBookForm(book));

    });

    // cargar los autores
    this.authorService.findAll().subscribe(data=> this.authors = data);
  }
  loadBookForm(book: IBook): void {

    this.bookForm.reset({
      id: book.id,
      title: book.title,
      numPages: book.numPages,
      price: book.price,
      release: book.release,
      authorId: book.authorId
    });
  }

  save(): void {
    let id = this.bookForm.get('id')?.value ?? 0;
    let title = this.bookForm.get('title')?.value ?? '';
    let sinopsis = this.bookForm.get('sinopsis')?.value ?? '';
    let numPages = this.bookForm.get('numPages')?.value ?? 30;
    let price = this.bookForm.get('price')?.value ?? 5;
    let release = this.bookForm.get('release')?.value ?? new Date();
    let photo = "http://dummyimage.com/192x100.png/dddddd/000000";
    let authorId = this.bookForm.get('authorId')?.value ?? 0;



    // TODO añadir validación extra de datos, si alguno está mal, hacer return y mostrar error y no guardar.
    let book: IBook = {
      id: id,
      title: title,
      sinopsis: sinopsis,
      release: release,
      numPages: numPages,
      photo: photo,
      price: price,
      authorId: authorId
    }
    if (id === 0)
      this.bookService.create(book).subscribe(book => this.router.navigate(['/books', book.id]));
    else
      this.bookService.update(book).subscribe(book => this.router.navigate(['/books', book.id]));

  }
}
