import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleBook = ({ book }) => {
  const navigate = useNavigate();
  const { image, tags, author, bookName, category, rating, bookId } = book;
  return (
    <div
      onClick={() => navigate(`/book/${bookId}`)}
      className="card py-5 cursor-pointer"
    >
      <figure className="py-5 bg-gray-300 rounded-xl">
        <img src={image} alt="image" className="h-[300px]" />
      </figure>
      <div className=" pt-0 px-10">
        <div className="flex justify-between items-center">
          {tags.map((tag, idx) => (
            <p
              className="text-[#23BE0A] font-sans text-lg my-0 font-semibold"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <h2 className="card-title font-bold font-play text-xl lg:text-2xl">
          {bookName}
        </h2>
        <p className="text-lg text-[#131313CC] font-semibold font-sans">
          By: {author}
        </p>
        <hr className="border-[#13131326] border-dashed mt-6" />
        <div className="flex justify-between items-center">
          <p className="text-lg text-[#131313CC] font-semibold font-sans">
            {category}
          </p>
          <p className="text-lg text-[#131313CC] font-semibold font-sans">
            {rating} <FaRegStar />
          </p>
        </div>
      </div>
    </div>
  );
};
SingleBook.propTypes = {
  book: PropTypes.object.isRequired,
};
export default SingleBook;
