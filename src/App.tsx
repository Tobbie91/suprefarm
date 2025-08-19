import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about-us";
import Projects from "./pages/Projects";
import Navbar from "./components/ layout/Navbar";
import Footer from "./components/ layout/Footer";
import WorkWithUs from "./pages/work-with-us";
import Contact from "./pages/Contact";
import WhatWeDoPage from "./pages/what-we-do";
import IloraFarm from "./pages/ilora-farm";


export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main"><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        {/* <Route path="/where-we-work" element={<WhereWeWork />} /> */}
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="#ilora-farm" element={< IloraFarm/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes></main>
      <Footer />
    </BrowserRouter>
  );
}


