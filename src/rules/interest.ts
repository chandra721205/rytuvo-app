import { ASSOCIATION_RATE_BPS, daysBetween, simpleInterestPaise } from './money';

export interface InterestPayment {
  date: string;
  amountPaise: number;
}

export interface InterestPeriod {
  from: string;
  to: string;
  days: number;
  principalPaise: number;
  interestPaise: number;
}

export interface InterestStatement {
  dueDate: string;
  asOf: string;
  daysLate: number;
  annualRateBps: number;
  originalPrincipalPaise: number;
  principalOutstandingPaise: number;
  interestPaise: number;
  waiverPaise: number;
  outstandingPaise: number;
  periods: InterestPeriod[];
}

/**
 * Association rule: interest starts the day after the due date and is
 * simple interest at 21% p.a. on the outstanding principal only.
 * A payment on date D reduces principal for subsequent days.
 * Interest already accrued is not compounded.
 */
export function interestStatement(input: {
  principalPaise: number;
  dueDate: string;
  asOf: string;
  payments?: InterestPayment[];
  waiverPaise?: number;
  annualRateBps?: number;
}): InterestStatement {
  const rate = input.annualRateBps ?? ASSOCIATION_RATE_BPS;
  const waiver = Math.max(0, input.waiverPaise ?? 0);
  const payments = [...(input.payments ?? [])].sort((a, b) => a.date.localeCompare(b.date));
  const daysLate = Math.max(0, daysBetween(input.dueDate, input.asOf));

  if (daysLate === 0 || input.principalPaise <= 0) {
    const paid = payments.reduce((sum, payment) => sum + payment.amountPaise, 0);
    const principalOutstanding = Math.max(0, input.principalPaise - paid);
    return {
      dueDate: input.dueDate,
      asOf: input.asOf,
      daysLate: 0,
      annualRateBps: rate,
      originalPrincipalPaise: input.principalPaise,
      principalOutstandingPaise: principalOutstanding,
      interestPaise: 0,
      waiverPaise: waiver,
      outstandingPaise: Math.max(0, principalOutstanding - waiver),
      periods: [],
    };
  }

  let principal = input.principalPaise;
  let cursor = input.dueDate;
  let interest = 0;
  const periods: InterestPeriod[] = [];

  const latePayments = payments.filter((payment) => payment.date > input.dueDate && payment.date <= input.asOf);
  const paidByDue = payments
    .filter((payment) => payment.date <= input.dueDate)
    .reduce((sum, payment) => sum + payment.amountPaise, 0);
  principal = Math.max(0, principal - paidByDue);

  for (const payment of latePayments) {
    const days = daysBetween(cursor, payment.date);
    if (days > 0 && principal > 0) {
      const slice = simpleInterestPaise(principal, rate, days);
      periods.push({
        from: cursor,
        to: payment.date,
        days,
        principalPaise: principal,
        interestPaise: slice,
      });
      interest += slice;
    }
    principal = Math.max(0, principal - payment.amountPaise);
    cursor = payment.date;
  }

  const tail = daysBetween(cursor, input.asOf);
  if (tail > 0 && principal > 0) {
    const slice = simpleInterestPaise(principal, rate, tail);
    periods.push({
      from: cursor,
      to: input.asOf,
      days: tail,
      principalPaise: principal,
      interestPaise: slice,
    });
    interest += slice;
  }

  const netInterest = Math.max(0, interest - waiver);
  return {
    dueDate: input.dueDate,
    asOf: input.asOf,
    daysLate,
    annualRateBps: rate,
    originalPrincipalPaise: input.principalPaise,
    principalOutstandingPaise: principal,
    interestPaise: netInterest,
    waiverPaise: waiver,
    outstandingPaise: principal + netInterest,
    periods,
  };
}

export function reminderKind(dueDate: string, asOf: string): 'before' | 'due' | 'overdue' | 'none' {
  const delta = daysBetween(asOf, dueDate);
  if (delta > 3) return 'none';
  if (delta > 0) return 'before';
  if (delta === 0) return 'due';
  return 'overdue';
}
