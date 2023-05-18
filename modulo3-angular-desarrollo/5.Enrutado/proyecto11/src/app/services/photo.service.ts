import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  url: string ="https://jsonplaceholder.typicode.com/photos";

//HtpClient
  constructor(private httpClient: HttpClient) { }

  //Observable sin HttResponse: Observable<IPhoto[]>
  findAll(): Observable<IPhoto[]>{
    return this.httpClient.get<IPhoto[]>(this.url);
  }

  //Observale<IPhoto>
  findById(id: number):Observable<IPhoto>{
    return this.httpClient.get<IPhoto>(`${this.url}/${id}`)
  }
}
