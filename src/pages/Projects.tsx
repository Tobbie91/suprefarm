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
import green11 from "../assets/images/green11.webp";
import green12 from "../assets/images/green12.webp";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// ------- Brand markers (SVG data URIs) -------
const mk = (hex: string) =>
  new L.Icon({
    iconUrl:
      `data:image/svg+xml;utf8,` +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48">
           <path d="M16 0C7.2 0 0 7.2 0 16c0 11.5 16 32 16 32s16-20.5 16-32C32 7.2 24.8 0 16 0z" fill="${hex}"/>
           <circle cx="16" cy="16" r="6" fill="white" opacity="0.95"/>
         </svg>`
      ),
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -36],
  });

const ICON_ACTIVE = mk("#10B981"); // emerald-500/600 vibe
const ICON_PILOT = mk("#F59E0B");  // amber

// ------- Data (countries, locations) -------
type Loc = { id: string; name: string; status: "Active" | "Pilot"; lat: number; lng: number; image?: string; blurb?: string };
type Country = { id: "ng" | "gh"; name: string; flag: string; summary: string; locations: Loc[] };

const COUNTRIES: Country[] = [
  {
    id: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    summary: "Active operations and co-ownership pilots in Ilora (Oyo) and Osun.",
    locations: [
      {
        id: "ilora",
        name: "Ilora, Oyo State",
        status: "Active",
        lat: 7.6833,
        lng: 3.85,
        image: green11,
        blurb: "15 acres of palm in transparent co-ownership—jobs, yields, and verified impact.",
      },
      {
        id: "osun",
        name: "Osun State",
        status: "Active",
        lat: 7.5,
        lng: 4.5,
        image: green12,
        blurb: "Community-led expansion with regenerative practices and fair wages.",
      },
    ],
  },
  {
    id: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    summary: "Expansion focus with pilot partnerships.",
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

// ------- Fit map to current locations -------
function FitBounds({ locs }: { locs: Loc[] }) {
  const map = useMap();
  useEffect(() => {
    if (!locs.length) return;
    const b = L.latLngBounds(locs.map((l) => [l.lat, l.lng] as [number, number]));
    map.fitBounds(b, { padding: [40, 40], maxZoom: 9, animate: true });
  }, [map, locs]);
  return null;
}

export default function Projects() {
  const [activeCountry, setActiveCountry] = useState<Country["id"] | "all">("ng");

  const allLocs = useMemo(() => COUNTRIES.flatMap((c) => c.locations), []);
  const visibleLocs = useMemo(
    () => (activeCountry === "all" ? allLocs : COUNTRIES.find((c) => c.id === activeCountry)!.locations),
    [activeCountry, allLocs]
  );

  // sensible initial center if bounds hasn’t run yet
  const initialCenter: [number, number] = [7.1, 1.2]; // between NG & GH

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-emerald-700 text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(1200px_400px_at_50%_100%,rgba(255,255,255,0.25),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Where We Work</h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            We’re building climate-smart co-ownership in <strong>Nigeria</strong> and expanding in <strong>Ghana</strong>.
            Track verified progress across farms and communities.
          </p>
        </div>
      </section>

      {/* MAP + FILTERS */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {[
              { id: "all", label: "All Regions" },
              ...COUNTRIES.map((c) => ({ id: c.id, label: `${c.flag} ${c.name}` })),
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setActiveCountry(chip.id as any)}
                className={`px-3 py-1.5 rounded-full border text-sm ${
                  activeCountry === chip.id
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <MapContainer center={initialCenter} zoom={6} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <FitBounds locs={visibleLocs} />

              {visibleLocs.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={loc.status === "Active" ? ICON_ACTIVE : ICON_PILOT}
                >
                  <Popup>
                    <div className="min-w-[180px]">
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
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      {/* FOCUS REGIONS (tight cards) */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-emerald-800">Our Focus Regions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {COUNTRIES.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              {/* hero image from first location if available */}
              <img
                src={c.locations[0]?.image ?? green11}
                alt={c.name}
                className="w-full h-56 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="text-2xl font-bold text-emerald-700">{c.name}</h3>
                </div>
                <p className="text-gray-700 mt-2">{c.summary}</p>

                {/* location chips */}
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL IMPACT (trimmed + localized) */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-800">Local Impact</h2>
          <p className="text-lg leading-relaxed mb-10 text-gray-700 max-w-3xl mx-auto">
            We collaborate with communities and partners so projects deliver lasting benefits—jobs, food security,
            and ecosystem gains—measured and reported.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                quote:
                  "We’re seeing steady yields and better training. The co-ownership model keeps everyone accountable.",
                name: "Adebayo Adekunle",
                role: "Farmer, Ilora (Oyo, Nigeria)",
              },
              {
                quote:
                  "The pilot in Ashanti is bringing tools and transparency we can build on.",
                name: "Kwame Mensah",
                role: "Cooperative Member, Ghana",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
                <blockquote className="italic text-gray-800">“{t.quote}”</blockquote>
                <footer className="mt-3 text-sm text-gray-600 font-medium">— {t.name}, {t.role}</footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
