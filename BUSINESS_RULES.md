# Rytuvo: Release 1 business rules (producer, commission agent, buyer)

Version 1.0, 12 Oct 2026 (IST). Source: Chandra Sekhar's answers of 12 Oct 2026 to the 20 gap-audit questions, plus the existing rules in `ROLES_MATRIX.md` (v5–v7) that were not changed.

> **Example rates.** Every number marked **[EXAMPLE]** is a placeholder for demos and tests only. In the app, all rates are configurable per **state × market yard × commodity**. They are entered or verified by the regulatory authority, or by the Rytuvo app admin with the authority's permission (rule R-13). A bill always keeps a copy of the rates that applied on the sale date.

## 1. Scope of release 1
- Modules: **Producer, Commission agent (with team roles), Buyer (trader, processor, sourcing agent)**.
- Transport, storage operator, bank, insurance, inspector-lab and input-seller apps are hidden behind feature flags. Storage loans still appear to the producer as a message from the bank or NBFC (R-03b).
- Next APK (v1.1.0) is a **richer offline demo**:
  - shared local state, so one trade can be followed across roles;
  - a role switcher.

## 2. Rules by topic

| # | Rule |
|---|---|
| R-01 | **Commission is paid by the producer.** Rate ≤ the cap set by the authorities for each commodity (for example 5% max **[EXAMPLE cap]**). The producer may negotiate a lower rate with the agent. The agreed rate is fixed on the engagement (P-103) and confirmed by OTP. |
| R-02 | **Producer pays:** hamali, security fee, and tare (net weight = gross − tare × bags). **Buyer pays:** market fee. |
| R-03a | **Agent advance** to the producer is recovered at settlement, on the sale day or the next day. The farmer confirms every recovery line by OTP. |
| R-03b | **Storage loan:** if the offer is not satisfactory, the producer may store the lot and take a loan from a bank or NBFC. The loan must be settled before the lot is released for delivery. The bank or NBFC communicates in-app, and settlement and release are confirmed by OTP. |
| R-04 | **Buyer → agent payment terms:** due date = sale date + 15 days. After that, simple interest at 21% p.a. on the outstanding principal for each day late. Interest is counted from day 16; holidays are counted; 365-day year. Part-payments reduce principal from the payment date. **This rule applies only from buyer to agent.** |
| R-05 | **Agent → producer payout:** on the sale day or the next working day. A later date is allowed only if the farmer agrees by OTP (for example in peak season). |
| R-06 | **No buyer deposits or credit limits.** Grok AI computes a buyer risk rank (a CIBIL-like score from payment history, overdue days, disputes, back-outs and similar factors). It is shown to the agent **only as an alert or suggestion**; the agent decides. The buyer's volumes and raw data are never shown to other parties. |
| R-07 | **Tax:** the commission agent pays only income tax on commission income. The app does not add GST to the agent's trade bill. Any GST or TDS on the commodity sale itself is a configurable line that is **off by default**, until a CA confirms it per commodity. |
| R-08 | **Grade and deduction tables** (moisture, grade cuts and so on) per commodity × state are **configurable**. The authorities or agents define them. Release 1 ships with empty tables and an "Add rule" screen. |
| R-09 | **Buyer back-out:** the buyer must pick a reason from a list: quality not as per sample · weight dispute · price error / wrong bid · payment issue · transport unavailable · duplicate bid · **Other / undefined** (last item, free text required). Escalation to the authorities (market committee) happens when the buyer requests it and **both the producer and the agent agree by OTP**. The lot then goes to the next bidder or is re-listed (agent's choice). |
| R-10 | **Withdraw lot:** the producer can withdraw at any time **until sampling is done and the sale is confirmed**. After that, withdrawal is blocked. There is no limit on re-auctions. |
| R-11 | **Lifting:** the buyer arranges lifting and uploads the e-way bill (PDF or photo plus number) to the app. A physical copy goes with the authorised lifting person (name, phone, vehicle number). The agent's representative confirms safe lifting by OTP sent to them. |
| R-12 | **Disputes** are resolved by the market committee or its authorised person. The **buyer pays for a re-test**. |
| R-13 | **Yard rules** are entered or verified by the regulatory authority, or by the app admin with the authority's permission. Every change is audit-logged. |
| R-14 | **Revenue** (platform level, not on the bill): subscriptions, ads, data usage, and telecom offers, mainly for producers. |
| R-18 | **Agents may charge interest on producer advances.** The rate is set by the agent and agreed by producer OTP when the advance is given. It is simple interest from the advance date to the recovery date **[EXAMPLE 18% p.a.]**. |
| R-19 | **Lorry weighbridge (basic rule check, 13 Oct 2026):** loaded weight plus produce details are recorded at the yard entrance, and empty weight at exit. Net (lorry) = loaded − empty, compared with the bag-weighment total. Default for all commodities and shared lorries: difference **≤3% normal**, **>3% to ≤4% review warning** to agent and admin, **>4% alert** to agent and admin for review. Yard/commodity can override the limits. It is a simple rule check, not AI fraud detection: it never notifies authorities automatically and never penalises. **AI fraud model: coming later** (to be trained on many factors). |
| R-20 | All money actions need an OTP from the party whose money moves. The person who records a payment cannot reconcile it. |

Unchanged from v5–v7:
- Hidden reserve: buyers never see it. A bid below the reserve gets "Bid not accepted".
- Auto-accept at the offer price.
- Proxy auto-bid up to a max, with outbid alerts and owner approval above the limit.
- Anti-shill blocking.
- Two-phone weighment by bag serial, with a 0.2 kg tolerance per bag **[EXAMPLE]**.
- Masked bidder identities.

## 3. Bill formulas

Notation: `bags`; `bagKg` (gross per bag); `tareKg` per bag; `P` = price per quintal.

```
netKg          = Σ bagKg − bags × tareKg              (tare borne by producer)
saleValue      = netKg / 100 × P

PRODUCER PATTI (agent → producer)
  commission     = saleValue × commissionRate          (≤ authority cap, negotiated)
  hamali         = bags × hamaliPerBag                  (or per quintal, per yard config)
  securityFee    = saleValue × securityFeeRate          (basis per yard config)
  advance        = Σ open advances recovered (OTP)
  advanceInterest= Σ advance × agentRate × days / 365   (if agent charges)
  storageLoan    = settled before release (if lot was stored; bank/NBFC OTP)
  netPayable     = saleValue − commission − hamali − securityFee − advance − advanceInterest − storageLoan
  payoutDue      = sale day or next working day (later only with farmer OTP)

BUYER BILL (agent → buyer)
  marketFee      = saleValue × marketFeeRate            (paid by buyer)
  optionalLines  = packing / GST / TDS (off by default, configurable)
  billTotal      = saleValue + marketFee + optionalLines
  dueDate        = saleDate + 15 days
  interest       = outstanding × 21% × daysLate / 365   (daysLate counted from day 16, holidays included)
```

### Worked example (all rates are [EXAMPLE])

Chilli Teja, Guntur yard, sold 12 Oct 2026 at ₹22,850/q.
- 63 bags × 40.0 kg = 2,520.0 kg gross.
- Tare 0.5 kg per bag **[EXAMPLE]**, so 31.5 kg.
- Net weight 2,488.5 kg = 24.885 q.

| Line | Formula | Amount |
|---|---|---|
| Sale value | 24.885 q × ₹22,850 | **₹5,68,622.25** |
| *Producer patti* | | |
| Commission 2% **[EXAMPLE, negotiated under the cap]** | 5,68,622.25 × 0.02 | − ₹11,372.44 |
| Hamali ₹30 / bag **[EXAMPLE]** | 63 × 30 | − ₹1,890.00 |
| Security fee 0.1% **[EXAMPLE]** | 5,68,622.25 × 0.001 | − ₹568.62 |
| Agent advance (given 12 Sep) | OTP | − ₹50,000.00 |
| Interest on advance 18% p.a. × 30 days **[EXAMPLE]** | 50,000 × 0.18 × 30/365 | − ₹739.73 |
| **Net payable to producer** (by 13 Oct) | | **₹5,04,051.46** |
| *Buyer bill* | | |
| Sale value | | ₹5,68,622.25 |
| Market fee 1% **[EXAMPLE]** | 5,68,622.25 × 0.01 | + ₹5,686.22 |
| **Buyer bill total** (due 27 Oct 2026) | | **₹5,74,308.47** |
| If paid on 1 Nov 2026 (5 days late) | 5,74,308.47 × 0.21 × 5/365 | + ₹1,652.12 interest |

Rounding: amounts are kept in paise, and each line is rounded half-up to the paisa. Whether the bill total is rounded to the rupee is a yard setting (**open question**).

## 4. Still open (please confirm)
1. Basis of the security fee: % of sale value, per bag, or per quintal? Who collects it?
2. Hamali basis: per bag or per quintal? Does it differ for loading and unloading?
3. Is the market fee on the buyer collected by the agent and passed to the yard, or paid directly by the buyer?
4. ~~Default tolerance for the weighbridge check~~ Decided 13 Oct 2026: 3% review / 4% alert (see R-19). AI fraud model: coming later.
5. Bill rounding to the nearest rupee: yes or no?
