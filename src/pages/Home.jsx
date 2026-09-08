import { Container } from "../Interface/index.js"
import Random from './Random.jsx'

function Home() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:pt-20">
        <div className="relative overflow-hidden rounded-[30px] border border-[#dce5df] bg-[#123d2b] px-6 py-12 shadow-[0_25px_70px_rgba(18,61,43,.16)] sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[.18em] text-emerald-100">The BlogHouse Journal</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Ideas, stories &amp; perspectives worth reading.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/75 sm:text-lg">Discover thoughtful articles from the BlogHouse community — and share your own ideas with the world.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Fresh from the community</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Latest stories</h2>
          </div>
          <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm ring-1 ring-slate-200 sm:block">Read • Learn • Share</span>
        </div>
        <Container><Random /></Container>
      </section>
    </div>
  )
}

export default Home;
