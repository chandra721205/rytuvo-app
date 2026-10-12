import { useTrade } from '../state/tradeStore';
import { nextStage, validate, type Stage } from './flow';

/** Validate, save and push a 1Tradie stage into the shared trade. Returns an error or the next stage id. */
export function submitStage(stage: Stage, values: Record<string, string>): { error?: string; next?: string | null } {
  const bad = validate(stage, values);
  if (bad) return { error: bad };
  const t = useTrade.getState();
  const n = (k: string) => Number(values[k]);
  let error: string | null = null;
  switch (stage.bind) {
    case 'producerType':
      t.setProducerType(values['Producer type'] as 'small');
      break;
    case 'createLot':
      error = t.createLot({
        category: 'Spices',
        commodity: values.Commodity,
        variety: values.Variety,
        yard: values['Market yard'],
        bags: n('Bags'),
        bagKg: n('Gross kg per bag'),
        offerRupees: n('Offer price ₹/quintal'),
        reserveRupees: n('Hidden stop-loss ₹/quintal'),
      });
      break;
    case 'engage':
      error = t.engage(n('Commission %') / 100, values['Enter 6-digit OTP'] ?? '');
      break;
    case 'grading':
      t.setAiGrade(values['Final grade']);
      t.completeGrading();
      break;
    case 'store':
      t.chooseStore(0);
      break;
    case 'sale':
      error = t.confirmSale(values['Sale confirmation OTP']);
      break;
    case 'patti':
      error = t.acceptDeductions(values['Patti acceptance OTP']);
      break;
  }
  if (error) return { error };
  t.saveStage(stage.id, values);
  return { next: nextStage(stage.id, values) };
}
