import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Between, ILike, MoreThanOrEqual, Repository } from 'typeorm';

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
    findAllByTitleEquals(title: string): Promise<Book[]> {
        console.log(title);
        return this.bookRepo.find({
            where: {
                title: title // coincidencia exacta 
            }
        });
    }
    findAllByTitleLike(title: string): Promise<Book[]> {
        return this.bookRepo.find({
            where: {
                title: ILike(`%${title}%`) // que contenga una palabra 
            }
        });
    }
    findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Book[]> {
        console.log(minPrice);
        console.log(maxPrice);
        return this.bookRepo.find({
            where: {
                price: Between(minPrice, maxPrice) // que contenga una palabra 
            }
        });
    }

    // finAllByPublishedTrue
    findAllByPublishedTrue(): Promise<Book[]> {
        return this.bookRepo.find({
            where: {
                published: true
            }
        });
    }

    findAllByQuantityAndPrice(quantity: number, price: number): Promise<Book[]> {
        return this.bookRepo.find({
            where: {
                quantity: MoreThanOrEqual(quantity),
                price: MoreThanOrEqual(price)
            }
        });
    }
    // findAllOrderByPriceAsc
    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookRepo.find({
            order: {
                price: "ASC"
            }
        })
    }
    // create
    create(book: Book): Book {
        try {
            this.bookRepo.save(book);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar el mensaje')
        }
        return book;

    }
    async update(book: Book): Promise<Book> {
        let bookFromDB = await this.bookRepo.findOne({ 
            where: {
                id: book.id
            }
         });

         if(!bookFromDB) throw new NotFoundException('Libro no encontrado');

         try {
            bookFromDB.price = book.price;
            bookFromDB.published = book.published;
            bookFromDB.quantity = book.quantity;
            bookFromDB.title = book.title;
            await this.bookRepo.update(bookFromDB.id, bookFromDB);
            
            return bookFromDB;
         } catch (error) {
            throw new ConflictException('Error actualizando el libro');
         }
    }

}

