import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-white">
      <Container className="py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold text-brand-ink">Suprefarm</div>
          <p className="mt-2 text-slate-600">Community-based climate solutions and carbon removals.</p>
        </div>
        <nav className="grid grid-cols-2 gap-2">
          <a href="/about" className="hover:underline">About</a>
          <a href="/what-we-do" className="hover:underline">What we do</a>
          <a href="/where-we-work" className="hover:underline">Where we work</a>
          <a href="/stories" className="hover:underline">Stories</a>
          <a href="/work-with-us" className="hover:underline">Work with us</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <div className="text-slate-500">© {new Date().getFullYear()} Suprefarm </div>
      </Container>
    </footer>
  );
}