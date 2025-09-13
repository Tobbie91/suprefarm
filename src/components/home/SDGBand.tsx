import Sdg2 from "../../assets/images/2.png";
import Sdg5 from "../../assets/images/5.png";
import Sdg8 from "../../assets/images/8.png";
import Sdg12 from "../../assets/images/12.png";
import Sdg13 from "../../assets/images/13.png";
import Sdg15 from "../../assets/images/15.png";

type SdgIcon = { id: number; alt: string; src: string };
const sdgIcons: SdgIcon[] = [
    { id: 2,  alt: "SDG 2 – Zero Hunger",                                  src: Sdg2  },
    { id: 5,  alt: "SDG 5 – Gender Equality",                              src: Sdg5  },
    { id: 8,  alt: "SDG 8 – Decent Work & Economic Growth",                src: Sdg8  },
    { id: 12, alt: "SDG 12 – Responsible Consumption & Production",        src: Sdg12 },
    { id: 13, alt: "SDG 13 – Climate Action",                              src: Sdg13 },
    { id: 15, alt: "SDG 15 – Life on Land",                                src: Sdg15 },
  ];
  

export default function SDGBand() {
  return (
    <section id="sdgs" className="py-20 px-6 md:px-12 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Supporting Global Sustainability</h3>
        <p className="text-gray-600 max-w-3xl mx-auto mt-2">
          Our climate-smart solutions directly contribute to achieving key UN Sustainable Development Goals,
          creating lasting positive impact for communities worldwide.
        </p>

        {/* Decorative band */}
        <div className="relative mt-8 rounded-[28px] bg-gradient-to-b from-amber-50/90 to-transparent">
          {/* soft orbs */}
          <div className="pointer-events-none absolute -left-8 bottom-6 h-24 w-24 rounded-full bg-amber-200/50 blur-xl" />
          <div className="pointer-events-none absolute -right-6 -top-4 h-20 w-20 rounded-full bg-amber-200/50 blur-xl" />

          {/* Scroll row (mobile) / centered wrap (desktop) */}
          <div className="relative px-4 sm:px-6 py-6">
            <div className="flex gap-5 sm:gap-6 overflow-x-auto md:overflow-x-visible md:flex-wrap md:justify-center snap-x">
              {sdgIcons.map((it) => (
                <div
                  key={it.id}
                  className="snap-start shrink-0 rounded-2xl bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04)] border border-gray-200/70 p-3 sm:p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain select-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for WebKit/Firefox */}
      <style>{`
        #sdgs .overflow-x-auto { scrollbar-width: none; }
        #sdgs .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
