import { useState } from 'react'
import { BookOpen, CheckCircle, ArrowRight, Download, Shield, BarChart3, PiggyBank, Target, TrendingUp, MessageCircle } from 'lucide-react'
import { LINKS } from '@/config/links'

export default function Guida() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrare con email service (Mailchimp, ConvertKit, ecc.)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-dm-accent/10 border border-dm-accent/30 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="h-4 w-4 text-dm-accent" />
              <span className="text-xs text-dm-accent font-medium">Lead Magnet Gratuito</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Gestione Finanze<br />
              <span className="gradient-text">Personali</span>
            </h1>

            <p className="text-lg text-dm-muted leading-relaxed mb-6">
              Prima di investire un centesimo in copy trading, devi sapere esattamente
              dove vanno i tuoi soldi. Questa guida ti insegna a <strong className="text-dm-text">monitorare entrate,
              uscite e capire quanto puoi realmente destinare</strong> agli investimenti ad alto rischio.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Framework pratico per tracciare entrate e uscite',
                'Template Excel/Sheets pronto all\'uso',
                'Come calcolare il tuo "budget rischio"',
                'Regole per non investire piu\' di quello che puoi perdere',
                'Checklist pre-investimento',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-dm-accent flex-shrink-0" />
                  <span className="text-dm-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-dm-card border border-dm-border rounded-2xl p-8">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-2 text-center">Scarica la Guida</h2>
                <p className="text-sm text-dm-muted text-center mb-6">Inserisci la tua email per ricevere la guida PDF</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dm-text mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      placeholder="marco@esempio.com"
                      className="w-full px-4 py-3 bg-dm-card-light border border-dm-border rounded-xl text-dm-text placeholder-dm-muted focus:border-dm-accent focus:outline-none focus:ring-2 focus:ring-dm-accent/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-6 py-3.5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 pulse-glow"
                  >
                    <Download className="h-5 w-5" />
                    Scarica Gratis
                  </button>
                  <p className="text-xs text-dm-muted text-center">
                    Zero spam. Riceverai solo la guida e aggiornamenti rilevanti.
                    Puoi cancellarti in qualsiasi momento.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-dm-accent mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Guida inviata!</h2>
                <p className="text-dm-muted mb-6">
                  Controlla la tua email (anche lo spam).
                  Nel frattempo, entra nella community:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-dm-purple hover:bg-dm-purple/80 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Entra in Discord
                  </a>
                  <a
                    href={LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-dm-card-light hover:bg-dm-red/10 border border-dm-border text-dm-text px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    Guarda i Video su YouTube
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-dm-card/50 border-y border-dm-border">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Cosa trovi nella <span className="gradient-text">guida</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Traccia le tue finanze',
                desc: 'Un sistema semplice per monitorare entrate e uscite mensili. Sai esattamente dove vanno i tuoi soldi.',
                color: 'text-dm-blue',
              },
              {
                icon: PiggyBank,
                title: 'Calcola il budget rischio',
                desc: 'Quanto puoi effettivamente destinare a investimenti ad alto rischio senza mettere a rischio la tua stabilita\' finanziaria.',
                color: 'text-dm-gold',
              },
              {
                icon: Target,
                title: 'Checklist pre-investimento',
                desc: 'Le 10 domande da farti prima di mettere soldi in qualsiasi prodotto. Se non passi la checklist, non investire.',
                color: 'text-dm-accent',
              },
              {
                icon: Shield,
                title: 'Proteggi il tuo capitale',
                desc: 'Regole ferree su quanto allocare, quando fermarsi, e come gestire le perdite senza farsi prendere dal panico.',
                color: 'text-dm-red',
              },
              {
                icon: TrendingUp,
                title: 'Obiettivi realistici',
                desc: 'Come impostare aspettative reali nel copy trading. Spoiler: il 4% mensile netto e\' gia\' un ottimo target.',
                color: 'text-dm-accent-light',
              },
              {
                icon: BookOpen,
                title: 'Template pronto',
                desc: 'Foglio Excel/Google Sheets gia\' configurato. Lo apri, inserisci i tuoi numeri, e hai tutto sotto controllo.',
                color: 'text-dm-purple',
              },
            ].map(item => (
              <div key={item.title} className="bg-dm-card border border-dm-border rounded-xl p-6 hover:border-dm-accent/20 transition-colors">
                <item.icon className={`h-8 w-8 ${item.color} mb-4`} />
                <h3 className="font-bold text-dm-text mb-2">{item.title}</h3>
                <p className="text-sm text-dm-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto a prendere il <span className="text-dm-accent">controllo</span>?
        </h2>
        <p className="text-dm-muted mb-8 max-w-xl mx-auto">
          La guida e' gratuita. Il primo passo e' sempre capire dove sei prima di decidere dove vuoi andare.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-8 py-4 rounded-xl font-bold text-lg transition-all"
        >
          <Download className="h-5 w-5" />
          Torna su e Scarica
          <ArrowRight className="h-5 w-5" />
        </button>
      </section>
    </div>
  )
}
