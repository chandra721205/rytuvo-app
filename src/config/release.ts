/** Release 1 shows producer, commission agent and buyer. Other apps stay in the repo behind this flag. */
export const APP_VERSION = '1.2.2';
export const RELEASE_STAKEHOLDERS = ['producer', 'agent', 'buyer'] as const;

export function stakeholderInRelease(stakeholder: string): boolean {
  return (RELEASE_STAKEHOLDERS as readonly string[]).includes(stakeholder) || stakeholder === 'onboarding' || stakeholder === 'shared';
}

export function roleHome(stakeholder: string): string {
  const map: Record<string, string> = {
    producer: '/producer/p-100-journey',
    agent: '/agent/a-01-home',
    buyer: '/buyer/b-01-market',
    inspector: '/quality/i-01-home',
    verifier: '/quality/v-01-home',
    lab: '/quality/l-01-home',
    transport: '/transport/t-01-home',
    storage: '/storage/s-01-home',
    bank: '/bank/f-01-home',
    insurance: '/insurance/n-01-home',
    yard: '/yard/y-01-gate',
    seller: '/inputs/is-01-home',
    service: '/inputs/sp-01-home',
    admin: '/admin/am-01-live-ops',
    shared: '/shared/sh-01-search',
  };
  return map[stakeholder] ?? '/';
}

export const ROLE_SWITCH = [
  { stakeholder: 'producer', memberId: 'm-ramesh', label: 'Producer', labelTe: 'రైతు' },
  { stakeholder: 'agent', memberId: 'm-venkat', label: 'Agent', labelTe: 'ఏజెంట్' },
  { stakeholder: 'buyer', memberId: 'm-sai', label: 'Buyer', labelTe: 'కొనుగోలు' },
] as const;
