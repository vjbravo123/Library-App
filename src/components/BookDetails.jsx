import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return (
      <div className="p-4">
        <p className="text-red-600">Book not found.</p>
        <Link to="/books" className="text-blue-600">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-white">
  {book.image && (
    <img
      src={book.image}
      alt={book.title}
      className="h-64 w-full object-cover rounded mb-4"
    />
  )}
  <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
  <p className="italic mb-2">by {book.author}</p>
  <p>{book.description}</p>
  <p className="mt-2">⭐ {book.rating}</p>
  <Link to="/books" className="text-blue-600 block mt-4">
    Back to Browse
  </Link>
</div>

  );
}
