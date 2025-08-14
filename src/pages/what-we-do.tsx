
import green6 from "../assets/images/green6.webp";
const WhatWeDoPage = () => {
  const services = [
    {
      title: "Climate-Smart Farming",
      description:
        "We design projects using agroforestry, native crops, and water-efficient systems to restore ecosystems and capture carbon.",
      img: "/images/farming.jpg",
    },
    {
      title: "Transparent Co-Ownership",
      description:
        "Clear legal documentation, tech-enabled onboarding, and real-time farm monitoring give you confidence in your investment.",
      img: "/images/ownership.jpg",
    },
    {
      title: "Community Empowerment",
      description:
        "We channel resources into local initiatives—empowering women, supporting smallholders, and improving food security.",
      img: "/images/community.jpg",
    },
    {
      title: "Seasonal Returns",
      description:
        "We provide regular updates, impact metrics, and seasonal income from each project you co-own.",
      img: "/images/returns.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section 
    //   className="relative h-[80vh] flex flex-col items-center justify-center text-center bg-green-700 text-white px-6"
    className="relative h-[90vh] flex flex-col  items-center justify-center bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${green6})` }}>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">What We Do</h1>
        <p className="max-w-2xl text-lg lg:text-4xl text-yellow-300 text-center">
          From the soil to the community, our work connects people, planet, and
          purpose—creating wealth while restoring nature.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              <div className="h-48 bg-gray-200">
                {/* Placeholder for your image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-green-50 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Our Impact in Numbers
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-green-700">15+</p>
            <p className="text-gray-700">Acres of Farmland</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-700">60%</p>
            <p className="text-gray-700">Reinvested in Communities</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-700">200+</p>
            <p className="text-gray-700">Women Empowered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-700">100%</p>
            <p className="text-gray-700">Traceable Projects</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Partner With Us</h2>
        <p className="max-w-xl mx-auto text-white/90 mb-8">
          Join us in building climate-resilient farms, empowering communities,
          and creating lasting impact.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default WhatWeDoPage;
