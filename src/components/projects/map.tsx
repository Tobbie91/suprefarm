import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom green marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Where We Work</h1>
          <p className="text-lg md:text-xl opacity-90">
            From Africa to South America, our projects are tackling climate
            change through community-driven solutions.
          </p>
        </div>
      </section>

      {/* 🌍 Map Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Global Presence</h2>

          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={[7.5, -1.5]} // Center around West Africa
              zoom={5}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              {/* Nigeria - Ilora */}
              <Marker position={[7.6833, 3.85]} icon={markerIcon}>
                <Popup>
                  <strong>Ilora, Nigeria</strong> <br />
                  15 hectares of palm trees under a transparent co-ownership
                  model.
                </Popup>
              </Marker>

              {/* Ghana farm (example near Kumasi) */}
              <Marker position={[6.7, -1.6]} icon={markerIcon}>
                <Popup>
                  <strong>Kumasi, Ghana</strong> <br />
                  Palm tree projects empowering communities through sustainable
                  farming.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
      </div>
      )}