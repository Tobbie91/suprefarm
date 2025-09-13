// components/CustomerJourney.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  UserPlus,
  MapPin,
  FileSignature,
  LineChart,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

type Step = { title: string; desc: string; icon: React.ReactNode };

const STEPS: Step[] = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "Browse Farms",
    desc: "Explore live opportunities, impact metrics, and expected timelines.",
  },
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Create Account",
    desc: "Quick KYC and onboarding to unlock investing features.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Pick Your Plots",
    desc: "Choose acres, view projections, and see farm details.",
  },
  {
    icon: <FileSignature className="h-5 w-5" />,
    title: "Sign & Fund",
    desc: "E-sign documents and make a secure payment. Get your certificate.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Track Progress",
    desc: "Dashboard updates, satellite/AI insights, weather and field notes.",
  },
  {
    icon: <BadgeDollarSign className="h-5 w-5" />,
    title: "Receive Returns",
    desc: "Seasonal payouts with transparent statements and impact reports.",
  },
];

export default function CustomerJourney() {
  return (
    <section
      id="journey"
      className="relative py-16 md:py-20 px-6 md:px-12 bg-white"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/60 via-white to-white" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Your Journey to Co-Ownership
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-700">
            From discovering opportunities to receiving seasonal returns—here’s
            how you become an investor with Suprefarm.
          </p>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden mt-10">
          <ol className="relative border-l border-emerald-200">
            {STEPS.map((s, i) => (
              <li key={s.title} className="ml-4 mb-8 last:mb-0">
                <span className="absolute -left-2.5 mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-white ring-4 ring-emerald-100 text-[11px]">
                  {i + 1}
                </span>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-semibold">
                  {s.icon}
                  Step {i + 1}
                </div>
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-gray-700">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid mt-12 grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-emerald-50 text-emerald-700 p-2">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-emerald-700 font-semibold">
                    Step {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-gray-700">{s.desc}</p>
                </div>
              </div>
              {/* corner accent */}
              <span className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-200/70" />
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 shadow-sm hover:shadow-md"
          >
            Explore Available Farms
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="https://suprefarmapp.netlify.app/login"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </section>
  );
}
