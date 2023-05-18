import { Injectable, Scope } from '@nestjs/common';
import { Book, BookDocument } from './schemas/book.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, HydratedDocument, Model, QueryWithHelpers } from 'mongoose';
import { CreateBookDto } from './interfaces/dto/book.dto';
import { UpdateBookDto } from './interfaces/dto/update-book.dto';

@Injectable({
    scope: Scope.REQUEST
})
export class BooksService {
    constructor(
        @InjectModel(Book.name) private BookModel: Model<BookDocument>,
        @InjectConnection() private connection: Connection
    ) { }

    public getAll() {
        return this.BookModel.find().exec();
    }

    public getBook(id: string) {
        return this.BookModel.findOne({
            _id: id
        })
    }

    public create(data: CreateBookDto): Promise<BookDocument> {
        const book = new this.BookModel(data);

        return book.save();
    }

    public update(id: string, data: UpdateBookDto): Promise<BookDocument> {

        return this.BookModel.findOneAndUpdate(
            { _id: id },
            data
        )
    }

    public delete(id: string): Promise<BookDocument> {
        return this.BookModel.findOneAndRemove({ _id: id });
    }



}
