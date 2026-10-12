import raw from './stages.json';

/** 1Tradie producer flow (ProducerMasterFlowNavigator.live, Make LL5Ho3VrzzJyffYtGkBqfM) ported stage by stage. */
export type FieldType = 'text' | 'number' | 'phone' | 'otp' | 'select' | 'check' | 'date';
export interface StageField {
  label: string;
  type: FieldType;
  options?: readonly string[];
  required?: boolean;
  /** Added by Rytuvo (not in the 1Tradie source). */
  rytuvo?: boolean;
}
export interface Stage {
  id: string;
  phase: string;
  title: string;
  description: string;
  source: string;
  fields: StageField[];
  sections: string[];
  actions: string[];
  optional?: boolean;
  /** Rytuvo-only features linked from this stage. */
  links: { label: string; to: string }[];
  /** Shared trade action bound to Continue. */
  bind?: 'producerType' | 'createLot' | 'engage' | 'grading' | 'decision' | 'store' | 'sale' | 'patti';
}

export const PHASES = [
  { id: 'setup', label: '① Setup' },
  { id: 'farm', label: '② Farm & Crops' },
  { id: 'harvest', label: '③ Harvest & Lot' },
  { id: 'quality', label: '④ Quality' },
  { id: 'decision', label: '⑤ Store / Sell' },
  { id: 'selling', label: '⑥ Selling' },
  { id: 'transaction', label: '⑦ Transaction' },
  { id: 'complete', label: '⑧ Complete' },
];

const COMMODITY = { label: 'Commodity', type: 'select', options: ['Chilli', 'Cotton', 'Turmeric', 'Paddy'], required: true, rytuvo: true } as const;
const VARIETY = { label: 'Variety', type: 'select', options: ['Teja', '334 (Sannam)', 'Byadgi', 'Wonder Hot'], required: true, rytuvo: true } as const;
const YARD = { label: 'Market yard', type: 'select', options: ['Guntur', 'Warangal', 'Khammam', 'Kurnool'], required: true, rytuvo: true } as const;

/** Stages whose 1Tradie component is a "Coming Soon" stub or carries no form; Rytuvo supplies the fields. */
const FILL: Record<string, Partial<Stage>> = {
  dashboard: { fields: [], links: [{ label: 'Ask Grok (AI)', to: '/producer/p-55-ask-grok' }, { label: 'Market prices', to: '/producer/p-54-market-prices' }] },
  profile: {
    bind: 'producerType',
    fields: [
      { label: 'Producer type', type: 'select', options: ['small', 'medium', 'large'], required: true, rytuvo: true },
      { label: 'Full name', type: 'text', required: true },
      { label: 'Mobile number', type: 'phone', required: true },
      { label: 'Village / Mandal', type: 'text' },
      { label: 'Aadhaar last 4', type: 'number' },
      { label: 'Bank account (for payout)', type: 'text', rytuvo: true },
    ],
    links: [{ label: 'Data & payout consents', to: '/producer/p-116-consents' }],
  },
  'crop-journaling': {
    fields: [
      { label: 'Crop stage', type: 'select', options: ['Sowing', 'Vegetative', 'Flowering', 'Fruiting', 'Harvest'], required: true, rytuvo: true },
      { label: 'Journal note', type: 'text', rytuvo: true },
      { label: 'Observation date', type: 'date', rytuvo: true },
    ],
  },
  'harvest-listing': {
    fields: [
      COMMODITY,
      { label: 'Harvest date', type: 'date', required: true, rytuvo: true },
      { label: 'Harvested quantity (quintals)', type: 'number', required: true, rytuvo: true },
      { label: 'Moisture content (%)', type: 'number', rytuvo: true },
    ],
  },
  'lot-management': { bind: 'createLot', links: [{ label: 'Offer price & hidden stop-loss', to: '/producer/p-83-offer-and-reserve' }] },
  'sampling-quality': {
    fields: [
      { label: 'Sample bags drawn', type: 'number', required: true, rytuvo: true },
      { label: 'Sampling done by', type: 'select', options: ['Agent munim', 'Buyer representative', 'Quality verifier'], required: true, rytuvo: true },
      { label: 'Moisture (%)', type: 'number', rytuvo: true },
    ],
    links: [{ label: 'Withdraw the lot (allowed until sampling & sale)', to: '/producer/p-113-withdraw-lot' }],
  },
  grading: { bind: 'grading', fields: [{ label: 'Final grade', type: 'select', options: ['A (Premium)', 'B (Standard)', 'C (Fair)'], required: true, rytuvo: true }] },
  'storage-sell-decision': { bind: 'decision', fields: [{ label: 'Choose your path', type: 'select', options: ['Sell', 'Store'], required: true }] },
  storage: { bind: 'store', optional: true, links: [{ label: 'Storage loan & OTP settlement', to: '/producer/p-115-storage-loan' }] },
  'commission-agent': { bind: 'engage' },
  'market-auction': {
    bind: 'sale',
    fields: [{ label: 'Sale confirmation OTP', type: 'otp', required: true, rytuvo: true }],
    links: [{ label: 'Live bids vs reserve', to: '/producer/p-84-bids-versus-reserve' }, { label: 'Withdraw the lot', to: '/producer/p-113-withdraw-lot' }],
  },
  'weighing-confirmation': {
    bind: 'patti',
    fields: [
      { label: 'Bags weighed', type: 'number', required: true, rytuvo: true },
      { label: 'Patti acceptance OTP', type: 'otp', required: true, rytuvo: true },
    ],
    links: [{ label: 'Producer patti (deductions)', to: '/producer/p-112-producer-patti' }, { label: 'Agree a later payout date', to: '/producer/p-117-payout-due' }],
  },
  complete: { fields: [], links: [{ label: 'Record / recover advance', to: '/producer/p-110-record-advance' }, { label: 'Journey summary', to: '/producer/p-111-journey-complete' }] },
};

const LOT_FIELDS: StageField[] = [
  COMMODITY,
  VARIETY,
  YARD,
  { label: 'Bags', type: 'number', required: true, rytuvo: true },
  { label: 'Gross kg per bag', type: 'number', required: true, rytuvo: true },
  { label: 'Offer price ₹/quintal', type: 'number', required: true, rytuvo: true },
  { label: 'Hidden stop-loss ₹/quintal', type: 'number', required: true, rytuvo: true },
];

function build(): Stage[] {
  return (raw as Omit<Stage, 'links'>[]).map((s) => {
    const fill = FILL[s.id] ?? {};
    let fields: StageField[] = (fill.fields ?? s.fields).map((f, i) => ({
      ...f,
      required: f.required ?? (f.type === 'otp' || (i < 3 && !/optional|search/i.test(f.label) && f.type !== 'check')),
    }));
    if (s.id === 'lot-management') fields = [...LOT_FIELDS, ...fields.map((f) => ({ ...f, required: false }))];
    if (s.id === 'commission-agent') {
      fields = [
        { label: 'Commission %', type: 'number', required: true, rytuvo: true },
        ...fields.map((f) => (f.type === 'otp' ? { ...f, required: true } : { ...f, required: false })),
      ];
    }
    return { ...s, ...fill, fields, links: fill.links ?? [], optional: fill.optional ?? ['marketplace-browse', 'matchmaking', 'buyer-verification', 'order-confirmation', 'storage'].includes(s.id) } as Stage;
  });
}

export const STAGES: Stage[] = build();
export const stageById = Object.fromEntries(STAGES.map((s) => [s.id, s]));
export const stageRoute = (id: string) => `/producer/1t/${id}`;

/** Next stage, following the 1Tradie store/sell branch. */
export function nextStage(id: string, values: Record<string, string> = {}): string | null {
  if (id === 'storage-sell-decision') return values['Choose your path'] === 'Store' ? 'storage' : 'marketplace-browse';
  if (id === 'storage') return 'complete';
  const i = STAGES.findIndex((s) => s.id === id);
  const next = STAGES[i + 1];
  if (!next) return null;
  if (next.id === 'storage') return 'marketplace-browse';
  return next.id;
}

/** Field validation as in 1Tradie: required, numeric > 0, 10-digit phone, 6-digit OTP (demo 123456). */
export function validate(stage: Stage, values: Record<string, string>): string | null {
  for (const f of stage.fields) {
    const v = (values[f.label] ?? '').trim();
    if (f.required && !v) return `${f.label} is required`;
    if (!v) continue;
    if (f.type === 'number' && !(Number(v) > 0)) return `${f.label} must be a number above zero`;
    if (f.type === 'phone' && !/^[6-9]\d{9}$/.test(v)) return `${f.label} must be a 10-digit mobile`;
    if (f.type === 'otp' && v !== '123456') return 'OTP must be 123456 (demo)';
    if (f.type === 'date' && !/^\d{4}-\d{2}-\d{2}$/.test(v)) return `${f.label}: use YYYY-MM-DD`;
  }
  return null;
}
