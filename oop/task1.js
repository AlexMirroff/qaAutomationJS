import { Book } from "./Book.js"
import { EBook } from "./EBook.js"

let book1 = new Book("Harry Potter", "JJoanne Rowling", 2001)
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937)
let book3 = new Book("1984", "George Orwell", 1949)

book1.printInfo()
book2.printInfo()
book3.printInfo()

let ebook1 = new EBook("Harry Potter", "J.K. Rowling", 2001, "PDF")

ebook1.printInfo();

console.log(Book.getOldestBook([book1, book2, book3, ebook1]))
console.log(EBook.createNewEBook(book1, "PDF"))
