// src/pages/WorkWithUs.tsx
import React from 'react';

const outreachBoxes = [
  {
    title: "Pool Funds and Co-Own",
    description:
      "Start from ₦50,000 or $100. Choose farmland or apartment projects.",
    cta: "Contact our team",
    link: "/contact",
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "I’m Abroad. Can I Join?",
    description:
      "Yes. Our platform is built for Diaspora co-owners. All documents and access are online.",
    cta: "Partner with us",
    link: "/contact",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
];

export default function WorkWithUs() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Work with us</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Partner with us to develop high-integrity carbon removals and impactful community-driven conservation solutions.
        </p>
      </section>

      {/* Audience Segments */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {outreachBoxes.map((box, idx) => (
            <div
              key={idx}
              className={`${box.bgColor} p-8 rounded-xl shadow-lg`}
            >
              <h2 className={`text-2xl font-semibold mb-4 ${box.textColor}`}>
                {box.title}
              </h2>
              <p className={`text-lg mb-6 ${box.textColor} opacity-90`}>
                {box.description}
              </p>
              <a
                href={box.link}
                className={`inline-block px-6 py-3 border rounded-full font-semibold ${
                  box.bgColor === 'bg-white'
                    ? 'text-green-700 border-green-700 hover:bg-green-100'
                    : 'text-white bg-transparent hover:bg-green-800 border-transparent'
                }`}
              >
                {box.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why partner with us?</h2>
        <ul className="max-w-4xl mx-auto space-y-3 text-lg text-gray-700">
          <li>• Community-driven projects focused on meaningful impact</li>
          <li>• Science-backed methods aligned with rigorous standards</li>
          <li>• Full transparency and traceability for all credit issuance</li>
          <li>• Holistic co-design that values local leadership and sustainable outcomes</li>
        </ul>
      </section>

      {/* Testimonials or Proof Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <blockquote className="text-xl italic text-gray-600">
            “With Plan Vivo, we believe co-benefits should be core benefits, because it is not just about carbon, it is about people, nature, and the climate.”
          </blockquote>
          <footer className="text-gray-500 font-semibold">Miro Jacob, Co-founder Suprefarm</footer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to partner for lasting impact?
        </h2>
        <p className="text-gray-700 mb-6">
          Contact us today to co-design your climate solutions with transparency and integrity at the core.
        </p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}
