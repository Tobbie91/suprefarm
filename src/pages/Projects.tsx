import green11 from "../assets/images/green11.webp";
import green12 from "../assets/images/green12.webp";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom green marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

export default function Projects() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/organic-paper.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Where We <span className="text-yellow-400">Work</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            From <span className="font-semibold">Africa</span> to{" "}
            <span className="font-semibold">South America</span>, our projects
            are tackling climate change through{" "}
            <span className="underline decoration-yellow-400">
              community-driven solutions
            </span>
            .
          </p>
        </div>
      </section>

      {/* 🌍 Map Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">
            Our Global Presence
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore our key project locations where climate action meets
            sustainable development.
          </p>

          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <MapContainer
              center={[7.5, -1.5]}
              zoom={5}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              {/* Nigeria */}
              <Marker position={[7.6833, 3.85]} icon={markerIcon}>
                <Popup>
                  <strong>Ilora, Nigeria</strong> <br />
                  15 hectares of palm trees under a transparent co-ownership
                  model.
                </Popup>
              </Marker>

              {/* Ghana */}
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

      {/* 🌱 Regional Focus */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
          Our Focus Regions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              region: "Nigeria",
              description:
                "In Ilora, Nigeria, we manage 15 hectares of palm trees under a transparent co-ownership model, where every stakeholder has clear visibility of growth, yields, and shared benefits.",
              image: green11,
            },
            {
              region: "Ghana",
              description:
                "In Ghana, our projects center around palm tree cultivation, empowering communities through sustainable farming practices. Farmers and co-owners benefit from transparent systems that ensure shared growth and long-term stewardship.",
              image: green12,
            },
          ].map((region, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition"
            >
              <img
                src={region.image}
                alt={region.region}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-700">
                  {region.region}
                </h3>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {region.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Local Impact */}
      <section className="py-20 px-6 md:px-12 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">
            Local Impact
          </h2>
          <p className="text-lg leading-relaxed mb-12 text-gray-700 max-w-3xl mx-auto">
            In each region, we collaborate with local communities, governments,
            and organizations to ensure our projects bring{" "}
            <span className="font-semibold">lasting benefits</span> for people
            and the environment.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                quote:
                  "We are seeing positive changes in our community thanks to the climate action programs supported by Suprefarm.",
                name: "Adebayo Adekunle",
                role: "Local Farmer, Nigeria",
              },
              {
                quote:
                  "Suprefarm has empowered women in our village with knowledge and tools to adopt climate-smart farming techniques.",
                name: "Grace Njeri",
                role: "Community Leader, Kenya",
              },
              {
                quote:
                  "With renewable energy solutions, we’ve reduced costs and improved productivity on our small farms.",
                name: "Kwame Mensah",
                role: "Cooperative Member, Ghana",
              },
              {
                quote:
                  "Working with Suprefarm has connected us to sustainable markets and improved our livelihoods.",
                name: "Maria Olumide",
                role: "Farmer, Nigeria",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md text-left border border-gray-100 hover:shadow-lg transition"
              >
                <blockquote className="italic text-gray-700 text-lg leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <footer className="mt-4 text-sm text-gray-600 font-medium">
                  — {testimonial.name}, {testimonial.role}
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
