let books = [
  {
    title: "The Blunder Games",
    author: "Suzanne Cole",
    year: 2024,
    pages: 5,
    id: 1
  },
  {
    title: "asdfasdf",
    author: "asdfasdf",
    year: 2010,
    pages: 10,
    id: 2 
  }
];
let currentId = 2;

class Book {
  constructor(params) {
    Object.assign(this,params);//(target,source)
  }

  static addBook(newBook) {
    newBook.id = currentId;
    currentId++;
    books.push(newBook)
    return newBook;
  }

  static removeAll() {
    books = [];
  }

  static remove(bookIdToRemove) {
    books = books.filter((book=>book.id != bookIdToRemove))
  }

  static getBook(bookId) {
    return books.find((book=>book.id == bookId))
  }

  static getAll() {
    return books
  }

  static updateBook(updatedBook) {
    let book = books.find((book=>book.id == updatedBook.id))
    Object.assign(book, updatedBook);
    return book;
  }
} 

//Exports the Book for use elsewhere.
module.exports = Book;
