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
           <Link href={'/'}>
           <button
              className="text-pink-500 font-medium hover:text-pink-600 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Home
              <span className="ml-1">&#x25BE;</span>
            </button>
           </Link>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg py-2 w-40 border rounded-md">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Subpage 1
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
           <Link href={'/'}>
           <button
              className="text-blue-900 font-medium hover:text-pink-600 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Pages
              <span className="ml-1">&#x25BE;</span>
            </button>
           </Link>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg py-2 w-40 border rounded-md">
                <Link
                  href={'/components/grid'}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 1
                </Link>
                <Link
                  href="/components/shoplist"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 2
                </Link>
                <Link
                  href="/components/shopleftsidebar"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 3
                </Link>
              </div>
            )}
          </div>
          <Link
            href={'/components/productdetail'}
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Products
          </Link>
          
          <div className="relative">
           <Link href={'/'}>
           <button
              className="text-blue-900 font-medium hover:text-pink-600 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Blog
              <span className="ml-1">&#x25BE;</span>
            </button>
           </Link>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg py-2 w-40 border rounded-md">
                <Link
                  href="/components/blogpage"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                   Blog Page 
                </Link>
                <Link
                  href={'/components/singleblog'}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Single Blog
                </Link>
              </div>
            )}
          </div>
          <Link
            href={'/components/shoppingcurt'}
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Shop
          </Link>
          <Link
            href={'/components/about'}
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            About
          </Link>
          <Link
            href={'/components/hektodemo'}
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Demo
          </Link>
          <Link
            href={'/components/myaccount'}
            className="text-blue-900 font-medium hover:text-pink-500"
          >
            Login
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
              href="/components/shoppingcurt"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Shop
            </Link>
            <Link
              href="/components/about"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              About
            </Link>
            <Link
              href="/components/hektodemo"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Demo
            </Link>
            <Link
              href="/components/myaccount"
              className="text-blue-900 font-medium hover:text-pink-500"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
