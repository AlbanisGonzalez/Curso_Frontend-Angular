import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) { }

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findById(@Param("id") id: number): Promise<Book | null> {
        return this.bookService.findById(id);
    }

    @Get('title-eq/:title')
    findAllByTitleEquals(@Param("title") title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleEquals(title);
    }

    @Get('title-like/:title')
    findAllByTitleLike(@Param('title') title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleLike(title);

    }
}