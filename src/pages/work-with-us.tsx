import { ShieldCheck, Users, BarChart3, Globe } from "lucide-react";
import green7 from "../assets/images/green7.webp";
import green8 from "../assets/images/green8.webp";
import green9 from "../assets/images/green9.webp";
import green10 from "../assets/images/green10.webp";

const outreachBoxes = [
  {
    title: "Pool Funds and Co-Own",
    description:
      "Start from as little as ₦50,000 or $100. Join others to co-own farmland or apartment projects. Together, we make land ownership and agribusiness affordable.",
    cta: "Start Investing",
    link: "/pricing", // can later link to a payment/plan page
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Acquire Your Own Land",
    description:
      "Select a farmland project of your choice and become a verified co-owner. Ownership documents are processed digitally and securely.",
    cta: "Acquire Land Now",
    link: "/acquire", // a dedicated page that leads to login/signup
    bgColor: "bg-green-100",
    textColor: "text-gray-900",
    buttonStyle: "text-green-700 border-green-700 hover:bg-green-200",
  },
  {
    title: "I’m Abroad. Can I Join?",
    description:
      "Yes! Our platform is designed for the Diaspora. You can invest, co-own, and manage farmland from anywhere in the world. All processes and documents are online.",
    cta: "Partner with Us",
    link: "/contact",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  {
    title: "Earn and Grow",
    description:
      "With every season, you enjoy structured returns from your farm projects. Track earnings, monitor updates, and reinvest easily through your Suprefarm account.",
    cta: "See Returns",
    link: "/login",
    bgColor: "bg-green-50",
    textColor: "text-gray-900",
    buttonStyle: "text-green-700 border-green-700 hover:bg-green-200",
  },
];

export default function WorkWithUs() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 px-6 md:px-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Work <span className="text-yellow-400">With Us</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-10">
            Join hands with <span className="font-semibold">SupreFarm</span> to
            create{" "}
            <span className="underline decoration-yellow-400">real impact</span>{" "}
            — driving{" "}
            <span className="text-yellow-400 font-medium">
              climate-smart agriculture
            </span>
            , high-integrity carbon removals, and thriving communities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="/projects"
              className="px-8 py-4 rounded-2xl bg-yellow-400 text-green-900 font-semibold text-lg shadow-md hover:bg-yellow-300 transition"
            >
              Explore Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-green-900 transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
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
  className={`inline-block px-6 py-3 rounded-full font-semibold shadow-md ${
    box.bgColor === "bg-white"
      ? "bg-green-700 text-white border-2 border-green-700"
      : "bg-yellow-400 text-green-900 border-2 border-yellow-400"
  }`}
>
  {box.cta}
</a>

            </div>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Why Partner With Us?
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Block 1 */}
          <div className="flex items-start gap-6">
            <img
              src={green7}
              alt="Transparency"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <ShieldCheck className="text-green-600 w-6 h-6" /> Full
                Transparency
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every co-ownership project comes with clear legal documentation,
                tech-enabled onboarding, and real-time monitoring so you always
                know where your money is and how it’s growing.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex items-start gap-6">
            <img
              src={green8}
              alt="Community"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Users className="text-green-600 w-6 h-6" /> Community Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We channel resources into local initiatives—empowering women,
                supporting smallholder farmers, and strengthening food security
                across communities.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex items-start gap-6">
            <img
              src={green9}
              alt="Returns"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <BarChart3 className="text-green-600 w-6 h-6" /> Seasonal
                Returns
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your investments are aligned with crop harvest cycles, providing
                you with structured, predictable income and opportunities to
                reinvest for compounded growth.
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex items-start gap-6">
            <img
              src={green10}
              alt="Global reach"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Globe className="text-green-600 w-6 h-6" /> Diaspora Friendly
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you’re in Nigeria or abroad, you can invest, co-own
                land, and manage your projects entirely online with secure
                access to all your documents and reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials or Proof Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <blockquote className="max-w-3xl mx-auto text-center text-2xl font-medium text-gray-800 leading-relaxed border-l-4 border-green-600 pl-6 italic">
            “At Suprefarm, we believe farming should go beyond cultivation —
            it’s about empowering people, regenerating nature, and securing a
            sustainable future.”
          </blockquote>

          <footer className="text-gray-500 font-semibold">
            Miro Jacob, Co-founder Suprefarm
          </footer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to partner for lasting impact?
        </h2>
        <p className="text-gray-700 mb-6">
          Contact us today to co-design your climate solutions with transparency
          and integrity at the core.
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
