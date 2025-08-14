import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import green1 from "../assets/images/green1.webp";
import green2 from "../assets/images/green2.webp";
import green3 from "../assets/images/green3.webp";
import green4 from "../assets/images/green4.webp";
import green5 from "../assets/images/green5.webp";
import green6 from "../assets/images/green6.webp";
import howItWorksImg from "../assets/images/photo1.webp";

const slides = [
  {
    image: green1,
    title: "Be part of the climate solution",
    text: "Join a community that’s building a greener future through sustainable farming.",
  },
  {
    image: green2,
    title: " Sustainable Farmland Co-Ownership",
    text: " Step into ownership of thriving palm tree farmland in Ilora. Create jobs, strengthen food security, and watch your impact grow with transparent updates powered by satellite and AI tracking.",
  },
  {
    image: green3,
    title: "Grow your wealth while growing nature",
    text: "Our farms deliver returns while regenerating soil, restoring forests, and improving ecosystems.",
  },
];

const impactData = [
  {
    title: "15 Acres",
    subtitle: "of productive palm tree farmland acquired in Ilora",
  },
  {
    title: "10 Co-Owners",
    subtitle: "already enrolled in our first project",
  },
  {
    title: "X Jobs Created",
    subtitle: "for local farmers and workers",
  },
  {
    title: "100% Transparency",
    subtitle: "through satellite and AI monitoring",
  },
];

const steps = [
  {
    title: "Choose Your Opportunity",
    description:
      "Browse farmland, apartment, and property projects that match your goals.",
  },
  {
    title: "Secure Your Share",
    description:
      "Complete a simple, documented process with clear ownership rights.",
  },
  {
    title: "Track & Enjoy Benefits",
    description:
      "Receive seasonal yield reports, property updates, and measurable social impact data.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {slides[current].title}
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-yellow-300 max-w-2xl mx-auto">
            {slides[current].text}
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
            Partner with us
            </Link>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
             src={green4}
            alt="Intro"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Seamless Experience &amp; Management
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We manage every project from land preparation to harvest and
              sales, using technology to monitor soil health, optimise yields,
              and reduce waste.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our partners and co-owners enjoy real-time updates on
              climate-related progress and financial returns—ensuring
              transparency and trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Impact Counters</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {impactData.map((item, idx) => (
              <div
                key={idx}
                className="bg-green-700 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 h-[32vh]"
              >
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-center">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div>
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold mb-2">
                    {idx + 1}. {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div>
            <img
              src={howItWorksImg}
              alt="How It Works"
              className="w-full h-[62vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Do  */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-4xl font-bold mb-6 text-green-700  flex justify-center text-center">
          What We Do
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src={green6}
              alt="Farms and Impact"
              className="w-full lg:h-[70vh] h-auto rounded-xl shadow-xl mt-[6.5em]"
            />
            {/* Optional overlay pattern */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
          </div>

          {/* Text Side */}
          <div>
            <p className="text-lg text-gray-700 mb-10">
              We manage climate-smart farms and connect you to the process every
              step of the way.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "🌱",
                  title: "Instant Ownership Registration",
                  desc: "Digital onboarding with KYC, e-signatures, and immediate issuance of ownership certificates.",
                },
                {
                  icon: "🗂️",
                  title: "Digital Title Verification",
                  desc: "Integration with Nigeria and Ghana’s land registries to verify farmland before allocation.",
                },
                {
                  icon: "💰",
                  title: "Automated Ground Rent Billing",
                  desc: "In-app alerts and auto-generated invoices linked to secure payment gateways.",
                },
                {
                  icon: "🔗",
                  title: "Blockchain Record-Keeping",
                  desc: "Immutable ownership and transaction history to prevent disputes.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-green-700 rounded-xl p-6 flex items-start gap-4 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-left">
                    <h3 className="font-semibold text-yellow-600 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <Link
            to="/what-we-do"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold  "
          >
            See How It Works
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-50 ">
        <div className="max-w-6xl mx-auto ">
          {/* Featured Project Card */}
          <div className="bg-white rounded-2xl lg:h-[62vh] shadow-2xl  overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-3xl transition-shadow duration-300 w-full ">
            {/* Left: Image */}
            <div className="md:w-2/5 flex-shrink-0">
              <img
                src={green5}
                alt="Ilora Palm Tree Farmland"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-3/5 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  Featured Project
                </h3>
                <h4 className="text-xl md:text-2xl font-semibold mb-4">
                  Ilora Palm Tree Farmland
                </h4>
                <p className="text-gray-700 mb-4">
                  Join a 15-acre palm tree plantation in Ilora, already home to
                  10 proud co-owners.
                </p>
                <p className="text-gray-700 mb-6">
                  Your share directly funds farmer livelihoods, boosts local
                  food production, and offers you seasonal returns.
                </p>
              </div>
              <Link
                to="/projects"
                className="self-start bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      {/* <section className="py-20 px-6 md:px-16 bg-gray-50">
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
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 bg-green-700 text-white text-center">
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
