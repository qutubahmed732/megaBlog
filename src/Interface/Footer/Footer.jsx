import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-[#dce5df] bg-[#102f23] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-xl font-bold">B</span>
            <span className="text-2xl font-bold tracking-tight">BlogHouse</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-emerald-50/60">A clean space for ideas, stories, tutorials and conversations. Write something meaningful and give your perspective a place to live.</p>
          <p className="mt-6 text-xs text-emerald-50/40">© {new Date().getFullYear()} BlogHouse. Built with care.</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-emerald-50/65">
            <li><Link className="transition hover:text-white" to="/">Home</Link></li>
            <li><Link className="transition hover:text-white" to="/all-posts">All Posts</Link></li>
            <li><Link className="transition hover:text-white" to="/add-post">Write a Post</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">Account</h3>
          <ul className="mt-5 space-y-3 text-sm text-emerald-50/65">
            <li><Link className="transition hover:text-white" to="/login">Log in</Link></li>
            <li><Link className="transition hover:text-white" to="/signup">Create account</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
