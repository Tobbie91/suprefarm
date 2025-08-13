import { Link, NavLink } from "react-router-dom";
export default function Navbar(){
  const link = "px-3 py-2 rounded-md hover:bg-slate-100";
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b pl-3">
      <nav className="container max-w-7xl flex items-center gap-4 h-16">
        <Link to="/" className="font-bold text-brand-ink">Suprefarm</Link>
        <div className="ml-auto flex gap-1 text-sm">
          <NavLink to="/about" className={link}>About us</NavLink>
          <NavLink to="/what-we-do" className={link}>What we do</NavLink>
          <NavLink to="/where-we-work" className={link}>Where we work</NavLink>
          <NavLink to="/stories" className={link}>Stories</NavLink>
          <NavLink to="/work-with-us" className={link}>Work with us</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
