import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/Home";
import Browsebooks from "./components/Browsebooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

/** Layout that includes the NavBar and an Outlet for nested pages */
function Layout() {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        {/* Routes that show the NavBar */}
        <Route element={<Layout />}>
          {/* index route = "/" */}
          <Route index element={<Home />} />

          {/* Browse all books */}
          <Route path="books" element={<Browsebooks />} />
          {/* Browse by category (explicit) */}
          <Route path="books/:category" element={<Browsebooks />} />

          {/* Book details */}
          <Route path="books/details/:id" element={<BookDetails />} />

          {/* Add book */}
          <Route path="add" element={<AddBook />} />
        </Route>

        {/* 404 page (no NavBar) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
