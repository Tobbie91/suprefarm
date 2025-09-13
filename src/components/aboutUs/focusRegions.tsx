// FocusRegions.tsx

import { MapPin, Globe2 } from "lucide-react";

const focusRegions = [
  {
    flag: "🇳🇬",
    country: "Nigeria",
    summary:
      "Current projects in Oyo State across Ilora, Ilaji, and Isehin.",
    locations: [
      { name: "Ilora",  status: "active" },
      { name: "Ilaji",  status: "active" },
      { name: "Isehin", status: "active" }, // use "Iseyin" if that's the spelling you prefer
    ],
    ctaHref: "/projects",
    ctaText: "See Nigeria projects",
  },
];

export default function FocusRegions() {
  return (
    <section id="focus-regions" className="py-16 px-6 md:px-12 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-800">
            Our Projects Locations
          </h3>
          <p className="text-gray-700 mt-2">
            We’re building climate-smart co-ownership in <strong>Nigeria</strong>.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
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

              {/* Locations list */}
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

              {/* CTA */}
              <div className="mt-5">
                <a
                  href={r.ctaHref}
                  className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
                >
                  {r.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
