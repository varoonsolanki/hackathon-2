'use client'
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-900">
          <Link href="/">Hekto</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              className="text-pink-500 font-medium hover:text-pink-600 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Home
              <span className="ml-1">&#x25BE;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg py-2 w-40 border rounded-md">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Subpage 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Subpage 2
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/Pages"
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Pages
          </Link>
          <Link
            href="/products"
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Blog
          </Link>
          <Link
            href="/shop"
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Contact
          </Link>
        </div>

        {/* Search Icon */}
        <div className="hidden md:flex items-center">
          <button className="bg-pink-500 p-3 rounded-md hover:bg-pink-600 ">
            <FiSearch className="text-white text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-blue-900 text-xl"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link
              href="/"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Home
            </Link>
            <Link
              href="/pages"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Pages
            </Link>
            <Link
              href="/products"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
