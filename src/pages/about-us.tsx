


const communityQuotes = [
  { quote: "A local hospital and a reconstructed school so everyone can access healthcare and children can learn in a safe environment.", name: "Marceline", role: "Farmer (Voa Aina)" },
  { quote: "A different life for my three children, a life that is better.", name: "Julien", role: "Farmer (Voa Aina)" },
  { quote: "A sustainable life. A life where we can think long-term, with stable access to food and other essentials.", name: "Teame", role: "Landless farmer (EthioTrees)" },
  { quote: "Parents with enough revenue for children to eat every day.", name: "Navarana", role: "Community agent (Voa Aina)" },
  { quote: "Clean water in our community, to end water scarcity and ensure our children don’t miss school to collect it.", name: "Letay", role: "Farmer (EthioTrees)" },
  { quote: "When you plant trees, you add good to humanity.", name: "Roland", role: "Farmer (Fes Enying)" },
  { quote: "A peaceful environment where our children can attend school and contribute to the development of our country, especially our region of Tigray.", name: "Haffu", role: "School director (EthioTrees)" },
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
  { name: "Ialy Rakotoarivelo", role: "Project Coordinator Voa Aina" },
  { name: "Sil Lanckriet", role: "Co-founder" },
  { name: "Jade Timperman", role: "Project Lead" },
  { name: "Seifu Gebreslassie", role: "Project Coordinator EthioTrees" },
  { name: "Lianne Pieterson", role: "Social Impact and Media Officer" },
  { name: "Samuel Sibanda", role: "Project Coordinator Kukumuty" },
  { name: "François Yoboh", role: "Project Coordinator Fes Enying" },
  { name: "Claudio Vazquez Salinas", role: "Project Coordinator BoliTrees" },
];

const keyRoles = [
  { name: "Gebrekidan", roleDesc: "Project Support Officer, EthioTrees", quote: "Our ultimate goal is to foster a sense of ownership among the communities we work with, for them to see the tree as theirs, something they care for and protect." },
  { name: "Seguin", roleDesc: "Nursery worker, Voa Aina", quote: "We don’t just share seedlings, we share our knowledge through new farming techniques" },
  { name: "Léa", roleDesc: "Communication and sensitisation responsible, Fes Enying", quote: "This work has transformed me. It has taught me to listen with my heart, to understand the realities on the ground, and to believe even more in the power of human commitment." },
  { name: "Juste", roleDesc: "Technical Expert, Voa Aina", quote: "We need both nature and development, it’s all about finding the right balance" },
  { name: "Suzie", roleDesc: "Social Expert, Voa Aina", quote: "Working with communities means caring, listening, and supporting, but above all, it means accepting people as they are" },
  { name: "Atakhi", roleDesc: "Ranger, EthioTrees", quote: "I protect our exclosure from illegal cutting to maximize benefits to our community. Restoring our land is the greatest reward, it’s our insurance for the years to come." },
  { name: "Odile", roleDesc: "Technical Assistant, Fes Enying", quote: "When the community unites for nature, nature blesses the community" },
  { name: "Guesh", roleDesc: "Sub-Office Coordinator, EthioTrees", quote: "Some farmers have started growing their own seedlings in response to the rising demand. This shift is a direct result of the on-the-job training provided in the nurseries, creating new income opportunities for our farmers." },
  { name: "Armand", roleDesc: "Nursery worker, Fes Enying", quote: "I started with my own small nursery at home, now I am responsible for the nursery in Moinkoing. I like helping the farmers take care of their plants after the distribution." },
  { name: "Siméon", roleDesc: "Technical director, Fes Enying", quote: "In my job, you have to be in contact with all the traditional chiefs and sectoral representatives, not forgetting the communities. It’s a new family." },
  { name: "Tsige", roleDesc: "Nursery worker, EthioTrees", quote: "We use grafting techniques to improve fruit production and quality, while also keeping the trees shorter so farmers can harvest more easily. All of this helps increase their income." },
];

export default function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-green-100 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Beyond planting, cultivating change</h1>
        <p className="max-w-3xl mx-auto text-lg">
          At Suprefarm, We help you become a co-owner of high-potential land, rental apartments, and
international property, without needing millions. All our projects are transparent,
documented, and aligned with sustainable development goals.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-6">Our story: how did we get here?</h2>
        <p className="text-gray-700 leading-relaxed">
        We started with one goal: to make real estate accessible for people who couldn’t
afford to buy alone.
In 2020, we acquired our first 15 acres in Ilora, Oyo State. People across the
Diaspora pooled funds to co-own it. Smallholder farmers worked it. Everyone shared
in the output. That one project created jobs, generated value, and proved something
powerful:

        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
        Since then, we&#39;ve expanded to apartments and diaspora-led group
ownership—combining legal access, transparency, and technology to build wealth
for all.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
        We are not a platform for speculation.
We are a platform for shared, sustainable, and transparent ownership—driven by
community.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-16 px-8 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Vision n</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
        To become Africa’s most trusted platform for ethical co-ownership of agricultural and
residential property—connecting land, people, and purpose across borders.
        </p>
      </section>

      <section className="bg-gray-50 py-16 px-8 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-6"> Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
        To simplify co-ownership of farmland and property through transparent, legally-
backed, and tech-enabled group models that create shared wealth, local jobs, and
long-term security.
        </p>
      </section>

      {/* Community Voices */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Community Voices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {communityQuotes.map((c, idx) => (
            <blockquote key={idx} className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-gray-600">“{c.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">— {c.name}, <span className="font-medium">{c.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* What We Believe In */}
      <section className="bg-green-50 py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">We believe in</h2>
        <div className="max-w-xl mx-auto space-y-3">
          {values.map((val) => (
            <div key={val} className="flex items-start">
              <div className="mt-1 mr-3 text-green-700 font-bold">•</div>
              <p className="text-gray-700">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Roles */}
      <section className="bg-gray-50 py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Roles & Voices</h2>
        <div className="space-y-8">
          {keyRoles.map((kr, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">{kr.name}</h3>
              <p className="text-xs text-gray-500">{kr.roleDesc}</p>
              <p className="mt-2 text-gray-700 italic">“{kr.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with us for traceable change</h2>
        <p className="text-gray-700 mb-6">Join us in co-creating sustainable solutions that tackle climate change, protect nature, and support vulnerable communities.</p>
        <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold">
          Contact
        </a>
      </section>
    </main>
  );
}
