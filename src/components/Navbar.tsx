import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp } from 'lucide-react'
import { LINKS } from '@/config/links'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Ecosistemi', path: '/ecosistemi' },
  { label: 'Risultati', path: '/risultati' },
  { label: 'Guida Gratuita', path: '/guida' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-dm-bg/80 backdrop-blur-xl border-b border-dm-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <TrendingUp className="h-6 w-6 text-dm-accent group-hover:text-dm-accent-light transition-colors" />
          <span className="text-xl font-bold text-dm-text">
            Defi<span className="text-dm-accent">Maso</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-dm-accent'
                  : 'text-dm-muted hover:text-dm-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-4 py-2 rounded-lg text-sm font-bold transition-all"
          >
            Discord
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-dm-text p-1">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dm-card border-b border-dm-border px-4 pb-4 space-y-2">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                location.pathname === item.path ? 'text-dm-accent' : 'text-dm-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-dm-accent text-dm-bg text-center px-4 py-2 rounded-lg text-sm font-bold"
          >
            Entra in Discord
          </a>
        </div>
      )}
    </nav>
  )
}
