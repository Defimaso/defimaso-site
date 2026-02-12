import { Link } from 'react-router-dom'
import { Shield, TrendingUp, AlertTriangle, ChevronRight, ExternalLink, BookOpen, ArrowRight } from 'lucide-react'
import { ECOSYSTEMS, LINKS } from '@/config/links'

const riskColors = {
  'medio': { bg: 'bg-dm-gold/20', text: 'text-dm-gold', border: 'border-dm-gold/30' },
  'medio-alto': { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
  'alto': { bg: 'bg-dm-red/20', text: 'text-dm-red', border: 'border-dm-red/30' },
}

export default function Ecosistemi() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Gli <span className="gradient-text">Ecosistemi</span>
        </h1>
        <p className="text-lg text-dm-muted max-w-3xl leading-relaxed mb-6">
          Non un prodotto solo. Panieri di strategie diversificate per operativita', rischio, coppie e durata.
          Ogni ecosistema e' pensato per <strong className="text-dm-text">resistere ai periodi fuori statistica</strong> —
          il vero problema del copy trading tradizionale.
        </p>
        <div className="bg-dm-card border border-dm-border rounded-xl p-5 max-w-2xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-dm-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-dm-muted">
              <strong className="text-dm-gold">Attenzione:</strong> Sto testando questi prodotti con i miei soldi.
              Alcuni sono nuovi, altri hanno track record. Non ti sto vendendo nulla — ti sto facendo vedere cosa provo io.
              Investi solo quello che sei disposto a perdere.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-16 space-y-8">
        {ECOSYSTEMS.map(eco => {
          const risk = riskColors[eco.riskLevel as keyof typeof riskColors] || riskColors['medio']
          return (
            <div key={eco.id} className="bg-dm-card border border-dm-border rounded-2xl overflow-hidden hover:border-dm-accent/20 transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-dm-border">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-bold text-dm-text">{eco.name}</h2>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      eco.status === 'active' ? 'bg-dm-accent/20 text-dm-accent' : 'bg-dm-gold/20 text-dm-gold'
                    }`}>
                      {eco.status === 'active' ? 'Attivo' : 'In test'}
                    </span>
                  </div>
                  <p className="text-sm text-dm-muted">Provider: {eco.provider}</p>
                </div>
                <div className={`${risk.bg} ${risk.text} border ${risk.border} px-3 py-1.5 rounded-lg text-xs font-bold`}>
                  Rischio: {eco.riskLevel}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-dm-muted leading-relaxed mb-6">{eco.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-dm-card-light rounded-xl p-4">
                    <TrendingUp className="h-4 w-4 text-dm-accent mb-2" />
                    <div className="text-xs text-dm-muted">Target mensile</div>
                    <div className="text-sm font-bold text-dm-accent">{eco.target}</div>
                  </div>
                  <div className="bg-dm-card-light rounded-xl p-4">
                    <Shield className="h-4 w-4 text-dm-blue mb-2" />
                    <div className="text-xs text-dm-muted">Min. capitale</div>
                    <div className="text-sm font-bold text-dm-text">{eco.minCapital.split(' /')[0]}</div>
                  </div>
                  <div className="bg-dm-card-light rounded-xl p-4">
                    <div className="text-xs text-dm-muted mb-2 mt-1">Commissioni</div>
                    <div className="text-sm font-bold text-dm-gold">{eco.commission}</div>
                  </div>
                  <div className={`rounded-xl p-4 ${eco.results.value.includes('+') ? 'bg-dm-accent/10' : 'bg-dm-card-light'}`}>
                    <div className="text-xs text-dm-muted mb-2 mt-1">{eco.results.label}</div>
                    <div className="text-sm font-bold text-dm-text">{eco.results.value}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  {eco.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-dm-muted">
                      <ChevronRight className="h-3 w-3 text-dm-accent flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Broker */}
                <div className="flex items-center justify-between bg-dm-card-light rounded-xl p-4">
                  <div>
                    <div className="text-xs text-dm-muted">Broker</div>
                    <div className="text-sm font-medium text-dm-text">{eco.broker}</div>
                  </div>
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-dm-accent/10 hover:bg-dm-accent/20 text-dm-accent px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Link in Discord <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA Lead Magnet */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-dm-card to-dm-accent/5 border border-dm-accent/20 rounded-2xl p-8 text-center">
          <BookOpen className="h-10 w-10 text-dm-accent mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-3">Prima di investire, controlla le tue finanze</h2>
          <p className="text-dm-muted max-w-xl mx-auto mb-6">
            Scarica la guida gratuita per monitorare entrate, uscite e capire quanto puoi destinare agli investimenti.
          </p>
          <Link
            to="/guida"
            className="inline-flex items-center gap-2 bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-6 py-3 rounded-xl font-bold transition-all"
          >
            <BookOpen className="h-5 w-5" />
            Scarica la Guida Gratuita
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
