import { Link } from "react-router-dom";
type Project = { slug:string; title:string; country?:string; cover:string; excerpt:string; };
export function ProjectsPreview({items}:{items:Project[]}){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(p=>(
        <Link key={p.slug} to={`/project/${p.slug}`} className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-md">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition"/>
          </div>
          <div className="p-4">
            <div className="text-xs uppercase tracking-wide text-slate-500">{p.country}</div>
            <h3 className="mt-1 font-semibold text-brand-ink">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600 line-clamp-2">{p.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
