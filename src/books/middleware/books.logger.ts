import { Request, Response, NextFunction } from 'express'


export function logger(req: Request, res: Response, next: NextFunction) {
    if (req.route.methods.get) {
        if (req.params.id) {
            console.log(`Get book ${req.params.id}`)
        }
        else {
            console.log('Show all books')
        }
    }
    if (req.route.methods.post) {
        console.log('Create new book')
    }

    if (req.route.methods.put) {
        console.log('Update book')
    }

    if (req.route.methods.delete) {
        console.log('Delete book')
    }
    next();
}