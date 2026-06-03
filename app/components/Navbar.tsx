"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  return (
    <nav className="bg-[#CFE8F7] shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-[85px]">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={50}
              className="hover:scale-105 transition duration-300"
            />
          </Link>


          {/* Center Menu */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium text-[#1F2937]">

            <Link
              href="/Calligraphy"
              className="hover:text-[#8A2D4F] transition duration-300"
            >
              Calligraphy
            </Link>
            {/* Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)} >
              <button className="flex items-center gap-1 hover:text-[#8A2D4F] transition duration-300">
                Canvas
                {/* <span className="text-xs">▼</span> */}
              {/* </button> */}
              {/* {dropdownOpen && (

                <div className="absolute top-12 left-0 w-52 bg-[#F5F5F5] rounded-xl shadow-xl py-3 border">

                  <Link
                    href="/products/men"
                    className="block px-4 py-2 hover:text-[#8A2D4F] transition"
                  >
                    Men
                  </Link>

                  <Link
                    href="/products/women"
                    className="block px-4 py-2 hover:text-[#8A2D4F] transition"
                  >
                    Women
                  </Link>

                  <Link
                    href="/products/kids"
                    className="block px-4 py-2 hover:text-[#8A2D4F]  transition"
                  >
                    Kids
                  </Link>

                </div>

              )} */}
            {/* </div> */} 
             <Link
              href="/Canvas"
               className="hover:text-[#8A2D4F] transition duration-300">
              Canvas
            </Link>
            <Link
              href="/Arirang"
               className="hover:text-[#8A2D4F] transition duration-300"
            >
              Arirang
            </Link>


            <Link
              href="/Bouquet"
              className="hover:text-[#8A2D4F] transition duration-300"
            >
              Bouquet
            </Link>

             <Link
              href="/DIY"
              className="hover:text-[#8A2D4F] transition duration-300"
            >
            DIY
            </Link>

          </div>

          {/* WhatsApp */}
          <div className="hidden md:block">
            <WhatsAppButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-[#1F2937]"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <div className="md:hidden mt-3 bg-[#2F2F2F] rounded-xl p-5 space-y-4 text-[#1F2937]">

            <Link
              href="/Calligraphy"
              className="block hover:text-[#8A2D4F] transition"
            >
              Calligraphy
            </Link>


            <Link
              href="/Canvas"
              className="block hover:text-[#8A2D4F] transition"
            >
              Canvas
            </Link>

            <Link
              href="/Arirang"
              className="block hover:text-[#8A2D4F] transition"
            >
              Arirang
            </Link>


            <Link
              href="/Bouquet"
              className="block hover:text-[#8A2D4F] transition"
            >
              Bouquet
            </Link>
            <Link
              href="/DIY"
              className="block hover:text-[#8A2D4F] transition"
            >
              DIY
            </Link>

            <div className="pt-2">
              <WhatsAppButton />
            </div>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;