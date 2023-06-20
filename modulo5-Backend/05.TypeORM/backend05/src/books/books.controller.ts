import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {
    constructor (private bookService : BooksService){}
    @Get()
    findAll():Promise<Book[]>{
        return this.bookService.findAll();
    }
    
}
