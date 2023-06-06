import { BookService } from './../services/book.service';
import { Component } from '@angular/core';
import { IBook } from '../models/book.model';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from 'src/app/authors/models/author.model';
import { AuthorService } from 'src/app/authors/services/author.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book: IBook | undefined;
  author: IAuthor | undefined;

  constructor(private activatedRoute: ActivatedRoute,
                private BookService: BookService,
                private authorService: AuthorService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.BookService.findById(id).subscribe(data => {
        this.book = data;
        if (!(this.book.authorId > 0)) return;

        this.authorService.findById(this.book.authorId).subscribe(data => this.author = data)
      });
    });
  }
}
