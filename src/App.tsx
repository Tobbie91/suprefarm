import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about-us";
import Stories from "./pages/Stories";
import Project from "./pages/Projects";
import Navbar from "./components/ layout/Navbar";
import Footer from "./components/ layout/Footer";
import WhereWeWork from "./pages/where-we-work";
import WorkWithUs from "./pages/work-with-us";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main"><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/where-we-work" element={<WhereWeWork />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes></main>
      <Footer />
    </BrowserRouter>
  );
}


