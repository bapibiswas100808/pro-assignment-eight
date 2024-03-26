import PropTypes from "prop-types";
import SingleBook from "../SingleBook/SingleBook";
const Book = ({ allBooks }) => {
  return (
    <div className="my-10 lg:my-20">
      <h2 className="text-4xl font-play text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allBooks.map((book) => (
          <SingleBook key={book.bookId} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

Book.propTypes = {
  allBooks: PropTypes.array.isRequired,
};
export default Book;
