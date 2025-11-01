import './App.css';
import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  // ✅ Load and parse JSON data from books.txt
  useEffect(() => {
    fetch("/books.txt")
      .then((res) => res.text())
      .then((data) => {
        try {
          const parsed = JSON.parse(data); // parse JSON instead of splitting lines
          // Add IDs if they’re missing
          const booksWithIds = parsed.map((b, i) => ({ ...b, id: i + 1 }));
          setBooks(booksWithIds);
        } catch (err) {
          console.error("❌ Error parsing JSON file:", err);
        }
      })
      .catch((err) => console.error("❌ Error reading file:", err));
  }, []);

  // Add book
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  // Update book
  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  // Delete book
  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Bazaar</h1>
        <BookForm onAdd={addBook} />
        <BookList books={books} onUpdate={updateBook} onDelete={deleteBook} />
      </header>
    </div>
  );
}

export default App;
