# Architecture

Rytuvo is a single Expo application. Mobile stakeholders use grouped expo-router stacks. Desktop back offices for agents, buyers, transport, storage, yards, and platform admin are the same components in `app/(backoffice)`, laid out with a sidebar when the screen kind is `desktop` or the window is at least 1100px wide. A separate web app was not added.

## Navigation

`app/_layout.tsx` is a headerless stack. `app/index.tsx` renders the splash (`OB-01`). Stakeholder folders are real URL segments (`app/producer/p-01-home.tsx` is `/producer/p-01-home`). Parentheses would hide that segment, so they are not used. Each other route is a thin file:

```tsx
export default function Route() {
  return <ScreenHost id="P-01" />;
}
```

`scripts/gen_catalog.py` writes those files, `src/screens/catalog.ts`, and `SCREEN_MAP.md`. `ScreenHost` looks up the spec, applies the role accent, the bottom nav for that stakeholder, and the permission gate. `ScreenBody` picks an interactive template (splash, OTP, KYC, weighment, auction, auto-bid, interest, team, masters, assistant) or a generic dashboard, list, form, or detail.

Tabs only link to catalog ids. A screen with a `permission` the signed-in role lacks still mounts, and shows an empty state instead of the module.

## Design system

`src/design-system/tokens.ts` holds the brand palette: Field Green `#0F5B3A`, Harvest Gold `#E8A317`, Chilli Red `#C8102E`, Cotton Cream `#FFF8EC`, Soil Ink `#14241B`, plus a role accent per stakeholder.

`src/design-system/ui.tsx` exports Button, Input, OTPInput, BottomSheetPicker, Card, LotCard, BidCard, Badge, Chip, TopBar, BottomNav, Stepper, Toast, ConfirmModal, and EmptyState.

Web loads Noto Sans, Noto Sans Telugu, and Poppins from `app/+html.tsx`. Native uses the same family names when the device has them.

## Domain and data

`src/domain/types.ts` is the model: users, orgs, members, commodities (category → commodity → variety), yards, payment rules, lots, bids, auto-bids, weighments, bills, payments, notifications, disputes, trips, inspections, loans, policies, stock bonds, and AI suggestions.

Money is integer paise. A quintal price is paise per quintal. A commodity line is `round((qtyKg / 100) * pricePaisePerQuintal)`.

`src/data/seed.ts` is realistic sample data for chilli, cotton, turmeric, and paddy across Guntur, Warangal, Nizamabad, Kurnool, Unjha, and Rajkot. `RytuvoClient` in `src/data/client.ts` is the API surface (`bootstrap`, `requestOtp`, `verifyOtp`). `mockClient` is the only implementation. It clones the seed and issues OTP `123456` (DEV ONLY, 10 minutes, five attempts, single use). A future HTTP client can implement the same interface.

Zustand (`src/state/store.ts`) holds the session and the mutable lots, bids, weighment, and bill. Persona entry on the splash calls `enterAs`. Role switches stay inside the same org.

## Business rules

Pure functions in `src/rules`, covered by Jest:

- **Interest.** Association credit is 15 days, then 21% p.a. simple interest on the outstanding principal (`ASSOCIATION_RATE_BPS = 2100`). Part payments reduce principal for later days. Waivers reduce interest. Reminders: none when more than 3 days remain, before when 1–3 days remain, due on the day, overdue after. Regulatory and yard rules stay configurable. Unverified yard or regulatory rows are stored as unverified and are not treated as confirmed law.
- **Payments.** Amounts are positive and not above outstanding. Non-cash needs a reference. References are unique. The recorder cannot reconcile their own payment.
- **Weighment.** Bag tolerance is 0.2 kg. States are PENDING, MATCHED, MISMATCH, RESOLVED, QUEUED. Quantity variance above 2% is flagged. Offline entries queue and the later entry wins on flush. Lock needs every bag matched or resolved, both OTPs, and no open bags. Producer and buyer routes share one weighment session so two roles can be tried on one device.
- **Auction.** A bid under the hidden reserve is rejected and the buyer sees “bid not accepted”. The reserve is visible to producer, agent, platform, and yard roles only. Auto-accept fires when the price meets the offer. The lot org and its linked agent cannot bid (shill). A bid over the purchaser limit waits for owner approval. A proxy bid steps up to lead and never exceeds its max. If the best bid or the next step is above the max, the owner gets an outbid alert. Equal maxes: the earlier `maxSetAt` holds. Equal manual bids: the earlier `createdAt` wins. Close sells only when the best bid meets the reserve.
- **RBAC.** The platform assigns the org type. The org owner assigns an internal role. `can(role, permission)` and `moduleVisible` decide what the UI shows. `checkLimit` routes an over-limit action to the approver (purchaser → owner, sales/munim → owner, manager → producer owner, credit → risk, claims → head office, dispatch → owner). A reviewer cannot approve their own KYC. An inspector who is a party to the lot is a conflict. Commission munim cannot approve a waiver; the owner can.

AI suggestions carry a confidence and never post a payment, waiver, or bid by themselves. The integration screen leaves the model key empty and says it belongs in the environment.

## i18n

`useTx()` reads `session.language` (`en` or `te`). Screen titles and the shared chrome have Telugu strings. Adding a language means extending that union and the copy maps.

## What is out of scope

Blockchain contract registry, network sync, NFT minting, air-freight planners, and consumer advertising are listed in `SCREEN_MAP.md` and are not routes. The Figma file has more frames than routes because many frames repeat a state or a component variant. The map records the implemented set and those exclusions.
