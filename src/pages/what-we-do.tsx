

import { Link } from "react-router-dom";
import {
  Leaf,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  Map,
  CheckCircle,
  FileText,
  Zap,
  BarChart2,
  Handshake,
} from "lucide-react";
import { PlayCircle } from "lucide-react";

import green6 from "../assets/images/green6.webp";
import green7 from "../assets/images/green7.webp";
import green8 from "../assets/images/green8.webp";
import green9 from "../assets/images/green9.webp";
import green10 from "../assets/images/green10.webp";
import { useEffect, useState } from "react";

// Our Process (What We Do)
const processSteps = [
  {
    title: "Community Onboarding & Eligibility",
    desc: "We meet community leaders, invite interested farmers, and verify eligible plots for co-ownership.",
  },
  {
    title: "Plot Verification & Mapping",
    desc: "Each plot is validated and mapped (boundaries, soil & water context) to ensure clean, traceable inventory.",
  },
  {
    title: "Digital Onboarding & KYC",
    desc: "Co-owners complete light KYC and e-sign docs. Farmers are grouped for training and simple coordination.",
  },
  {
    title: "Inputs & Training",
    desc: "Seedlings, inputs, and tools are distributed alongside training on climate-smart, regenerative practices.",
  },
  {
    title: "Field Monitoring & Risk Alerts",
    desc: "Satellite + field data track growth, soil, and risks; we act quickly on pest, flood, or drought signals.",
  },
  {
    title: "Harvest, Payouts & Reporting",
    desc: "Produce is aggregated and sold; co-owners receive seasonal reports and payouts with transparent metrics.",
  },
];


const WhatWeDoPage = () => {
  const heroPoster = green6;
  const heroMp4: string | undefined = undefined;
  const heroWebm: string | undefined = undefined;
  const USE_DUMMY_MEDIA = true as const;
  const [, setHeroLightbox] = useState(false);

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

  const prefersReduced = usePrefersReducedMotion();
  const canPlayVideo =
    !prefersReduced && !USE_DUMMY_MEDIA && (heroMp4 || heroWebm);
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HERO ================= */}

      <section
        className="relative h-[90vh] min-h-[560px] flex flex-col items-center justify-center text-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background media */}
        {canPlayVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-hidden
          >
            {heroWebm && <source src={heroWebm} type="video/webm" />}
            {heroMp4 && <source src={heroMp4} type="video/mp4" />}
          </video>
        ) : (
          <img
            src={heroPoster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        )}

        {/* Contrast overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(255,255,255,0.12),rgba(255,255,255,0)_70%)]" />

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Our Work
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white leading-relaxed">
            Choose plots. We run the farm. You get transparent updates and
            seasonal returns aligned with people and planet.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setHeroLightbox(true)}
          className="absolute bottom-6 right-6 z-10 inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/90 hover:bg-white shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          aria-label={
            canPlayVideo ? "Play overview video" : "Video coming soon"
          }
          title={canPlayVideo ? "Play overview video" : "Video coming soon"}
        >
          <PlayCircle className="h-8 w-8 text-emerald-700" />
        </button>
      </section>

      {/* ================= TRANSPARENT CO-OWNERSHIP (moved up) ================= */}
      <section
        className="py-24 px-6 md:px-16 bg-white"
        aria-labelledby="coown-heading"
      >
               <h3 className="lg:text-4xl text-3xl font-bold mb-10 text-center">What We Do</h3>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
 
          <div>
            <h2
              id="coown-heading"
              className="text-3xl md:text-4xl font-bold text-green-800 mb-6"
            >
              Transparent Co-Ownership
            </h2>
            <p className="text-gray-700 mb-6">
              Trust is the foundation of investment. Our co-ownership model
              gives every partner a clear, traceable stake in the projects they
              support.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-green-700 mt-0.5" />
                <span>
                  <span className="font-semibold">
                    Clear Legal Documentation
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-green-700 mt-0.5" />
                <span>
                  <span className="font-semibold">Tech-Enabled Onboarding</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart2 className="w-5 h-5 text-green-700 mt-0.5" />
                <span>
                  <span className="font-semibold">Real-Time Monitoring</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Handshake className="w-5 h-5 text-green-700 mt-0.5" />
                <span>
                  <span className="font-semibold">Shared Growth</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
            <img
              src={green7}
              alt="Signed co-ownership documents and a digital dashboard showing project status"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ================= CLIMATE-SMART FARMING ================= */}
      <section
        className="py-24 px-6 md:px-16 bg-green-50"
        aria-labelledby="csf-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
            <img
              src={green8}
              alt="Farmer preparing seedlings in a shaded nursery, part of climate-smart farming"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <h2
              id="csf-heading"
              className="text-3xl md:text-4xl font-bold text-green-800 mb-6"
            >
              Climate-Smart Farming
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We help farmers adapt to climate change, reduce emissions, and
              grow resilient livelihoods.
            </p>
            <ul className="space-y-4">
              <li>
                <CheckCircle className="inline w-5 h-5 text-green-700 mr-2" />
                <span className="font-semibold text-green-700">
                  Adaptation
                </span>{" "}
                – tools to cope with floods, droughts, and weather shifts.
              </li>
              <li>
                <CheckCircle className="inline w-5 h-5 text-green-700 mr-2" />
                <span className="font-semibold text-green-700">
                  Mitigation
                </span>{" "}
                – regenerative farming, agroforestry, carbon capture.
              </li>
              <li>
                <CheckCircle className="inline w-5 h-5 text-green-700 mr-2" />
                <span className="font-semibold text-green-700">Equity</span> –
                fair access to resources, markets, and knowledge.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY EMPOWERMENT ================= */}
      <section
        className="py-24 px-6 md:px-16 bg-white"
        aria-labelledby="community-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
            <img
              src={green9}
              alt="Women farmers and smallholders collaborating at a community training session"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <h2
              id="community-heading"
              className="text-3xl md:text-4xl font-bold text-green-800 mb-6"
            >
              Community Empowerment
            </h2>
            <p className="text-gray-700 mb-6">
              Sustainability is about people. We invest in women, smallholders,
              and local initiatives to create thriving communities.
            </p>
            <ul className="space-y-3">
              <li>👩‍🌾 Women-Led Initiatives</li>
              <li>🌱 Smallholder Support</li>
              <li>🥗 Food Security Programs</li>
              <li>📚 Education & Knowledge Sharing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SEASONAL RETURNS ================= */}
      <section
        className="py-24 px-6 md:px-16 bg-green-50"
        aria-labelledby="returns-heading"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="returns-heading"
              className="text-3xl md:text-4xl font-bold text-green-800 mb-6"
            >
              Seasonal Returns
            </h2>
            <p className="text-gray-700 mb-6">
              Agriculture thrives in cycles, and so do your investments.
              Seasonal returns mean predictable income, reinvestment, and shared
              prosperity.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-green-600" />
                <span>Aligned with Harvest Seasons</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-green-600" />
                <span>Predictable Income</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <span>Compounding Growth</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-green-600" />
                <span>Farmer-Investor Synergy</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
              <img
                src={green10}
                alt="Harvest logistics prepared for market to drive seasonal yield"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4 w-40 text-center">
              <h3 className="text-lg font-bold text-green-700">15–25%</h3>
              <p className="text-xs text-gray-600">Avg. Seasonal Yield</p>
            </div>
          </div>
        </div>
      </section>

      {/* =============== OUR PROCESS =============== */}
<section id="our-process" className="py-20 px-6 md:px-16 bg-white scroll-mt-24">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-emerald-800">Our Process</h3>
      <p className="text-gray-700 mt-2">
        A clear, end to end path from onboarding communities to transparent reporting and seasonal payouts.
      </p>
    </div>

    <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {processSteps.map((s, idx) => {
        const icons = [Handshake, Map, FileText, Leaf, BarChart2, DollarSign] as const;
        const Icon = icons[idx % icons.length];
        const stepNo = String(idx + 1).padStart(2, "0");
        return (
          <li key={s.title} className="group relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            {/* number + icon */}
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-semibold shadow ring-1 ring-white/60">
                {stepNo}
              </span>
              <span className="inline-flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 p-2">
                <Icon className="h-5 w-5" />
              </span>
            </div>

            {/* copy */}
            <h4 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h4>
            <p className="mt-1 text-gray-700">{s.desc}</p>

            {/* subtle footer chip */}
            <div className="mt-4">
              <span className="inline-block text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Step {idx + 1} of {processSteps.length}
              </span>
            </div>
          </li>
        );
      })}
    </ol>

    {/* optional: CTA below the grid */}
    <div className="mt-8 text-center">
      <Link to="/projects" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/60">
        See opportunities
      </Link>
    </div>
  </div>
</section>


      {/* ================= IMPACT STATS ================= */}
      <section
        className="py-24 bg-white text-center"
        aria-labelledby="impact-heading"
      >
        <h2
          id="impact-heading"
          className="text-3xl md:text-4xl font-bold text-green-800 mb-12"
        >
          Our Impact in Numbers
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-green-50 rounded-2xl shadow-md">
            <Map className="mx-auto w-8 h-8 text-green-600 mb-3" />
            <p className="text-4xl font-bold text-green-700">15+</p>
            <p className="text-gray-700">Acres of Farmland</p>
          </div>

          <div className="p-6 bg-green-50 rounded-2xl shadow-md">
            <DollarSign className="mx-auto w-8 h-8 text-green-600 mb-3" />
            <p className="text-4xl font-bold text-green-700">60%</p>
            <p className="text-gray-700">Reinvested in Communities</p>
          </div>

          <div className="p-6 bg-green-50 rounded-2xl shadow-md">
            <Users className="mx-auto w-8 h-8 text-green-600 mb-3" />
            <p className="text-4xl font-bold text-green-700">200+</p>
            <p className="text-gray-700">Women Empowered</p>
          </div>

          <div className="p-6 bg-green-50 rounded-2xl shadow-md">
            <CheckCircle className="mx-auto w-8 h-8 text-green-600 mb-3" />
            <p className="text-4xl font-bold text-green-700">100%</p>
            <p className="text-gray-700">Traceable Projects</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="py-24 bg-green-700 text-center text-white"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
          Partner With Us
        </h2>
        <p className="max-w-xl mx-auto text-white/90 mb-10">
          Join us in building climate-resilient farms, empowering communities,
          and creating lasting impact.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-400 text-green-900 px-8 py-3 rounded-full font-semibold shadow-md"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default WhatWeDoPage;
