import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-neutral-900/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Name link */}
        <Link
          to="/"
          className="font-mono text-sm sm:text-base font-bold tracking-widest text-white uppercase hover:text-neutral-300 transition-colors"
        >
          Nidhi
        </Link>

        {/* Right: Navigation + Mail Icon Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Nav />

          <a
            href="mailto:nemoworkspace0.0@gmail.com"
            aria-label="Send email to Nidhi"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-90 active:translate-y-0 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
