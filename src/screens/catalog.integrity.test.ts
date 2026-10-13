import fs from 'fs';
import path from 'path';
import { catalog, tabs } from './catalog';

describe('screen catalog', () => {
  const ids = catalog.map((screen) => screen.id);

  test('ids, slugs and routes are unique', () => {
    expect(new Set(ids).size).toBe(catalog.length);
    expect(new Set(catalog.map((screen) => screen.slug)).size).toBe(catalog.length);
    expect(new Set(catalog.map((screen) => screen.route)).size).toBe(catalog.length);
  });

  test('every screen has a route file', () => {
    for (const screen of catalog) {
      const file = path.join(process.cwd(), screen.file);
      expect(fs.existsSync(file)).toBe(true);
      const source = fs.readFileSync(file, 'utf8');
      expect(source).toContain(`id="${screen.id}"`);
    }
  });

  test('tabs point at real screens and every stakeholder group has a home', () => {
    const byId = new Map(catalog.map((screen) => [screen.id, screen]));
    for (const items of Object.values(tabs)) {
      for (const tab of items) {
        expect(byId.has(tab.id)).toBe(true);
      }
    }
    for (const id of ['OB-01', 'P-01', 'A-01', 'B-01', 'I-01', 'T-01', 'S-01', 'F-01', 'N-01', 'Y-01', 'IS-01', 'SP-01', 'AM-01', 'BO-01']) {
      expect(byId.has(id)).toBe(true);
    }
  });

  test('covers the stakeholder set', () => {
    const stakeholders = new Set(catalog.map((screen) => screen.stakeholder));
    for (const name of ['producer', 'agent', 'buyer', 'inspector', 'transport', 'storage', 'bank', 'insurance', 'yard', 'seller', 'service', 'admin']) {
      expect(stakeholders.has(name)).toBe(true);
    }
    expect(catalog.length).toBeGreaterThan(500);
  });
});
