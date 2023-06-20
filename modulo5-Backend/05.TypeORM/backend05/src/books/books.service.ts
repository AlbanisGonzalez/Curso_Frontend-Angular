import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepo: Repository<Book>
    ) { }

    findAll(): Promise<Book[]> {
        return this.bookRepo.find();
    }

    findById(id: number): Promise<Book | null> {
        console.log(id);
        return this.bookRepo.findOne({
            where: {
                id: id
            }
        });
    }
    findAllByTitleEquals(title: string) : Promise <Book[]>{
        console.log(title);
       return this.bookRepo.find({
            where:{
                title: title
            }
        });
    }
}
