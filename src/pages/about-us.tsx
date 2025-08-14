import green4 from "../assets/images/green4.webp";
import green2 from "../assets/images/green2.webp";

const communityQuotes = [
  {
    quote:
      "A local hospital and a reconstructed school so everyone can access healthcare and children can learn in a safe environment.",
    name: "Marceline",
    role: "Farmer (Voa Aina)",
  },
  {
    quote: "A different life for my three children, a life that is better.",
    name: "Julien",
    role: "Farmer (Voa Aina)",
  },
  {
    quote:
      "A sustainable life. A life where we can think long-term, with stable access to food and other essentials.",
    name: "Teame",
    role: "Landless farmer (EthioTrees)",
  },
  {
    quote: "Parents with enough revenue for children to eat every day.",
    name: "Navarana",
    role: "Community agent (Voa Aina)",
  },
  {
    quote:
      "Clean water in our community, to end water scarcity and ensure our children don’t miss school to collect it.",
    name: "Letay",
    role: "Farmer (EthioTrees)",
  },
  {
    quote: "When you plant trees, you add good to humanity.",
    name: "Roland",
    role: "Farmer (Fes Enying)",
  },
  {
    quote:
      "A peaceful environment where our children can attend school and contribute to the development of our country, especially our region of Tigray.",
    name: "Haffu",
    role: "School director (EthioTrees)",
  },
];

const values = [
  "Meaningful Social Impact",
  "Committed Communities",
  "True Partnerships",
  "High-Integrity Carbon Credits",
  "Science-backed Solutions",
];

const teamMembers = [
  { name: "Miro Jacob", role: "Co-founder" },
  { name: " Tobbie Tobbie", role: "Project Coordinator Voa Aina" },
  { name: "Tobbie Tobbie", role: "Co-founder" },
  { name: "Tobbie Tobbie", role: "Project Lead" },
  { name: "Tobbie Tobbie", role: "Project Coordinator EthioTrees" },
  { name: "Tobbie Tobbie", role: "Social Impact and Media Officer" },
  { name: "Tobbie Tobbie", role: "Project Coordinator Kukumuty" },
  { name: "Tobbie Tobbie", role: "Project Coordinator Fes Enying" },
  { name: "Tobbie Tobbie", role: "Project Coordinator BoliTrees" },
];

const keyRoles = [
  {
    name: "Gebrekidan",
    roleDesc: "Project Support Officer, EthioTrees",
    quote:
      "Our ultimate goal is to foster a sense of ownership among the communities we work with, for them to see the tree as theirs, something they care for and protect.",
  },
  {
    name: "Seguin",
    roleDesc: "Nursery worker, Voa Aina",
    quote:
      "We don’t just share seedlings, we share our knowledge through new farming techniques",
  },
  {
    name: "Léa",
    roleDesc: "Communication and sensitisation responsible, Fes Enying",
    quote:
      "This work has transformed me. It has taught me to listen with my heart, to understand the realities on the ground, and to believe even more in the power of human commitment.",
  },
  {
    name: "Juste",
    roleDesc: "Technical Expert, Voa Aina",
    quote:
      "We need both nature and development, it’s all about finding the right balance",
  },
  {
    name: "Suzie",
    roleDesc: "Social Expert, Voa Aina",
    quote:
      "Working with communities means caring, listening, and supporting, but above all, it means accepting people as they are",
  },
  {
    name: "Atakhi",
    roleDesc: "Ranger, EthioTrees",
    quote:
      "I protect our exclosure from illegal cutting to maximize benefits to our community. Restoring our land is the greatest reward, it’s our insurance for the years to come.",
  },
  {
    name: "Odile",
    roleDesc: "Technical Assistant, Fes Enying",
    quote: "When the community unites for nature, nature blesses the community",
  },
  {
    name: "Guesh",
    roleDesc: "Sub-Office Coordinator, EthioTrees",
    quote:
      "Some farmers have started growing their own seedlings in response to the rising demand. This shift is a direct result of the on-the-job training provided in the nurseries, creating new income opportunities for our farmers.",
  },
  {
    name: "Armand",
    roleDesc: "Nursery worker, Fes Enying",
    quote:
      "I started with my own small nursery at home, now I am responsible for the nursery in Moinkoing. I like helping the farmers take care of their plants after the distribution.",
  },
  {
    name: "Siméon",
    roleDesc: "Technical director, Fes Enying",
    quote:
      "In my job, you have to be in contact with all the traditional chiefs and sectoral representatives, not forgetting the communities. It’s a new family.",
  },
  {
    name: "Tsige",
    roleDesc: "Nursery worker, EthioTrees",
    quote:
      "We use grafting techniques to improve fruit production and quality, while also keeping the trees shorter so farmers can harvest more easily. All of this helps increase their income.",
  },
];

export default function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}

      <section className="bg-green-700 py-20 relative overflow-hidden">
        <div className="container mx-auto lg:px-12 grid lg:grid-cols-2 items-center gap-10 bg-gradient-to-r from-green-700 via-green-700/90 to-transparent">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Beyond planting, cultivating change
            </h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              We are a forward-thinking enterprise dedicated to{" "}
              <strong>wealth creation</strong>,
              <strong> climate change resilience</strong>,{" "}
              <strong>gender equality</strong>, and empowering
              <strong> small farmholders</strong> in Nigeria and across Africa.
              Through sustainable farmland and property co-ownership, we provide
              inclusive pathways for individuals — especially women — to
              participate in the agriculture value chain while addressing urgent
              environmental challenges.
            </p>

            {/* Contact Us Button */}
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Full-bleed image on right */}
        <div className="hidden lg:block absolute top-9 right-0 h-full w-1/2">
          <img
            src={green4}
            alt="Farming community"
            className="w-full h-full object-cover rounded-[100px_100px_0_0]"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          {/* Left: Image */}
          <div>
            <img
              src={green2}
              alt="Our farmland story"
              className="w-full h-auto lg:h-[] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6">
              Our story: how did we get here?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our journey began in Ilora, Oyo State, with 15 acres of farmland
              dedicated to palm cultivation. Recognising the growing threats of
              climate change from unpredictable rainfall to soil degradation we
              committed to building climate smart agricultural projects. Our
              work integrates renewable energy, water efficient irrigation, and
              climate resilient crop varieties. As our impact grew, so did our
              vision: to expand across Nigeria and Africa, enabling more people
              to benefit from sustainable agriculture while directly
              contributing to carbon reduction and environmental restoration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-center">
          {/* Vision */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6h4"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-green-700">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted platform for ethical co-ownership
              of agricultural and residential property—connecting land, people,
              and purpose across borders.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-3-3v6m9-9a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-yellow-700">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To simplify co-ownership of farmland and property through
              transparent, legally-backed, and tech-enabled group models that
              create shared wealth, local jobs, and long-term security.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose & Values */}
      <section className="bg-white py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Purpose */}
          <div className="p-8 bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To create sustainable wealth while safeguarding the planet,
              bridging gender gaps, and building climate-resilient agricultural
              systems in Nigeria and Africa.
            </p>
          </div>

          {/* Right: Values */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                  1
                </span>
                <p>
                  <strong>Sustainability:</strong> Every decision is guided by
                  long-term environmental impact.
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                  2
                </span>
                <p>
                  <strong>Equity:</strong> Ensuring fair access and
                  opportunities for women and underrepresented communities.
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                  3
                </span>
                <p>
                  <strong>Innovation:</strong> Using climate-smart solutions for
                  productivity and resilience.
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                  4
                </span>
                <p>
                  <strong>Collaboration:</strong> Strengthening the agriculture
                  value chain through strong local and global partnerships.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      {/* <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Community Voices
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {communityQuotes.map((c, idx) => (
            <blockquote key={idx} className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-gray-600">“{c.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">
                — {c.name}, <span className="font-medium">{c.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section> */}

      {/* What We Believe In */}
      {/* Our Impact */}
      <section className="bg-green-50 py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
            Our Impact — We Believe In...
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Climate Change Mitigation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in planting climate-resilient crops, implementing
                agroforestry, and improving carbon capture in soils to protect
                our planet.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Wealth Distribution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in channeling agricultural profits back to local
                communities, ensuring shared prosperity for everyone involved.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Women’s Economic Empowerment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in training and supporting women as active
                stakeholders in agriculture, fostering equality and opportunity.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Value Chain Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in linking smallholders to markets, processing
                facilities, and export opportunities to strengthen the
                agricultural ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-8 md:px-16 bg-white text-white">
  <h2 className="text-3xl font-semibold mb-8 text-center text-black">Our Team</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {teamMembers.map((member, idx) => (
      <div
        key={idx}
        className="text-center bg-green-700 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform"
      >
        <div className="h-24 w-24 bg-green-700 rounded-full mx-auto mb-4 border-2 border-white/40"></div>
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-sm text-white/80">{member.role}</p>
      </div>
    ))}
  </div>
</section>

<section className="py-16 px-8 md:px-16 bg-white text-white">
  <h2 className="text-3xl font-semibold mb-8 text-center text-black">Our Advisors</h2>
  <div className="grid md:grid-cols-3 gap-8">
  {teamMembers.map((member, idx) => (
      <div
        key={idx}
        className="text-center bg-green-700 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform"
      >
        <div className="h-24 w-24 bg-white/30 rounded-full mx-auto mb-4 border-2 border-white/40"></div>
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-sm text-white/80">{member.role}</p>
      </div>
    ))}
  </div>
</section>



      {/* Key Roles */}
      {/* <section className="bg-gray-50 py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Key Roles & Voices
        </h2>
        <div className="space-y-8">
          {keyRoles.map((kr, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">{kr.name}</h3>
              <p className="text-xs text-gray-500">{kr.roleDesc}</p>
              <p className="mt-2 text-gray-700 italic">“{kr.quote}”</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="py-16 px-8 md:px-16 text-center"> */}
      <section
  className="relative h-[90vh] flex items-center justify-center bg-cover bg-center transition-all duration-700"
  style={{ backgroundImage: `url(${green4})` }}
>
  <div className="bg-black/40 p-8 rounded-lg text-center max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
      Partner with us for traceable change
    </h2>
    <p className="text-white/90 mb-6">
      Join us in co-creating sustainable solutions that tackle climate
      change, protect nature, and support vulnerable communities.
    </p>
    <a
      href="/contact"
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold"
    >
      Contact
    </a>
  </div>
</section>

    </main>
  );
}
