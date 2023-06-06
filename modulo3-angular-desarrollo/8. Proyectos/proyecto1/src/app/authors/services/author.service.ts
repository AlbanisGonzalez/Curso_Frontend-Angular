import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url: string = "http://localhost:3000/authors";

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<IAuthor[]> {
    return this.httpClient.get<IAuthor[]>(this.url);
  }

  findById(id: number): Observable<IAuthor> {
    // https://jsonplaceholder.typicode.com/todos/4
    return this.httpClient.get<IAuthor>(`${this.url}/${id}`);
  }

  // create: Crear un nuevo objeto TODO Event en el servidor
  create(author:IAuthor): Observable<IAuthor> {
    return this.httpClient.post<IAuthor>(this.url, author);
  }


  // update
  update(author: IAuthor): Observable<IAuthor> {
    return this.httpClient.put<IAuthor>(`${this.url}/${author.id}`, event);
  }

  // deleteById
  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
