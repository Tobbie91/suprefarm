

export default function WhereWeWork() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Where We Work
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            From Africa to South America, our projects are tackling climate change through community-driven solutions.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Global Presence</h2>
          <div className="bg-gray-200 h-64 w-full rounded-lg">
            {/* This is a placeholder for the map. You can integrate an actual map here (like Leaflet or Google Maps). */}
            <img src="/images/world-map-placeholder.jpg" alt="World Map" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Focus Regions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            {
              region: "Ethiopia",
              description:
                "Ethiopia is home to our first large-scale reforestation efforts. We've worked with local communities to restore land and promote sustainable agriculture.",
              image: "/images/ethiopia.jpg",
            },
            {
              region: "Mozambique",
              description:
                "In Mozambique, we are pioneering agroforestry projects that provide both economic opportunities and biodiversity protection.",
              image: "/images/mozambique.jpg",
            },
            {
              region: "Cameroon",
              description:
                "Our Cameroon projects are focused on community-led carbon sequestration and ecosystem restoration, benefiting both nature and local livelihoods.",
              image: "/images/cameroon.jpg",
            },
            {
              region: "Bolivia",
              description:
                "In Bolivia, we support sustainable farming practices that improve soil quality, protect ecosystems, and increase community resilience.",
              image: "/images/bolivia.jpg",
            },
          ].map((region, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={region.image}
                alt={region.region}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700">{region.region}</h3>
                <p className="text-gray-700 mt-2">{region.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Local Impact</h2>
          <p className="text-lg leading-relaxed mb-6">
            In each of these regions, we work directly with local communities, governments, and organizations to ensure that our projects are impactful and sustainable.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="italic text-gray-600">
                  “We are seeing positive changes in our community thanks to the climate action programs supported by Suprefarm.”
                </blockquote>
                <footer className="mt-4 text-sm text-gray-500">— Local Farmer, Nigeria</footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
