import React from "react";
import { motion } from "framer-motion";
import { Handshake, Leaf, Telescope, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import green7 from "../../assets/images/green7.webp";


// ================================
// Who We Are — Polished Split Layout
// ================================
// • Split hero (copy + media)
// • Centered on mobile, left on desktop
// • Compact stats strip
// • Cleaner feature cards with equal height
// • Safe spacing + subtle brand accents

const FEATURES = [
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Climate‑Smart Farming",
    text: "Regenerative practices that restore soils, protect biodiversity, and raise yields sustainably.",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Transparent Co‑Ownership",
    text: "Asset‑backed allocations with clear documents, dashboards, and verifiable records.",
  },
  {
    icon: <Telescope className="h-5 w-5" />,
    title: "Data‑Driven Oversight",
    text: "AI + satellite monitoring for progress tracking, carbon metrics, and decision support.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Trust & Accountability",
    text: "Full traceability from plot to payout with auditable updates and secure investor records.",
  },
];

const STATS = [
  { label: "Co‑owners", value: "1,200+" },
  { label: "Hectares", value: "350+" },
  { label: "Trees", value: "80k+" },
];

export default function WhoWeAreRedesign() {
  return (
    <section id="who-we-are" className="bg-gradient-to-b from-emerald-50/30 to-white py-16 md:py-20 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 md:items-center">
          {/* Copy */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-emerald-700 text-sm font-medium mx-auto md:mx-0">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> About Suprefarm
            </div>
            <h3 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Who We Are</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
              Suprefarm enables individuals and communities to co‑own sustainable palm tree farms across Africa. Through
              asset‑backed co‑ownership, we channel capital to regenerative agriculture that delivers financial returns,
              environmental benefits, and social empowerment.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
              We use AI and satellite data to monitor farm performance, track carbon sequestration, and provide
              transparent impact reports—helping mitigate climate change, create rural jobs, and strengthen food security.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <CTA to="/projects" variant="primary">
               Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </CTA>
              <CTA to="/work-with-us" variant="ghost">Work with us</CTA>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 md:max-w-md mx-auto md:mx-0">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-emerald-100 bg-white p-3 text-center shadow-sm">
                  <div className="text-xl md:text-2xl font-extrabold text-emerald-700">{s.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Media */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lg">
              {/* image */}
              <img
                src={green7} 
                alt="Suprefarm — palm farms and community"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* soft overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-200/20 via-transparent to-transparent" />
            </div>
            {/* decorative ring */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-4 border-emerald-200/60" />
          </motion.div>
        </div>

        {/* Feature tiles */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURES.map((f, idx) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-50 text-emerald-700 p-2 ring-1 ring-emerald-100">{f.icon}</div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">{f.title}</h4>
                  <p className="mt-1 text-sm md:text-[15px] leading-relaxed text-gray-700">{f.text}</p>
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-emerald-100 via-gray-100 to-transparent" />
              <div className="mt-auto text-sm text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100">Learn more →</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
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
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-2";
  const styles: Record<string, string> = {
    primary: `${base} bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 focus-visible:ring-emerald-700/40`,
    ghost: `${base} border border-gray-300 text-gray-900 hover:bg-gray-100 focus-visible:ring-emerald-700/30`,
    link: `${base} p-0 h-auto text-emerald-700 hover:text-emerald-800`,
    inverted: `${base} bg-white text-emerald-700 hover:bg-gray-100 focus-visible:ring-white/70`,
  };
  return (
    <Link to={to} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}