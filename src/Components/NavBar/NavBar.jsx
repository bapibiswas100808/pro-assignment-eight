import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center mb-5 lg:mb-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white rounded-box w-52 "
          >
            <li>
              <NavLink className="no-underline" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="no-underline" to="/listed">
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink className="no-underline" to="/read">
                Pages To Read
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="text-xl lg:text-3xl font-bold font-play cursor-pointer">
          Book Store
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl">
            <NavLink to="/" className="no-underline text-[#131313CC] font-sans">
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/listed"
              className="no-underline text-[#131313CC] font-sans"
            >
              Listed Books
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/read"
              className="no-underline text-[#131313CC] font-sans"
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex lg:gap-3">
        <button className="bg-[#23BE0A] py-2 px-3 lg:px-4 text-white font-sans text-md lg:text-xl rounded-lg border-none mr-3 lg:mr-0">
          Sign In
        </button>
        <button className="bg-[#59C6D2] py-2 px-3 lg:px-4 text-white font-sans text-md lg:text-xl rounded-lg border-none">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
