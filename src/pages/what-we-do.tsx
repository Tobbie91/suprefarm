

import green6 from "../assets/images/green6.webp";
import { Leaf, TrendingUp, DollarSign, Calendar, Users, Map, CheckCircle } from "lucide-react";
import green7 from "../assets/images/green7.webp";
import green8 from "../assets/images/green8.webp";
import green9 from "../assets/images/green9.webp";
import green10 from "../assets/images/green10.webp";

const WhatWeDoPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section
        className="relative h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${green6})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            What We Do
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-yellow-300 leading-relaxed">
            From the soil to the community, our work connects people, planet, and purpose—creating wealth while restoring nature.
          </p>
        </div>
      </section>

      {/* Climate-Smart Farming */}
      <section className="py-24 px-6 md:px-16 bg-green-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={green8} alt="Climate-Smart Farming" className="w-full rounded-3xl shadow-xl object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Climate-Smart Farming
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We help farmers adapt to climate change, reduce emissions, and grow resilient livelihoods.
            </p>
            <ul className="space-y-4">
              <li><CheckCircle className="inline w-5 h-5 text-green-700 mr-2"/> <span className="font-semibold text-green-700">Adaptation</span> – tools to cope with floods, droughts, and weather shifts.</li>
              <li><CheckCircle className="inline w-5 h-5 text-green-700 mr-2"/> <span className="font-semibold text-green-700">Mitigation</span> – regenerative farming, agroforestry, carbon capture.</li>
              <li><CheckCircle className="inline w-5 h-5 text-green-700 mr-2"/> <span className="font-semibold text-green-700">Equity</span> – fair access to resources, markets, and knowledge.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Co-Ownership */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Transparent Co-Ownership</h2>
            <p className="text-gray-700 mb-6">Trust is the foundation of investment. Our co-ownership model gives every partner a clear, traceable stake in the projects they support.</p>
            <ul className="space-y-3">
              <li>📜 Clear Legal Documentation</li>
              <li>⚡ Tech-Enabled Onboarding</li>
              <li>📊 Real-Time Monitoring</li>
              <li>🤝 Shared Growth</li>
            </ul>
          </div>
          <img src={green7} alt="Co-Ownership" className="rounded-3xl shadow-xl object-cover" />
        </div>
      </section>

      {/* Community Empowerment */}
      <section className="py-24 px-6 md:px-16 bg-green-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={green9} alt="Community Empowerment" className="rounded-3xl shadow-xl object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Community Empowerment</h2>
            <p className="text-gray-700 mb-6">Sustainability is about people. We invest in women, smallholders, and local initiatives to create thriving communities.</p>
            <ul className="space-y-3">
              <li>👩‍🌾 Women-Led Initiatives</li>
              <li>🌱 Smallholder Support</li>
              <li>🥗 Food Security Programs</li>
              <li>📚 Education & Knowledge Sharing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seasonal Returns */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Seasonal Returns</h2>
            <p className="text-gray-700 mb-6">Agriculture thrives in cycles, and so do your investments. Seasonal returns mean predictable income, reinvestment, and shared prosperity.</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3"><Calendar className="w-6 h-6 text-green-600"/> <span>Aligned with Harvest Seasons</span></li>
              <li className="flex items-start gap-3"><DollarSign className="w-6 h-6 text-green-600"/> <span>Predictable Income</span></li>
              <li className="flex items-start gap-3"><TrendingUp className="w-6 h-6 text-green-600"/> <span>Compounding Growth</span></li>
              <li className="flex items-start gap-3"><Leaf className="w-6 h-6 text-green-600"/> <span>Farmer-Investor Synergy</span></li>
            </ul>
          </div>
          <div className="relative">
            <img src={green10} alt="Seasonal Returns" className="rounded-3xl shadow-xl" />
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4 w-40 text-center">
              <h3 className="text-lg font-bold text-green-700">15-25%</h3>
              <p className="text-xs text-gray-600">Avg. Seasonal Yield</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-green-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">Our Impact in Numbers</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <Map className="mx-auto w-8 h-8 text-green-600 mb-3"/>
            <p className="text-4xl font-bold text-green-700">15+</p>
            <p className="text-gray-700">Acres of Farmland</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <DollarSign className="mx-auto w-8 h-8 text-green-600 mb-3"/>
            <p className="text-4xl font-bold text-green-700">60%</p>
            <p className="text-gray-700">Reinvested in Communities</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <Users className="mx-auto w-8 h-8 text-green-600 mb-3"/>
            <p className="text-4xl font-bold text-green-700">200+</p>
            <p className="text-gray-700">Women Empowered</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <CheckCircle className="mx-auto w-8 h-8 text-green-600 mb-3"/>
            <p className="text-4xl font-bold text-green-700">100%</p>
            <p className="text-gray-700">Traceable Projects</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-700 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
        <p className="max-w-xl mx-auto text-white/90 mb-10">
          Join us in building climate-resilient farms, empowering communities, and creating lasting impact.
        </p>
        <a href="/contact" className="bg-yellow-400 text-green-900 px-8 py-3 rounded-full font-semibold shadow-md">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default WhatWeDoPage;

