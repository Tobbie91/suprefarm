import Container from "./Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-emerald-100">
      <Container className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-sm text-gray-600">
        {/* About */}
        <div className="md:pr-6 pl-6">
          <h3 className="font-semibold text-emerald-800 mb-2">Suprefarm</h3>
          <p className="max-w-xs">
            Community-based climate solutions and carbon removals. Join us in
            creating sustainable impact for farmers and the environment.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:px-6">
          <h3 className="font-semibold text-emerald-800 mb-2">Explore</h3>
          <nav className="grid grid-cols-2 gap-y-1.5 gap-x-6">
            <a href="/" className="hover:text-yellow-500">Home</a>
            <a href="/about" className="hover:text-yellow-500">About Us</a>
            <a href="/what-we-do" className="hover:text-yellow-500">What We Do</a>
            <a href="/how-it-works" className="hover:text-yellow-500">How It Works</a>
            <a href="/impact" className="hover:text-yellow-500">Impact Counters</a>
            <a href="/projects" className="hover:text-yellow-500">Featured Project</a>
            <a href="/contact" className="hover:text-yellow-500">Contact</a>
          </nav>
        </div>

        {/* Contact & Socials */}
        <div className="md:pl-6">
          <h3 className="font-semibold text-emerald-800 mb-2">Contact & Socials</h3>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a href="mailto:hello@suprefarm.io" className="underline hover:text-yellow-500">
                hello@suprefarm.io
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+2348000000000" className="underline hover:text-yellow-500">
                +234 800 000 0000
              </a>
            </li>
          </ul>

          <div className="flex gap-3 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-500">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-500">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-500">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-yellow-500">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom bar (tighter) */}
      <div className="bg-emerald-700/95">
        <Container className="py-3 text-center text-emerald-50 text-xs md:text-sm">
          © {new Date().getFullYear()} Suprefarm. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
