import { Controller, Get } from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {
    //http:localhost:3000/book/
    @Get()
    findAll(): IBook[] {
        let book1: IBook = {
            id: 1,
            title: 'Libro1',
            price: 29.99,
        };
        let book2: IBook = {
            id: 2,
            title: 'Libro2',
            price: 29.99,
        };
        return [book1, book2]
    }
}
