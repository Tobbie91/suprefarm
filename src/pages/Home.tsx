import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Telescope,
  Handshake,
} from "lucide-react";
import green1 from "../assets/images/vid.jpg";
// import green2 from "../assets/images/green12.webp";
// import green3 from "../assets/images/vid.jpg";
import SuprefarmSimulator from "../components/home/simultor";
import PartnersMarquee from "../components/home/PartnersMarquee";
import SDGBand from "../components/home/SDGBand";
import ApproachSection from "../components/home/ApproachSection";
import CustomerJourney from "../components/CustomerJourney";
import RiskMapSuprefarm from "../components/home/RiskAssessment";
// import green13 from "../assets/images/green13.png";
// import green14 from "../assets/images/green14.png";
import green15 from "../assets/images/green15.png";


const slides = [
  {
    image: green15,
    title: "Co-own Climate-Smart Palmtree Farmland",
    text: "Build wealth and resilience together. Choose plots, empower farmers with training and inputs, and receive seasonal updates and returns with transparent, AI-powered reporting.",
  },
  {
    image: green1,
    title: "Be part of the climate solution",
    text: "Step into ownership of thriving palm tree farmland in Ilora. Create jobs, strengthen food security, and track impact via satellite + AI.",
  },
  {
    image: green15,
    title: "Grow your wealth while growing nature",
    text: "Our farms deliver returns while regenerating soil, restoring forests, and improving ecosystems.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const prefersReduced = usePrefersReducedMotion();
  const EASE_OUT = [0.16, 1, 0.3, 1] as const;

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, [prefersReduced]);

  // Hero text variants
  const headline = {
    initial: { opacity: 0, y: 18 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.35, ease: EASE_OUT },
    },
  };
  const blurb = {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.05, ease: EASE_OUT },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: EASE_OUT } },
  };

  const goToSlide = () => setCurrent((prev) => (prev + 1) % slides.length);



  return (
    <main className="bg-white text-gray-900">
      {/* =============== HERO =============== */}

      <section
        className="relative min-h-[70vh] py-16 md:py-20 px-6 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50"
        aria-label="Hero"
      >
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 lg:ml-[4em] py-1 text-emerald-700 text-sm font-medium mx-auto md:mx-0">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{" "}
          Climate Smart farm
        </div> */}

        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl">
          <div className="w-full text-center md:text-left max-w-3xl antialiased">
            <motion.h1
              key={`h-${current}`}
              variants={headline}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-4xl md:text-6xl font-semibold md:font-bold leading-[1.1] tracking-tight break-words"
            >
              {slides[current].title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 2 === 1 ? "text-green-600" : "text-gray-900"}
                >
                  {word +
                    (i < slides[current].title.split(" ").length - 1
                      ? " "
                      : "")}
                </span>
              ))}
            </motion.h1>

            <motion.p
              key={`p-${current}`}
              variants={blurb}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-5 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0"
            >
              {slides[current].text}
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://suprefarmapp.netlify.app/login"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 font-medium text-white bg-green-600 hover:bg-green-700 transition"
              >
                Own Your Land Now
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 font-medium text-green-700 bg-white border border-green-600 hover:bg-green-100 transition"
              >
                Explore Returns
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-md md:max-w-lg">
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-transparent" />
            <img
              src={slides[current].image}
              alt="Hero"
              className="w-full h-[34vh] md:h-[48vh] object-cover rounded-2xl shadow-2xl transform md:rotate-1"
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide()} 
              className={`h-2 w-2 rounded-full cursor-pointer ${
                current === index ? "bg-emerald-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* =============== WHO WE ARE =============== */}

      <section
        id="who-we-are"
        className="py-20 px-6 md:px-12 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto text-center mt-[-4em]">
          {/* Heading */}
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Who We Are
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Suprefarm is a climate-smart agri-tech platform enabling individuals
            and communities to co-own sustainable palm tree farms across Africa.
            Through asset-backed co-ownership, we provide an accessible path for
            people to participate in green financing, where contributions
            directly support regenerative agriculture and deliver financial
            returns, environmental benefits, and social empowerment.
          </p>

          {/* Value Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Handshake className="h-12 w-12 text-green-600" />,
                title: "Climate-Smart Farming",
                text: "We promote sustainable farming practices that protect the environment while boosting agricultural productivity through regenerative techniques.",
              },
              {
                icon: <Leaf className="h-12 w-12 text-green-600" />,
                title: "Transparent Co-Ownership",
                text: "Our platform enables individuals to co-own palm tree farms with clear asset-backed ownership, fostering trust and long-term value.",
              },
              {
                icon: <Telescope className="h-12 w-12 text-green-600" />,
                title: "Community Empowerment",
                text: "By leveraging AI and satellite technology, we empower communities to make data-driven decisions and track farm progress with complete transparency.",
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-green-600" />,
                title: "Seasonal Returns",
                text: "Agriculture thrives in cycles, and so do your investments. Seasonal returns mean predictable income, reinvestment, and shared prosperity.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-xl mb-2 text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-center">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <CTA
              to="/about"
              variant="primary"
              className="inline-flex items-center justify-center text-white bg-green-600 hover:bg-green-700 py-4 px-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Learn more about us
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTA>
          </div>
        </div>
      </section>

      <ApproachSection />

      {/* =============== WHAT WE DO (Features) =============== */}

      <section className="py-20 px-6 md:px-12 bg-white mt-[]">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-emerald-800 text-center">
          Why Suprefarm?
        </h3>
        {/* <h3 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800 text-center">
   
        </h3> */}

        <p className="text-lg text-gray-700 mb-8 text-center">
          We manage climate-smart Palmtree farms and connect you to the process
          every step of the way.
        </p>

        <RiskMapSuprefarm />
      </section>

      <SuprefarmSimulator />

      {/* =============== BUY LAND NOW (selector) =============== */}
      <section
        id="buy"
        className="py-8 md:py-10 px-6 md:px-12 bg-white border-b border-gray-100"
      >
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-800">
              Buy land & monitor it grow
            </h3>
            <p className="text-gray-700">
              Pick your plots, and track progress in real time.
            </p>
          </div>

          <a
            href="https://suprefarmapp.netlify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition"
          >
            Buy a Plot Now
          </a>
        </div>
      </section>

      <CustomerJourney />

      <PartnersMarquee />
      <SDGBand />

      {/* <QuickActions /> */}
      {/* =============== CTA =============== */}
      <section className="py-20 px-6 md:px-12 bg-white text-slate-900 text-center shadow-md">
  <h3 className="text-3xl md:text-4xl font-bold">
    Join Us in Growing a Greener Future
  </h3>
  <p className="max-w-2xl mx-auto mt-3 opacity-95">
    Become part of our community of climate-conscious investors and watch
    your impact grow.
  </p>
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center ">
    {/* Contact Us button styled like a button */}
    <Link
      to="/contact"
      className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
    >
      Contact Us
    </Link>
    
    {/* Learn More button */}
    <CTA
      to="/about"
      variant="ghost"
      className="text-slate-900 border-2 border-slate-700/60 hover:border-slate-700"
    >
      Learn More
    </CTA>
  </div>
</section>

    </main>
  );
}

function CTA({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "link" | "inverted";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-2";
  const styles: Record<string, string> = {
    primary: `${base} bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 focus-visible:ring-emerald-700/60`,
    ghost: `${base} border border-gray-300 text-gray-900 hover:bg-gray-100 focus-visible:ring-emerald-700/40`,
    link: `${base} p-0 h-auto text-emerald-700 hover:text-emerald-800`,
    inverted: `${base} bg-white text-emerald-700 hover:bg-gray-100 focus-visible:ring-white/70`,
  };
  return (
    <Link to={to} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

{
  /* <section className="px-6 md:px-12 -mt-4 relative z-10">
        <div className="max-w-6xl mx-auto rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-md">
          <p className="text-[17px] md:text-lg text-gray-800">
            Suprefarm provides climate-smart, community co-ownership of farmland using a modular, three-pillar approach:
            <strong> Digital Tools</strong>, <strong>Innovative Finance</strong>, and <strong>Green Skills</strong>. This enables transparent investments, resilient livelihoods, and measurable environmental impact.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#digital-tools" className="inline-flex items-center rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Digital Tools</a>
            <a href="#innovative-finance" className="inline-flex items-center rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Innovative Finance</a>
            <a href="#green-skills" className="inline-flex items-center rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Green Skills</a>
          </div>
        </div>
      </section> */
}

{
  /* =============== STICKY PILL NAV =============== */
}
{
  /* <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b mt-6">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="#buy"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              Buy land
            </a>
            <a
              href="#why"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              Why Suprefarm
            </a>
            <a
              href="#approach"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              What we do
            </a>
            <a
              href="#people"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              People
            </a>
            <a
              href="#how"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              How it works
            </a>
            <a
              href="#projects"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100"
            >
              Talk to us
            </a>
          </div>
        </div>
      </nav> */
}

{
  /* =============== WHY SUPREFARM =============== */
}
{
  /* <section id="why" className="py-14 px-6 md:px-12 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">
            Why buy with Suprefarm?
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-2">
            Real plots, transparent ops, measurable impact.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Own real assets",
                text: "Legally-backed co-ownership with clear docs and records.",
              },
              {
                icon: <Telescope className="h-5 w-5" />,
                title: "Transparent tracking",
                text: "Satellite + field data with honest updates.",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Seasonal returns",
                text: "Aligned to harvest cycles and reported clearly.",
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: "Farmer-first impact",
                text: "Jobs, training, and fair value in the community.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm"
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 p-2">
                  {f.icon}
                </div>
                <h4 className="mt-3 font-semibold text-gray-900">{f.title}</h4>
                <p className="text-gray-700">{f.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {i === 0 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white border border-gray-200">
                      KYC + e-sign
                    </span>
                  )}
                  {i === 0 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white border border-gray-200">
                      Title verified
                    </span>
                  )}
                  {i === 1 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white border border-gray-200">
                      Transparent reporting
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */
}

{
  /* =============== WHO WE ARE =============== */
}
{
  /* <section
        id="who-we-are"
        className="py-20 px-6 md:px-12 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */
}
{
  /* <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight tracking-wide">
            Who We Are
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Suprefarm is a climate-smart agri-tech company empowering
            communities through farmland co-ownership. We combine
            <strong className="text-green-600">innovative finance</strong>,
            <strong className="text-green-600">digital tools</strong>, and
            <strong className="text-green-600">green skills</strong> to create
            resilient livelihoods, transparent returns, and measurable ecosystem
            restoration.
          </p> * */
}

{
  /* Value Cards */
}
{
  /* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Handshake className="h-12 w-12 text-green-600" />,
                title: "Community-First",
                text: "Empowering communities through shared ownership.",
              },
              {
                icon: <Leaf className="h-12 w-12 text-green-600" />,
                title: "Sustainability",
                text: "Restoring soil, increasing biodiversity, and sequestering carbon.",
              },
              {
                icon: <Telescope className="h-12 w-12 text-green-600" />,
                title: "Data-Driven",
                text: "Satellite + AI monitoring for transparent and better decisions.",
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-green-600" />,
                title: "Trust & Transparency",
                text: "Clear documentation, traceability, and investor-friendly operations.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-700 text-center">{item.text}</p>
              </motion.div>
            ))}
          </div> */
}

{
  /* CTA */
}
{
  /* <div className="mt-12 text-center">
            <CTA
              to="/about"
              variant="primary"
              className="inline-flex items-center justify-center text-white bg-green-600 hover:bg-green-700 py-4 px-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Learn more about us
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTA>
          </div>
        </div>
      </section> */
}

{
  /* =============== ADVISORS & TEAM =============== */
}
{
  /* <section
        id="people"
        className="py-14 md:py-16 px-6 md:px-12 bg-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-800">
                Advisors & Team
              </h3>
              <p className="text-gray-700 mt-2">
                Operators and advisors guiding climate, finance, and product.
              </p>
            </div>
            <Link
              to="/about"
              className="hidden sm:inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Meet the full team →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {people.map((p, i) => (
              <TeamCard key={p.name} person={p} index={i} />
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <CTA to="/about" variant="link">
              Meet the full team <ArrowRight className="ml-2 h-4 w-4" />
            </CTA>
          </div>
        </div>
      </section> */
}

{
  /* =============== HOW WE HELP (Steps) =============== */
}
{
  /* <section id="how" className="py-20 px-6 md:px-12 bg-gray-50/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={howItWorksImg}
            alt="How Suprefarm works"
            className="w-full h-[60vh] object-cover rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          />
          <div>
            <h3 className="text-3xl font-bold mb-6">How We Help</h3>
            <ul className="space-y-5">
              {steps.map((step, idx) => (
                <li key={idx} className="group">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold">{step.title}</h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CTA to="/what-we-do" variant="link">
                See the full process <ArrowRight className="ml-2 h-4 w-4" />
              </CTA>
            </div>
          </div>
        </div>
      </section> */
}

{
  /* =============== SDGs & IMPACT =============== */
}

{
  /* =============== FEATURED PROJECT =============== */
}
{
  /* <section id="projects" className="py-20 px-6 md:px-12 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100">
            <div className="md:w-2/5">
              <img
                src={green5}
                alt="Ilora Palm Tree Farmland"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                  <Sparkles className="h-5 w-5" /> Featured Project
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mt-2">
                  Ilora Palm Tree Farmland
                </h4>
                <p className="text-gray-700 mt-3">
                  Join a 15-acre palm tree plantation in Ilora, already home to
                  10 proud co-owners.
                </p>
                <p className="text-gray-700 mt-2">
                  Your share funds farmer livelihoods, boosts local food
                  production, and offers seasonal returns.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Ilora (Oyo, NG)", "Osun (NG)", "Ashanti (GH)"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                      >
                        {chip}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="mt-6">
                <CTA to="/projects" variant="primary">
                  Join Now
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section> */
}

{
  /* =============== TALK TO US =============== */
}
{
  /* <section id="contact" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-800">
              Talk to a human
            </h3>
            <p className="text-gray-700 mt-2">
              Ask anything—plots, pricing, docs, or timelines.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+2348000000000"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 text-emerald-700" /> Call us
              </a>
              <a
                href="mailto:hello@suprefarm.io"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50"
              >
                <Mail className="h-4 w-4 text-emerald-700" /> Email us
              </a>
              <a
                href="https://wa.me/2348000000000?text=Hi%20Suprefarm%20—%20I%20have%20a%20question%20about%20plots"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50"
              >
                <MessageCircle className="h-4 w-4 text-emerald-700" /> WhatsApp
              </a>
            </div>
          </div> */
}

{
  /* trust video or placeholder */
}
{
  /* <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={howItWorksImg}
              alt="30-second overview"
              className="w-full h-56 object-cover"
            />
            <button
              className="absolute inset-0 grid place-items-center"
              aria-label="Play video"
            >
              <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/90 shadow-xl">
                <PlayCircle className="h-7 w-7 text-emerald-700" />
              </span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm bg-gradient-to-t from-black/60 to-transparent">
              30-second overview (video coming soon)
            </div>
          </div>
        </div>
      </section> */
}

/* ===========================================
   UI BITS
=========================================== */

// function FeatureCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-gray-100 shadow-lg">
//       <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl group-hover:bg-emerald-200/60 transition-colors" />
//       <div className="relative z-10">
//         <div className="inline-flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 p-2">
//           {icon}
//         </div>
//         <h4 className="mt-4 text-xl font-semibold text-gray-900">{title}</h4>
//         <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// }

// function ValueCard({
//   icon,
//   title,
//   text,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   text: string;
// }) {
//   return (
//     <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
//       <div className="inline-flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 p-2">
//         {icon}
//       </div>
//       <h4 className="mt-3 font-semibold text-gray-900">{title}</h4>
//       <p className="text-gray-700">{text}</p>
//     </div>
//   );
// }

// function TeamCard({ person, index }: { person: Person; index: number }) {
//   const pastel = [
//     "bg-emerald-50 text-emerald-700 border-emerald-100",
//     "bg-yellow-50 text-yellow-700 border-yellow-100",
//     "bg-sky-50 text-sky-700 border-sky-100",
//     "bg-rose-50 text-rose-700 border-rose-100",
//     "bg-violet-50 text-violet-700 border-violet-100",
//     "bg-teal-50 text-teal-700 border-teal-100",
//   ][index % 6];

//   const initials = person.name
//     .split(" ")
//     .map((n) => n[0])
//     .slice(0, 2)
//     .join("")
//     .toUpperCase();

//   return (
//     <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex items-center gap-4">
//         <div
//           className={`h-14 w-14 rounded-2xl grid place-items-center border ${pastel} font-semibold`}
//         >
//           {initials}
//         </div>
//         <div>
//           <div className="flex items-center gap-2">
//             <h4 className="font-semibold text-gray-900">{person.name}</h4>
//             <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
//               {person.group}
//             </span>
//           </div>
//           <div className="text-emerald-700 text-sm font-medium">
//             {person.role}
//           </div>
//         </div>
//       </div>
//       <p className="mt-3 text-sm text-gray-700">{person.bio}</p>
//       <div className="mt-4 flex items-center gap-3">
//         {person.links?.linkedin && (
//           <a
//             href={person.links.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-emerald-700"
//             aria-label={`${person.name} on LinkedIn`}
//           >
//             <Linkedin className="h-4 w-4" />
//           </a>
//         )}
//         {person.links?.twitter && (
//           <a
//             href={person.links.twitter}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-emerald-700"
//             aria-label={`${person.name} on Twitter/X`}
//           >
//             <Twitter className="h-4 w-4" />
//           </a>
//         )}
//         {person.links?.email && (
//           <a
//             href={`mailto:${person.links.email}`}
//             className="text-gray-500 hover:text-emerald-700"
//             aria-label={`Email ${person.name}`}
//           >
//             <Mail className="h-4 w-4" />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// function QuickBuyWidget() {
//   const [plots, setPlots] = useState(1);
//   const PLOT_PRICE_NGN = 250000; // TODO: replace with your actual price
//   const total = plots * PLOT_PRICE_NGN;

//   const clamp = (n: number) => Math.max(1, Math.min(100, n));
//   return (
//     <div className="w-full md:w-auto flex items-center gap-3">
//       <div className="flex items-center rounded-xl border border-gray-200">
//         <button
//           onClick={() => setPlots((p) => clamp(p - 1))}
//           className="px-3 py-2 hover:bg-gray-50"
//           aria-label="Decrease plots"
//         >
//           −
//         </button>
//         <input
//           type="number"
//           value={plots}
//           onChange={(e) => setPlots(clamp(parseInt(e.target.value || "1", 10)))}
//           className="w-16 text-center outline-none py-2"
//           min={1}
//           max={100}
//         />
//         <button
//           onClick={() => setPlots((p) => clamp(p + 1))}
//           className="px-3 py-2 hover:bg-gray-50"
//           aria-label="Increase plots"
//         >
//           +
//         </button>
//       </div>
//       <div className="text-sm text-gray-600">
//         Total:&nbsp;
//         <span className="font-semibold text-gray-900">
//           ₦{total.toLocaleString()}
//         </span>
//       </div>
//       <Link
//         to={`/projects?plots=${plots}`}
//         className="inline-flex items-center rounded-xl bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700 shadow-md"
//       >
//         Continue
//       </Link>
//     </div>
//   );
// }
