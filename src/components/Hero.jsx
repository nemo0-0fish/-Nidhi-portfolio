import { useState } from 'react'
import keychainInactive from '@/assets/keychain-inactive.png'
import keychainActive from '@/assets/keychain-active.png'
import starCarabiner from '@/assets/star-carabiner.png'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-black text-white flex flex-col justify-between px-6 py-8 select-none overflow-hidden">
      {/* Top / Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Side labels & Central Floating Keychain */}
      <div className="relative flex-1 max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Left text */}
        <div className="hidden md:block z-10">
          <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
            A COLLECTION OF USER EXPERIENCE WORK
          </p>
        </div>

        {/* Center: Floating illustration & Dialogue popover */}
        <div
          className="relative mx-auto flex flex-col items-center justify-center cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered((prev) => !prev)}
        >
          {/* Entire swaying keychain assembly (cord + carabiner + charm) */}
          <div className="relative flex flex-col items-center animate-float-sway transition-transform duration-300 group-hover:scale-105">
            {/* Top hanging cord */}
            <div className="w-[2px] h-12 bg-gradient-to-b from-neutral-800 via-neutral-500 to-neutral-400 -mt-6 mb-0 shadow-sm" />

            {/* Silver Star Carabiner */}
            <div className="relative -mt-1.5 z-20 transition-transform duration-300 group-hover:rotate-6">
              <img
                src={starCarabiner}
                alt="Silver Star Carabiner"
                className="w-12 sm:w-14 md:w-16 h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Floating Keychain Character (Stacked for seamless crossfade) */}
            <div className="relative -mt-3.5">
              {/* Inactive State (Sleeping) */}
              <img
                src={keychainInactive}
                alt="Nidhi Keychain Sleeping"
                className={`w-56 sm:w-64 md:w-72 max-h-[55vh] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter transition-all duration-500 ${
                  isHovered ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              />

              {/* Active State (Awake & Waving) */}
              <img
                src={keychainActive}
                alt="Nidhi Keychain Awake & Waving"
                className={`absolute inset-0 w-56 sm:w-64 md:w-72 max-h-[55vh] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter transition-all duration-500 brightness-105 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-98 pointer-events-none'
                }`}
              />
            </div>
          </div>

          {/* Dialogue Box (Active State on Hover/Click) */}
          <div
            className={`absolute z-30 top-1/2 left-1/2 -translate-y-1/2 md:left-[90%] md:translate-x-4 -translate-x-1/2 w-[85vw] sm:w-[380px] md:w-[420px] transition-all duration-300 ${
              isHovered
                ? 'opacity-100 translate-y-[-50%] scale-100 pointer-events-auto'
                : 'opacity-0 translate-y-[-45%] scale-95 pointer-events-none'
            }`}
          >
            <div className="relative bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl text-left text-neutral-200">
              {/* Decorative tag */}
              <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                  ✦ INTRODUCING NIDHI
                </span>
                <span className="font-mono text-[10px] text-neutral-500">
                  HOVER / TAP
                </span>
              </div>

              {/* Text content */}
              <div className="space-y-3 font-sans text-xs sm:text-sm leading-relaxed text-neutral-300">
                <p>
                  hey! i am Nidhi ^^. I like new places, new ideas, and figuring things out along the way. Travelling has made me pretty adaptable — I’m comfortable walking into unfamiliar situations, getting a feel for what’s around me, and finding my way through them. I enjoy fun spaces, interesting people, and things that make me look at the world differently.
                </p>
                <p>
                  As a designer, I like learning by doing. I’m always up for trying something new, picking up a skill, or approaching a problem from a different angle. I like experimenting, staying curious, and finding a way to make the work feel like me.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="hidden md:block text-right z-10">
          <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
            NIDHI'S PORTFOLIO 2026
          </p>
        </div>
      </div>

      {/* Mobile side text bar (visible on small screens) */}
      <div className="md:hidden flex items-center justify-between py-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
        <span>A COLLECTION OF UX WORK</span>
        <span>PORTFOLIO 2026</span>
      </div>

      {/* Bottom: Scroll Down indicator */}
      <div className="w-full flex flex-col items-center justify-center pt-2 pb-1 text-neutral-500 hover:text-neutral-300 transition-colors">
        <span className="font-mono text-[11px] tracking-widest uppercase">
          SCROLL DOWN
        </span>
        <span className="text-xs animate-bounce mt-1">↓</span>
      </div>
    </section>
  )
}
