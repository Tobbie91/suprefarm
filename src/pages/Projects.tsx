// import green11 from "../assets/images/green11.webp";
// import green12 from "../assets/images/green12.webp";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// // Custom green marker
// const markerIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [30, 45],
//   iconAnchor: [15, 45],
// });

// export default function Projects() {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="bg-green-900 text-white py-24 px-6 md:px-12 text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/organic-paper.png')]"></div>
//         <div className="max-w-5xl mx-auto relative z-10">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
//             Where We <span className="text-yellow-400">Work</span>
//           </h1>
//           <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
//             From <span className="font-semibold">Africa</span> to{" "}
//             <span className="font-semibold">South America</span>, our projects
//             are tackling climate change through{" "}
//             <span className="underline decoration-yellow-400">
//               community-driven solutions
//             </span>
//             .
//           </p>
//         </div>
//       </section>

//       {/* 🌍 Map Section */}
//       <section className="py-20 px-6 md:px-12">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">
//             Our Global Presence
//           </h2>
//           <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
//             Explore our key project locations where climate action meets
//             sustainable development.
//           </p>

//           <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
//             <MapContainer
//               center={[7.5, -1.5]}
//               zoom={5}
//               scrollWheelZoom={false}
//               className="h-full w-full"
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//               />

//               {/* Nigeria */}
//               <Marker position={[7.6833, 3.85]} icon={markerIcon}>
//                 <Popup>
//                   <strong>Ilora, Nigeria</strong> <br />
//                   15 hectares of palm trees under a transparent co-ownership
//                   model.
//                 </Popup>
//               </Marker>

//               {/* Ghana */}
//               <Marker position={[6.7, -1.6]} icon={markerIcon}>
//                 <Popup>
//                   <strong>Kumasi, Ghana</strong> <br />
//                   Palm tree projects empowering communities through sustainable
//                   farming.
//                 </Popup>
//               </Marker>
//             </MapContainer>
//           </div>
//         </div>
//       </section>

//       {/* 🌱 Regional Focus */}
//       <section className="py-20 px-6 md:px-12 bg-gray-50">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
//           Our Focus Regions
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {[
//             {
//               region: "Nigeria",
//               description:
//                 "In Ilora, Nigeria, we manage 15 hectares of palm trees under a transparent co-ownership model, where every stakeholder has clear visibility of growth, yields, and shared benefits.",
//               image: green11,
//             },
//             {
//               region: "Ghana",
//               description:
//                 "In Ghana, our projects center around palm tree cultivation, empowering communities through sustainable farming practices. Farmers and co-owners benefit from transparent systems that ensure shared growth and long-term stewardship.",
//               image: green12,
//             },
//           ].map((region, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition"
//             >
//               <img
//                 src={region.image}
//                 alt={region.region}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-green-700">
//                   {region.region}
//                 </h3>
//                 <p className="text-gray-700 mt-3 leading-relaxed">
//                   {region.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 💡 Local Impact */}
//       <section className="py-20 px-6 md:px-12 bg-green-50">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">
//             Local Impact
//           </h2>
//           <p className="text-lg leading-relaxed mb-12 text-gray-700 max-w-3xl mx-auto">
//             In each region, we collaborate with local communities, governments,
//             and organizations to ensure our projects bring{" "}
//             <span className="font-semibold">lasting benefits</span> for people
//             and the environment.
//           </p>

//           <div className="grid md:grid-cols-2 gap-10">
//             {[
//               {
//                 quote:
//                   "We are seeing positive changes in our community thanks to the climate action programs supported by Suprefarm.",
//                 name: "Adebayo Adekunle",
//                 role: "Local Farmer, Nigeria",
//               },
//               {
//                 quote:
//                   "Suprefarm has empowered women in our village with knowledge and tools to adopt climate-smart farming techniques.",
//                 name: "Grace Njeri",
//                 role: "Community Leader, Kenya",
//               },
//               {
//                 quote:
//                   "With renewable energy solutions, we’ve reduced costs and improved productivity on our small farms.",
//                 name: "Kwame Mensah",
//                 role: "Cooperative Member, Ghana",
//               },
//               {
//                 quote:
//                   "Working with Suprefarm has connected us to sustainable markets and improved our livelihoods.",
//                 name: "Maria Olumide",
//                 role: "Farmer, Nigeria",
//               },
//             ].map((testimonial, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-2xl shadow-md text-left border border-gray-100 hover:shadow-lg transition"
//               >
//                 <blockquote className="italic text-gray-700 text-lg leading-relaxed">
//                   “{testimonial.quote}”
//                 </blockquote>
//                 <footer className="mt-4 text-sm text-gray-600 font-medium">
//                   — {testimonial.name}, {testimonial.role}
//                 </footer>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useMemo, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Media (swap these with your own)
import green11 from "../assets/images/green11.webp";
import green12 from "../assets/images/green12.webp";

/**
 * Suprefarm Projects Map
 * - Shows all farm locations on a Leaflet map (Nigeria: Ilora, Ilaji, Iseyin; Ghana: Ashanti)
 * - Clicking "Nigeria" (via chip or centroid marker) reveals a grid of its 3 locations
 * - Clicking a specific location opens a drawer with a 7‑day forecast from Open‑Meteo
 * - Includes a video section and CTA buttons: Learn More (FAQ) and Buy (web app)
 *
 * Requirements:
 *   npm i react-leaflet leaflet
 *   Ensure TailwindCSS is set up; import this component in your route/page.
 */

// ---------- Marker icons (SVG pins) ----------
const mk = (hex: string) =>
  new L.Icon({
    iconUrl:
      `data:image/svg+xml;utf8,` +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='48' viewBox='0 0 32 48'>
           <path d='M16 0C7.2 0 0 7.2 0 16c0 11.5 16 32 16 32s16-20.5 16-32C32 7.2 24.8 0 16 0z' fill='${hex}'/>
           <circle cx='16' cy='16' r='6' fill='white' opacity='0.95'/>
         </svg>`
      ),
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -36],
  });

const ICON_ACTIVE = mk("#10B981"); // emerald
const ICON_PILOT = mk("#F59E0B"); // amber
const ICON_COUNTRY = mk("#2563EB"); // blue for country centroid

// ---------- Types ----------
export type Loc = {
  id: string;
  name: string;
  status: "Active" | "Pilot";
  lat: number;
  lng: number;
  image?: string;
  blurb?: string;
};
export type Country = {
  id: "ng" | "gh";
  name: string;
  flag: string;
  summary: string;
  locations: Loc[];
};

// ---------- Data ----------
// Coordinates sourced from reference sites (Ilora ~7.8,3.9 ; Iseyin ~7.9667,3.6 ; Ilaji ~8.0523,3.3373 ; Ashanti ~6.7,-1.6)
const COUNTRIES: Country[] = [
  {
    id: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    summary:
      "Active operations across Oyo State: Ilora, Ilaji and Iseyin (palm & regenerative pilots).",
    locations: [
      {
        id: "ilora",
        name: "Ilora, Oyo State",
        status: "Active",
        lat: 7.8,
        lng: 3.9,
        image: green11,
        blurb:
          "15+ acres of transparent co‑ownership—jobs, yields, and verified impact.",
      },
      {
        id: "ilaji",
        name: "Ilaji, Oyo State",
        status: "Active",
        lat: 8.0523,
        lng: 3.33735,
        image: green12,
        blurb: "Community‑led expansion with regenerative practices and fair wages.",
      },
      {
        id: "iseyin",
        name: "Iseyin, Oyo State",
        status: "Active",
        lat: 7.9667,
        lng: 3.6,
        image: green11,
        blurb: "Climate‑resilient palm and value‑chain jobs with local cooperatives.",
      },
    ],
  },
  {
    id: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    summary: "Expansion focus with Ashanti pilot partnerships.",
    locations: [
      {
        id: "ashanti",
        name: "Ashanti Region",
        status: "Pilot",
        lat: 6.7,
        lng: -1.6,
        image: green12,
        blurb: "Palm pilot: nurseries, training, and traceable operations.",
      },
    ],
  },
];

// ---------- Map helpers ----------
function FitBounds({ points }: { points: Array<[number, number]> }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) return;
    const b = L.latLngBounds(points.map(([a, b]) => [a, b] as [number, number]));
    map.fitBounds(b, { padding: [40, 40], maxZoom: 9, animate: true });
  }, [map, points]);
  return null;
}

const countryCentroid = (c: Country) => {
  const { lat, lng } = c.locations.reduce(
    (acc, cur) => ({ lat: acc.lat + cur.lat, lng: acc.lng + cur.lng }),
    { lat: 0, lng: 0 }
  );
  const n = c.locations.length || 1;
  return [lat / n, lng / n] as [number, number];
};

// ---------- Weather API ----------
// Minimal client for Open‑Meteo 7‑day daily forecast
async function fetchForecast(lat: number, lng: number) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    timezone: "Africa/Lagos",
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "precipitation_probability_max",
      "wind_speed_10m_max",
    ].join(","),
    current: ["temperature_2m", "wind_speed_10m", "precipitation"].join(","),
    forecast_days: "7",
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error("Failed to load forecast");
  return r.json();
}

// ---------- UI bits ----------
function Chip({ active, onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full border text-sm transition ${
        active
          ? "bg-emerald-600 text-white border-emerald-600 shadow"
          : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function ButtonLink({ href, children, variant = "solid" }: { href: string; children: any; variant?: "solid" | "ghost" }) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const v =
    variant === "ghost"
      ? "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 focus:ring-emerald-600"
      : "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600";
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${base} ${v}`}>
      {children}
    </a>
  );
}

// A simple responsive drawer for weather details
function WeatherDrawer({ loc, onClose }: { loc: Loc | null; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      if (!loc) return;
      setLoading(true);
      setError(null);
      try {
        const j = await fetchForecast(loc.lat, loc.lng);
        if (mounted) setData(j);
      } catch (e: any) {
        if (mounted) setError(e.message || "Unable to load weather");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [loc]);

  const fmtDate = (s: string) =>
    new Intl.DateTimeFormat("en-NG", { weekday: "short", day: "2-digit", month: "short" }).format(new Date(s));

  return (
    <div
      className={`fixed inset-0 z-50 ${loc ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!loc}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${loc ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl border-l transform transition-transform ${
          loc ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b flex items-center gap-3">
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg border hover:bg-gray-50">Close</button>
          <div className="font-semibold text-gray-800">{loc?.name} • 7‑day forecast</div>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-56px)]">
          {loading && <div className="text-sm text-gray-600">Loading forecast…</div>}
          {error && <div className="text-sm text-red-600">{error}</div>}

          {data && (
            <div className="space-y-4">
              {/* Current snapshot */}
              {data.current && (
                <div className="grid grid-cols-3 gap-3 text-center bg-gray-50 p-4 rounded-xl border">
                  <div>
                    <div className="text-xs text-gray-500">Now</div>
                    <div className="text-2xl font-bold">{Math.round(data.current.temperature_2m)}°</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Wind</div>
                    <div className="text-lg font-semibold">{Math.round(data.current.wind_speed_10m)} km/h</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Precip</div>
                    <div className="text-lg font-semibold">{data.current.precipitation ?? 0} mm</div>
                  </div>
                </div>
              )}

              {/* Daily rows */}
              <div className="divide-y border rounded-xl overflow-hidden">
                {data.daily?.time?.map((t: string, i: number) => (
                  <div key={t} className="grid grid-cols-4 items-center px-3 py-2 text-sm">
                    <div className="font-medium">{fmtDate(t)}</div>
                    <div className="text-gray-600">Max {Math.round(data.daily.temperature_2m_max[i])}°</div>
                    <div className="text-gray-600">Min {Math.round(data.daily.temperature_2m_min[i])}°</div>
                    <div className="text-gray-600">Rain {Math.round(data.daily.precipitation_probability_max?.[i] ?? 0)}%</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <ButtonLink href="/faq" variant="ghost">Learn more</ButtonLink>
                <ButtonLink href="https://suprefarmapp.netlify.app/login">Buy on Suprefarm</ButtonLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCountry, setActiveCountry] = useState<Country["id"] | "all">("all");
  const [selected, setSelected] = useState<Loc | null>(null);

  const allLocs = useMemo(() => COUNTRIES.flatMap((c) => c.locations), []);
  const visibleLocs = useMemo(
    () => (activeCountry === "all" ? allLocs : COUNTRIES.find((c) => c.id === activeCountry)!.locations),
    [activeCountry, allLocs]
  );

  // For FitBounds
  const points = useMemo(() => visibleLocs.map((l) => [l.lat, l.lng] as [number, number]), [visibleLocs]);

  // Initial map center roughly between NG & GH
  const initialCenter: [number, number] = [7.6, 1.1];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-emerald-700 text-white py-16 md:py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(1200px_400px_at_50%_100%,rgba(255,255,255,0.25),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Where We Work</h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            We’re building climate‑smart co‑ownership in <strong>Nigeria</strong> and expanding in <strong>Ghana</strong>.
            Track verified progress across farms and communities.
          </p>
        </div>
      </section>

      {/* MAP + FILTERS */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {[
              { id: "all", label: "All Regions" },
              ...COUNTRIES.map((c) => ({ id: c.id, label: `${c.flag} ${c.name}` })),
            ].map((chip) => (
              <Chip key={chip.id} active={activeCountry === (chip.id as any)} onClick={() => setActiveCountry(chip.id as any)}>
                {chip.label}
              </Chip>
            ))}
          </div>

          {/* Map */}
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <MapContainer center={initialCenter} zoom={6} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <FitBounds points={points} />

              {/* Country centroid markers when viewing ALL */}
              {activeCountry === "all" &&
                COUNTRIES.map((c) => {
                  const [lat, lng] = countryCentroid(c);
                  return (
                    <Marker key={c.id} position={[lat, lng]} icon={ICON_COUNTRY} eventHandlers={{ click: () => setActiveCountry(c.id) }}>
                      <Popup>
                        <div className="min-w-[200px]">
                          <div className="font-semibold">{c.flag} {c.name}</div>
                          <p className="text-sm text-gray-700 mt-1">{c.summary}</p>
                          <button
                            className="mt-3 w-full px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700"
                            onClick={() => setActiveCountry(c.id)}
                          >
                            View locations
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}

              {/* Location markers for current filter */}
              {visibleLocs.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={loc.status === "Active" ? ICON_ACTIVE : ICON_PILOT}
                  eventHandlers={{ click: () => setSelected(loc) }}
                >
                  <Popup>
                    <div className="min-w-[200px]">
                      <div className="font-semibold">{loc.name}</div>
                      <div className="text-xs mt-1">
                        <span
                          className={`px-1.5 py-0.5 rounded-full border ${
                            loc.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                              : "bg-amber-50 text-amber-700 border-amber-100"
                          }`}
                        >
                          {loc.status}
                        </span>
                      </div>
                      {loc.blurb && <p className="text-sm text-gray-700 mt-2">{loc.blurb}</p>}
                      <button
                        className="mt-3 w-full px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700"
                        onClick={() => setSelected(loc)}
                      >
                        See 7‑day forecast
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      {/* NIGERIA LOCATIONS GRID (shown when NG or ALL, but emphasized for NG) */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
              {activeCountry === "ng" ? "Nigeria • Our farm locations" : "Locations"}
            </h2>
            {activeCountry !== "all" && (
              <button onClick={() => setActiveCountry("all")} className="text-sm text-emerald-700 hover:underline">Show all regions</button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(activeCountry === "ng" ? COUNTRIES.find((c) => c.id === "ng")!.locations : visibleLocs).map((l) => (
              <div key={l.id} className="bg-white rounded-2xl shadow hover:shadow-lg border border-gray-100 overflow-hidden">
                <img src={l.image ?? green11} alt={l.name} className="w-full h-40 object-cover" loading="lazy" decoding="async" />
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-gray-900">{l.name}</div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full border ${
                        l.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-amber-50 text-amber-700 border-amber-100"
                      }`}
                    >
                      {l.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{l.blurb}</p>
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => setSelected(l)}
                      className="flex-1 px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm hover:bg-emerald-700"
                    >
                      7‑day forecast
                    </button>
                    <ButtonLink href="/faq" variant="ghost">Learn more</ButtonLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO + CTAs */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow border border-gray-100">
            {/* Replace src with your farm clip (mp4). If you prefer YouTube, embed an iframe below. */}
            <video src="/videos/farm-demo.mp4" className="w-full h-full" controls playsInline poster={green11} />
            {/* Example YouTube fallback: */}
            {/* <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
                title="Suprefarm field clip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div> */}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-800">See our farms up close</h3>
            <p className="text-gray-700 mt-3">
              Walk through fields, meet our team, and watch how climate‑smart farming works day‑to‑day. Transparency is
              built‑in—from map to harvest to income distribution.
            </p>
            <div className="mt-6 flex gap-3">
              <ButtonLink href="/faq" variant="ghost">Learn more</ButtonLink>
              <ButtonLink href="https://suprefarmapp.netlify.app/login">Buy on Suprefarm</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRY CARDS (context + chips) */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-emerald-800">Our Focus Regions</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {COUNTRIES.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
              <img
                src={c.locations[0]?.image ?? green11}
                alt={c.name}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-700">{c.name}</h3>
                </div>
                <p className="text-gray-700 mt-2">{c.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.locations.map((l) => (
                    <span
                      key={l.id}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        l.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-amber-50 text-amber-700 border-amber-100"
                      }`}
                      title={l.name}
                    >
                      {l.name.split(",")[0]} • {l.status}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Chip active={activeCountry === c.id} onClick={() => setActiveCountry(c.id)}>
                    {activeCountry === c.id ? "Showing on map" : "Show on map"}
                  </Chip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weather drawer */}
      <WeatherDrawer loc={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

