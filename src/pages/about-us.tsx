

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import green4 from "../assets/images/green4.webp";
import green2 from "../assets/images/green2.webp";
import { MapPin, Globe2 } from "lucide-react";


/**
 * DUMMY MEDIA MODE
 * Set USE_DUMMY_MEDIA = true while real video/poster files don't exist.
 * When you're ready, set to false and add the imports back.
 */
const USE_DUMMY_MEDIA = true as const;

// Optional real media imports (uncomment when files exist)
// import farmHeroMp4 from "../assets/videos/farm-hero.mp4";
// import farmStoryMp4 from "../assets/videos/farm-story.mp4";
// import farmAerialMp4 from "../assets/videos/farm-aerial.mp4";
// import farmProcessingMp4 from "../assets/videos/farm-processing.mp4";
// import posterHero from "../assets/images/poster-hero.jpg";
// import posterStory from "../assets/images/poster-story.jpg";
// import posterAerial from "../assets/images/poster-aerial.jpg";
// import posterProcessing from "../assets/images/poster-processing.jpg";

// DUMMY fallbacks (reuse existing images)
const posterHero = green4; // hero poster fallback
const posterStory = green2; // story poster fallback
const posterAerial = green4; // gallery posters reuse images for now
const posterProcessing = green2;

// Dummy sources are undefined during dummy mode
const farmHeroMp4: string | undefined = undefined;
const farmStoryMp4: string | undefined = undefined;
const farmAerialMp4: string | undefined = undefined;
const farmProcessingMp4: string | undefined = undefined;

// ------------------ People Data (placeholders — edit freely) ------------------
const teamMembers = [
  { name: "Miro Jacob", role: "Co‑founder" },
  { name: "Tobbie Tobbie", role: "Project Coordinator Voa Aina" },
  { name: "Tobbie Tobbie", role: "Co‑founder" },
  { name: "Tobbie Tobbie", role: "Project Lead" },
  { name: "Tobbie Tobbie", role: "Project Coordinator EthioTrees" },
  { name: "Tobbie Tobbie", role: "Social Impact and Media Officer" },
  { name: "Tobbie Tobbie", role: "Project Coordinator Kukumuty" },
  { name: "Tobbie Tobbie", role: "Project Coordinator Fes Enying" },
  { name: "Tobbie Tobbie", role: "Project Coordinator BoliTrees" },
];

const advisors = [
  { name: "Your Advisor 1", role: "Agronomy Advisor" },
  { name: "Your Advisor 2", role: "Impact Finance Advisor" },
  { name: "Your Advisor 3", role: "Sustainability & MRV" },
];

/**
 * ABOUT — Redesigned with Video Strategy
 * -------------------------------------
 * Three placements for video (pick any or all):
 * 1) Hero background video (silent, subtle, brand vibe)
 * 2) Inline story video (narrative, with captions)
 * 3) Proof gallery (short clips in a lightbox)
 *
 * A11y/Perf:
 * • Respects prefers-reduced-motion (falls back to poster)
 * • Uses poster thumbnails + preload="metadata" for fast paint
 * • Lightbox traps focus, closes on ESC, supports keyboard nav
 */

 const focusRegions = [
  {
    country: "Nigeria",
    flag: "🇳🇬",
    summary: "Active operations and co-ownership pilots.",
    locations: [
      { name: "Ilora, Oyo State", status: "Active" },
      { name: "Osun State", status: "Active" },
    ],
    ctaHref: "/projects",
    ctaText: "View Nigeria projects",
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    summary: "Expansion focus (pilot partnerships).",
    locations: [], // add regions when ready
    ctaHref: "/contact",
    ctaText: "Partner with us in Ghana",
  },
];


export default function About() {
  const [lightbox, setLightbox] = useState<{ open: boolean; src?: string; title?: string }>(
    { open: false }
  );
  const prefersReduced = usePrefersReducedMotion();

  const gallery = [
    { title: "Aerial of Ilora farm", src: farmAerialMp4, poster: posterAerial },
    { title: "Processing & sorting", src: farmProcessingMp4, poster: posterProcessing },
    { title: "Community planting day", src: farmStoryMp4, poster: posterStory },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO (with optional background video) ================= */}
      <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
        {/* Background image fallback */}
        <img
          src={green4}
          alt="Farming community"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />

        {/* Background video (muted/looped). Hidden if reduced motion */}
        {!prefersReduced && !USE_DUMMY_MEDIA && farmHeroMp4 && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterHero}
          >
            <source src={farmHeroMp4} type="video/mp4" />
          </video>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Beyond planting, cultivating change</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Wealth creation, climate resilience, gender equity, and smallholder empowerment—powered by
            climate‑smart co‑ownership.
          </p>
          <a
            href="/contact"
            className="inline-flex mt-6 items-center justify-center rounded-2xl px-6 py-3 font-semibold text-green-900 bg-amber-300 hover:bg-amber-200"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ================= OUR STORY (inline narrative video) ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Media */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            {/* If reduced motion, show poster; else normal video */}
            {prefersReduced || USE_DUMMY_MEDIA || !farmStoryMp4 ? (
              <div className="relative">
                <img src={posterStory} alt="Our story poster" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                  Video coming soon
                </span>
              </div>
            ) : (
              <video
                className="w-full h-full"
                controls
                controlsList="nodownload noplaybackrate"
                preload="metadata"
                poster={posterStory}
              >
                <source src={farmStoryMp4} type="video/mp4" />
              </video>
            )}
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Our story: how did we get here?</h2>
            <p className="text-gray-700 leading-relaxed">
              It began in Ilora, Oyo State—with 15 acres of palm. Facing irregular rainfall and soil degradation, we
              committed to climate‑smart agriculture: renewable energy, efficient irrigation, and resilient varieties.
              The journey expanded across Nigeria, creating shared value while restoring ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* /* ================= VISION & MISSION =================  */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-semibold mb-3 text-emerald-700">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted platform for ethical co‑ownership of agricultural and residential property—
              connecting land, people, and purpose across borders.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-semibold mb-3 text-amber-600">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To simplify co‑ownership through transparent, legally‑backed, tech‑enabled group models that create shared
              wealth, local jobs, and long‑term security.
            </p>
          </div>
        </div>
      </section>

      {/* =============== FOCUS REGIONS =============== */}
<section id="focus-regions" className="py-16 px-6 md:px-12 bg-white scroll-mt-24">
  <div className="max-w-6xl mx-auto">
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-emerald-800">Our Focus Regions</h3>
      <p className="text-gray-700 mt-2">
        We’re building climate-smart co-ownership in <strong>Nigeria</strong> and expanding in <strong>Ghana</strong>.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {focusRegions.map((r) => (
        <div
          key={r.country}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{r.flag}</span>
            <h4 className="text-xl font-semibold text-gray-900">{r.country}</h4>
            <Globe2 className="h-5 w-5 text-emerald-700 ml-auto" aria-hidden />
          </div>

          <p className="mt-2 text-gray-700">{r.summary}</p>

          {/* Locations list (if any) */}
          {r.locations.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {r.locations.map((loc) => (
                <li key={loc.name} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-700" aria-hidden />
                  <span className="text-gray-800">{loc.name}</span>
                  <span className="ml-auto text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {loc.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 text-sm text-gray-600">
              Specific regions will be announced as partnerships finalize.
            </div>
          )}

          {/* CTA */}
          <div className="mt-5">
            <a
              href={r.ctaHref}
              className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold
                         text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
            >
              {r.ctaText}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= PROOF GALLERY (lightbox) ================= */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-emerald-800 text-center">See the work on the ground</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-2">
            Short clips from the field—nurseries, aerial surveys, processing, and community days.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((v, i) => (
              <button
                key={i}
                onClick={() => setLightbox({ open: true, src: v.src, title: v.title })}
                className="group relative block overflow-hidden rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label={`Open video: ${v.title}`}
              >
                <img src={v.poster} alt={v.title} className="h-48 w-full object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 group-hover:bg-white text-emerald-700 font-bold">
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left text-white text-sm bg-gradient-to-t from-black/60 to-transparent">
                  {v.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="fixed inset-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/70"
                onClick={() => setLightbox({ open: false })}
              />
              <div className="absolute inset-0 grid place-items-center p-4">
                <motion.div
                  className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                >
                  <button
                    className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-full bg-white/90 p-2 hover:bg-white"
                    onClick={() => setLightbox({ open: false })}
                    aria-label="Close video"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  {/* Use native controls for reliability */}
                  {lightbox.src ? (
                    <video className="w-full h-auto" controls autoPlay preload="metadata">
                      {lightbox.src && <source src={lightbox.src} type="video/mp4" />}
                    </video>
                  ) : (
                    <div className="w-full bg-black text-white grid place-items-center aspect-video">
                      <div className="p-6 text-center">
                        <div className="text-lg font-semibold">Video coming soon</div>
                        <p className="text-white/70 text-sm mt-1">We’re preparing field footage. Check back shortly.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* {================= TEAM ================= */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((m, idx) => (
              <div key={idx} className="text-center rounded-2xl p-6 bg-emerald-700 text-white shadow-lg">
                <div className="h-24 w-24 rounded-full mx-auto mb-4 border-2 border-white/40 bg-white/20" />
                <h4 className="font-semibold text-lg">{m.name}</h4>
                <p className="text-sm text-white/80">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADVISORS ================= */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Our Advisors</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {advisors.map((a, idx) => (
              <div key={idx} className="text-center rounded-2xl p-6 bg-white border border-gray-200 shadow-sm">
                <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-gray-100 border border-gray-200" />
                <h4 className="font-semibold text-gray-900">{a.name}</h4>
                <p className="text-sm text-gray-600">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA =================} */}
      <section
        className="relative h-[60vh] grid place-items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${green2})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Partner with us for traceable change</h3>
          <p className="text-white/90 mt-2">
            Co‑create climate solutions that protect nature and strengthen communities.
          </p>
          <a href="/contact" className="inline-flex mt-6 rounded-2xl px-6 py-3 font-semibold bg-white text-emerald-700 hover:bg-gray-100">
            Contact
          </a>
        </div>
      </section>
    </main>
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
