import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {
    books: any;
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
    // findById http://localhost:3000/books/1
    /* @Get(':id')
     findById(@Param('id') id: string): IBook {
         console.log(typeof (id));
         return {
             id: parseInt(id, 10),
             title: 'Book',
             price: 30.0
         }
     }*/
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook {
        console.log(typeof (id));
        return {
            id: id,
            title: 'Book',
            price: 30.0
        }
    }
}
