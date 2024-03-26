import { useLoaderData } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  getFromLocalStorage,
  getWishFromLocalStorage,
} from "../Utility/LocalStorage";
import SingleSelectedBook from "../SingleSelectedBook/SingleSelectedBook";

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
  return (
    <div className="mb-12">
      <h2 className="text-2xl lg:text-4xl font-play font-bold text-center bg-gray-200 py-5 rounded-lg">
        Books
      </h2>
      <div className="text-center">
        <details className="dropdown ">
          <summary className="m-1 btn bg-green-500 text-lg font-sans text-white hover:bg-red-500 px-5">
            Sort By <FaChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 text-lg font-sans">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="font-sans mt-10 lg:mt-0">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Book</Tab>
          </TabList>

          <TabPanel>
            <div className="space-y-5">
              {targetReadBooks.map((book) => (
                <SingleSelectedBook
                  key={book.bookId}
                  book={book}
                ></SingleSelectedBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="space-y-5">
              {targetWishBooks.map((book) => (
                <SingleSelectedBook
                  key={book.bookId}
                  book={book}
                ></SingleSelectedBook>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
