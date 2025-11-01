import React, { useState } from "react";

function BookItem({ book, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState({ ...book });

  const handleChange = (e) => {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    onUpdate({ ...temp, price: Number(temp.price) });
    setEditing(false);
  };

  return (
    <div className="book-item">
      {editing ? (
        <>
          <input name="title" value={temp.title} onChange={handleChange} />
          <input name="author" value={temp.author} onChange={handleChange} />
          <input name="genre" value={temp.genre} onChange={handleChange} />
          <input name="publisher" value={temp.publisher} onChange={handleChange} />
          <input name="price" type="number" value={temp.price} onChange={handleChange} />
          <button onClick={saveChanges}>Save</button>
        </>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>
            <strong>{book.author}</strong><br />
            {book.genre && `${book.genre}, `}
            {book.publisher && `${book.publisher}`}<br />
            ₹{book.price}
          </p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default BookItem;
