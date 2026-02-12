// ============================================
// DefiMaso - Link Configuration
// Tutti i link referral, social e CTA centralizzati
// ============================================

export const LINKS = {
  // Discord
  discord: 'https://discord.gg/PLACEHOLDER', // TODO: Aggiorna con link reale

  // YouTube
  youtube: 'https://www.youtube.com/@DefiMaso',
  youtubeLatestVideo: 'https://www.youtube.com/watch?v=CwYezO20rag',

  // Broker Referral Links (conti centesimali)
  brokers: {
    roboforex: 'https://roboforex.com/?a=PLACEHOLDER', // TODO: link referral
    buttiMarkets: 'https://buttimarkets.com/?ref=PLACEHOLDER', // TODO: link referral
    fpMarkets: 'https://fpmarkets.com/?ref=PLACEHOLDER', // TODO: link referral
  },

  // Lead Magnet
  leadMagnet: '/guida',

  // Social
  instagram: 'https://instagram.com/defimaso',
  telegram: 'https://t.me/defimaso',

  // Website
  defimaso: 'https://defimaso.com',
} as const

// Ecosistemi Copy Trading
export const ECOSYSTEMS = [
  {
    id: 'linearity',
    name: 'Linearity Ecosystem',
    provider: 'Linearity Team',
    status: 'active' as const,
    description: 'Ecosistema completo con operativita\' diversificate: TPS, griglia dinamica, scalping. Diversificato per rischio, coppie (forex + metalli) e durata operazioni.',
    target: '4% mensile netto',
    minCapital: '50€ (conto cent) / 5.000€ (standard)',
    broker: 'RoboForex (cent) / FP Markets (standard)',
    features: [
      'Multi-operativita\' (TPS, griglia, scalping)',
      'Diversificato per rischio e coppie',
      'Un solo link di aggancio',
      'Resistenza a periodi fuori statistica',
    ],
    results: {
      label: 'Primo periodo',
      value: '+6% lordo (+4.5% netto)',
      period: 'Prima settimana',
    },
    commission: '30%',
    riskLevel: 'medio',
  },
  {
    id: 'drop-evolution',
    name: 'Drop Evolution + Milestone Apex',
    provider: 'Drop Developer',
    status: 'active' as const,
    description: 'Bot di trading avanzati con track record comprovato. Drop Evolution e Milestone Apex combinati per massimizzare la diversificazione.',
    target: '6-9% mensile netto',
    minCapital: '50€ (conto cent) / 5.000€ (standard)',
    broker: 'RoboForex (cent) / FP Markets (standard)',
    features: [
      'Bot automatizzati',
      'Track record pluriennale',
      'Ecosistema in sviluppo',
      'Operativita\' complementari',
    ],
    results: {
      label: 'Dal 27 gennaio',
      value: '+12% lordo (+9% netto)',
      period: '2 settimane',
    },
    commission: '30%',
    riskLevel: 'medio-alto',
  },
  {
    id: 'prop-broker',
    name: 'Prop vs Broker',
    provider: 'Piattaforma automatizzata',
    status: 'testing' as const,
    description: 'Strategia controparte automatizzata: prop firm da un lato, broker dall\'altro. Buy da una parte, sell dall\'altra. Il conteggio finale e\' sempre positivo.',
    target: '12-25% mensile netto',
    minCapital: '3.000€ broker + 500€ prop',
    broker: 'Variabile',
    features: [
      'Completamente automatizzato',
      'Nessuna decisione manuale',
      '4 prop per abbonamento',
      'Commissione 40% sul netto',
    ],
    results: {
      label: 'In fase di test',
      value: 'Risultati il 15 febbraio',
      period: 'Testing',
    },
    commission: '40%',
    riskLevel: 'alto',
  },
  {
    id: 'linearity-impalm',
    name: 'Linearity ImPalm High Risk',
    provider: 'Linearity Team',
    status: 'active' as const,
    description: 'Prodotto ad alto rischio con obiettivo aggressivo. Strategia: ritirare profitti fino al 100% del capitale investito, poi lasciarlo andare a oltranza.',
    target: 'Alto rendimento',
    minCapital: '250-500€',
    broker: 'Variabile',
    features: [
      'Alto rischio / alto rendimento',
      'Strategia ritiro profitti al 100%',
      'Ha gia\' recuperato uno stop loss',
      'Attualmente in profitto',
    ],
    results: {
      label: 'Attuale',
      value: '+160€ su 1.100€ investiti',
      period: 'In corso',
    },
    commission: '30%',
    riskLevel: 'alto',
  },
] as const

// Risultati storici ETF Copy Trading (trasparenza totale)
export const HISTORICAL_RESULTS = [
  { month: 'Settembre 2024', result: '+3%', type: 'positive' as const },
  { month: 'Ottobre 2024', result: '+10%', type: 'positive' as const },
  { month: 'Novembre 2024', result: '+4%', type: 'positive' as const },
  { month: 'Dicembre 2024', result: '-9%', type: 'negative' as const },
  { month: 'Gennaio 2025', result: '-6%', type: 'negative' as const },
] as const
