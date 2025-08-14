import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
        <div className="hidden md:flex gap-1 text-sm font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/what-we-do"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            What we do
          </NavLink>
          <NavLink
            to="/where-we-work"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Where we work
          </NavLink>
          <NavLink
            to="/stories"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Stories
          </NavLink>
          <NavLink
            to="/work-with-us"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Work with us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-2">
            {[
              { to: "/about", label: "About us" },
              { to: "/what-we-do", label: "What we do" },
              { to: "/where-we-work", label: "Where we work" },
              { to: "/stories", label: "Stories" },
              { to: "/work-with-us", label: "Work with us" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
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
          </div>
        </div>
      )}
    </header>
  );
}
