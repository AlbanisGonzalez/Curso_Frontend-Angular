import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepo: Repository<Book>
    ){}

    findAll(): Promise<Book[]> {
        return this.bookRepo.find();
    }

    findById(id: number): Promise<Book | null> {
        return this.bookRepo.findOneBy({ id })
    }

}
