import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function Browsebooks() {
  const { category } = useParams(); // may be undefined
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  // decode category (in case it was encoded in URL)
  const decodedCategory = category ? decodeURIComponent(category) : null;

  const filtered = books.filter((b) => {
    const matchesCategory = decodedCategory ? b.category === decodedCategory : true;
    const searchLower = search.trim().toLowerCase();
    const matchesSearch =
      !searchLower ||
      b.title.toLowerCase().includes(searchLower) ||
      b.author.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Browse Books {decodedCategory ? `— ${decodedCategory}` : ""}
      </h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Books grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <p className="text-gray-600">No books found.</p>
        )}
        {filtered.map((book) => (
          <div key={book.id} className="p-4 border rounded bg-white">
            {book.image && (
              <img
                src={book.image}
                alt={book.title}
                className="h-40 w-full object-cover rounded mb-2"
              />
            )}
            <h3 className="font-bold">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="mt-2 text-sm line-clamp-3">{book.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <Link to={`/books/details/${book.id}`} className="text-blue-600">
                View Details
              </Link>
              <span className="text-sm">⭐ {book.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
