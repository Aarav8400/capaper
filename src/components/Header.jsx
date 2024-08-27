import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" mx-auto bg-red-500 p-5 w-full">
      <nav className="w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <img src="/public/logo.png" alt="" className="w-16" />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-poppins">
              CA Test Series
            </span>
          </a>
          <div className="w-full md:w-auto">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium text-[17px]">
              <li>
                <Link
                  to="/"
                  className=" md:bg-transparent text-white font-medium text-[17px] block pl-3 pr-4 py-2 md:p-0 rounded "
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  Test Series
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  Lectures
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  Syllabus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  Fees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  Forums
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-[17px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                >
                  register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
