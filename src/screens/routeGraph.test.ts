import fs from 'fs';
import path from 'path';
import { roleHome, stakeholderInRelease } from '../config/release';
import { STAGES, stageRoute } from '../oneTradie/flow';
import { catalog } from './catalog';
import { menuRoute, outgoing, screensOf, stakeholders } from './graph';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const routes = new Set(catalog.map((s) => s.route));
const byRoute = new Map(catalog.map((s) => [s.route, s]));
const isDynamic = (r: string) => r.startsWith('/menu/') || r.startsWith('/producer/1t/') || r === '/';

function literalRoutes(): { file: string; route: string }[] {
  const out: { file: string; route: string }[] = [];
  const walk = (dir: string) => {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (/\.tsx?$/.test(f) && !f.includes('.test.') && f !== 'catalog.ts') {
        for (const m of fs.readFileSync(p, 'utf8').matchAll(/['"`](\/(?:onboarding|producer|agent|buyer|quality|transport|storage|bank|insurance|yard|inputs|shared|admin|backoffice)\/[a-z0-9-]+)['"`]/g)) out.push({ file: p, route: m[1] });
      }
    }
  };
  walk(path.join(process.cwd(), 'src'));
  walk(path.join(process.cwd(), 'app'));
  return out;
}

describe('route graph', () => {
  test('no broken links: every linked route exists', () => {
    const broken = [
      ...catalog.flatMap((s) => outgoing(s).filter((r) => !routes.has(r) && !isDynamic(r)).map((r) => `${s.id} -> ${r}`)),
      ...literalRoutes().filter((x) => !routes.has(x.route) && !x.route.startsWith('/producer/1t')).map((x) => `${x.file} -> ${x.route}`),
    ];
    expect(broken).toEqual([]);
  });

  test('no dead ends: every screen has at least two ways out (back plus a forward link)', () => {
    for (const s of catalog) expect(outgoing(s).filter((r) => r !== roleHome(s.stakeholder)).length).toBeGreaterThan(0);
  });

  test('no orphans: every screen is reachable from its role home through the app', () => {
    for (const who of stakeholders()) {
      const start = who === 'onboarding' ? '/onboarding/ob-01-splash' : roleHome(who);
      const seen = new Set<string>();
      const queue = [start];
      while (queue.length) {
        const r = queue.shift() as string;
        if (seen.has(r)) continue;
        seen.add(r);
        // The module directory route lists every screen of that stakeholder.
        const next = r.startsWith('/menu/') ? screensOf(r.slice(6)).map((s) => s.route) : byRoute.get(r) ? outgoing(byRoute.get(r)!) : [];
        for (const n of next) if (!seen.has(n)) queue.push(n);
      }
      const missing = screensOf(who).filter((s) => !seen.has(s.route)).map((s) => s.id);
      expect({ who, missing }).toEqual({ who, missing: [] });
      // The directory itself is reachable from the home screen.
      const home = byRoute.get(start);
      if (home) expect(outgoing(home)).toContain(menuRoute(who));
    }
  });

  test('release stakeholders have a home and the dynamic routes exist', () => {
    for (const who of ['producer', 'agent', 'buyer']) {
      expect(stakeholderInRelease(who)).toBe(true);
      expect(routes.has(roleHome(who))).toBe(true);
    }
    expect(fs.existsSync(path.join(process.cwd(), 'app/menu/[who].tsx'))).toBe(true);
    expect(fs.existsSync(path.join(process.cwd(), 'app/producer/1t/[stage].tsx'))).toBe(true);
    expect(STAGES.map((s) => stageRoute(s.id)).every((r) => r.startsWith('/producer/1t/'))).toBe(true);
  });
});
