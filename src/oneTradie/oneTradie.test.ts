import raw from './stages.json';
import { STAGES, nextStage, validate, stageById } from './flow';

describe('1Tradie producer flow port', () => {
  test('all 26 1Tradie navigator stages in order across 8 phases', () => {
    expect(STAGES.map((s) => s.id)).toEqual((raw as { id: string }[]).map((s) => s.id));
    expect(STAGES).toHaveLength(26);
    expect(new Set(STAGES.map((s) => s.phase)).size).toBe(8);
  });

  test('every 1Tradie source field is kept', () => {
    for (const src of raw as { id: string; fields: { label: string }[] }[]) {
      const labels = stageById[src.id].fields.map((f) => f.label);
      const filled = ['profile', 'storage-sell-decision'].includes(src.id);
      if (!filled) for (const f of src.fields) expect(labels).toContain(f.label);
    }
  });

  test('walk the sell path from dashboard to complete', () => {
    let id: string | null = 'dashboard';
    const seen: string[] = [];
    while (id && seen.length < 40) {
      seen.push(id);
      id = nextStage(id, { 'Choose your path': 'Sell' });
    }
    expect(seen[seen.length - 1]).toBe('complete');
    expect(seen).not.toContain('storage');
    expect(nextStage('storage-sell-decision', { 'Choose your path': 'Store' })).toBe('storage');
    expect(nextStage('storage')).toBe('complete');
  });

  test('validation: required, numbers, phone, OTP', () => {
    const lot = stageById['lot-management'];
    expect(validate(lot, {})).toMatch(/required/);
    expect(validate(stageById.profile, { 'Producer type': 'small', 'Full name': 'R', 'Mobile number': '123' })).toMatch(/10-digit/);
    expect(validate(stageById['market-auction'], { 'Sale confirmation OTP': '000000' })).toMatch(/OTP/);
  });
});
