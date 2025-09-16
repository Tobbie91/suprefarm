

import React from "react";
import { motion } from "framer-motion";
import { FileSignature, ShieldCheck, CreditCard, Link as ChainLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Reusable, polished "What We Do" section
// Usage: <WhatWeDoSection imageSrc={green6} /> or pass a string path (e.g. "/images/green6.webp")

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

interface WhatWeDoProps {
  id?: string;
  imageSrc?: string; // optional; will show a placeholder gradient if missing
  title?: string;
  blurb?: string;
  features?: Feature[];
  ctaHref?: string;
  ctaText?: string;
}

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: (
      <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white">
        <FileSignature className="h-6 w-6" />
      </span>
    ),
    title: "Instant Ownership Registration",
    desc: "Digital onboarding with KYC, e‑signatures, and immediate issuance of ownership certificates.",
  },
  {
    icon: (
      <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-amber-500 text-white">
        <ShieldCheck className="h-6 w-6" />
      </span>
    ),
    title: "Digital Title Verification",
    desc: "Integrations to verify farmland titles before allocation in Nigeria and Ghana.",
  },
  {
    icon: (
      <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-teal-500 text-white">
        <CreditCard className="h-6 w-6" />
      </span>
    ),
    title: "Automated Ground Rent Billing",
    desc: "In‑app alerts and auto‑generated invoices connected to secure payment gateways.",
  },
  {
    icon: (
      <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-lime-600 text-white">
        <ChainLink className="h-6 w-6" />
      </span>
    ),
    title: "Blockchain Record‑Keeping",
    desc: "Immutable ownership and transaction history to prevent disputes.",
  },
];
export default function WhatWeDoSection({
  id = "what-we-do",
  imageSrc,
  title = "What We Do",
  blurb = "We manage climate‑smart farms and connect you to the process every step of the way.",
  features = DEFAULT_FEATURES,
  ctaHref = "/what-we-do",
  ctaText = "See how it works",
}: WhatWeDoProps) {
  return (
    <section id={id} className="py-16 md:py-20 px-6 md:px-12 bg-white">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-emerald-800 text-center">{title}</h3>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        {/* Media */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative md:col-span-6 lg:col-span-6 order-2 md:order-1 h-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 shadow-2xl h-full">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Farms and Impact"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4 / 5" }}
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ aspectRatio: "4 / 5" }}
              >
                <div className="h-full w-full bg-gradient-to-br from-emerald-100 via-emerald-50 to-white" />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Copy & Features */}
        <div className="md:col-span-6 lg:col-span-6 order-1 md:order-2 h-full flex flex-col justify-between">
          <p className="text-lg text-gray-700 mb-6 md:mb-8 max-w-xl">
            {blurb}
          </p>

          <div className="grid grid-cols-1 gap-4">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-700 mt-1">{item.desc}</p>
                </div>
                {/* Accent bar */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to={ctaHref} className="inline-flex items-center justify-center text-emerald-700 hover:text-emerald-800 font-semibold">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
