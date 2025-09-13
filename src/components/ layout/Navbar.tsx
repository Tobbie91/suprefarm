import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { to: "/", label: "Home", type: "route" as const },
  { to: "/about", label: "About us", type: "route" as const },
  { to: "/what-we-do", label: "What we do", type: "route" as const },
  { to: "/projects", label: "Projects", type: "route" as const },
  { to: "/work-with-us", label: "How it works", type: "route" as const },
  { to: "/contact", label: "Contact", type: "route" as const },
];

const SIGN_IN_URL = "https://suprefarmapp.netlify.app/login";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "px-3 py-2 rounded-md transition-all duration-200 hover:bg-green-100 hover:text-green-700";
  const activeLink = "bg-green-600 text-white shadow-sm";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <nav className="container mx-auto max-w-7xl flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-green-700 text-lg">
          Suprefarm
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Sign in (external) */}
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700 transition"
            aria-label="Sign in to Suprefarm"
          >
            Sign in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-2">
            {navItems.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? "bg-green-600 text-white" : "hover:bg-green-100"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Sign in (mobile) */}
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700 transition"
              onClick={() => setOpen(false)}
              aria-label="Sign in to Suprefarm"
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
