import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/authors/services/author.service';
import { BookService } from 'src/app/books/services/book.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {

  constructor( private authorService :AuthorService,
              private bookService: BookService,
              private ActivatedRoute: ActivatedRoute){}



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
