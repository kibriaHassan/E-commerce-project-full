import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/" },
    { name: "Contact", path: "/" },
    { name: "About", path: "/" },
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
      {/* Dummy scroll space */}
      <div className="h-[500px]" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 shadow-md backdrop-blur-lg text-gray-700 py-3 md:py-4"
            : "bg-indigo-500 text-white py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg
            className={`h-9 transition ${isScrolled ? "invert opacity-80" : ""}`}
            viewBox="0 0 157 40"
            fill="none"
          >
            {/* SVG PATH SAME AS YOUR CODE */}
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <span
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                }`}
              />
            </a>
          ))}

          <button
            className={`border px-4 py-1 text-sm rounded-full transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            New Launch
          </button>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <svg
            className={`h-6 w-6 transition ${
              isScrolled ? "invert" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <button
            className={`px-8 py-2.5 rounded-full transition ${
              isScrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <svg
            onClick={() => setIsMenuOpen(true)}
            className={`h-6 w-6 cursor-pointer ${
              isScrolled ? "invert" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 md:hidden transition-transform duration-500
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="border px-4 py-1 rounded-full">
            New Launch
          </button>

          <button className="bg-black text-white px-8 py-2.5 rounded-full">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
