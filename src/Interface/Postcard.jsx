import services from "../appwrite/config.js";
import { Link } from 'react-router-dom';
import parse from "html-react-parser"

function Postcard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(18,61,43,.13)]">
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={services.getFilePreview(featuredImage)} alt={title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-5">
          <span className="text-[11px] font-bold uppercase tracking-[.16em] text-emerald-700">Featured story</span>
          <h2 className="mt-2 line-clamp-2 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-800">{title}</h2>
          <div className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{parse(content)}</div>
          <div className="mt-5 flex items-center text-sm font-bold text-emerald-800">Read article <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></div>
        </div>
      </article>
    </Link>
  )
}

export default Postcard;
