import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx'; // Optional: for cleaner class toggling

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-customColor2/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          HYBRID
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {['services', 'offres', 'formations', 'apropos', 'contact'].map((route) => (
            <Link
              key={route}
              to={`/${route}`}
              className="text-xl font-semibold text-white hover:text-customColor transition-colors"
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-customColor2/95 backdrop-blur-sm px-6",
          isMenuOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {['services', 'offres', 'formations', 'apropos', 'contact'].map((route) => (
            <Link
              key={route}
              to={`/${route}`}
              className="text-lg text-white font-medium hover:text-customColor transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
