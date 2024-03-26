import { useLoaderData } from "react-router-dom";
import {
  getFromLocalStorage,
  getWishFromLocalStorage,
} from "../Utility/LocalStorage";

const ListedBooks = () => {
  const targetReadBooks = [];
  const targetWishBooks = [];
  const allReadBooks = getFromLocalStorage();
  const allWishBooks = getWishFromLocalStorage();
  const allBooks = useLoaderData();
  for (const readBook of allReadBooks) {
    const targetBooks = allBooks.find(
      (book) => parseInt(book.bookId) === parseInt(readBook)
    );
    if (targetBooks) {
      targetReadBooks.push(targetBooks);
    }
  }
  for (const wishBook of allWishBooks) {
    const targetBooks = allBooks.find(
      (book) => parseInt(book.bookId) === parseInt(wishBook)
    );
    if (targetBooks) {
      targetWishBooks.push(targetBooks);
    }
  }
  console.log(targetReadBooks, targetWishBooks);
  return (
    <div className="">
      <h2>This is listed book area</h2>
    </div>
  );
};

export default ListedBooks;
