import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, BarChart3, Users, Youtube, MessageCircle, BookOpen, ChevronRight, AlertTriangle, CheckCircle } from 'lucide-react'
import { LINKS, ECOSYSTEMS, HISTORICAL_RESULTS } from '@/config/links'

export default function Home() {
  return (
    <div>
      {/* ============================================
          HERO - Chase Hughes: Authority + Vulnerability
          Primo impatto: onesta', non vendita
          ============================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dm-bg via-dm-card to-dm-bg" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center fade-up">
            <div className="inline-flex items-center gap-2 bg-dm-card-light border border-dm-border rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-dm-accent rounded-full animate-pulse" />
              <span className="text-xs text-dm-muted">Live da Dubai, UAE</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Il mio viaggio nel mondo degli<br />
              <span className="gradient-text">investimenti ad alto rischio</span>
            </h1>

            <p className="text-lg md:text-xl text-dm-muted max-w-3xl mx-auto mb-4 leading-relaxed">
              Copy trading, social trading, ecosistemi diversificati.
              Testo tutto, mostro tutto — <strong className="text-dm-text">anche le perdite</strong>.
            </p>

            <p className="text-sm text-dm-gold mb-8">
              Quello che ho fatto prima non ha funzionato. Ho cambiato strategia. Ecco cosa sto facendo ora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/guida"
                className="inline-flex items-center justify-center gap-2 bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-8 py-3.5 rounded-xl font-bold text-lg transition-all pulse-glow"
              >
                <BookOpen className="h-5 w-5" />
                Scarica la Guida Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-dm-card-light hover:bg-dm-purple/20 border border-dm-border text-dm-text px-8 py-3.5 rounded-xl font-bold transition-all"
              >
                <MessageCircle className="h-5 w-5 text-dm-purple" />
                Entra in Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST BAR - Chase Hughes: Social Proof
          Numeri reali, non vanity metrics
          ============================================ */}
      <section className="border-y border-dm-border bg-dm-card/50">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '6', label: 'Ecosistemi in test', icon: BarChart3 },
            { value: '50€', label: 'Minimo per iniziare', icon: Shield },
            { value: '100%', label: 'Trasparenza', icon: CheckCircle },
            { value: 'Dubai', label: 'Base operativa', icon: TrendingUp },
          ].map(item => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <item.icon className="h-5 w-5 text-dm-accent mb-1" />
              <span className="text-2xl font-bold text-dm-text">{item.value}</span>
              <span className="text-xs text-dm-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          ABOUT - Chase Hughes: Authority through Vulnerability
          "Me ne sbatto" + onesta' sui fallimenti
          ============================================ */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Chi sono e perche' dovresti <span className="text-dm-accent">fidarti</span>
            </h2>
            <div className="space-y-4 text-dm-muted leading-relaxed">
              <p>
                Mi chiamo Marco, vivo a Dubai e investo in prodotti ad alto rischio.
                Non sono un consulente finanziario, non ho la sfera di cristallo,
                e non ti prometttero' mai rendimenti garantiti.
              </p>
              <p>
                <strong className="text-dm-text">Quello che ho fatto prima non ha funzionato.</strong> Ho perso soldi, ho provato
                prodotti sbagliati, ho fatto errori di bilanciamento. A differenza di molti,
                non mi interessa nasconderlo.
              </p>
              <p>
                Ho cambiato strategia: ora testo <strong className="text-dm-accent">ecosistemi diversificati</strong> —
                panieri di copy trading bilanciati per resistere ai periodi fuori statistica.
                E te li faccio provare a partire da 50 euro su conti centesimali.
              </p>
            </div>
          </div>

          {/* Video YouTube embed */}
          <div className="aspect-video bg-dm-card rounded-xl overflow-hidden border border-dm-border">
            <iframe
              src="https://www.youtube.com/embed/CwYezO20rag?start=32"
              title="DefiMaso - Ultimo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          TRASPARENZA - Chase Hughes: Vulnerability = Trust
          Risultati veri, anche negativi
          ============================================ */}
      <section className="bg-dm-card/50 border-y border-dm-border">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Risultati <span className="text-dm-gold">reali</span>. Anche quelli brutti.
            </h2>
            <p className="text-dm-muted max-w-2xl mx-auto">
              ETF Copy Trading (vecchia strategia) — Settembre 2024 / Gennaio 2025.
              Chiuso e ripartito con un approccio diverso.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {HISTORICAL_RESULTS.map(r => (
              <div
                key={r.month}
                className={`px-5 py-3 rounded-xl border text-center min-w-[140px] ${
                  r.type === 'positive'
                    ? 'bg-dm-accent/10 border-dm-accent/30'
                    : 'bg-dm-red/10 border-dm-red/30'
                }`}
              >
                <div className={`text-xl font-bold ${r.type === 'positive' ? 'text-dm-accent' : 'text-dm-red'}`}>
                  {r.result}
                </div>
                <div className="text-xs text-dm-muted mt-1">{r.month}</div>
              </div>
            ))}
          </div>

          <div className="bg-dm-card border border-dm-border rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-dm-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm text-dm-muted leading-relaxed">
                <strong className="text-dm-gold">Perche' non ha funzionato:</strong> Ero troppo esposto su un prodotto solo.
                La diversificazione c'era, ma non il bilanciamento. Ho chiuso a un +2% complessivo
                su 5 mesi, ma ho perso di piu' su altri test. Ora la strategia e' cambiata completamente.
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/risultati" className="inline-flex items-center gap-2 text-dm-accent hover:text-dm-accent-light font-medium transition-colors">
              Vedi tutti i risultati dettagliati <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          ECOSISTEMI PREVIEW - Chase Hughes: Micro-commitments
          "Provalo con 50€" = primo piccolo si'
          ============================================ */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            I nuovi <span className="gradient-text">Ecosistemi</span>
          </h2>
          <p className="text-dm-muted max-w-2xl mx-auto">
            Non un prodotto solo. Panieri di strategie diversificate per rischio, operativita' e coppie.
            Testabili da 50€ su conti centesimali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ECOSYSTEMS.slice(0, 4).map(eco => (
            <div key={eco.id} className="bg-dm-card border border-dm-border rounded-xl p-6 hover:border-dm-accent/30 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-dm-text group-hover:text-dm-accent transition-colors">{eco.name}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  eco.status === 'active'
                    ? 'bg-dm-accent/20 text-dm-accent'
                    : 'bg-dm-gold/20 text-dm-gold'
                }`}>
                  {eco.status === 'active' ? 'Attivo' : 'In test'}
                </span>
              </div>
              <p className="text-sm text-dm-muted mb-4 leading-relaxed">{eco.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-dm-card-light rounded-lg p-3">
                  <div className="text-xs text-dm-muted">Target</div>
                  <div className="text-sm font-bold text-dm-accent">{eco.target}</div>
                </div>
                <div className="bg-dm-card-light rounded-lg p-3">
                  <div className="text-xs text-dm-muted">Min. capitale</div>
                  <div className="text-sm font-bold text-dm-text">{eco.minCapital.split(' /')[0]}</div>
                </div>
              </div>
              <div className={`rounded-lg p-3 ${
                eco.results.value.includes('+') ? 'bg-dm-accent/10' : 'bg-dm-card-light'
              }`}>
                <div className="text-xs text-dm-muted">{eco.results.label}</div>
                <div className="text-sm font-bold text-dm-text">{eco.results.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/ecosistemi"
            className="inline-flex items-center gap-2 bg-dm-card-light hover:bg-dm-accent/10 border border-dm-border hover:border-dm-accent/30 text-dm-text px-6 py-3 rounded-xl font-medium transition-all"
          >
            Scopri tutti gli ecosistemi <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ============================================
          CONTI CENTESIMALI - Chase Hughes: Reduce friction
          Bassa barriera = piu' conversioni
          ============================================ */}
      <section className="bg-gradient-to-r from-dm-accent/5 to-dm-blue/5 border-y border-dm-border">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Testa tutto con <span className="text-dm-gold">50€</span>
              </h2>
              <p className="text-dm-muted mb-6 leading-relaxed">
                I conti centesimali ti permettono di provare ecosistemi da 5.000€
                con soli 50€. Il conto viene diviso per 100: guadagni e perdite
                sono proporzionati, ma puoi testare senza rischiare grossi capitali.
              </p>
              <div className="space-y-3">
                {[
                  { broker: 'RoboForex', desc: 'Conti centesimali, ideale per testare', type: 'cent' },
                  { broker: 'Butti Markets', desc: 'Conti centesimali alternativi', type: 'cent' },
                  { broker: 'FP Markets', desc: 'Per capitali reali, commissioni basse', type: 'standard' },
                ].map(b => (
                  <a
                    key={b.broker}
                    href={LINKS.brokers[b.broker === 'RoboForex' ? 'roboforex' : b.broker === 'Butti Markets' ? 'buttiMarkets' : 'fpMarkets']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-dm-card border border-dm-border rounded-xl p-4 hover:border-dm-accent/30 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-dm-text group-hover:text-dm-accent transition-colors">{b.broker}</div>
                      <div className="text-xs text-dm-muted">{b.desc}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        b.type === 'cent' ? 'bg-dm-gold/20 text-dm-gold' : 'bg-dm-blue/20 text-dm-blue'
                      }`}>{b.type === 'cent' ? 'CENT' : 'STANDARD'}</span>
                      <ChevronRight className="h-4 w-4 text-dm-muted group-hover:text-dm-accent transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-dm-card border border-dm-border rounded-xl p-6">
              <h3 className="font-bold text-dm-text mb-4">Come funziona un conto centesimale</h3>
              <div className="space-y-4 text-sm">
                {[
                  { step: '1', text: 'Depositi 50€ sul broker (es. RoboForex)' },
                  { step: '2', text: 'Il conto mostra 5.000 (unita\' cent)' },
                  { step: '3', text: 'Le operazioni aprono come su un conto da 5.000€' },
                  { step: '4', text: 'Se guadagni 6% = 300 cent = 3€ reali' },
                  { step: '5', text: 'Testi la strategia senza rischiare grossi capitali' },
                ].map(s => (
                  <div key={s.step} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-dm-accent/20 text-dm-accent rounded-full flex items-center justify-center text-xs font-bold">
                      {s.step}
                    </span>
                    <span className="text-dm-muted pt-0.5">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LEAD MAGNET CTA - Chase Hughes: Reciprocity
          Dai valore prima di chiedere qualsiasi cosa
          ============================================ */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="bg-gradient-to-br from-dm-card via-dm-card to-dm-accent/5 border border-dm-accent/20 rounded-2xl p-8 md:p-12 text-center">
          <BookOpen className="h-12 w-12 text-dm-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Guida Gratuita: <span className="gradient-text">Gestione Finanze Personali</span>
          </h2>
          <p className="text-dm-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Prima di investire in qualsiasi cosa, devi avere il controllo delle tue finanze.
            Ho creato una guida pratica per monitorare entrate, uscite e capire quanto puoi
            effettivamente destinare agli investimenti ad alto rischio.
          </p>
          <Link
            to="/guida"
            className="inline-flex items-center gap-2 bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-8 py-4 rounded-xl font-bold text-lg transition-all pulse-glow"
          >
            <BookOpen className="h-5 w-5" />
            Scarica la Guida Gratuita
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-xs text-dm-muted mt-4">Nessuna email richiesta. Zero spam. Solo valore.</p>
        </div>
      </section>

      {/* ============================================
          YOUTUBE + DISCORD CTA
          ============================================ */}
      <section className="bg-dm-card/50 border-y border-dm-border">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dm-card border border-dm-border rounded-xl p-8 hover:border-dm-red/30 transition-colors group"
            >
              <Youtube className="h-10 w-10 text-dm-red mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-dm-red transition-colors">YouTube</h3>
              <p className="text-sm text-dm-muted leading-relaxed">
                Video settimanali su copy trading, lifestyle a Dubai, tech e il mio percorso negli investimenti.
                Tutto trasparente, zero filtri.
              </p>
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dm-card border border-dm-border rounded-xl p-8 hover:border-dm-purple/30 transition-colors group"
            >
              <Users className="h-10 w-10 text-dm-purple mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-dm-purple transition-colors">Discord Community</h3>
              <p className="text-sm text-dm-muted leading-relaxed">
                Risultati giornalieri, settimanali e mensili di tutti gli ecosistemi.
                Link di aggancio per provare le strategie. Zero fuffa.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
