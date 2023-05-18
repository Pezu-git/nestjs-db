import { Controller, Post, Get, Put, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './interfaces/dto/book.dto';
import { UpdateBookDto } from './interfaces/dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Get()
    public getAll(): Promise<BookDocument[]> {
        return this.booksService.getAll();
    }

    @Get(':id')
    getBook(@Param('id') id: string): Promise<BookDocument> {
        return this.booksService.getBook(id)
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        this.booksService.create(createBookDto)
    }

    @Put(':id')
    public update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<BookDocument> {

        return this.booksService.update(id, updateBookDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string) {
        return this.booksService.delete(id)
    }
}
