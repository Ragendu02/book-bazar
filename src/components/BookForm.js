import React, { useState } from "react";

function BookForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    publisher: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.price)
      return alert("Please fill all required fields!");
    onAdd(form);
    setForm({ title: "", author: "", genre: "", publisher: "", price: "" });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} />
      <input name="publisher" placeholder="Publisher" value={form.publisher} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
