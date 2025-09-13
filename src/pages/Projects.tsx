import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useMemo, useEffect } from "react";
import SuprefarmSimulator from "../components/home/simultor";
import NigeriaFarmModals from "../components/projects/NigeriaFarmModals";
import green12 from "../assets/images/green12.webp";
import green10 from "../assets/images/green11.webp";
import green7 from "../assets/images/green7.webp";

// Farm location data
const farmLocations = [
  {
    name: "Ilora, Oyo State",
    slug: "ilora",
    lat: 7.8,
    lng: 3.9,
    image: green12,
    description:
      "15+ acres of transparent co‑ownership—jobs, yields, and verified impact.",
    country: "nigeria",
  },
  {
    name: "Ilaji, Oyo State",
    slug: "ilaji",
    lat: 8.0523,
    lng: 3.33735,
    image: green10,
    description:
      "Community-led expansion with regenerative practices and fair wages.",
    country: "nigeria",
  },
  {
    name: "Iseyin, Oyo State",
    slug: "iseyin",
    lat: 7.9667,
    lng: 3.6,
    image: green7,
    description:
      "Climate-resilient palm and value-chain jobs with local cooperatives.",
    country: "nigeria",
  },
  // { name: "Ashanti Region, Ghana", slug: "ghana", lat: 6.7, lng: -1.6, image: "/images/ghana.jpg", description: "Pilot phase for palm cultivation and regenerative farming.", country: "ghana" }
];

// Marker icon generator
const createMarkerIcon = (color: string) => {
  return new L.Icon({
    iconUrl:
      `data:image/svg+xml;utf8,` +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48">
           <path d="M16 0C7.2 0 0 7.2 0 16c0 11.5 16 32 16 32s16-20.5 16-32C32 7.2 24.8 0 16 0z" fill="${color}"/>
           <circle cx="16" cy="16" r="6" fill="white" opacity="0.95"/>
         </svg>`
      ),
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -36],
  });
};

const ICON_ACTIVE = createMarkerIcon("#10B981"); // Emerald green for active farms
const ICON_PILOT = createMarkerIcon("#F59E0B"); // Amber for pilot farms

// Map component to fit all the farm locations
function FitBounds({
  locations,
}: {
  locations: { lat: number; lng: number }[];
}) {
  const map = useMap();
  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 9, animate: true });
  }, [locations, map]);

  return null;
}

export default function Projects() {
  // Memoize farm locations for performance optimization
  const locations = useMemo(
    () => farmLocations.map((farm) => ({ lat: farm.lat, lng: farm.lng })),
    []
  );

  return (
    <div className="bg-gray-100 py-8 px-6">
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-8">
        Our Farm Locations
      </h2>

      {/* General Map */}
      <div className="h-80 mb-8 rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={[7.5, 3]}
          zoom={6}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <FitBounds locations={locations} />
          {farmLocations.map((farm) => (
            <Marker
              key={farm.slug}
              position={[farm.lat, farm.lng]}
              icon={farm.slug === "ghana" ? ICON_PILOT : ICON_ACTIVE}
            >
              <Popup>
                <div className="font-semibold">{farm.name}</div>
                <p className="text-xs mt-1">{farm.description}</p>
                <Link
                  to={`/${farm.slug}`}
                  className="text-sm text-emerald-600 hover:underline"
                >
                  Learn More
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <SuprefarmSimulator />

       {/* =============== BUY LAND NOW (selector) =============== */}
       <section
  id="buy"
  className="py-8 md:py-10 px-6 md:px-12 bg-white border-b border-gray-100"
>
  <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-emerald-800">
        Buy land & monitor it grow
      </h3>
      <p className="text-gray-700">Pick your plots, and track progress in real time.</p>
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

      {/* Nigeria Section */}

      <NigeriaFarmModals farmLocations={farmLocations} />
    </div>
  );
}
