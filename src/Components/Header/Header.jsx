import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            {/* You can add a logo here */}
          </Link>

          {/* Sign In and Sign Up buttons */}
          <div className="flex items-center lg:order-2">
            <Link
              to="/SignIn"
              className="text-gray-800 duration-200 hover:bg-orange-700 hover:text-white border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Sign In
            </Link>
            <Link
              to="/SignUp"
              className="text-white bg-orange-700 duration-200 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign Up
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
