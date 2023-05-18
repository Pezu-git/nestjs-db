import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { BooksController } from './books.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema }
    ])
  ],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [BooksService]
})
export class BooksModule { }
