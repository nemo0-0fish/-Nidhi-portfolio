import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <header className="w-full bg-black border-b border-neutral-900">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-150 inline-flex items-center justify-center ${
                isActive
                  ? 'bg-white text-black font-bold px-2 py-0.5'
                  : 'text-neutral-300 hover:text-white px-2 py-0.5 no-underline'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
