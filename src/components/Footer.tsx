import { TrendingUp, Youtube, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LINKS } from '@/config/links'

export default function Footer() {
  return (
    <footer className="bg-dm-card border-t border-dm-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-dm-accent" />
              <span className="text-lg font-bold">Defi<span className="text-dm-accent">Maso</span></span>
            </div>
            <p className="text-dm-muted text-sm leading-relaxed">
              Il mio viaggio nel mondo degli investimenti. Trasparenza totale, zero promesse, risultati reali.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-dm-text mb-3">Navigazione</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-dm-muted hover:text-dm-accent transition-colors">Home</Link>
              <Link to="/ecosistemi" className="block text-sm text-dm-muted hover:text-dm-accent transition-colors">Ecosistemi</Link>
              <Link to="/risultati" className="block text-sm text-dm-muted hover:text-dm-accent transition-colors">Risultati</Link>
              <Link to="/guida" className="block text-sm text-dm-muted hover:text-dm-accent transition-colors">Guida Gratuita</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-dm-text mb-3">Connettiti</h4>
            <div className="flex gap-3">
              <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="bg-dm-card-light hover:bg-dm-red/20 border border-dm-border p-2.5 rounded-lg transition-colors">
                <Youtube className="h-5 w-5 text-dm-red" />
              </a>
              <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="bg-dm-card-light hover:bg-dm-purple/20 border border-dm-border p-2.5 rounded-lg transition-colors">
                <MessageCircle className="h-5 w-5 text-dm-purple" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-dm-border pt-6">
          <p className="text-xs text-dm-muted leading-relaxed mb-4">
            <strong className="text-dm-gold">Disclaimer:</strong> Il trading su CFD comporta un rischio significativo di perdita del capitale.
            I risultati passati non garantiscono risultati futuri. Investi solo quello che sei disposto a perdere.
            Questo sito non fornisce consulenza finanziaria. Sono un investitore e ambasciatore dei prodotti che presento,
            il che significa che potrei ricevere commissioni. Fai sempre le tue ricerche prima di investire.
          </p>
          <p className="text-xs text-dm-muted text-center">
            &copy; {new Date().getFullYear()} DefiMaso. Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  )
}
