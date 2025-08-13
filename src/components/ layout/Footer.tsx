import Container from './Container';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



export default function Footer() {
  return (
    <footer className="mt-24 text-green-500 px-[3em]">
      <Container className="py-16 grid md:grid-cols-3 gap-10 text-sm">
        
        {/* About Section */}
        <div className='px-[4em]'>
          <h3 className="font-bold text-lg mb-3">Suprefarm</h3>
          <p className="text-green-500">
            Community-based climate solutions and carbon removals. Join us in creating sustainable impact for farmers and the environment.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Explore</h3>
          <nav className="grid grid-cols-1 gap-2">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <a href="/what-we-do" className="hover:text-yellow-300">Impact Counters</a>
            <a href="/where-we-work" className="hover:text-yellow-300">How It Works</a>
            <a href="/stories" className="hover:text-yellow-300">What We Do</a>
            <a href="/work-with-us" className="hover:text-yellow-300">Featured Project</a>
            <a href="/contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>

        {/* Contact & Socials Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact & Socials</h3>
          <p className="mb-2">
            Email: <a href="mailto:hello@suprefarm.io" className="underline hover:text-yellow-300">hello@suprefarm.io</a>
          </p>
          <p className="mb-4">
            Phone: <a href="tel:+2348000000000" className="underline hover:text-yellow-300">+234 800 000 0000</a>
          </p>
          
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      </Container>

      {/* Bottom Copyright */}
      <div className="bg-green-700 py-4 text-center text-green-100 text-sm">
        © {new Date().getFullYear()} Suprefarm. All rights reserved.
      </div>
    </footer>
  );
}
