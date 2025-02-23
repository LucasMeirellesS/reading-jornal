import React, { createContext, useContext, useState, ReactNode} from "react";
import { Book, BookToUpdate } from "../interfaces/book.interface";



interface BooksContextType {
  books: Book[];
  bookToUpdate: Book | null;
  setBookToUpdate: (book: Book | null) => void;
  addBook: (newBook: Book) => void;
  deleteBook: (id: number) => void;
  updateBook: (newBook: BookToUpdate) => void;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookToUpdate, setBookToUpdate] = useState<Book | null>(null);

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (newBook: BookToUpdate) => {
    setBooks(books.map((book) => (book.id === newBook.id ? { ...book, ...newBook } : book)));
  }

  return (
    <BooksContext.Provider value={{ books, bookToUpdate, setBookToUpdate, addBook, deleteBook, updateBook}}>
      {children}
    </BooksContext.Provider>
  );
};


export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext deve ser usado dentro de um BooksProvider");
  }
  return context;
};

