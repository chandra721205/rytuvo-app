/** Integer money helpers. Amounts are paise (1/100 rupee). */

const RATE_SCALE = 10_000;
const DAY_BASIS = 365;

export function rupeesToPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

export function formatInr(paise: number): string {
  const sign = paise < 0 ? '-' : '';
  const abs = Math.abs(paise);
  const rupees = Math.floor(abs / 100);
  const frac = String(abs % 100).padStart(2, '0');
  const grouped = rupees.toLocaleString('en-IN');
  return `${sign}₹${grouped}.${frac}`;
}

/** Compact Indian grouping for dashboards, e.g. ₹2.18 L. */
export function formatInrCompact(paise: number): string {
  const rupees = paise / 100;
  const abs = Math.abs(rupees);
  const sign = rupees < 0 ? '-' : '';
  if (abs >= 1_00_00_000) return `${sign}₹${(abs / 1_00_00_000).toFixed(2)} Cr`;
  if (abs >= 1_00_000) return `${sign}₹${(abs / 1_00_000).toFixed(2)} L`;
  return formatInr(paise);
}

/**
 * Simple interest: principal × annualRate × days / 365.
 * annualRateBps is basis points (2100 = 21.00%).
 */
export function simpleInterestPaise(principalPaise: number, annualRateBps: number, days: number): number {
  if (principalPaise <= 0 || annualRateBps <= 0 || days <= 0) return 0;
  return Math.round((principalPaise * annualRateBps * days) / (DAY_BASIS * RATE_SCALE));
}

export function addDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) throw new Error(`Bad date ${isoDate}`);
  const utc = new Date(Date.UTC(year, month - 1, day));
  utc.setUTCDate(utc.getUTCDate() + days);
  return utc.toISOString().slice(0, 10);
}

export function daysBetween(startIso: string, endIso: string): number {
  const start = Date.parse(`${startIso}T00:00:00Z`);
  const end = Date.parse(`${endIso}T00:00:00Z`);
  if (Number.isNaN(start) || Number.isNaN(end)) throw new Error(`Bad date range ${startIso}..${endIso}`);
  return Math.round((end - start) / 86_400_000);
}

export const ASSOCIATION_RATE_BPS = 2100;
export const DEFAULT_CREDIT_DAYS = 15;
