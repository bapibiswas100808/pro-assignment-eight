import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around bg-[#F3F3F3] rounded-lg py-5 lg:py-20 ">
      <div className="w-full lg:max-w-[470px] text-center lg:text-left mb-5 lg:mb-0">
        <h2 className="font-play text-3xl lg:text-6xl">
          Books to freshen <br /> up your bookshelf
        </h2>
        <button
          onClick={() => navigate("/listed")}
          className="bg-[#23BE0A] px-4 py-2 rounded-lg border-none text-white text-sans text-xl cursor-pointer"
        >
          View The List
        </button>
      </div>
      <div className="w-full lg:w-[320px]">
        <img
          src="https://i.ibb.co/6gvD6vJ/pexels-ricky-esquivel-1907785.jpg"
          alt=""
          className="max-h-[400px] min-w-full lg:min-w-[320px]"
        />
      </div>
    </div>
  );
};

export default Banner;
