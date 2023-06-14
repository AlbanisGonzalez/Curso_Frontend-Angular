import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {

    // http://localhost:3000/books
    @Get()
    findAll(): IBook[] {
        let book1: IBook = {
            id: 1,
            title: 'Libro 1',
            price: 29.99,
        };
        let book2: IBook = {
            id: 2,
            title: 'Libro 2',
            price: 29.99,
        };
        return [book1, book2];
    }

    // findById http://localhost:3000/books/1
    /* @Get(':id')
    findById(@Param('id') id: string): IBook {
        console.log(typeof(id)); // string
        return {
            id: parseInt(id, 10),
            title: 'Book',
            price: 30.0
        }
    }*/
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook {
        console.log(typeof(id)); // number
        return {
            id: id,
            title: 'Book',
            price: 30.0
        }
    }

    // Post create() http://localhost:3000/books
    @Post()
    create(@Body() book: IBook): IBook {
        book.id = 1;
        return book;
    }


}
