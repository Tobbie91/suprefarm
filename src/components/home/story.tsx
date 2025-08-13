
import { useParams, Navigate } from 'react-router-dom';
import stories from "../../stories.json"

export default function Story() {
  const { slug } = useParams();
  const story = stories.find((s: { slug: string | undefined; }) => s.slug === slug);

  if (!story) return <Navigate to="/stories" />;

  return (
    <main className="bg-white text-gray-900 py-16 px-6 md:px-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{new Date(story.date).toLocaleDateString()}</p>
        <img src={story.cover} alt={story.title} className="rounded-lg mb-8" />
        <div
          className="prose prose-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: story.body }}
        />
      </article>
    </main>
  );
}
