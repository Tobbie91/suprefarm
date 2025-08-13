import { Link } from "react-router-dom";
import green1 from "../assets/images/green1.webp";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${green1})` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
          Co-Own Land. Earn. Build Futures.
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-yellow-300 max-w-2xl mx-auto">
      Join a community of co-owners transforming land into wealth—while creating jobs
and feeding nations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/intro.jpg"
            alt="Intro"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">
              A Transparent Way to Invest in the Planet
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Suprefarm connects investors with sustainable farms. We provide
              live updates, virtual tours, and full transparency on your impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your investment supports smallholder farmers, promotes
              biodiversity, and reduces carbon emissions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Teaser */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            We manage climate-smart farms and connect you to the process every
            step of the way.
          </p>
          <Link
            to="/what-we-do"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Stories From The Field
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`/images/story-${num}.jpg`}
                  alt={`Story ${num}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Story Title {num}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    A brief description of this story goes here. Highlight the
                    people, the place, and the positive impact.
                  </p>
                  <Link
                    to="/stories"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Us in Growing a Greener Future
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Become part of our community of climate-conscious investors and see
          your impact grow.
        </p>
        <Link
          to="/contact"
          className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
