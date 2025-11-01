

import React from "react";

function BookList({ books, onUpdate, onDelete }) {
  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="6">No books found.</td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.publisher}</td>
                <td>₹{book.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => onUpdate(book)}>Edit</button>
                  <button onClick={() => onDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
