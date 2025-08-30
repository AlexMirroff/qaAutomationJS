
//const Book = require('./Book')


class EBook extends Book {

    constructor(name, author, year, fileFormat) {
        super(name, author, year)
        this.fileFormat = fileFormat
    }

    printInfo() {
        console.log(`${this.name} — ${this.author}, ${this.year} , ${this.fileFormat} `)
    }
}





let ebook1 = new EBook("Harry Potter", "J.K. Rowling", 2001, "PDF");


ebook1.printInfo();


