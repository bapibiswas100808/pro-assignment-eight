import { useLoaderData } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  getFromLocalStorage,
  getWishFromLocalStorage,
} from "../Utility/LocalStorage";
import SingleSelectedBook from "../SingleSelectedBook/SingleSelectedBook";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [sortRead, setSortRead] = useState([]);
  const [sortWish, setSortWish] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const allBooks = useLoaderData();

  useEffect(() => {
    const targetReadBooks = [];
    const targetWishBooks = [];
    const allReadBooks = getFromLocalStorage();
    const allWishBooks = getWishFromLocalStorage();
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
    setSortRead(targetReadBooks);
    setSortWish(targetWishBooks);
  }, [allBooks]);
  const handleSortRating = () => {
    if (activeTab === 0) {
      const sortedData = [...sortRead].sort((a, b) => b.rating - a.rating);
      setSortRead(sortedData);
    } else {
      const sortedWishData = [...sortWish].sort((a, b) => b.rating - a.rating);
      setSortWish(sortedWishData);
    }
  };
  const handleSortPages = () => {
    if (activeTab === 0) {
      const sortedData = [...sortRead].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setSortRead(sortedData);
    } else {
      const sortedWishData = [...sortWish].sort(
        (a, b) => b.totalPages - a.totalPages
      );

      setSortWish(sortedWishData);
    }
  };
  const handleSortYear = () => {
    if (activeTab === 0) {
      const sortedData = [...sortRead].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setSortRead(sortedData);
    } else {
      const sortedWishData = [...sortWish].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );

      setSortWish(sortedWishData);
    }
  };

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
            <li onClick={handleSortRating}>
              <a>Rating</a>
            </li>
            <li onClick={handleSortPages}>
              <a>Number of Pages</a>
            </li>
            <li onClick={handleSortYear}>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="font-sans mt-10 lg:mt-0">
        <Tabs>
          <TabList>
            <Tab onClick={() => setActiveTab(0)}>Read Books</Tab>
            <Tab onClick={() => setActiveTab(1)}>Wishlist Book</Tab>
          </TabList>

          <TabPanel>
            <div className="space-y-5">
              {sortRead.map((book) => (
                <SingleSelectedBook
                  key={book.bookId}
                  book={book}
                ></SingleSelectedBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="space-y-5">
              {sortWish.map((book) => (
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
