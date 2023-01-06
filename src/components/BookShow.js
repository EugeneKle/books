import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdite, setShowEdite] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const hadleEditClick = () => {
    setShowEdite(!showEdite);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdite(false);
    onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdite) {
    content = (
      <BookEdit book={book} onSubmit={handleSubmit} />
    );
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      {content}
      <div className="actions">
        <button className="edit" onClick={hadleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
