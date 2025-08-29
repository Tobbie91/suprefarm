import React, { useState } from "react";
import type { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Users, BarChart3, Globe } from "lucide-react";
import green7 from "../assets/images/green7.webp";
import green8 from "../assets/images/green8.webp";
import green9 from "../assets/images/green9.webp";
import green10 from "../assets/images/green10.webp";

type Mode = "pool" | "acquire";
type OutreachBox = {
  title: string;
  description: string;
  cta: string;
  mode: Mode;
  bgColor: string;
  textColor: string;
  buttonStyle?: string;
};

const outreachBoxes: OutreachBox[] = [
  {
    title: "Pool Funds and Co-Own",
    description:
      "Start from as little as ₦50,000. Join others to co-own farmland or apartment projects. Together, we make land ownership and agribusiness affordable.",
    cta: "Own Your Land",
    mode: "pool",
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Acquire Your Own Land",
    description:
      "Select a farmland project of your choice and become a verified co-owner. Ownership documents are processed digitally and securely.",
    cta: "Acquire Land Now",
    mode: "acquire",
    bgColor: "bg-green-100",
    textColor: "text-gray-900",
    buttonStyle: "text-green-700 border-green-700 hover:bg-green-200",
  },
  {
    title: "I’m Abroad. Can I Join?",
    description:
      "Yes! Our platform is designed for the Diaspora. You can invest, co-own, and manage farmland from anywhere in the world. All processes and documents are online.",
    cta: "Partner with Us",
    mode: "pool",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  {
    title: "Earn and Grow",
    description:
      "With every season, you enjoy structured returns from your farm projects. Track earnings, monitor updates, and reinvest easily through your Suprefarm account.",
    cta: "See Returns",
    mode: "pool",
    bgColor: "bg-green-50",
    textColor: "text-gray-900",
    buttonStyle: "text-green-700 border-green-700 hover:bg-green-200",
  },
];

export default function WorkWithUs() {
  const [plots, setPlots] = useState(1);
  const [acres, setAcres] = useState(0.1);
  const navigate = useNavigate();

  // Single helper to send users to payment with params
  function goToPayment(mode: Mode = "pool", extras?: Record<string, string | number>) {
    const params = new URLSearchParams({ mode });
    if (extras) {
      Object.entries(extras).forEach(([k, v]) => params.set(k, String(v)));
    }
    navigate(`/payment?${params.toString()}`);
  }

  const handleInvestmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Acquire path → if your AcquireGate is set up, it will route to /auth if not signed in
    goToPayment("acquire", { plots, acres });
  };

  const keyActivate = (e: KeyboardEvent, fn: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 px-6 md:px-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Work <span className="text-yellow-400">With Us</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Join hands with <span className="font-semibold">SupreFarm</span> to
            create <span className="underline decoration-yellow-400">real impact</span>{" "}
            driving <span className="text-yellow-400 font-medium">climate-smart agriculture</span>,
            high-integrity carbon removals, and thriving communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button
              onClick={() => goToPayment("pool")}
              className="px-8 py-4 rounded-2xl bg-yellow-400 text-green-900 font-semibold text-lg shadow-md hover:bg-yellow-300 transition"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Investment Selection */}
      <section
        id="investment"
        className="py-16 px-6 md:px-12 bg-green-50 rounded-xl shadow-lg max-w-4xl mx-auto mt-12"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
          Select Your Plot or Acre
        </h2>
        <p className="text-center mb-8 text-gray-700">
          Select the number of plots or acres you wish to invest in. Our system
          automatically groups investors into co-owner units to maximize
          efficiency and yields.
        </p>

        <form onSubmit={handleInvestmentSubmit} className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-semibold text-gray-800">Plots</label>
            <input
              type="number"
              min={1}
              value={plots}
              onChange={(e) => setPlots(Number(e.target.value))}
              className="w-full border rounded-xl p-3"
              placeholder="e.g., 1"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-800">Acres</label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={acres}
              onChange={(e) => setAcres(Number(e.target.value))}
              className="w-full border rounded-xl p-3"
              placeholder="e.g., 0.5"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-green-700 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-green-800 transition"
          >
            Acquire Your Plot
          </button>
        </form>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          Benefits of Co-Owning with SupreFarm
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li>✅ Affordable Entry: Start from as little as ₦100,000 / $100</li>
          <li>✅ Verified Ownership: Digital and secure land documents</li>
          <li>✅ Passive Income: Structured seasonal returns</li>
          <li>✅ Climate-Smart Farming: Sustainable agricultural practices</li>
          <li>✅ Community Impact: Empower local farmers & women</li>
          <li>✅ Diaspora Friendly: Manage investments online from anywhere</li>
        </ul>
        {/* Optional: make this section’s CTA lead to payment too */}
        <div className="text-center mt-10">
          <button
            onClick={() => goToPayment("pool")}
            className="inline-block px-6 py-3 rounded-full font-semibold shadow-md bg-yellow-400 text-green-900 border-2 border-yellow-400 hover:bg-yellow-300"
          >
            Start Now
          </button>
        </div>
      </section>

      {/* Outreach / Audience Segments (whole card clickable) */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {outreachBoxes.map((box, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => keyActivate(e, () => goToPayment(box.mode))}
              onClick={() => goToPayment(box.mode)}
              aria-label={`${box.cta} — goes to payment`}
              className={`${box.bgColor} p-8 rounded-xl shadow-lg cursor-pointer transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600`}
            >
              <h2 className={`text-2xl font-semibold mb-4 ${box.textColor}`}>{box.title}</h2>
              <p className={`text-lg mb-6 ${box.textColor} opacity-90`}>{box.description}</p>

              <div>
                <span
                  className={`inline-block px-6 py-3 rounded-full font-semibold shadow-md ${
                    box.bgColor === "bg-white"
                      ? "bg-green-700 text-white border-2 border-green-700"
                      : "bg-yellow-400 text-green-900 border-2 border-yellow-400"
                  }`}
                >
                  {box.cta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner Section (make each row a light CTA to payment) */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Why Partner With Us?
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {[green7, green8, green9, green10].map((img, i) => {
            const titles = [
              "Full Transparency",
              "Community Impact",
              "Seasonal Returns",
              "Diaspora Friendly",
            ];
            const icons = [<ShieldCheck key="a" />, <Users key="b" />, <BarChart3 key="c" />, <Globe key="d" />];
            const descriptions = [
              "Every co-ownership project comes with clear legal documentation, tech-enabled onboarding, and real-time monitoring so you always know where your money is and how it’s growing.",
              "We channel resources into local initiatives—empowering women, supporting smallholder farmers, and strengthening food security across communities.",
              "Your investments are aligned with crop harvest cycles, providing you with structured, predictable income and opportunities to reinvest for compounded growth.",
              "Whether you’re in Nigeria or abroad, you can invest, co-own land, and manage your projects entirely online with secure access to all your documents and reports.",
            ];

            return (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => keyActivate(e, () => goToPayment("pool"))}
                onClick={() => goToPayment("pool")}
                className="flex items-start gap-6 rounded-xl p-3 hover:bg-white hover:shadow-md cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-green-600"
                aria-label={`Learn more: ${titles[i]} — goes to payment`}
              >
                <img
                  src={img}
                  alt={titles[i]}
                  className="w-28 h-28 object-cover rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    {icons[i]}
                    {titles[i]}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{descriptions[i]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials (add subtle CTA) */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <blockquote className="max-w-3xl mx-auto text-center text-2xl font-medium text-gray-800 leading-relaxed border-l-4 border-green-600 pl-6 italic">
            “At Suprefarm, we believe farming should go beyond cultivation —
            it’s about empowering people, regenerating nature, and securing a sustainable future.”
          </blockquote>
          <button
            onClick={() => goToPayment("pool")}
            className="inline-block px-6 py-3 rounded-full font-semibold shadow-md bg-yellow-400 text-green-900 border-2 border-yellow-400 hover:bg-yellow-300"
          >
            Continue to Payment
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to partner for lasting impact?</h2>
        <p className="text-gray-700 mb-6">
          Contact us today to co-design your climate solutions with transparency and integrity at the core.
        </p>
        <button
          onClick={() => goToPayment("acquire")}
          className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition inline-block"
        >
          Secure Your Land
        </button>
      </section>
    </main>
  );
}
