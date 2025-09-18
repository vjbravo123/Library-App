import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to My Library 📚</h1>

      {/* Categories */}
      <section className="mb-6">
        <h2 className="text-xl mb-2">Categories</h2>
        <div className="flex gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${encodeURIComponent(cat)}`}
              className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books */}
      <section>
        <h2 className="text-xl mb-2">Popular Books</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <div key={b.id} className="p-4 border rounded bg-white">
              {b.image && (
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-40 w-full object-cover rounded mb-2"
                />
              )}
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-600">by {b.author}</p>
              <Link
                to={`/books/details/${b.id}`}
                className="text-blue-600 mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
