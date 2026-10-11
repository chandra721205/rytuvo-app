export const colors = {
  fieldGreen: '#0F5B3A',
  fieldGreenDark: '#0A3F28',
  harvestGold: '#E8A317',
  chilli: '#C8102E',
  cream: '#FFF8EC',
  ink: '#14241B',
  surface: '#FFFFFF',
  subtle: '#F6F0E6',
  border: '#E6DCCB',
  secondary: '#5C6B62',
  onBrand: '#FFF8EC',
  success: '#1B7A46',
  successSoft: '#E5F5EC',
  warning: '#8A5A00',
  warningSoft: '#FCEFD2',
  danger: '#C8102E',
  dangerSoft: '#FDE8EC',
  info: '#1D4E89',
  infoSoft: '#E7F0FA',
} as const;

export const roleColors: Record<string, { accent: string; soft: string }> = {
  onboarding: { accent: colors.fieldGreen, soft: '#E7F3EC' },
  producer: { accent: '#0F5B3A', soft: '#E7F3EC' },
  agent: { accent: '#3730A3', soft: '#EEF2FF' },
  buyer: { accent: '#C8102E', soft: '#FDE8EC' },
  inspector: { accent: '#0F766E', soft: '#E6F6F4' },
  verifier: { accent: '#0F766E', soft: '#E6F6F4' },
  lab: { accent: '#0F766E', soft: '#E6F6F4' },
  transport: { accent: '#C2410C', soft: '#FFF1E8' },
  storage: { accent: '#92400E', soft: '#F8EDE3' },
  bank: { accent: '#1E3A8A', soft: '#E8EEF9' },
  insurance: { accent: '#6D28D9', soft: '#F3E8FF' },
  yard: { accent: '#A16207', soft: '#FBF3D8' },
  seller: { accent: '#3F6212', soft: '#F1F6E6' },
  service: { accent: '#3F6212', soft: '#F1F6E6' },
  shared: { accent: colors.fieldGreen, soft: '#E7F3EC' },
  admin: { accent: '#334155', soft: '#F1F5F9' },
  backoffice: { accent: '#0F5B3A', soft: '#E7F3EC' },
};

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
export const radius = { sm: 8, md: 12, lg: 16, xl: 24 } as const;

export const type = {
  display: 32,
  h1: 24,
  h2: 20,
  h3: 18,
  body: 16,
  label: 14,
  caption: 12,
} as const;
