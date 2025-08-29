import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Telescope, Handshake, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";
// Assets
import green1 from "../assets/images/green1.webp";
import green2 from "../assets/images/green2.webp";
import green3 from "../assets/images/green3.webp";
import green4 from "../assets/images/green4.webp";
import green5 from "../assets/images/green5.webp";
import green6 from "../assets/images/green6.webp";
import howItWorksImg from "../assets/images/photo1.webp";

/**
 * SUPREFARM — HOME (Enhanced)
 * - Sticky pill nav linking to three pillars (Digital Tools, Innovative Finance, Green Skills)
 * - Executive Overview card under the hero (Project Alpha–style “captured” narrative)
 * - Framer Motion micro-interactions, Tailwind styling
 */

const slides = [
  {
    image: green1,
    title: "Be part of the climate solution",
    text: "Join a community that’s building a greener future through sustainable farming.",
  },
  {
    image: green2,
    title: "Sustainable Farmland Co-Ownership",
    text: "Step into ownership of thriving palm tree farmland in Ilora. Create jobs, strengthen food security, and track impact via satellite + AI.",
  },
  {
    image: green3,
    title: "Grow your wealth while growing nature",
    text: "Our farms deliver returns while regenerating soil, restoring forests, and improving ecosystems.",
  },
];

const impactData = [
  { title: "15 Acres", subtitle: "of productive palm tree farmland acquired in Ilora" },
  { title: "10 Co-Owners", subtitle: "already enrolled in our first project" },
  { title: "X Jobs Created", subtitle: "for local farmers and workers" },
  { title: "100% Transparency", subtitle: "through satellite and AI monitoring" },
];

const steps = [
  { title: "Choose Your Opportunity", description: "Browse farmland, apartment, and property projects that match your goals." },
  { title: "Secure Your Share", description: "Complete a simple, documented process with clear ownership rights." },
  { title: "Track & Enjoy Benefits", description: "Receive seasonal yield reports, property updates, and measurable social impact data." },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const prefersReduced = usePrefersReducedMotion();

  // Auto-advance hero slides (respect reduced motion)
  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [prefersReduced]);

  // Hero text variants
  const headline = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.35 } },
  };
  const blurb = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <main className="bg-white text-gray-900">
      {/* ========================= HERO ========================= */}
      <section
        className="relative h-[90vh] min-h-[580px] flex items-center justify-center overflow-hidden"
        aria-label="Suprefarm hero"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-700"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(255,255,255,0.12),rgba(255,255,255,0)_70%)]" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 w-full max-w-6xl text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h-${current}`}
              variants={headline}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${current}`}
              variants={blurb}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-6 text-lg md:text-xl lg:text-2xl text-emerald-200/90 max-w-3xl mx-auto"
            >
              {slides[current].text}
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              See Opportunities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/work-with-us"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
            >
              Partner with us
            </Link>
          </div>
        </div>

        {/* Dots Navigation */}
        <nav
          aria-label="hero slides"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-6 rounded-full transition-all ${
                current === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </nav>
      </section>

      {/* ========================= OVERVIEW / EXEC SUMMARY ========================= */}
      <section className="px-6 md:px-12 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-md">
          <p className="text-[17px] md:text-lg text-gray-800">
            Suprefarm provides climate-smart, community co-ownership of farmland using a modular, three-pillar approach:
            <strong> Digital Tools</strong>, <strong>Innovative Finance</strong>, and <strong>Green Skills</strong>.
            This enables transparent investments, resilient livelihoods, and measurable environmental impact.
          </p>

          {/* Quick chips to the pillars */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#digital-tools" className="inline-flex items-center rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Digital Tools</a>
            <a href="#innovative-finance" className="inline-flex items-center rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Innovative Finance</a>
            <a href="#green-skills" className="inline-flex items-center rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Green Skills</a>
          </div>

          {/* <p className="mt-3 text-xs text-gray-500">
            Inspired by modular development models (e.g., UNICEF Project Alpha in the energy domain) adapted here for agriculture.
          </p> */}
        </div>
      </section>

      {/* ========================= STICKY PILL NAV ========================= */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b mt-6">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-3 flex flex-wrap gap-2">
          <a href="#digital-tools" className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100">Digital Tools</a>
          <a href="#innovative-finance" className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100">Innovative Finance</a>
          <a href="#green-skills" className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm border border-emerald-100 hover:bg-emerald-100">Green Skills</a>
        </div>
      </nav>

      {/* ========================= VALUE PROP / APPROACH ========================= */}
      <section id="approach" className="relative py-20 px-6 md:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/70 via-white to-white" />

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">
            Suprefarm: A Modular Pathway to Climate-Smart Farmland Co-Ownership
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-center max-w-3xl mx-auto">
            We combine transparent digital monitoring with regenerative practices to increase yields, restore ecosystems,
            and share value fairly with farmers and co-owners.
          </p>

          {/* Three pillars (with anchor IDs + scroll margin for sticky nav) */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <section id="digital-tools" className="scroll-mt-24">
              <FeatureCard
                icon={<Telescope className="h-6 w-6" />}
                title="Digital Tools"
                description="Satellite imagery and AI map soil health, water, crop potential, and risks. Real-time monitoring guides interventions so partners invest with confidence."
              />
            </section>

            <section id="innovative-finance" className="scroll-mt-24">
              <FeatureCard
                icon={<Handshake className="h-6 w-6" />}
                title="Innovative Finance"
                description="Community contributions evolve into co-ownership. Harvest proceeds fund shared returns, farmer wages, and long-term stewardship with simple, transparent docs."
              />
            </section>

            <section id="green-skills" className="scroll-mt-24">
              <FeatureCard
                icon={<Leaf className="h-6 w-6" />}
                title="Green Skills"
                description="Training on regenerative agriculture, nursery management, and digital field tools—building skills, jobs, and resilient local food systems."
              />
            </section>
          </div>

          <p className="mt-8 text-gray-700 text-center max-w-3xl mx-auto">
            These pillars can be used separately or combined, with cross-cutting support in governance, farmer services,
            and transparent reporting to build durable agricultural infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTA to="/projects" variant="primary">See Current Opportunities</CTA>
            <CTA to="/contact" variant="ghost">Partner with Us</CTA>
          </div>
        </div>
      </section>

      {/* ========================= INTRO / MANAGEMENT ========================= */}
      <section className="py-16 px-6 md:px-12 bg-gray-50/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={green4}
            alt="Suprefarm project overview"
            className="w-full h-auto rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          />
        <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Seamless Experience & Management</h3>
            <p className="text-lg text-gray-700 mb-3">
              We manage every project from <strong>land preparation</strong> to <strong>harvest and sales</strong>, using
              technology to monitor soil health, optimise yields, and reduce waste.
            </p>
            <p className="text-lg text-gray-700">
              Partners and co-owners enjoy <strong>real-time updates</strong> on climate progress and financial returns—
              ensuring transparency and trust.
            </p>
          </div>
        </div>
      </section>

      {/* ========================= IMPACT COUNTERS ========================= */}
      <section className="py-18 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Impact Counters</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {impactData.map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-800 p-6 shadow-xl text-white border border-white/10 backdrop-blur-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <div className="text-2xl font-bold text-amber-300 drop-shadow-sm">{item.title}</div>
                <p className="mt-2 text-sm opacity-90">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section className="py-20 px-6 md:px-12 bg-gray-50/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold mb-6">How It Works</h3>
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
          </div>
          {/* Image */}
          <motion.img
            src={howItWorksImg}
            alt="How Suprefarm works"
            className="w-full h-[60vh] object-cover rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* ========================= WHAT WE DO ========================= */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800 text-center">What We Do</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <img
              src={green6}
              alt="Farms and Impact"
              className="w-full lg:h-[70vh] h-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 mb-8">
              We manage climate-smart farms and connect you to the process every step of the way.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "🌱",
                  title: "Instant Ownership Registration",
                  desc: "Digital onboarding with KYC, e-signatures, and immediate issuance of ownership certificates.",
                },
                {
                  icon: "🗂️",
                  title: "Digital Title Verification",
                  desc: "Integration with Nigeria and Ghana’s land registries to verify farmland before allocation.",
                },
                {
                  icon: "💰",
                  title: "Automated Ground Rent Billing",
                  desc: "In-app alerts and auto-generated invoices linked to secure payment gateways.",
                },
                {
                  icon: "🔗",
                  title: "Blockchain Record-Keeping",
                  desc: "Immutable ownership and transaction history to prevent disputes.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-2xl p-5 bg-gradient-to-br from-emerald-700 to-emerald-800 text-white shadow-xl border border-white/10 flex items-start gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <div className="text-2xl leading-none">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-1">{item.title}</h4>
                    <p className="text-white/95">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <CTA to="/what-we-do" variant="link">
                See how it works <ArrowRight className="ml-2 h-4 w-4" />
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FEATURED PROJECT ========================= */}
      <section className="py-20 px-6 md:px-12 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100">
            {/* Image */}
            <div className="md:w-2/5">
              <img src={green5} alt="Ilora Palm Tree Farmland" className="w-full h-full object-cover" />
            </div>
            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                  <Sparkles className="h-5 w-5" /> Featured Project
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mt-2">Ilora Palm Tree Farmland</h4>
                <p className="text-gray-700 mt-3">
                  Join a 15-acre palm tree plantation in Ilora, already home to 10 proud co-owners.
                </p>
                <p className="text-gray-700 mt-2">
                  Your share funds farmer livelihoods, boosts local food production, and offers seasonal returns.
                </p>
              </div>
              <div className="mt-6">
                <CTA to="/projects" variant="primary">Join Now</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TRUST BAR ========================= */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <TrustPill icon={<ShieldCheck className="h-5 w-5" />} text="KYC + E-sign Onboarding" />
          <TrustPill icon={<ShieldCheck className="h-5 w-5" />} text="Title Verification" />
          <TrustPill icon={<ShieldCheck className="h-5 w-5" />} text="Secure Payments" />
          <TrustPill icon={<ShieldCheck className="h-5 w-5" />} text="Transparent Reporting" />
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="py-20 px-6 md:px-12 bg-emerald-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold">Join Us in Growing a Greener Future</h3>
        <p className="max-w-2xl mx-auto mt-3 opacity-95">
          Become part of our community of climate-conscious investors and watch your impact grow.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <CTA to="/contact" variant="inverted">Contact Us</CTA>
          <CTA to="/about" variant="ghost" className="text-white border-white/60 hover:border-white">
            Learn More
          </CTA>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------ UI Bits ------------------------------ */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-gray-100 shadow-lg">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl group-hover:bg-emerald-200/60 transition-colors" />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 p-2">
          {icon}
        </div>
        <h4 className="mt-4 text-xl font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
      <span className="text-emerald-700">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
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

/* ------------------------------ Hooks ------------------------------ */
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
