import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-black uppercase tracking-widest transition-all ${
      isActive
        ? "text-[#0052cc]"
        : "text-slate-600 hover:text-[#0052cc]"
    }`;

  const scrollToTests = () => {
    setIsMenuOpen(false);
    const element = document.getElementById("test-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-11 h-11 bg-[#0052cc] rounded-2xl text-white shadow-lg">
              <span className="material-symbols-outlined font-bold">
                biotech
              </span>
            </div>
            <span className="text-2xl font-black uppercase">
              Lab<span className="text-[#0052cc]">2</span>Door
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>

            <NavLink to="/plasma-donation" className={navLinkClass}>
              Plasma Donation
            </NavLink>

            <Link
              to="/#test-section"
              onClick={scrollToTests}
              className="text-sm font-black uppercase text-slate-600 hover:text-[#0052cc]"
            >
              Tests
            </Link>

            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            {/* ✅ NEW Contact Page */}
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-6 space-y-6">
          <NavLink onClick={() => setIsMenuOpen(false)} to="/" className="block text-sm font-black uppercase">Home</NavLink>

          <NavLink onClick={() => setIsMenuOpen(false)} to="/plasma-donation" className="block text-sm font-black uppercase text-red-500">
            Plasma Donation
          </NavLink>

          <Link onClick={scrollToTests} to="/#test-section" className="block text-sm font-black uppercase">
            Tests
          </Link>

          <NavLink onClick={() => setIsMenuOpen(false)} to="/about" className="block text-sm font-black uppercase">About</NavLink>

          {/* ✅ Contact in Mobile */}
          <NavLink onClick={() => setIsMenuOpen(false)} to="/contact" className="block text-sm font-black uppercase">
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
