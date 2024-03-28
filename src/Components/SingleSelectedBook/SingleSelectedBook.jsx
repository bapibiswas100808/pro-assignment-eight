import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { MdPublish } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SingleSelectedBook = ({ book }) => {
  const navigate = useNavigate();
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div>
      <div className="card flex flex-col lg:flex-row gap-5">
        <div className="m-4 flex justify-center">
          <img
            src={image}
            alt="image"
            className="bg-gray-200 px-0 lg:px-5 py-5 lg:py-0 rounded-lg h-[300px]"
          />
        </div>
        <div className="text-center lg:text-left w-full space-y-0">
          <h2 className="text-2xl lg:text-3xl font-play mb-2">{bookName}</h2>
          <p className="text-lg font-sans pb-0">By: {author}</p>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-5 items-center">
            <p className="text-bold font-sans text-lg my-3">Tags:</p>
            {tags.map((tag, idx) => (
              <p
                className="font-semibold text-sm lg:text-lg text-[#23BE0A] font-sans my-3"
                key={idx}
              >
                #{tag}
              </p>
            ))}
            <p className="text-sans text-sm lg:text-lg font-semibold my-3">
              <CiLocationOn /> Year of Publishing:
              {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center lg:justify-normal">
            <p className="text-sm lg:text-lg font-sans text-[#13131399]">
              <MdPublish /> Publisher: {publisher}
            </p>
            <p className="text-sm lg:text-lg font-sans text-[#13131399]">
              <RiPagesLine /> Pages: {totalPages}
            </p>
          </div>
          <hr className="border-dashed border-[#13131326]" />
          <div className="flex items-center justify-center lg:justify-normal gap-5">
            <p className="bg-[#328EFF26] text-sm lg:text-lg font-sans px-2 lg:px-4 text-[#328EFF] rounded-2xl">
              Category: {category}
            </p>
            <p className="bg-[#eae73e58] text-sm lg:text-lg text-[#FFAC33] font-sans px-2 lg:px-4 rounded-2xl">
              Rating: {rating}
            </p>
            <button
              onClick={() => navigate(`/book/${bookId}`)}
              className="px-2 lg:px-4 py-1 text-sm lg:text-lg font-sans text-white hover:bg-red-500 border-0 bg-[#23BE0A] rounded-2xl"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleSelectedBook.propTypes = {
  book: PropTypes.object.isRequired,
};
export default SingleSelectedBook;
