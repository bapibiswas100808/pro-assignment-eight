import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getFromLocalStorage,
  getWishFromLocalStorage,
  removeFromWishList,
  saveToLocalStorage,
  saveWishToLocalStorage,
} from "../Utility/LocalStorage";

const BookDetails = () => {
  const { bookId } = useParams();
  const allBookFromList = useLoaderData();
  const targetBook = allBookFromList.find(
    (book) => book.bookId === parseInt(bookId)
  );
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = targetBook;
  const handleRead = () => {
    const wishData = getWishFromLocalStorage();
    const wishId = wishData.find(
      (dataId) => parseInt(dataId) === parseInt(bookId)
    );
    removeFromWishList(wishId);
    const readData = getFromLocalStorage();
    const isExists = readData.find(
      (data) => parseInt(data) === parseInt(bookId)
    );
    if (!isExists) {
      saveToLocalStorage(bookId);
      toast.success("You Successfully added to the read list");
    } else {
      toast.error("This Book is already added to Read list");
    }
  };
  const handleWish = () => {
    const allReadData = getFromLocalStorage();
    const isExists = allReadData.find(
      (data) => parseInt(data) === parseInt(bookId)
    );
    if (!isExists) {
      const wishData = getWishFromLocalStorage();
      const isWishExists = wishData.find(
        (data) => parseInt(data) === parseInt(bookId)
      );
      if (!isWishExists) {
        saveWishToLocalStorage(bookId);
        toast.success("You Successfully added to the wish list");
      } else {
        toast.error("This Book is already added to wish list");
      }
    } else {
      toast.error("This book is already added to Read list");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-5 gap-5 lg:gap-10 px-4 lg:px-0 mb-12">
      <div className="w-full flex justify-center items-center bg-gray-300 rounded-lg">
        <img
          className="max-h-[300px] lg:max-h-[700px] py-10 lg:py-0"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h2 className="font-play text-2xl lg:text-4xl font-bold">{bookName}</h2>
        <p className="text-[#131313CC] font-semibold text-lg font-sans">
          By: {author}
        </p>
        <hr className="border-[#8f8d8db3] border-dashed" />
        <p className="text-[#131313CC] font-semibold text-lg font-sans">
          {category}
        </p>
        <hr className="border-[#8f8d8db3] border-dashed" />
        <p className="text-[#131313CC] font-semibold text-md font-sans">
          <span className="text-xl font-bold">Review:</span> {review}
        </p>
        <div className="flex gap-8 items-center">
          <p className="text-[#131313] font-sans text-md font-bold">Tag:</p>
          {tags.map((tag, idx) => (
            <p
              className="text-[#23BE0A] font-sans text-lg my-0 font-semibold"
              key={idx}
            >
              #{tag}
            </p>
          ))}
        </div>
        <hr className="border-[#8f8d8db3] border-dashed" />
        <div>
          <div className="flex items-center justify-between max-w-full lg:max-w-[300px]">
            <p className="font-sans text-[#131313B3] text-md font-semibold">
              Number of Pages:
            </p>
            <p className="font-bold font-sans text-md">{totalPages}</p>
          </div>
          <div className="flex items-center justify-between max-w-full lg:max-w-[300px]">
            <p className="font-sans text-[#131313B3] text-md font-semibold">
              Publisher:
            </p>
            <p className="font-bold font-sans text-md">{publisher}</p>
          </div>
          <div className="flex items-center justify-between max-w-full lg:max-w-[300px]">
            <p className="font-sans text-[#131313B3] text-md font-semibold">
              Year of Publishing:
            </p>
            <p className="font-bold font-sans text-md">{yearOfPublishing}</p>
          </div>
          <div className="flex items-center justify-between max-w-full lg:max-w-[300px]">
            <p className="font-sans text-[#131313B3] text-md font-semibold">
              Rating:
            </p>
            <p className="font-bold font-sans text-md">{rating}</p>
          </div>
        </div>
        <button
          onClick={handleRead}
          className="mr-5 px-4 py-3 rounded-lg border-1 border-[#f3f3f3] bg-[#23BE0A] text-white font-sans text-lg font-semibold mt-5 cursor-pointer hover:bg-transparent hover:text-[#23BE0A] "
        >
          Read
        </button>
        <button
          onClick={handleWish}
          className=" px-4 py-3 rounded-lg border-0 bg-[#50B1C9] text-white font-sans text-lg font-semibold cursor-pointer hover:bg-red-400"
        >
          Wishlist
        </button>
      </div>
      <div>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default BookDetails;
