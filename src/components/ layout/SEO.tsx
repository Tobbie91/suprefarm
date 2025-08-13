import { Helmet } from "react-helmet-async";
export default function SEO({title,desc}:{title:string;desc?:string}) {
  const full = `${title} • Suprefarm`;
  return (
    <Helmet>
      <title>{full}</title>
      {desc && <meta name="description" content={desc}/>}
      <meta property="og:title" content={full}/>
      {desc && <meta property="og:description" content={desc}/>}
    </Helmet>
  );
}
