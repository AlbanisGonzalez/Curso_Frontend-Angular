import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  [x: string]: any;
  url: string = "http://localhost:3000/books";

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.url);
  }

  findById(id: number): Observable<IBook> {
    // https://jsonplaceholder.typicode.com/todos/4
    return this.httpClient.get<IBook>(`${this.url}/${id}`);
  }
  findAllByAuthorId(authorId:number): Observable<IBook[]> {
    // https://jsonplaceholder.typicode.com/todos/4
    return this.httpClient.get<IBook[]>(`${this.url}?authorId=${authorId}`);
  }

  // create: Crear un nuevo objeto TODO Event en el servidor
  create(book:IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.url, book);
  }


  // update
  update(book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(`${this.url}/${book.id}`, event);
  }

  // deleteById
  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
