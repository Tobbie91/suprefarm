const logos = [
  { alt: "Supretech", src: "/partners/leadway.svg" },
  { alt: "Wesssist Virtul", src: "/partners/gigm.svg" },
  { alt: "Olaronke", src: "/partners/gain.svg" },
  { alt: "Beafrique", src: "/partners/mtn.svg" },
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-900">Our Partners</h3>
        <p className="text-sm md:text-base text-gray-600 mt-2">Working together for a resilient future</p>

        {/* Thin pill strip with scrolling logos */}
        <div className="mt-8">
          <div className="group relative mx-auto max-w-6xl overflow-hidden  bg-gray-50/80 backdrop-blur-sm">
            {/* Edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50/90 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50/90 to-transparent" />

            {/* Track */}
            <div className="marquee flex items-center gap-10 py-4 select-none">
              {/* Duplicate once for a seamless loop */}
              {[...Array(2)].map((_, loopIdx) => (
                <div className="flex items-center gap-10" key={loopIdx}>
                  {logos.map((logo, i) => (
                    <img
                      key={`${loopIdx}-${i}`}
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local styles for the marquee animation & hover pause */}
      <style>{`
        @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee { width: max-content; animation: scroll-x 22s linear infinite; }
        .group:hover .marquee { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
