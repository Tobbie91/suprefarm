import Container from "./Container";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white">
      {/* Footer Main Content */}
      <Container className="py-12 md:py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          {/* About Section */}
          <div className="space-y-4 px-6 md:px-12">
            <h3 className="text-2xl font-semibold text-slate-100">Suprefarm</h3>
            <p className="text-base text-gray-300">
              Community-based climate solutions and carbon removals. Join us in creating sustainable impact for farmers and the environment.
            </p>
          </div>

          {/* Explore Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-100">Explore</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-emerald-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="/what-we-do" className="hover:text-emerald-400 transition">What We Do</a></li>
              <li><a href="/work-with-us" className="hover:text-emerald-400 transition">How It Works</a></li>
              <li><a href="/projects" className="hover:text-emerald-400 transition">Featured Project</a></li>
              <li><a href="/faq" className="hover:text-emerald-400 transition">Frequently Asked Questions</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Socials Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-100">Contact & Socials</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <span>Email:</span>{" "}
                <a href="mailto:hello@suprefarm.io" className="hover:text-emerald-400 transition">
                  hello@suprefarm.io
                </a>
              </li>
              <li>
                <span>Phone:</span>{" "}
                <a href="tel:+2348000000000" className="hover:text-emerald-400 transition">
                  +234 813 516 9538
                </a>
              </li>
            </ul>

            <div className="flex justify-center gap-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-emerald-700">
        <Container className="py-4 text-center text-slate-400 text-xs md:text-sm">
          © {new Date().getFullYear()} Suprefarm. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
