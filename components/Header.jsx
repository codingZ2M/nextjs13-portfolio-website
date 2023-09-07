"use client"
import { useState } from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <div>
          <Link href="/" className="text-lg sm:text-2xl font-normal">
            Portfolio.
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className='w-6 h-6' />
            ) : (
              <AiOutlineMenu className='w-6 h-6'/>
            )}
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className={`hidden lg:flex space-x-4 text-sm`}>
          <Link href="https://github.com/codingZ2M"  target="_blank" className="hover:text-gray-500">
             Github
          </Link>
          <Link href="/" className="hover:text-gray-500">
            Resume
          </Link>
          <Link href="/" className="hover:text-gray-500">
            Blog
          </Link>
        </nav>

        {/* Mobile Navigation Menu */}
        <nav
          className={`md:hidden absolute top-16 right-0 w-3/4 shadow-md text-black  bg-white  p-4 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link href="/portfolio" className="block  py-2 hover:text-gray-500 ">
            Github
          </Link>
          <Link href="/services" className="block  py-2 hover:text-gray-500 ">
            Resume
          </Link>
          <Link href="/blog" className="block  py-2 hover:text-gray-500 ">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
