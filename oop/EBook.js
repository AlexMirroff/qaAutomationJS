
import { Book } from "./Book.js"

export class EBook extends Book {

    constructor(name, author, year, fileFormat) {
        super(name, author, year)
        this._fileFormat = fileFormat
    }

    set fileFormat(fileFormat) {
        if (fileFormat === "PDF")
            this._fileFormat = fileFormat
        else
            throw new Error("Only PDF format is allowed")
    }

    get fileFormat() {
        return this._fileFormat
    }

    static createNewEBook(book, format) {
        return new EBook(book.name, book.author, book.year, format)
    }

    printInfo() {
        console.log(`${this.name} — ${this.author}, ${this.year} , format: ${this.fileFormat} `)
    }
}



