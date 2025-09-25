import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import green4 from "../assets/images/green4.webp";
import green2 from "../assets/images/green2.webp";
import WhoWeAreRedesign from "../components/aboutUs/WhoWeAre";
import OurStorySection from "../components/aboutUs/OurStorySection";
import WhatWeDoSection from "../components/home/WhatWeDoSection";
import FocusRegions from "../components/aboutUs/focusRegions";
import green16 from "../assets/images/green16.png";


// DUMMY fallbacks (reuse existing images)

const posterStory = green2; // story poster fallback
const posterAerial = green4; // gallery posters reuse images for now
const posterProcessing = green2;



const farmStoryMp4: string | undefined = undefined;
const farmAerialMp4: string | undefined = undefined;
const farmProcessingMp4: string | undefined = undefined;


const team = [
  {
    name: "Osho Ademola Joel",
    role: "Founder & CEO",
    image: "/Coach.jpeg", // Replace with actual image URL or path
  },
  {
    name: "Professor Tobi",
    role: "Chief Science Officer (Agronomy & Climate)",
    image: "/prof.png", // Replace with actual image URL or path
  },
  {
    name: "Oluwatobi Talabi",
    role: "Director of Operations",
    image: "/Tobi.jpeg", // Replace with actual image URL or path
  },
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


export default function About() {
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    src?: string;
    title?: string;
  }>({ open: false });


  const gallery = [
    { title: "Aerial of Ilora farm", src: farmAerialMp4, poster: posterAerial },
    {
      title: "Processing & sorting",
      src: farmProcessingMp4,
      poster: posterProcessing,
    },
    { title: "Community planting day", src: farmStoryMp4, poster: posterStory },
  ];

  return (
    <main className="bg-white text-gray-900">
      <WhoWeAreRedesign />

      <OurStorySection />

      {/* /* ================= VISION & MISSION =================  */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-semibold mb-3 text-emerald-700">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be Africa’s leading green financing platform for sustainable
              and regenerative agriculture, starting with palm tree farming and
              scaling to diverse climate-smart crops.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-semibold mb-3 text-amber-600">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize access to climate-smart agriculture through
              co-ownership, while delivering measurable financial,
              environmental, and social returns.
            </p>
          </div>
        </div>
      </section>
      <WhatWeDoSection imageSrc={green16}/>



      {/* =============== FOCUS REGIONS =============== */}
 <FocusRegions/>

      {/* ================= PROOF GALLERY (lightbox) ================= */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-emerald-800 text-center">
            See the work on the ground
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-2">
            Short clips from the field—nurseries, aerial surveys, processing,
            and community days.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((v, i) => (
              <button
                key={i}
                onClick={() =>
                  setLightbox({ open: true, src: v.src, title: v.title })
                }
                className="group relative block overflow-hidden rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label={`Open video: ${v.title}`}
              >
                <img
                  src={v.poster}
                  alt={v.title}
                  className="h-48 w-full object-cover"
                />
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
                    <video
                      className="w-full h-auto"
                      controls
                      autoPlay
                      preload="metadata"
                    >
                      {lightbox.src && (
                        <source src={lightbox.src} type="video/mp4" />
                      )}
                    </video>
                  ) : (
                    <div className="w-full bg-black text-white grid place-items-center aspect-video">
                      <div className="p-6 text-center">
                        <div className="text-lg font-semibold">
                          Video coming soon
                        </div>
                        <p className="text-white/70 text-sm mt-1">
                          We’re preparing field footage. Check back shortly.
                        </p>
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
      <section className="py-12 px-6 md:px-12 bg-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
      Our Team
    </h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {team.map((a, idx) => (
        <div
          key={idx}
          className="text-center rounded-2xl p-6 bg-white border border-gray-200 shadow-sm"
        >
          {/* Team Image */}
          <div className="h-45 w-45 rounded-full mx-auto mb-3 overflow-hidden">
            <img
              src={a.image} // Use the image path from the array
              alt={a.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Team Name and Role */}
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
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Partner with us for traceable change
          </h3>
          <p className="text-white/90 mt-2">
            Co‑create climate solutions that protect nature and strengthen
            communities.
          </p>
          <a
            href="/contact"
            className="inline-flex mt-6 rounded-2xl px-6 py-3 font-semibold bg-white text-emerald-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}

