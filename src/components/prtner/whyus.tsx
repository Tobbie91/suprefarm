import { ShieldCheck, Users, BarChart3, Globe } from "lucide-react";
import green7 from "../assets/images/green7.webp";
import green8 from "../assets/images/green8.webp";
import green9 from "../assets/images/green9.webp";
import green10 from "../assets/images/green10.webp";



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
          <ShieldCheck className="text-green-600 w-6 h-6" /> Full Transparency
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Every co-ownership project comes with clear legal documentation,
          tech-enabled onboarding, and real-time monitoring so you always know
          where your money is and how it’s growing.
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
          supporting smallholder farmers, and strengthening food security across
          communities.
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
          <BarChart3 className="text-green-600 w-6 h-6" /> Seasonal Returns
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your investments are aligned with crop harvest cycles, providing you
          with structured, predictable income and opportunities to reinvest for
          compounded growth.
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
          Whether you’re in Nigeria or abroad, you can invest, co-own land, and
          manage your projects entirely online with secure access to all your
          documents and reports.
        </p>
      </div>
    </div>
  </div>
</section>
