import Container from "./Container";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" border-t border-slate-800 bg-slate-900 text-slate-300">
      <Container className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center text-center">
        {/* About */}
        <div className="max-w-xs">
          <h3 className="font-semibold text-slate-100 mb-2">Suprefarm</h3>
          <p>
            Community-based climate solutions and carbon removals. Join us in
            creating sustainable impact for farmers and the environment.
          </p>
        </div>

        {/* Explore (center, clearly separated) */}
        <div className="w-full md:max-w-md">
          <h3 className="font-semibold text-slate-100 mb-3">Explore</h3>

          <div className="md:flex md:items-start md:justify-center md:gap-10 md:divide-x md:divide-slate-700">
            <ul className="space-y-2 md:pr-6">
              <li><a href="/" className="hover:text-emerald-400 hover:underline underline-offset-4">Home</a></li>
              <li><a href="/about" className="hover:text-emerald-400 hover:underline underline-offset-4">About Us</a></li>
              <li><a href="/what-we-do" className="hover:text-emerald-400 hover:underline underline-offset-4">What We Do</a></li>
              <li><a href="/work-with-us" className="hover:text-emerald-400 hover:underline underline-offset-4">How It Works</a></li>
            </ul>

            <ul className="space-y-2 md:pl-6 mt-4 md:mt-0">
              <li><a href="/" className="hover:text-emerald-400 hover:underline underline-offset-4">Impact Counters</a></li>
              <li><a href="/projects" className="hover:text-emerald-400 hover:underline underline-offset-4">Featured Project</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 hover:underline underline-offset-4">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="max-w-xs">
          <h3 className="font-semibold text-slate-100 mb-2">Contact & Socials</h3>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a href="mailto:hello@suprefarm.io" className="hover:text-emerald-400 hover:underline underline-offset-4">
                hello@suprefarm.io
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+2348000000000" className="hover:text-emerald-400 hover:underline underline-offset-4">
                +234 813 516 9538
              </a>
            </li>
          </ul>

          <div className="flex gap-3 mt-3 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-emerald-400">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-emerald-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-emerald-400">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="bg-slate-950">
        <Container className="py-3 text-center text-slate-400 text-xs md:text-sm">
          © {new Date().getFullYear()} Suprefarm. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}


