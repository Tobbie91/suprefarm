import React from "react";
import { motion } from "framer-motion";
import { Telescope, Handshake, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Reusable "Our Approach" section
// Usage: <ApproachSection />
// Optional props let you customize title, blurb, features, and CTA links.

type Feature = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

interface ApproachProps {
  id?: string;
  title?: string;
  blurb?: string;
  features?: Feature[];
  primaryCtaHref?: string;
  primaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaText?: string;
  className?: string;
}

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: (
      <div className="h-12 w-12 rounded-full bg-emerald-600 text-white grid place-items-center">
        <Telescope className="h-6 w-6" />
      </div>
    ),
    title: "Digital Tools",
    text: "Real-time monitoring with satellite imagery and AI to guide smart farming decisions.",
  },
  {
    icon: (
      <div className="h-12 w-12 rounded-full bg-amber-500 text-white grid place-items-center">
        <Handshake className="h-6 w-6" />
      </div>
    ),
    title: "Innovative Finance",
    text: "Co-ownership model that evolves with community contributions for shared success.",
  },
  {
    icon: (
      <div className="h-12 w-12 rounded-full bg-lime-500 text-white grid place-items-center">
        <Leaf className="h-6 w-6" />
      </div>
    ),
    title: "Green Skills",
    text: "Empowering communities and women to build assets via regenerative agriculture and skill development.",
  },
];

export default function ApproachSection({
  id = "approach",
  title = "Our Approach",
  blurb =
    "We combine transparent digital monitoring with regenerative practices to increase yields, restore ecosystems, and share value fairly with farmers and co-owners.",
  features = DEFAULT_FEATURES,
  primaryCtaHref = "/projects",
  primaryCtaText = "Explore Farm Offers",
  secondaryCtaHref = "/work-with-us",
  secondaryCtaText = "Learn How It Works",
  className = "",
}: ApproachProps) {
  return (
    <section id={id} className={`relative py-20 px-6 md:px-12 bg-white ${className}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/70 via-white to-white" />

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">{title}</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4 max-w-3xl mx-auto">{blurb}</p>

        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-700 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to={primaryCtaHref}
            className="inline-flex items-center justify-center text-white bg-emerald-600 hover:bg-emerald-700 py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {primaryCtaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to={secondaryCtaHref}
            className="inline-flex items-center justify-center text-emerald-700 bg-white border border-emerald-600 hover:bg-emerald-50 py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
