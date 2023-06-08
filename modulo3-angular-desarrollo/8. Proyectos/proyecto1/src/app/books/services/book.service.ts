import { IBook } from './../models/book.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

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
 // Opción 1
  // deleteById(id: number): Observable<{}> {
  //  return this.httpClient.delete(`${this.url}/${id}`);
  // }

  // Opción 2:
  httpOptions = {
    observe: 'response' as 'body'
  }
  deleteById(id: number): Observable<HttpResponse<{}>> {
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/${id}`, this.httpOptions);
  }
}
