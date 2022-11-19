
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import './Books.css'


const Books = () => {
  const loadedBooks = useLoaderData();
  const books = loadedBooks.books;

  return (
    <div className="books-container">
      {
        books.map(book => <Book
          book={book}
        key={book.isbn13}
        ></Book>)
      }
    </div>
  );
};

export default Books;
