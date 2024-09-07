import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50 ">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-12"
            src="https://th.bing.com/th/id/OIP.Dy70nxVD0Xw0UuSd9HUdcAHaFj?w=260&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="logo"
          />
          <span className="text-xl font-bold ml-3">Job Portal</span>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`lg:flex space-x-8 items-center ${
            isMenuOpen ? "block" : "hidden"
          } lg:block absolute lg:static top-16 left-0 right-0 bg-black lg:bg-white lg:bg-transparent p-5 lg:p-0`}
        >
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base mb-3 lg:mb-0">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li><Link to="/login">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 lg:hidden transition">
              Login
            </button>
          </Link></li>
        </ul>
        <div
          className={`mt-4 lg:mt-0 lg:flex items-center space-x-5 hidden ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Link to="/login">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
