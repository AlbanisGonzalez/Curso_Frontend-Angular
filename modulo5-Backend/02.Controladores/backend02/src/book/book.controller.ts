import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
        console.log(typeof (id)); // number
        return {
            id: id,
            title: 'Book',
            price: 30.0
        }
    }

    // Post create() http://localhost:3000/books
    @Post()
    create(@Body() book: IBook): IBook {
        //guardar en base de datos
        book.id = 1;
        return book;
    }
    //Actualizar libro
    // Actualizar Put http://localhost:3000/books
    @Put()
    update(@Body() book: IBook): IBook {
        // Buscar y comprobar si existe el libro 

        if (true) // Si no hay libro no actualizamos 
            throw new NotFoundException('Book Not Found'); //404

        //Actualizar en base de datos 
        //book = this.bookService.save(book)...

        return book; //200 Ok
    }
    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number){
        if (true)
        throw new NotFoundException('Entity Book Not Found, cant update');
        try{
            //this.bookService.deleteById(id)
         } catch(error){
            throw new ConflictException('No se puede borrar el libro');
            }
        }
        //this.bookService.deleteById(id)
    }


