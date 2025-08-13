

export default function Contact() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* Header */}
      <section className="bg-green-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore how, together, we can co-create community-driven climate solutions.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Office Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Suprefarm</h2>
            <p>Dok-Noord 4, Bus C102<br />9000 Ghent</p>
            <p>+32 491 75 85 99</p>
            <p>Email: <a href="mailto:hello@climatelab.be" className="text-green-700 hover:underline">hello@cSuprefarm.com</a></p>
            <p className="mt-4">
              Let’s connect! Explore how, together, we can co-create community-driven climate solutions.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <div>
              <label className="block mb-1 font-medium">Name *</label>
              <input type="text" required className="w-full border rounded-lg px-4 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email address *</label>
              <input type="email" required className="w-full border rounded-lg px-4 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message *</label>
              <textarea required className="w-full border rounded-lg px-4 py-2 h-32" />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="consent" required className="mr-2" />
              <label htmlFor="consent" className="text-sm">
                I agree that this information is stored and used to contact me.
              </label>
            </div>

            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="bg-green-50 py-10 px-6 text-center">
        <p className="text-gray-700 mb-4">Join our journey by subscribing to our stories.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
          <input type="email" placeholder="Your email" required className="px-4 py-2 border rounded-lg w-full sm:w-auto" />
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer (integrate your Footer component here instead in App.tsx) */}
    </main>
  );
}
