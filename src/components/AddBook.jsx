import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    rating: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (Object.values(form).some((v) => !v.trim())) {
      alert("Please fill all fields");
      return;
    }
    if (isNaN(Number(form.rating)) || Number(form.rating) < 0 || Number(form.rating) > 5) {
      alert("Rating must be a number between 0 and 5");
      return;
    }

    dispatch(addBook({ ...form, rating: Number(form.rating) }));
    navigate("/books");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Short description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
          rows={4}
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Other">Other</option>
        </select>
        <input
          name="rating"
          placeholder="Rating (0-5)"
          value={form.rating}
          onChange={handleChange}
          className="border p-2 w-full"
          type="number"
          step="0.1"
          min="0"
          max="5"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Add Book
        </button>
      </form>
    </div>
  );
}
  