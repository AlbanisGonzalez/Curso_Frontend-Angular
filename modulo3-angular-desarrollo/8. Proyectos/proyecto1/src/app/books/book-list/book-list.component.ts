import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: IBook[] = [];

  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.bookService.findAll().subscribe(data => this.books = data);
  }
}


