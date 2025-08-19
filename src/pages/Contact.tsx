

import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="bg-green-900 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Let’s co-create community-driven climate solutions — together.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Office Info */}
          <div className="bg-green-50 rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Suprefarm</h2>
            
            <p className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-green-700 mt-1"/> 
              Dok-Noord 4, Bus C102 <br/> 9000 Ghent
            </p>

            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-green-700"/> 
              +234 (0) 813 516 9538
            </p>

            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-green-700"/> 
              <a href="mailto:hello@suprefarm.com" className="text-green-700 hover:underline">
                hello@suprefarm.com
              </a>
            </p>

            <p className="text-gray-700 mt-6">
              We’d love to hear from you. Whether you’re an investor, farmer, or community partner — let’s connect.
            </p>
          </div>

          {/* Contact Form */}
          <form 
            className="bg-white rounded-2xl shadow-md p-8 space-y-6 border"
            onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}
          >
            <h2 className="text-2xl font-bold text-green-800 mb-4">Send us a message</h2>
            
            <div>
              <label className="block mb-2 font-medium flex items-center gap-2">
                <User className="w-5 h-5 text-green-600"/> Name *
              </label>
              <input 
                type="text" 
                required 
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" 
              />
            </div>

            <div>
              <label className="block mb-2 font-medium flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600"/> Email *
              </label>
              <input 
                type="email" 
                required 
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" 
              />
            </div>

            <div>
              <label className="block mb-2 font-medium flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-green-600"/> Message *
              </label>
              <textarea 
                required 
                className="w-full border rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-600" 
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="consent" required className="mt-1" />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I agree that my information is stored and used to contact me.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-5 h-5"/> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center bg-white shadow-md rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Stay Connected</h3>
          <p className="text-gray-700 mb-6">Join our journey — subscribe for updates and stories from Suprefarm.</p>
          <form 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}
          >
            <input 
              type="email" 
              placeholder="Your email" 
              required 
              className="px-4 py-3 border rounded-lg w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-green-600" 
            />
            <button 
              type="submit" 
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
