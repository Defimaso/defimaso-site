import { Link } from 'react-router-dom'
import { AlertTriangle, TrendingUp, TrendingDown, ArrowRight, BookOpen } from 'lucide-react'
import { HISTORICAL_RESULTS } from '@/config/links'

export default function Risultati() {
  const totalPositive = HISTORICAL_RESULTS.filter(r => r.type === 'positive').reduce((acc, r) => acc + parseFloat(r.result), 0)
  const totalNegative = HISTORICAL_RESULTS.filter(r => r.type === 'negative').reduce((acc, r) => acc + parseFloat(r.result), 0)
  const netResult = totalPositive + totalNegative

  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Risultati <span className="text-dm-gold">trasparenti</span>
        </h1>
        <p className="text-lg text-dm-muted max-w-3xl leading-relaxed">
          Qui trovi tutto. Le vittorie e le sconfitte. I mesi buoni e quelli catastrofici.
          Perche' la trasparenza e' l'unica cosa che distingue chi fa sul serio da chi vende fumo.
        </p>
      </section>

      {/* OLD ETF Results */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-dm-card border border-dm-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-dm-border">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">ETF Copy Trading</h2>
                <p className="text-sm text-dm-muted">Vecchia strategia - Settembre 2024 / Gennaio 2025</p>
              </div>
              <span className="bg-dm-red/20 text-dm-red text-xs font-bold px-3 py-1 rounded-full">CHIUSO</span>
            </div>
          </div>

          {/* Monthly breakdown */}
          <div className="p-6">
            <div className="space-y-3 mb-8">
              {HISTORICAL_RESULTS.map(r => (
                <div key={r.month} className="flex items-center gap-4">
                  <div className="w-36 text-sm text-dm-muted">{r.month}</div>
                  <div className="flex-1">
                    <div className="h-8 bg-dm-card-light rounded-lg overflow-hidden flex items-center">
                      <div
                        className={`h-full rounded-lg flex items-center justify-end px-3 ${
                          r.type === 'positive' ? 'bg-dm-accent/30' : 'bg-dm-red/30'
                        }`}
                        style={{ width: `${Math.min(Math.abs(parseFloat(r.result)) * 8, 100)}%` }}
                      >
                        <span className={`text-sm font-bold ${
                          r.type === 'positive' ? 'text-dm-accent' : 'text-dm-red'
                        }`}>
                          {r.result}
                        </span>
                      </div>
                    </div>
                  </div>
                  {r.type === 'positive'
                    ? <TrendingUp className="h-4 w-4 text-dm-accent" />
                    : <TrendingDown className="h-4 w-4 text-dm-red" />
                  }
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-dm-accent/10 rounded-xl p-4 text-center">
                <div className="text-xs text-dm-muted mb-1">Mesi positivi</div>
                <div className="text-2xl font-bold text-dm-accent">+{totalPositive}%</div>
              </div>
              <div className="bg-dm-red/10 rounded-xl p-4 text-center">
                <div className="text-xs text-dm-muted mb-1">Mesi negativi</div>
                <div className="text-2xl font-bold text-dm-red">{totalNegative}%</div>
              </div>
              <div className={`${netResult >= 0 ? 'bg-dm-accent/10' : 'bg-dm-red/10'} rounded-xl p-4 text-center`}>
                <div className="text-xs text-dm-muted mb-1">Netto 5 mesi</div>
                <div className={`text-2xl font-bold ${netResult >= 0 ? 'text-dm-accent' : 'text-dm-red'}`}>
                  {netResult > 0 ? '+' : ''}{netResult}%
                </div>
              </div>
            </div>

            {/* Why it failed */}
            <div className="bg-dm-card-light border border-dm-border rounded-xl p-6">
              <h3 className="font-bold text-dm-gold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Perche' ho chiuso questa strategia
              </h3>
              <div className="space-y-3 text-sm text-dm-muted leading-relaxed">
                <p>
                  <strong className="text-dm-text">1. Troppa esposizione su un prodotto solo.</strong> Su 12 prodotti, 6 avevano AUD/CAD.
                  Quando AUD/CAD ha fatto un movimento storico senza ritracciare, tutto l'ecosistema ha sofferto insieme.
                </p>
                <p>
                  <strong className="text-dm-text">2. Mancanza di bilanciamento professionale.</strong> La diversificazione c'era,
                  ma il bilanciamento lo facevo io — e non sono competente per farlo. Serviva qualcuno che capisse
                  come distribuire il rischio tra operativita' diverse.
                </p>
                <p>
                  <strong className="text-dm-text">3. Nessuna resistenza ai periodi fuori statistica.</strong> Quando il mercato
                  fa cose mai viste (e le fa sempre piu' spesso), un paniere non bilanciato crolla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Strategy */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-dm-card to-dm-accent/5 border border-dm-accent/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            La nuova strategia: <span className="gradient-text">Ecosistemi bilanciati</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-dm-text mb-3">Cosa e' cambiato</h3>
              <div className="space-y-2 text-sm text-dm-muted">
                {[
                  'Ogni ecosistema e\' creato dal provider, non da me',
                  'Diversificazione per operativita\', rischio, coppie E durata',
                  'Un solo link di aggancio per ecosistema',
                  'Obiettivo: resistere ai mesi fuori statistica',
                  'Nei mesi buoni fare tanto per bilanciare i mesi brutti',
                  'Testabile da 50€ su conti centesimali',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-dm-accent mt-0.5">+</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-dm-text mb-3">Primi risultati</h3>
              <div className="space-y-3">
                <div className="bg-dm-card rounded-xl p-4 border border-dm-border">
                  <div className="text-xs text-dm-muted">Linearity Ecosystem</div>
                  <div className="text-lg font-bold text-dm-accent">+6% lordo (+4.5% netto)</div>
                  <div className="text-xs text-dm-muted">Prima settimana</div>
                </div>
                <div className="bg-dm-card rounded-xl p-4 border border-dm-border">
                  <div className="text-xs text-dm-muted">Drop Evolution + Milestone Apex</div>
                  <div className="text-lg font-bold text-dm-accent">+12% lordo (+9% netto)</div>
                  <div className="text-xs text-dm-muted">Dal 27 gennaio</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ecosistemi"
              className="inline-flex items-center justify-center gap-2 bg-dm-accent hover:bg-dm-accent-light text-dm-bg px-6 py-3 rounded-xl font-bold transition-all"
            >
              Scopri gli Ecosistemi <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/guida"
              className="inline-flex items-center justify-center gap-2 bg-dm-card-light hover:bg-dm-accent/10 border border-dm-border text-dm-text px-6 py-3 rounded-xl font-bold transition-all"
            >
              <BookOpen className="h-5 w-5" />
              Guida Gratuita Finanze
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
