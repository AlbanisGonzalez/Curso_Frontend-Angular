import { BookService } from './../services/book.service';
import { Component } from '@angular/core';
import { IBook } from '../models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book: IBook | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private BookService: BookService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.BookService.findById(id).subscribe(data => this.book = data);
    });
  }

}
