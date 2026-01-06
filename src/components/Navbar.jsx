import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
    { name: "Contact", path: "/contact" },
  ];

  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 10);
      }
    };
    const el = containerRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="h-88 md:h-64 overflow-y-scroll">
      <div className="h-[500px]" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/90 shadow-md backdrop-blur-lg text-gray-800"
            : "bg-indigo-600 text-white"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 py-3">

          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wide">
            Shop<span className="text-yellow-400">X</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className="relative font-medium hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:block w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full text-sm text-gray-700 focus:outline-none"
            />
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-6">
            {/* Cart */}
            <div className="relative cursor-pointer">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Account */}
            <FaUser size={18} className="cursor-pointer" />

            <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>☰</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-gray-800 md:hidden transition-transform duration-500
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-full w-64"
          />

          <button className="bg-black text-white px-8 py-2 rounded-full">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
