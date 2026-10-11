export interface ScreenItem {
  title: string;
  titleTe: string;
  subtitle: string;
  meta?: string;
  badge?: string;
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'gold';
}

export interface ScreenStat {
  label: string;
  labelTe: string;
  value: string;
}

export interface ScreenLink {
  label: string;
  labelTe: string;
  to?: string;
}

export interface ScreenSpec {
  id: string;
  figmaFrame: string;
  version: string;
  title: string;
  titleTe: string;
  summary: string;
  summaryTe: string;
  stakeholder: string;
  nav: string;
  group: string;
  slug: string;
  route: string;
  file: string;
  kind: 'mobile' | 'desktop';
  template: string;
  mode?: string;
  hideNav?: boolean;
  dataKey?: string;
  permission?: string;
  stats?: ScreenStat[];
  items?: ScreenItem[];
  notes?: string[];
  primary?: ScreenLink;
  secondary?: ScreenLink;
}

export interface TabSpec {
  id: string;
  label: string;
  labelTe: string;
  icon: string;
}
