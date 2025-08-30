
class Book {
    constructor(name, author, year) {
        this.name = name
        this.author = author
        this.year = year
    }

    printInfo() {
        console.log(`${this.name} — ${this.author}, ${this.year}`)
    }
}




let book1 = new Book("Harry Potter", "JJoanne Rowling", 2001)
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
let book3 = new Book("1984", "George Orwell", 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();

//module.exports = Book
