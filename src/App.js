import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks((prev) => [...prev, { title }]);
  };

  console.log(books);
  return (
    <div>
      <BookList />
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
