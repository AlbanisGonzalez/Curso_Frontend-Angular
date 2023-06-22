import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [DatabaseModule, BooksModule, AuthorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
