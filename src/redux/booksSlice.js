import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel set in the Jazz Age.",
    category: "Fiction",
    rating: 4.5,
    image: "https://cdn.penguin.co.in/wp-content/uploads/2022/01/9780143454212.jpg",
  },
  {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description: "Understanding the universe and cosmology.",
    category: "Non-Fiction",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/81pQPZAFWbL.jpg",
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    description: "A landmark sci-fi novel about politics and desert planets.",
    category: "Sci-Fi",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about justice and racial inequality.",
    category: "Fiction",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300",
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "Exploring the history and impact of Homo sapiens.",
    category: "Non-Fiction",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=300",
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian story about surveillance and totalitarianism.",
    category: "Fiction",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300",
  },
  {
    id: 7,
    title: "Foundation",
    author: "Isaac Asimov",
    description: "Epic science fiction about the fall of a galactic empire.",
    category: "Sci-Fi",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300",
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir of resilience and self-education.",
    category: "Non-Fiction",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300",
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian classic about a controlled society.",
    category: "Sci-Fi",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300",
  },
  {
    id: 10,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A timeless romance novel about love and society.",
    category: "Fiction",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=300",
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.unshift({
        id: Date.now(),
        ...action.payload,
        image:
          action.payload.image ||
          "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=300",
      });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
