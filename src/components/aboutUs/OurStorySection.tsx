import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sprout, Leaf } from "lucide-react";
import green6 from "../../assets/images/vid.jpg";


const USE_DUMMY_MEDIA = true as const; 

export default function OurStorySection() {
  const farmStoryMp4: string | undefined = undefined;

  const prefersReduced = usePrefersReducedMotion();
  const showPoster = Boolean(prefersReduced || USE_DUMMY_MEDIA || !farmStoryMp4);

  const TAGS = [
    { icon: <MapPin className="h-4 w-4" />, text: "Ilora, Oyo State" },
    { icon: <Sprout className="h-4 w-4" />, text: "Palm + Intercropping" },
    { icon: <Leaf className="h-4 w-4" />, text: "Climate‑smart practices" },
  ];

  const BULLETS = [
    "Started with 90 plots; established palm plantation with intercrops (cassava, maize).",
    "Scaled across states; empowering smallholders and improving food security.",
    "Introduced AI + satellite tools for performance, soil health, and carbon tracking.",
    "Next 5 years: 50,000 acres • ~3,000,000 palm trees • measurable climate impact.",
  ];

  return (
<section className="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-b from-emerald-50/30 to-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-center">
    {/* Media */}
    <motion.figure
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="relative md:col-span-6 lg:col-span-6 rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-xl h-full"
    >
      <div className="relative h-full">
        {showPoster ? (
          <div className="relative h-full">
            <img
              src={green6}
              alt="Our story poster"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "16 / 9" }}
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
              Video coming soon
            </span>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16 / 9" }}
            controls
            controlsList="nodownload noplaybackrate"
            preload="metadata"
            poster={green6}
          >
            <source src={farmStoryMp4} type="video/mp4" />
          </video>
        )}
      </div>
      <figcaption className="flex flex-wrap gap-2 p-4 border-t border-emerald-100 bg-white/95">
        {TAGS.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-800"
          >
            {t.icon}
            {t.text}
          </span>
        ))}
      </figcaption>
    </motion.figure>

    {/* Copy */}
    <div className="md:col-span-6 lg:col-span-6">
      <div className="text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-emerald-700 text-sm font-medium mx-auto md:mx-0">
          Our story
        </div>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          How did we get here?
        </h2>
        <p className="mt-4 text-base md:text-md leading-relaxed text-gray-700">
          Our journey began with a bold vision: secure land collaboratively, empower smallholders, and build
          climate‑smart farms that create both returns and resilience. Starting in Ilora, Oyo State, we set up a
          palm plantation and invited intercrops between the rows to support livelihoods and food security.
        </p>
        <p className="mt-4 text-base md:text-md leading-relaxed text-gray-700">
          As momentum grew, we expanded the model to more states and introduced technology AI and satellite to
          monitor performance, optimize yields, and track carbon sequestration. With transparent dashboards,
          co‑owners see progress in real time.
        </p>

        {/* Bulleted highlights */}
        <ul className="mt-6 space-y-3">
          {BULLETS.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-800">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-sm md:text-md leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="/what-we-do"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/40"
          >
            Explore our work <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="https://suprefarmapp.netlify.app/login"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-gray-300 text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/30"
          >
            Secure Your Land
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

// SSR-safe prefers-reduced-motion hook with older browser fallback
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
  