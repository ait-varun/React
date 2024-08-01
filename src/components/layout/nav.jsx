import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-500 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold md:hidden">Your Logo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:w-auto w-full mt-4 md:mt-0`}>
        <div className="md:flex-grow">
          <span className="text-white font-bold mr-4 hidden md:inline-block">
            Your Logo
          </span>
          <Link
            to="/"
            className={({ isActive, isPending }) =>
              `block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4 ${
                isPending ? "pending" : isActive ? "active" : ""
              }`
            }>
            Home
          </Link>
          <Link
            to="/about"
            className={({ isActive, isPending }) =>
              `block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4 ${
                isPending ? "pending" : isActive ? "active" : ""
              }`
            }>
            About
          </Link>
          <Link
            to="/contact"
            className={({ isActive, isPending }) =>
              `block mt-4 md:inline-block md:mt-0 text-white hover:text-white ${
                isPending ? "pending" : isActive ? "active" : ""
              }`
            }>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
