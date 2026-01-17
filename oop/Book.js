
export class Book {

    constructor(name, author, year) {
        this._name = name
        this._author = author
        this._year = year
    }

    set name(name) {
        if (typeof name === "string" && name.length > 0)
            this._name = name
        else
            throw new Error("Name is empty or not a string")
    }

    get name() {
        return this._name
    }

    set author(author) {
        if (typeof author === "string" && author.length > 0)
            this._author = author
        else
            throw new Error("Author is empty or not a string")
    }

    get author() {
        return this._author
    }

    set year(year) {
        if (year >= 1900)
            this._year = year
        else
            throw new Error("Book is too old")
    }

    get year() {
        return this._year
    }


    static getOldestBook(books) {

        let oldestBookIndex
        let oldestYear
        for (let i = 0; i < books.length; i++) {

            if (i == 0 || books[i].year < oldestYear) {
                oldestYear = books[i].year
                oldestBookIndex = i
            }
        }

        return books[oldestBookIndex]
    }

    printInfo() {
        console.log(`${this.name} — ${this.author}, ${this.year}`)
    }
}
