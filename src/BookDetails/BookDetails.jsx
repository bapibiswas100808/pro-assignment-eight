import { useLoaderData, useParams } from "react-router-dom";

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
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-5 gap-5 lg:gap-10 px-3 lg:px-0 mb-12">
      <div className="w-full flex justify-center items-center bg-gray-300 rounded-lg">
        <img className="max-h-[300px] py-10 lg:py-0" src={image} alt="" />
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
        <button className="mr-5 px-4 py-3 rounded-lg border-0 bg-green-500 text-white font-sans text-lg font-semibold mt-5">
          Read
        </button>
        <button className=" px-4 py-3 rounded-lg border-0 bg-green-500 text-white font-sans text-lg font-semibold">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
