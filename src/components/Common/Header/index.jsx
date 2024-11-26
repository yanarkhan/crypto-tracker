import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/functions/data";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-black shadow-sm relative">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl text-white font-bold tracking-wide">
          Crypto<span className="text-blue">Tracker</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-4 items-center md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium transition-colors duration-300 hover:text-blue tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <div className="hidden md:block">
            <Button variant="default">
              <a href="/dashboard" className="tracking-wider">
                Dashboard
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="text-white focus:outline-none md:hidden transition-transform duration-300 ease-in-out transform active:scale-90"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-black hover:text-blue transition-colors duration-300 text-lg"
              onClick={toggleMobileMenu}
            >
              {link.name}
            </a>
          ))}

          <div className="mt-6">
            <Button asChild className="w-full">
              <a href="/dashboard">Dashboard</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
