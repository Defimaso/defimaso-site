import { useEffect } from 'react'
import { ExternalLink, TrendingUp, TrendingDown, Shield, Zap, ChevronRight, AlertTriangle, Eye } from 'lucide-react'
import { HISTORICAL_RESULTS, LINKS } from '@/config/links'

// ─── Grafico equity SVG puro ──────────────────────────────────────────────────
interface ChartPoint { label: string; value: number }

function EcoChart({ data }: { data: ChartPoint[] }) {
  const W = 500
  const H = 120
  const PAD = { top: 12, right: 16, bottom: 28, left: 40 }
  const chartW = W - PAD.left - PAD.right
  const chartH = H - PAD.top - PAD.bottom

  const values = data.map(d => d.value)
  const minV = Math.min(...values)
  const maxV = Math.max(...values)
  const range = maxV - minV || 1

  const toX = (i: number) => PAD.left + (i / (data.length - 1)) * chartW
  const toY = (v: number) => PAD.top + chartH - ((v - minV) / range) * chartH

  const polyPoints = data.map((d, i) => `${toX(i)},${toY(d.value)}`).join(' ')
  const areaPoints = [
    `${PAD.left},${PAD.top + chartH}`,
    ...data.map((d, i) => `${toX(i)},${toY(d.value)}`),
    `${PAD.left + chartW},${PAD.top + chartH}`,
  ].join(' ')

  const lastIsPositive = data[data.length - 1].value >= data[0].value
  const lineColor = lastIsPositive ? '#166534' : '#9b1c1c'
  const areaColor = lastIsPositive ? 'rgba(22,101,52,0.08)' : 'rgba(155,28,28,0.08)'

  // Linee guida orizzontali
  const gridLines = [0, 0.25, 0.5, 0.75, 1].map(p => ({
    y: PAD.top + chartH - p * chartH,
    label: (minV + p * range).toFixed(1) + '%',
  }))

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: H, display: 'block' }}>
        {/* Linee guida */}
        {gridLines.map((g, i) => (
          <g key={i}>
            <line x1={PAD.left} y1={g.y} x2={PAD.left + chartW} y2={g.y}
              stroke="#dde3ea" strokeWidth="1" strokeDasharray="4 4" />
            <text x={PAD.left - 4} y={g.y + 4} fontSize="9" fill="#718096"
              textAnchor="end" fontFamily="Inter, sans-serif">{g.label}</text>
          </g>
        ))}
        {/* Area fill */}
        <polygon points={areaPoints} fill={areaColor} />
        {/* Linea */}
        <polyline points={polyPoints} fill="none" stroke={lineColor} strokeWidth="2.5"
          strokeLinejoin="round" strokeLinecap="round" />
        {/* Punti + label asse X */}
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={toX(i)} cy={toY(d.value)} r="4" fill={lineColor} stroke="white" strokeWidth="2" />
            <text x={toX(i)} y={H - 4} fontSize="9" fill="#718096"
              textAnchor="middle" fontFamily="Inter, sans-serif">{d.label}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}

// ─── Dati ecosistemi specifici per la pagina Investor ─────────────────────────
const INVESTOR_ECOSYSTEMS = [
  {
    id: 'linearity',
    name: 'Linearity Ecosystem',
    provider: 'Linearity Team',
    status: 'active' as const,
    broker: 'RoboForex (cent) / FP Markets (standard)',
    brokerKey: 'roboforex' as const,
    target: '4% mensile netto',
    minCapital: '50€ (conto cent)',
    commission: '30%',
    riskLevel: 'medio',
    results: { label: 'Gain totale', value: '+24.16%', period: 'Da inizio attività' },
    extraStats: [
      { label: 'Max Drawdown', value: '2.26%' },
      { label: 'Balance attuale', value: '€11.728' },
      { label: 'Profitto generato', value: '+€1.829' },
    ],
    chartData: [
      { label: 'Sett 1', value: 0 },
      { label: 'Sett 2', value: 8.9 },
      { label: 'Sett 3', value: 17.31 },  // 8.9 + 7.41 (cumulato)
      { label: 'Sett 4', value: 24.16 },  // + 9.79 approx → totale a fine mese
    ],
    chartLabel: 'Equity curve — Febbraio 2026 (% gain cumulato)',
    description: `L'idea di fondo è semplice ma ambiziosa: offrire, attraverso una sola strategia, tranquillità operativa grazie alla compensazione continua tra le diverse operatività presenti. Stiamo costruendo un prodotto pensato per reggere anche le condizioni di mercato più complesse e instabili.

La diversificazione permette di gestire l'esposizione in modo controllato, evitando sovraesposizioni sullo stesso strumento. L'obiettivo è una curva equity bilanciata: eventuali stop loss su alcune coppie vengono compensati dai take profit su altre.`,
    features: [
      'Forex con TP/SL classico',
      'Griglia senza incremento di size (con SL)',
      'Griglia dinamica su coppie forex',
      'XAUUSD con TP/SL e griglia a mediazione',
      'Resistenza ai periodi fuori statistica',
      'Un solo link di aggancio',
    ],
  },
  {
    id: 'monson',
    name: 'Monson Metrix Ecosystem',
    provider: 'Monson Team',
    status: 'active' as const,
    broker: 'TBD',
    brokerKey: null,
    target: '5% mensile',
    minCapital: '10.000 USC',
    commission: '30%',
    riskLevel: 'medio',
    results: { label: 'Gain totale', value: '+0.57%', period: 'Da inizio attività (Feb 2026)' },
    extraStats: [
      { label: 'Max Drawdown', value: '0.52%' },
      { label: 'Balance attuale', value: 'USC 10.057' },
      { label: 'Profitto generato', value: '+USC 57' },
    ],
    chartData: [
      { label: 'Inizio', value: 0 },
      { label: 'Sett 1', value: 0.18 },
      { label: 'Sett 2', value: 0.35 },
      { label: 'Attuale', value: 0.57 },
    ],
    chartLabel: 'Equity curve — Da inizio attività (% gain cumulato)',
    description: `Quattro strategie complementari in un unico ecosistema: DBD EVO, Maelstrom Apex, Center Flow e Pressure Flow. DBD EVO e Maelstrom Apex hanno track record consolidato. Center Flow basa la propria logica sul centraggio del prezzo, con la capacità di chiudere più posizioni contemporaneamente per massimizzare il profitto. Pressure Flow opera su EURUSD in modalità manuale, gestita da un trader dedicato su una quota del capitale.

La martingala classica sarà aggiunta solo dopo backtest positivi su almeno 10 anni, comprendenti il periodo attuale.`,
    features: [
      'DBD EVO — griglia consolidata',
      'Maelstrom Apex — track record pluriennale',
      'Center Flow — centraggio del prezzo',
      'Pressure Flow — trading manuale EURUSD',
      '11 coppie forex diversificate',
      'Resa target ≥ 5%/mese',
    ],
  },
  {
    id: 'qa',
    name: 'QA Ecosystem',
    provider: 'QA — 8 anni di Trading Sistematico',
    status: 'active' as const,
    broker: 'TBD',
    brokerKey: null,
    target: 'Rendimento sostenibile medio/lungo termine',
    minCapital: '10.000 USC',
    commission: '30%',
    riskLevel: 'medio',
    results: { label: 'Gain totale', value: '+0.99%', period: 'Da inizio attività (Feb 2026)' },
    extraStats: [
      { label: 'Max Drawdown', value: '2.76%' },
      { label: 'Balance attuale', value: 'USC 10.078' },
      { label: 'Profitto generato', value: '+USC 100' },
    ],
    chartData: [
      { label: 'Inizio', value: 0 },
      { label: 'Sett 1', value: 0.31 },
      { label: 'Sett 2', value: 0.62 },
      { label: 'Attuale', value: 0.99 },
    ],
    chartLabel: 'Equity curve — Da inizio attività (% gain cumulato)',
    description: `Un portafoglio di Expert Advisor ideati, progettati e codificati interamente in-house da un team con 8 anni di esperienza nel trading sistematico. L'obiettivo non è il rendimento massimo a breve termine, ma il giusto equilibrio tra profitto sostenibile e controllo del rischio nel medio/lungo periodo.

100% automatico — nessun intervento manuale, nessuna decisione discrezionale.`,
    features: [
      'EA sviluppati interamente in-house',
      '8 anni di track record sistematico',
      '100% automatizzato',
      'Focus su sostenibilità a lungo termine',
      'Giusto rapporto profitto/rischio',
      'Portfolio diversificato di strategie',
    ],
  },
]

// ─── Palette "Light Luxury" ───────────────────────────────────────────────────
const C = {
  bg:       '#f8f7f4',
  bgCard:   '#ffffff',
  bgAlt:    '#eef2f7',
  bgAlt2:   '#f0f4f8',
  navy:     '#1e3a5f',
  navyMed:  '#2d5986',
  navyLight:'#3d6b9e',
  gold:     '#c9a84c',
  goldLight:'#e2b95e',
  text:     '#0f1923',
  muted:    '#4a5568',
  mutedLt:  '#718096',
  border:   '#dde3ea',
  borderLt: '#e8edf3',
  positive: '#166534',
  positiveBg:'#f0fdf4',
  negative: '#9b1c1c',
  negativeBg:'#fff5f5',
  warn:     '#92400e',
  warnBg:   '#fffbeb',
}

// ─── Componenti interni ───────────────────────────────────────────────────────

function InvNavbar() {
  return (
    <nav style={{ background: C.bgCard, borderBottom: `1px solid ${C.border}` }}
      className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{ background: C.navy }} className="w-8 h-8 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span style={{ color: C.navy, fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-xl font-bold tracking-tight">
            Maso<span style={{ color: C.gold }}>Lab</span>
          </span>
        </div>
        <span style={{ background: C.bgAlt, color: C.navyMed, border: `1px solid ${C.border}` }}
          className="text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
          Private Access
        </span>
      </div>
    </nav>
  )
}

function StatPill({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{
      background: accent ? C.navy : C.bgCard,
      border: `1px solid ${accent ? C.navy : C.border}`,
      color: accent ? '#fff' : C.text,
    }} className="rounded-2xl px-6 py-4 text-center">
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: accent ? C.goldLight : C.navy }}
        className="text-2xl font-bold">
        {value}
      </div>
      <div style={{ color: accent ? 'rgba(255,255,255,0.7)' : C.muted }} className="text-xs mt-1 font-medium">
        {label}
      </div>
    </div>
  )
}

function DrawdownBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = Math.min((value / max) * 100, 100)
  const color = value < 3 ? '#166534' : value < 6 ? '#92400e' : '#9b1c1c'
  return (
    <div className="mt-2">
      <div style={{ background: C.bgAlt, borderRadius: 4, height: 6 }}>
        <div style={{ width: `${pct}%`, background: color, borderRadius: 4, height: 6, transition: 'width 0.6s ease' }} />
      </div>
    </div>
  )
}

function MetricBox({ label, value, sub, positive }: { label: string; value: string; sub?: string; positive?: boolean }) {
  return (
    <div style={{ background: C.bgAlt, border: `1px solid ${C.borderLt}`, borderRadius: 12 }} className="p-4">
      <div style={{ color: C.mutedLt }} className="text-xs font-medium mb-1">{label}</div>
      <div style={{ color: positive === true ? C.positive : positive === false ? C.negative : C.text }}
        className="text-lg font-bold">{value}</div>
      {sub && <div style={{ color: C.mutedLt }} className="text-xs mt-0.5">{sub}</div>}
    </div>
  )
}

function StepBadge({ n, text, link, linkLabel }: { n: number; text: string; link?: string; linkLabel?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div style={{ background: C.navy, color: '#fff', minWidth: 28, height: 28 }}
        className="rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
        {n}
      </div>
      <div style={{ color: C.muted }} className="text-sm leading-relaxed">
        {text}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            style={{ color: C.navyMed }} className="inline-flex items-center gap-1 ml-1.5 font-medium hover:underline">
            {linkLabel} <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  )
}

// ─── Pagina principale ────────────────────────────────────────────────────────

export default function Investor() {
  // Sovrascrive il background scuro del body globale per questa pagina
  useEffect(() => {
    const prev = document.body.style.background
    document.body.style.background = C.bg
    document.body.style.color = C.text
    return () => {
      document.body.style.background = prev
      document.body.style.color = ''
    }
  }, [])

  const riskLabel: Record<string, string> = {
    'medio': 'Rischio Medio',
    'medio-alto': 'Rischio Medio-Alto',
    'alto': 'Rischio Alto',
  }
  const riskColor: Record<string, { bg: string; text: string; border: string }> = {
    'medio':      { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
    'medio-alto': { bg: '#fffbeb', text: '#92400e', border: '#fde68a' },
    'alto':       { bg: '#fff5f5', text: '#9b1c1c', border: '#fecaca' },
  }

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: C.text }}>
      <InvNavbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${C.bgCard} 0%, ${C.bgAlt} 100%)`,
          borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div style={{ color: C.gold }} className="text-sm font-semibold tracking-widest uppercase mb-4">
              Maso Lab — Accesso Riservato
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.navy, letterSpacing: '-0.02em' }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Copy trading professionale.{' '}
              <span style={{ color: C.gold }}>Rischio gestito, rendimento reale.</span>
            </h1>
            <p style={{ color: C.muted }} className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Tre ecosistemi algoritmici attivi, con strategia di rischio diversificata e
              dati di performance pubblici e verificabili su MyFXBook.
              Pensati per chi destina una quota del proprio capitale a strumenti ad alto
              potenziale, senza rinunciare a trasparenza e controllo.
            </p>
            <p style={{ color: C.mutedLt }} className="text-sm leading-relaxed mb-10 max-w-2xl">
              Marco documenta il proprio percorso con dati reali — compresi i mesi negativi.
              Non è consulenza finanziaria. È accesso agli stessi ecosistemi che usa lui,
              con il supporto diretto del team per l'aggancio.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              <StatPill label="Target mensile netto" value="5%" accent />
              <StatPill label="Ecosistemi attivi" value="3" />
              <StatPill label="Max drawdown storico" value="2.76%" />
              <StatPill label="Dati verificati" value="MyFXBook" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────────────── */}
      <div style={{ background: C.warnBg, borderBottom: `1px solid #fde68a` }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: C.warn }} />
          <p style={{ color: C.warn }} className="text-sm">
            <strong>Attenzione:</strong> Ogni investimento comporta rischi, inclusa la possibile perdita del capitale.
            I rendimenti passati non garantiscono quelli futuri. Questo non è consulenza finanziaria.
          </p>
        </div>
      </div>

      {/* ── ECOSISTEMI ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div style={{ color: C.gold }} className="text-xs font-bold tracking-widest uppercase mb-3">Portfolio Attivo</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.navy }}
            className="text-3xl md:text-4xl font-bold mb-4">I 3 Ecosistemi</h2>
          <p style={{ color: C.muted }} className="text-base max-w-xl mx-auto">
            Ogni ecosistema è un paniere di strategie algoritmiche diversificate per operatività,
            coppie valutarie e orizzonte temporale. La diversificazione interna riduce la volatilità
            complessiva e protegge il capitale nelle fasi avverse di mercato.
          </p>
        </div>

        <div className="space-y-10">
          {INVESTOR_ECOSYSTEMS.map((eco) => {
            const rc = riskColor[eco.riskLevel] || riskColor['medio']
            const isPositive = eco.results.value.startsWith('+')
            const brokerLink = eco.brokerKey === 'roboforex'
              ? LINKS.brokers.roboforex
              : eco.brokerKey === 'fpMarkets'
              ? LINKS.brokers.fpMarkets
              : null

            return (
              <div key={eco.id}
                style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 20 }}
                className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">

                {/* Header card */}
                <div style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMed} 100%)` }}
                  className="px-8 py-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        className="text-2xl font-bold text-white">{eco.name}</h3>
                      <span style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }} className="text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        ● Attivo
                      </span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.65)' }} className="text-sm">
                      Provider: {eco.provider} · Broker: {eco.broker}
                    </p>
                  </div>
                  <div style={{ background: rc.bg, color: rc.text, border: `1px solid ${rc.border}` }}
                    className="px-4 py-2 rounded-xl text-sm font-bold">
                    {riskLabel[eco.riskLevel]}
                  </div>
                </div>

                <div className="p-8">
                  {/* Descrizione */}
                  <p style={{ color: C.muted }} className="text-base leading-relaxed mb-8 whitespace-pre-line">
                    {eco.description}
                  </p>

                  {/* Metriche principali */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <MetricBox label="Target mensile" value={eco.target} />
                    <MetricBox label="Capitale minimo" value={eco.minCapital} />
                    <MetricBox label="Commissione" value={eco.commission} />
                    <MetricBox
                      label={eco.results.label}
                      value={eco.results.value}
                      sub={eco.results.period}
                      positive={isPositive}
                    />
                  </div>

                  {/* Metriche extra (drawdown, balance, profitto) */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {eco.extraStats.map(s => (
                      <MetricBox key={s.label} label={s.label} value={s.value} />
                    ))}
                  </div>

                  {/* Grafico equity */}
                  <div style={{ background: C.bgAlt, border: `1px solid ${C.borderLt}`, borderRadius: 16 }}
                    className="p-5 mb-8">
                    <div style={{ color: C.navyMed }} className="text-xs font-semibold mb-3 uppercase tracking-wider">
                      📈 {eco.chartLabel}
                    </div>
                    <EcoChart data={eco.chartData} />
                    <div style={{ color: C.mutedLt }} className="text-xs mt-2 text-right">
                      Fonte: MyFXBook · Aggiornato Feb 2026
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {eco.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm" style={{ color: C.muted }}>
                        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: C.navy }} />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* Guida aggancio */}
                  <div style={{ background: C.bgAlt, border: `1px solid ${C.borderLt}`, borderRadius: 16 }}
                    className="p-6">
                    <div style={{ color: C.navy }} className="text-sm font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4" style={{ color: C.gold }} />
                      Come agganciare questo ecosistema
                    </div>
                    <div className="space-y-4">
                      {brokerLink ? (
                        <StepBadge
                          n={1}
                          text="Apri un conto centesimale sul broker consigliato (deposito minimo 50€)."
                          link={brokerLink}
                          linkLabel="Apri conto →"
                        />
                      ) : (
                        <StepBadge
                          n={1}
                          text="Contattaci per ricevere il link broker corretto per questo ecosistema."
                        />
                      )}
                      <StepBadge
                        n={2}
                        text='Vai su CopyFX, cerca il trader, clicca "Subscribe", scegli CLASSIC. Imposta Volume Scaling: MULTIPLY.'
                      />
                      <StepBadge
                        n={3}
                        text='Imposta MULTIPLIER: 1 ogni 1.000€ per rischio MEDIO · 1 ogni 2.000€ per rischio BASSO. Attiva "Copy New Positions".'
                      />
                      <StepBadge
                        n={4}
                        text="Accedi al canale Discord dedicato per ricevere il link di aggancio ufficiale e il supporto del team."
                        link={LINKS.discord}
                        linkLabel="Entra nel Discord →"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── VALUE PROP NUMERI ────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMed} 100%)` }}
        className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '5%', label: 'Target netto mensile', sub: 'Obiettivo ogni ecosistema' },
              { value: '<3%', label: 'Max drawdown storico', sub: 'Su tutti i portafogli attivi' },
              { value: '24/7', label: 'Operatività automatica', sub: 'Zero intervento manuale' },
              { value: '100%', label: 'Capitale tuo', sub: 'Sul tuo conto broker' },
            ].map(s => (
              <div key={s.value}>
                <div style={{ color: C.goldLight, fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-white text-sm font-semibold mb-0.5">{s.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORICO ──────────────────────────────────────────────────────── */}
      <section style={{ background: C.bgCard, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}
        className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div style={{ color: C.gold }} className="text-xs font-bold tracking-widest uppercase mb-3">Trasparenza</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.navy }}
              className="text-3xl font-bold mb-3">Storico risultati</h2>
            <p style={{ color: C.muted }} className="text-sm max-w-lg mx-auto">
              Mostriamo tutto — compresi i mesi negativi. Chiunque promette solo performance positive
              sta nascondendo qualcosa. Noi no.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Bar chart storico */}
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16 }}
              className="p-6 mb-6">
              {(() => {
                const bars = [
                  { label: 'Set 24', value: 3 },
                  { label: 'Ott 24', value: 10 },
                  { label: 'Nov 24', value: 4 },
                  { label: 'Dic 24', value: -9 },
                  { label: 'Gen 25', value: -6 },
                ]
                const maxAbs = Math.max(...bars.map(b => Math.abs(b.value)))
                return (
                  <div className="space-y-3">
                    {bars.map(b => {
                      const pct = (Math.abs(b.value) / maxAbs) * 100
                      const isPos = b.value > 0
                      return (
                        <div key={b.label} className="flex items-center gap-3">
                          <span style={{ color: C.muted, minWidth: 48 }} className="text-xs font-medium text-right">{b.label}</span>
                          <div style={{ flex: 1, height: 32, position: 'relative', background: C.bgAlt, borderRadius: 6 }}>
                            <div style={{
                              position: 'absolute',
                              top: 4, bottom: 4,
                              left: isPos ? '50%' : `calc(50% - ${pct / 2}%)`,
                              width: `${pct / 2}%`,
                              background: isPos ? C.positive : C.negative,
                              borderRadius: 4,
                              transition: 'width 0.6s ease',
                              ...(isPos ? {} : { left: `calc(50% - ${pct / 2}%)` }),
                            }} />
                            {/* Linea zero */}
                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: C.border }} />
                          </div>
                          <span style={{ color: isPos ? C.positive : C.negative, minWidth: 44, fontWeight: 700 }}
                            className="text-sm text-right">{isPos ? '+' : ''}{b.value}%</span>
                        </div>
                      )
                    })}
                  </div>
                )
              })()}
            </div>

            {/* Pill list */}
            <div className="space-y-2">
              {HISTORICAL_RESULTS.map(r => (
                <div key={r.month}
                  style={{
                    background: r.type === 'positive' ? C.positiveBg : C.negativeBg,
                    border: `1px solid ${r.type === 'positive' ? '#bbf7d0' : '#fecaca'}`,
                    borderRadius: 10,
                  }}
                  className="flex items-center justify-between px-5 py-3">
                  <span style={{ color: C.text }} className="text-sm font-medium">{r.month}</span>
                  <div className="flex items-center gap-2">
                    {r.type === 'positive'
                      ? <TrendingUp className="w-4 h-4" style={{ color: C.positive }} />
                      : <TrendingDown className="w-4 h-4" style={{ color: C.negative }} />
                    }
                    <span style={{ color: r.type === 'positive' ? C.positive : C.negative }}
                      className="text-lg font-bold">{r.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: C.mutedLt }} className="text-xs text-center mt-6">
            Dati relativi alla strategia ETF Precedente (Set 2024 – Gen 2025) · Nuovi ecosistemi attivi da Feb 2026
          </p>
        </div>
      </section>

      {/* ── PERCHÉ FUNZIONA ──────────────────────────────────────────────── */}
      <section style={{ background: C.bgCard, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}
        className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div style={{ color: C.gold }} className="text-xs font-bold tracking-widest uppercase mb-3">Perché sceglierlo</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.navy }}
              className="text-3xl font-bold mb-3">Professionalità e trasparenza. Nessuna promessa.</h2>
            <p style={{ color: C.muted }} className="text-sm max-w-xl mx-auto">
              Il copy trading non è per chi vuole imparare a fare trading.
              È per chi destina una quota del proprio capitale a strumenti ad alto potenziale,
              con piena visibilità sui dati — inclusi i drawdown e i mesi negativi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Rendimento target 5%/mese, rischio misurato',
                desc: 'Max drawdown storico sotto il 3% su tutti i portafogli attivi. Non è un prodotto a basso rischio — ma il rischio è diversificato, monitorato e documentato con dati pubblici. Nessun marketing, solo numeri reali.',
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: 'Operatività 100% automatica',
                desc: 'Gli algoritmi operano 24/7 senza intervento manuale. Non richiede tempo né decisioni operative. Un controllo del saldo a settimana è sufficiente — tutto il resto è gestito dagli ecosistemi.',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Custodia diretta del capitale',
                desc: 'I fondi rimangono sul tuo conto broker, a tuo nome, sotto la tua esclusiva titolarità. Nessun intermediario gestisce i tuoi soldi. Puoi scollegarti o prelevare in qualsiasi momento, senza preavvisi o lock-up.',
              },
            ].map(item => (
              <div key={item.title}
                style={{ background: C.bgAlt, border: `1px solid ${C.borderLt}`, borderRadius: 16 }}
                className="p-6 hover:shadow-md transition-shadow">
                <div style={{ background: C.bgCard, color: C.navy, borderRadius: 12, width: 48, height: 48, border: `1px solid ${C.border}` }}
                  className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 style={{ color: C.navy, fontFamily: "'Space Grotesk', sans-serif" }}
                  className="font-bold text-lg mb-2">{item.title}</h3>
                <p style={{ color: C.muted }} className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Riquadro "come si posiziona nel portfolio" */}
          <div style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMed} 100%)`, borderRadius: 16 }}
            className="p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div style={{ color: C.goldLight }} className="text-xs font-bold tracking-widest uppercase mb-3">
                Posizionamento nel portfolio
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-bold text-white mb-4">
                Una quota dedicata all'alto rischio. Il resto, protetto.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)' }} className="text-sm leading-relaxed mb-6">
                Un portafoglio ben costruito separa le quote per livello di rischio e orizzonte temporale.
                Gli ecosistemi di copy trading occupano la <strong style={{ color: C.goldLight }}>fascia ad alto rendimento/alto rischio</strong> —
                quella porzione del capitale che può sopportare volatilità in cambio di ritorni superiori.
                Marco usa personalmente il{' '}
                <strong style={{ color: C.goldLight }}>5–15% del proprio patrimonio liquido</strong> su questi strumenti,
                mantenendo il resto su asset liquidi e conservativi.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { pct: '5%', label: 'Approccio prudente', sub: 'Prima esposizione' },
                  { pct: '10%', label: 'Approccio bilanciato', sub: 'Allocazione ottimale' },
                  { pct: '15%', label: 'Approccio deciso', sub: 'Con piena consapevolezza del rischio' },
                ].map(p => (
                  <div key={p.pct} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)' }}
                    className="p-4 text-center">
                    <div style={{ color: C.goldLight, fontFamily: "'Space Grotesk', sans-serif" }}
                      className="text-2xl font-bold">{p.pct}</div>
                    <div className="text-white text-xs font-semibold mt-1">{p.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs mt-0.5">{p.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: C.warnBg, border: `1px solid #fde68a`, borderRadius: 12 }}
            className="p-5 flex items-start gap-3 mt-8">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: C.warn }} />
            <p style={{ color: C.warn }} className="text-sm leading-relaxed">
              Il copy trading comporta rischi. Puoi perdere parte o tutto il capitale investito.
              Investi solo una quota del tuo portafoglio che sei disposto a rischiare. I risultati
              passati non garantiscono quelli futuri.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTATTI ─────────────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${C.navy} 0%, ${C.navyMed} 100%)` }}
        className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div style={{ color: C.goldLight }} className="text-xs font-bold tracking-widest uppercase mb-4">
            Accesso diretto al team
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto a entrare?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-base mb-3 max-w-xl mx-auto">
            Scrivici direttamente. Ti guidiamo nell'aggancio passo per passo —
            dalla scelta dell'ecosistema all'impostazione del moltiplicatore giusto per il tuo capitale.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-sm mb-12 max-w-xl mx-auto">
            Nessun form. Nessuna attesa. Risposta diretta da chi gestisce gli ecosistemi.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">

            {/* Telegram */}
            <a
              href="https://t.me/PLACEHOLDER_USERNAME" // TODO: inserire username Telegram reale
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#ffffff',
                color: C.navy,
                border: `2px solid rgba(255,255,255,0.3)`,
                borderRadius: 16,
                minWidth: 180,
              }}
              className="flex items-center gap-3 px-6 py-4 font-semibold hover:opacity-90 transition-opacity">
              {/* Telegram SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#229ED9"/>
                <path d="M17.5 7.5L15.1 16.7c-.2.7-.7.9-1.3.5l-3-2.3-1.4 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.5-5c.3-.3-.1-.4-.4-.2L6.8 12.5 4 11.6c-.6-.2-.6-.6.1-.9l12.5-4.8c.5-.2 1 .1.9.6z" fill="white"/>
              </svg>
              Telegram
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/PLACEHOLDER_NUMBER" // TODO: inserire numero WhatsApp reale (es. wa.me/39XXXXXXXXXX)
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                borderRadius: 16,
                minWidth: 180,
              }}
              className="flex items-center gap-3 px-6 py-4 font-semibold hover:opacity-90 transition-opacity">
              {/* WhatsApp SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35C8.47 21.51 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.69 0-3.27-.49-4.6-1.34l-3.21.85.87-3.17C4.49 15.27 4 13.69 4 12 4 7.58 7.58 4 12 4s8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
              WhatsApp
            </a>

            {/* WeChat */}
            <a
              href="#" // TODO: inserire link WeChat o QR code page
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#07C160',
                color: '#ffffff',
                borderRadius: 16,
                minWidth: 180,
              }}
              className="flex items-center gap-3 px-6 py-4 font-semibold hover:opacity-90 transition-opacity">
              {/* WeChat SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M9.5 4C5.36 4 2 7.02 2 10.78c0 2.01 1 3.8 2.6 5.03L4 18l2.32-1.16A8.3 8.3 0 009.5 17.56c.5 0 .99-.04 1.47-.11A6.67 6.67 0 0110.5 15c0-3.31 2.69-6 6-6 .27 0 .54.02.8.05C16.5 6.32 13.27 4 9.5 4zm-1.75 4.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3.5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM16.5 10c-2.76 0-5 2.24-5 5s2.24 5 5 5c.85 0 1.64-.22 2.34-.6L21 20.5l-.4-2.23C21.31 17.32 21.5 16.17 21.5 15c0-2.76-2.24-5-5-5zm-1.25 3.5c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm2.5 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z"/>
              </svg>
              WeChat
            </a>

          </div>

          <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs">
            Risposta entro 24h nei giorni lavorativi · Non è consulenza finanziaria
          </p>
        </div>
      </section>

      {/* ── FOOTER MINIMALE ──────────────────────────────────────────────── */}
      <footer style={{ background: C.bgCard, borderTop: `1px solid ${C.border}` }}
        className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div style={{ color: C.mutedLt }} className="text-sm">
            © {new Date().getFullYear()} Maso Lab · Tutti i diritti riservati
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/disclaimer" style={{ color: C.mutedLt }} className="hover:underline">Disclaimer</a>
            <a href="/privacy" style={{ color: C.mutedLt }} className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4">
          <p style={{ color: C.mutedLt }} className="text-xs leading-relaxed">
            Maso Lab non è un servizio di consulenza finanziaria. I contenuti di questa pagina sono a scopo
            puramente informativo e documentativo. Marco documenta il proprio percorso personale di investimento.
            Investire comporta rischi, inclusa la perdita del capitale investito. I risultati passati non
            garantiscono risultati futuri.
          </p>
        </div>
      </footer>

    </div>
  )
}
