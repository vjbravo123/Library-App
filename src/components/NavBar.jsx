import { NavLink } from "react-router-dom";

export default function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold underline"
      : "text-white/90 hover:text-white";

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
   
      <NavLink to="/" end className="font-bold text-lg">
        📚 Library
      </NavLink>

      <div className="flex items-center gap-6">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/books" className={linkClass}>
          Browse Books
        </NavLink>
        <NavLink to="/add" className={linkClass}>
          Add Book
        </NavLink>
      </div>
    </nav>
  );
}
