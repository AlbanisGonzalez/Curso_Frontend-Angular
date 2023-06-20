import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from './books.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {

constructor (
    @InjectRepository(Book) private bookRepo: Repository<Book>
){}
    findAll():Promise<Book[]>{
        return this.bookRepo.find();
    }

}


