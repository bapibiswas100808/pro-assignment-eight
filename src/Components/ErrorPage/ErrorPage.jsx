import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="py-10">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/TWmLvDS/404-error-3060993-1280.png"
            alt="error"
            className="max-h-[250px]"
          />
        </div>
        <div className="text-center">
          <h2 className=" text-red-500">Something Went Wrong!</h2>
          <p className="text-sans text-lg">
            Please Go Back To home & Try again
          </p>
          <Link to="/">
            <button className="btn bg-green-500 text-white hover:bg-red-500">
              Go Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
