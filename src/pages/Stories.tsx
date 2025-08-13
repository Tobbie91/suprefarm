
import { Link } from 'react-router-dom';
import stories from "../stories.json"

export default function Stories() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero / Title
      <section className="bg-green-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our stories: The voices that shape our projects</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Read about our projects in action, the people behind them, and how they’ve helped bring meaningful
          change to their lives.
        </p>
      </section>

      {/* Stories List */}
      {/* <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {stories.map((s) => (
            <article key={s.slug} className="border-b pb-6 last:border-none">
              <span className="text-sm uppercase text-green-700">News</span>
              <h2 className="text-2xl font-semibold mt-2">
                <Link to={`/stories/${s.slug}`} className="hover:underline">
                  {s.title}
                </Link>
              </h2>
              <p className="text-gray-700 mt-1">{s.excerpt}</p>
              <p className="text-sm text-gray-500 mt-1">{new Date(s.date).toLocaleDateString()}</p>
            </article>
          ))}
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="bg-green-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join our journey</h2>
        <p className="mb-6 text-gray-700">Subscribe to our stories.</p>
        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Subscribed (replace with Mailchimp form)!');
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            required
            className="px-4 py-2 border rounded-lg w-full sm:w-auto"
          />
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-lg">
            Subscribe
          </button>
        </form>
      </section> */} 
    </main>
  );
}
