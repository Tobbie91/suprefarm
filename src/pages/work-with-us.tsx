
import type { KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Users, BarChart3, Globe, ArrowRight } from "lucide-react";
import green7 from "../assets/images/green7.webp";
import green8 from "../assets/images/green8.webp";
import green9 from "../assets/images/green9.webp";
import green10 from "../assets/images/green10.webp";
import SuprefarmSimulator from "../components/home/simultor";

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
    title: "Join from the Diaspora",
    description:
      "Start remotely, co-own verified farmland, and receive transparent updates without being on the ground.",
    cta: "Start as a Diaspora Investor",
    mode: "pool",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    buttonStyle: "text-green-700 border-green-700 hover:bg-green-50",
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

  const navigate = useNavigate();
  const APP_URL = "https://suprefarmapp.netlify.app/login";
  // Single helper to send users to payment with params
  function goToPayment(
    mode: Mode = "pool",
    extras?: Record<string, string | number>
  ) {
    const params = new URLSearchParams({ mode });
    if (extras) {
      Object.entries(extras).forEach(([k, v]) => params.set(k, String(v)));
    }
    navigate(`/payment?${params.toString()}`);
  }

  const keyActivate = (e: KeyboardEvent, fn: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 px-6 md:px-12 text-center relative mb-[4em]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            How <span className="text-yellow-400">It Works</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Pick plots with <span className="font-semibold">Suprefarm</span>,
            verify ownership, and monitor your farm’s progress, turning
            <span className="underline decoration-yellow-400">
              {" "}
              real impact
            </span>{" "}
            into
            <span className="text-yellow-400 font-medium">
              {" "}
              climate-smart results
            </span>{" "}
            and shared value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 ">
            <Link
              to="/projects"
              aria-label="Browse farm opportunities"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
             bg-emerald-600 text-white font-semibold shadow-sm
             hover:bg-emerald-700 transition
             focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50"
            >
              Browse Farm Opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Selection */}
      <SuprefarmSimulator />

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

      {/* Outreach / Audience Segments (whole card clickable) */}

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {outreachBoxes.map((box, idx) => {
            const link = `${APP_URL}?mode=${box.mode}`;
            return (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${box.cta} — opens Suprefarm app`}
                className={`${box.bgColor} p-8 rounded-xl shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600 block`}
              >
                <h2 className={`text-2xl font-semibold mb-4 ${box.textColor}`}>
                  {box.title}
                </h2>
                <p className={`text-lg mb-6 ${box.textColor} opacity-90`}>
                  {box.description}
                </p>

                <span
                  className={`inline-block px-6 py-3 rounded-full font-semibold shadow-md border ${
                    box.bgColor === "bg-white"
                      ? "bg-green-700 text-white border-green-700 hover:bg-green-600"
                      : "bg-yellow-400 text-green-900 border-yellow-400 hover:bg-yellow-300"
                  }`}
                >
                  {box.cta}
                </span>
              </a>
            );
          })}
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
            const icons = [
              <ShieldCheck key="a" />,
              <Users key="b" />,
              <BarChart3 key="c" />,
              <Globe key="d" />,
            ];
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
                  <p className="text-gray-700 leading-relaxed">
                    {descriptions[i]}
                  </p>
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
            it’s about empowering people, regenerating nature, and securing a
            sustainable future.”
          </blockquote>

          <Link
            to="/projects"
            aria-label="Browse farm opportunities"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
             bg-emerald-600 text-white font-semibold shadow-sm
             hover:bg-emerald-700 transition
             focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to partner for lasting impact?
        </h2>
        <p className="text-gray-700 mb-6">
          Contact us today to co-design your climate solutions with transparency
          and integrity at the core.
        </p>

        <a
          href="https://suprefarmapp.netlify.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition"
        >
          Secure Your Land
        </a>
      </section>
    </main>
  );
}
