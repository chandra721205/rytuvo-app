import { roleHome } from '../config/release';
import { catalog, catalogById, tabs } from './catalog';
import type { ScreenSpec } from './types';

/** Directory route listing every screen of one stakeholder. */
export const menuRoute = (stakeholder: string) => `/menu/${stakeholder}`;

const byStakeholder = new Map<string, ScreenSpec[]>();
for (const screen of catalog) {
  const list = byStakeholder.get(screen.stakeholder) ?? [];
  list.push(screen);
  byStakeholder.set(screen.stakeholder, list);
}

export function screensOf(stakeholder: string): ScreenSpec[] {
  return byStakeholder.get(stakeholder) ?? [];
}

export function stakeholders(): string[] {
  return [...byStakeholder.keys()];
}

/** Previous and next screen in the same stakeholder module, so no screen is a dead end. */
export function prevNext(id: string): { prev?: ScreenSpec; next?: ScreenSpec } {
  const spec = catalogById[id];
  if (!spec) return {};
  const list = screensOf(spec.stakeholder);
  const index = list.findIndex((s) => s.id === id);
  return { prev: list[index - 1], next: list[index + 1] };
}

/** Every outgoing route of a screen as rendered by ScreenHost: catalog links, tabs, back-to-home, module directory, prev/next. */
export function outgoing(spec: ScreenSpec): string[] {
  const out = new Set<string>();
  if (spec.primary?.to) out.add(spec.primary.to);
  if (spec.secondary?.to) out.add(spec.secondary.to);
  for (const tab of tabs[spec.nav] ?? []) {
    const target = catalogById[tab.id];
    if (target) out.add(target.route);
  }
  const { prev, next } = prevNext(spec.id);
  if (prev) out.add(prev.route);
  if (next) out.add(next.route);
  out.add(menuRoute(spec.stakeholder));
  out.add(roleHome(spec.stakeholder));
  return [...out];
}
