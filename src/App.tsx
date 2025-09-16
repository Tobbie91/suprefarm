import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about-us";
import Projects from "./pages/Projects";
import Navbar from "./components/ layout/Navbar";
import Footer from "./components/ layout/Footer";
import WorkWithUs from "./pages/work-with-us";
import Contact from "./pages/Contact";
import WhatWeDoPage from "./pages/what-we-do";
import IloraFarm from "./pages/ilora-farm";
import AuthPage from "./pages/AuthPage";
import PaymentPage from "./pages/PaymentPage";
import AcquireGate from "./auth/AcquireGate";
import Ilora from "./pages/Ilora";
import Ilaji from "./pages/Ilaji";
import Iseyin from "./pages/Iseyin";
import Ghana from "./pages/Ghana";
import FAQ from "./pages/FAQ";
import { QuickActions } from "./components/quickctions";

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />

          <Route path="/work-with-us" element={<WorkWithUs />} />
          {/* Hashes (#...) are not route paths. Use a real page or an anchor on an existing page. */}
          <Route path="/ilora-farm" element={<IloraFarm />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ilora" element={<Ilora />} />
          <Route path="/ilaji" element={<Ilaji />} />
          <Route path="/iseyin" element={<Iseyin />} />
          <Route path="/ghana" element={<Ghana />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Auth page (UI-only) */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Payment: only gate when mode=acquire */}
          <Route
            path="/payment"
            element={
              <AcquireGate>
                <PaymentPage />
              </AcquireGate>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <QuickActions />
      <Footer />
    </BrowserRouter>
  );
}
