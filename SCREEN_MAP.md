# Rytuvo screen map

Figma file: https://www.figma.com/design/g5MlDevajExftsptWA94OZ

Live Figma node ids were not available in this environment (no Figma connector). Each row uses the Rytuvo screen code as the frame key. Those codes are the ones in the design handoff (`COVERAGE_MATRIX.md`) plus the v4–v7 frames named in the screenshot set.

The Figma file is about 660 frames (542 mobile, 114 desktop). Many of those frames are duplicate states, component variants, and the desktop mirrors of the same flow. This app implements 528 routes (435 mobile, 93 desktop): every stakeholder home, the v5–v7 weighment, payment-terms, AI, dropdown, interest, multi-commodity, reserve, and auto-bid flows, plus empty, loading, and offline states. Rows below are implemented. The next section lists frames that are intentionally not routes.

Implemented routes: **528**.

| Frame key | Version | Stakeholder | Route | File | Status |
|---|---|---|---|---|---|
| OB-01 Splash | v1 | onboarding | `/onboarding/ob-01-splash` | `app/(onboarding)/ob-01-splash.tsx` | Implemented |
| v6 language bottom sheet | v6 | onboarding | `/onboarding/ob-02-language` | `app/(onboarding)/ob-02-language.tsx` | Implemented |
| OB-03 Mobile number | v1 | onboarding | `/onboarding/ob-03-mobile-number` | `app/(onboarding)/ob-03-mobile-number.tsx` | Implemented |
| OB-04 Verify OTP | v1 | onboarding | `/onboarding/ob-04-verify-otp` | `app/(onboarding)/ob-04-verify-otp.tsx` | Implemented |
| OB-05 Choose role | v1 | onboarding | `/onboarding/ob-05-choose-role` | `app/(onboarding)/ob-05-choose-role.tsx` | Implemented |
| OB-06 Profile | v3 | onboarding | `/onboarding/ob-06-profile` | `app/(onboarding)/ob-06-profile.tsx` | Implemented |
| OB-07 KYC levels | v3 | onboarding | `/onboarding/ob-07-kyc-levels` | `app/(onboarding)/ob-07-kyc-levels.tsx` | Implemented |
| OB-08 Aadhaar | v3 | onboarding | `/onboarding/ob-08-aadhaar` | `app/(onboarding)/ob-08-aadhaar.tsx` | Implemented |
| OB-09 Selfie check | v3 | onboarding | `/onboarding/ob-09-selfie-check` | `app/(onboarding)/ob-09-selfie-check.tsx` | Implemented |
| OB-10 Bank and PAN | v3 | onboarding | `/onboarding/ob-10-bank-and-pan` | `app/(onboarding)/ob-10-bank-and-pan.tsx` | Implemented |
| OB-11 Business type | v3 | onboarding | `/onboarding/ob-11-business-type` | `app/(onboarding)/ob-11-business-type.tsx` | Implemented |
| OB-12 Verification pending | v3 | onboarding | `/onboarding/ob-12-verification-pending` | `app/(onboarding)/ob-12-verification-pending.tsx` | Implemented |
| OB-13 Org approved | v3 | onboarding | `/onboarding/ob-13-org-approved` | `app/(onboarding)/ob-13-org-approved.tsx` | Implemented |
| OB-14 Welcome bonus | v3 | onboarding | `/onboarding/ob-14-welcome-bonus` | `app/(onboarding)/ob-14-welcome-bonus.tsx` | Implemented |
| OB-15 Welcome 1 | v3 | onboarding | `/onboarding/ob-15-welcome-1` | `app/(onboarding)/ob-15-welcome-1.tsx` | Implemented |
| OB-16 Welcome 2 | v3 | onboarding | `/onboarding/ob-16-welcome-2` | `app/(onboarding)/ob-16-welcome-2.tsx` | Implemented |
| OB-17 Welcome 3 | v3 | onboarding | `/onboarding/ob-17-welcome-3` | `app/(onboarding)/ob-17-welcome-3.tsx` | Implemented |
| OB-18 Welcome back | v3 | onboarding | `/onboarding/ob-18-welcome-back` | `app/(onboarding)/ob-18-welcome-back.tsx` | Implemented |
| OB-19 Recover account | v3 | onboarding | `/onboarding/ob-19-recover-account` | `app/(onboarding)/ob-19-recover-account.tsx` | Implemented |
| OB-20 Add more roles | v3 | onboarding | `/onboarding/ob-20-add-more-roles` | `app/(onboarding)/ob-20-add-more-roles.tsx` | Implemented |
| OB-21 Permissions | v3 | onboarding | `/onboarding/ob-21-permissions` | `app/(onboarding)/ob-21-permissions.tsx` | Implemented |
| OB-22 Address | v3 | onboarding | `/onboarding/ob-22-address` | `app/(onboarding)/ob-22-address.tsx` | Implemented |
| OB-23 KYC upgrade | v3 | onboarding | `/onboarding/ob-23-kyc-upgrade` | `app/(onboarding)/ob-23-kyc-upgrade.tsx` | Implemented |
| v6 onboarding commodities and yards | v6 | onboarding | `/onboarding/ob-24-commodities-and-yards` | `app/(onboarding)/ob-24-commodities-and-yards.tsx` | Implemented |
| v6 yard cascading open | v6 | onboarding | `/onboarding/ob-25-yard-cascade` | `app/(onboarding)/ob-25-yard-cascade.tsx` | Implemented |
| OB-26 KYC trader | v4 | onboarding | `/onboarding/ob-26-kyc-trader` | `app/(onboarding)/ob-26-kyc-trader.tsx` | Implemented |
| OB-27 KYC transporter | v3 | onboarding | `/onboarding/ob-27-kyc-transporter` | `app/(onboarding)/ob-27-kyc-transporter.tsx` | Implemented |
| OB-28 KYC inspector | v3 | onboarding | `/onboarding/ob-28-kyc-inspector` | `app/(onboarding)/ob-28-kyc-inspector.tsx` | Implemented |
| OB-29 KYC storage | v3 | onboarding | `/onboarding/ob-29-kyc-storage` | `app/(onboarding)/ob-29-kyc-storage.tsx` | Implemented |
| OB-30 KYC bank | v3 | onboarding | `/onboarding/ob-30-kyc-bank` | `app/(onboarding)/ob-30-kyc-bank.tsx` | Implemented |
| OB-31 KYC insurance | v3 | onboarding | `/onboarding/ob-31-kyc-insurance` | `app/(onboarding)/ob-31-kyc-insurance.tsx` | Implemented |
| v6 buyer purpose multiselect | v4 | onboarding | `/onboarding/ob-32-buyer-purposes` | `app/(onboarding)/ob-32-buyer-purposes.tsx` | Implemented |
| P-01 Home | v1 | producer | `/producer/p-01-home` | `app/(producer)/p-01-home.tsx` | Implemented |
| P-02 Farm and plots | v3 | producer | `/producer/p-02-farm-and-plots` | `app/(producer)/p-02-farm-and-plots.tsx` | Implemented |
| P-03 Crop cycle | v3 | producer | `/producer/p-03-crop-cycle` | `app/(producer)/p-03-crop-cycle.tsx` | Implemented |
| P-04 Today | v3 | producer | `/producer/p-04-today` | `app/(producer)/p-04-today.tsx` | Implemented |
| P-05 Create listing | v1 | producer | `/producer/p-05-create-listing` | `app/(producer)/p-05-create-listing.tsx` | Implemented |
| P-06 Live bids | v1 | producer | `/producer/p-06-live-bids` | `app/(producer)/p-06-live-bids.tsx` | Implemented |
| P-07 Negotiation | v3 | producer | `/producer/p-07-negotiation` | `app/(producer)/p-07-negotiation.tsx` | Implemented |
| P-08 Sale OTP | v3 | producer | `/producer/p-08-sale-otp` | `app/(producer)/p-08-sale-otp.tsx` | Implemented |
| P-09 Deal | v3 | producer | `/producer/p-09-deal` | `app/(producer)/p-09-deal.tsx` | Implemented |
| P-10 Quality result | v3 | producer | `/producer/p-10-quality-result` | `app/(producer)/p-10-quality-result.tsx` | Implemented |
| P-11 Arrivals | v3 | producer | `/producer/p-11-arrivals` | `app/(producer)/p-11-arrivals.tsx` | Implemented |
| P-12 Payments | v6 | producer | `/producer/p-12-payments` | `app/(producer)/p-12-payments.tsx` | Implemented |
| P-13 Advances | v3 | producer | `/producer/p-13-advances` | `app/(producer)/p-13-advances.tsx` | Implemented |
| P-14 Agent links | v3 | producer | `/producer/p-14-agent-links` | `app/(producer)/p-14-agent-links.tsx` | Implemented |
| P-15 Coins | v3 | producer | `/producer/p-15-coins` | `app/(producer)/p-15-coins.tsx` | Implemented |
| P-16 Profile | v3 | producer | `/producer/p-16-profile` | `app/(producer)/p-16-profile.tsx` | Implemented |
| P-17 Edit profile | v3 | producer | `/producer/p-17-edit-profile` | `app/(producer)/p-17-edit-profile.tsx` | Implemented |
| P-18 Language | v3 | producer | `/producer/p-18-language` | `app/(producer)/p-18-language.tsx` | Implemented |
| P-19 Add plot | v3 | producer | `/producer/p-19-add-plot` | `app/(producer)/p-19-add-plot.tsx` | Implemented |
| P-20 Plot detail | v3 | producer | `/producer/p-20-plot-detail` | `app/(producer)/p-20-plot-detail.tsx` | Implemented |
| P-21 Assign crop | v3 | producer | `/producer/p-21-assign-crop` | `app/(producer)/p-21-assign-crop.tsx` | Implemented |
| P-22 Crop calendar | v3 | producer | `/producer/p-22-crop-calendar` | `app/(producer)/p-22-crop-calendar.tsx` | Implemented |
| P-23 Add activity | v3 | producer | `/producer/p-23-add-activity` | `app/(producer)/p-23-add-activity.tsx` | Implemented |
| P-24 Activity detail | v3 | producer | `/producer/p-24-activity-detail` | `app/(producer)/p-24-activity-detail.tsx` | Implemented |
| P-25 Input cost | v3 | producer | `/producer/p-25-input-cost` | `app/(producer)/p-25-input-cost.tsx` | Implemented |
| P-26 Labour | v3 | producer | `/producer/p-26-labour` | `app/(producer)/p-26-labour.tsx` | Implemented |
| P-27 Harvest batches | v3 | producer | `/producer/p-27-harvest-batches` | `app/(producer)/p-27-harvest-batches.tsx` | Implemented |
| P-28 Record harvest | v3 | producer | `/producer/p-28-record-harvest` | `app/(producer)/p-28-record-harvest.tsx` | Implemented |
| P-29 Process and pack | v3 | producer | `/producer/p-29-process-and-pack` | `app/(producer)/p-29-process-and-pack.tsx` | Implemented |
| P-30 Self quality | v3 | producer | `/producer/p-30-self-quality` | `app/(producer)/p-30-self-quality.tsx` | Implemented |
| P-31 Create token | v3 | producer | `/producer/p-31-create-token` | `app/(producer)/p-31-create-token.tsx` | Implemented |
| P-32 Token created | v3 | producer | `/producer/p-32-token-created` | `app/(producer)/p-32-token-created.tsx` | Implemented |
| P-33 My tokens | v3 | producer | `/producer/p-33-my-tokens` | `app/(producer)/p-33-my-tokens.tsx` | Implemented |
| P-34 Token detail | v3 | producer | `/producer/p-34-token-detail` | `app/(producer)/p-34-token-detail.tsx` | Implemented |
| P-35 Sell options | v3 | producer | `/producer/p-35-sell-options` | `app/(producer)/p-35-sell-options.tsx` | Implemented |
| P-36 Preview listing | v3 | producer | `/producer/p-36-preview-listing` | `app/(producer)/p-36-preview-listing.tsx` | Implemented |
| P-37 Listing published | v3 | producer | `/producer/p-37-listing-published` | `app/(producer)/p-37-listing-published.tsx` | Implemented |
| P-38 My listings | v3 | producer | `/producer/p-38-my-listings` | `app/(producer)/p-38-my-listings.tsx` | Implemented |
| P-39 Final offer | v3 | producer | `/producer/p-39-final-offer` | `app/(producer)/p-39-final-offer.tsx` | Implemented |
| P-40 Settlement | v3 | producer | `/producer/p-40-settlement` | `app/(producer)/p-40-settlement.tsx` | Implemented |
| P-41 Change agent | v3 | producer | `/producer/p-41-change-agent` | `app/(producer)/p-41-change-agent.tsx` | Implemented |
| P-42 Arrange transport | v3 | producer | `/producer/p-42-arrange-transport` | `app/(producer)/p-42-arrange-transport.tsx` | Implemented |
| P-43 Transport permit | v3 | producer | `/producer/p-43-transport-permit` | `app/(producer)/p-43-transport-permit.tsx` | Implemented |
| P-44 Find storage | v3 | producer | `/producer/p-44-find-storage` | `app/(producer)/p-44-find-storage.tsx` | Implemented |
| P-45 Storage detail | v3 | producer | `/producer/p-45-storage-detail` | `app/(producer)/p-45-storage-detail.tsx` | Implemented |
| P-46 Confirm storage | v3 | producer | `/producer/p-46-confirm-storage` | `app/(producer)/p-46-confirm-storage.tsx` | Implemented |
| P-47 Sample requests | v3 | producer | `/producer/p-47-sample-requests` | `app/(producer)/p-47-sample-requests.tsx` | Implemented |
| P-48 Loan offers | v3 | producer | `/producer/p-48-loan-offers` | `app/(producer)/p-48-loan-offers.tsx` | Implemented |
| P-49 Apply for loan | v3 | producer | `/producer/p-49-apply-for-loan` | `app/(producer)/p-49-apply-for-loan.tsx` | Implemented |
| P-50 My loans | v3 | producer | `/producer/p-50-my-loans` | `app/(producer)/p-50-my-loans.tsx` | Implemented |
| P-51 My ledger | v3 | producer | `/producer/p-51-my-ledger` | `app/(producer)/p-51-my-ledger.tsx` | Implemented |
| P-52 Request advance | v3 | producer | `/producer/p-52-request-advance` | `app/(producer)/p-52-request-advance.tsx` | Implemented |
| P-53 Repay advance | v3 | producer | `/producer/p-53-repay-advance` | `app/(producer)/p-53-repay-advance.tsx` | Implemented |
| P-54 Market prices | v3 | producer | `/producer/p-54-market-prices` | `app/(producer)/p-54-market-prices.tsx` | Implemented |
| v5 producer Grok Telugu | v5 | producer | `/producer/p-55-ask-grok` | `app/(producer)/p-55-ask-grok.tsx` | Implemented |
| P-56 Weather and risk | v3 | producer | `/producer/p-56-weather-and-risk` | `app/(producer)/p-56-weather-and-risk.tsx` | Implemented |
| P-57 Demand forecast | v3 | producer | `/producer/p-57-demand-forecast` | `app/(producer)/p-57-demand-forecast.tsx` | Implemented |
| P-58 Profit estimator | v3 | producer | `/producer/p-58-profit-estimator` | `app/(producer)/p-58-profit-estimator.tsx` | Implemented |
| P-59 Services | v3 | producer | `/producer/p-59-services` | `app/(producer)/p-59-services.tsx` | Implemented |
| P-60 Request service | v3 | producer | `/producer/p-60-request-service` | `app/(producer)/p-60-request-service.tsx` | Implemented |
| P-61 Track service | v3 | producer | `/producer/p-61-track-service` | `app/(producer)/p-61-track-service.tsx` | Implemented |
| P-62 Service settlement | v3 | producer | `/producer/p-62-service-settlement` | `app/(producer)/p-62-service-settlement.tsx` | Implemented |
| P-63 My team | v3 | producer | `/producer/p-63-my-team` | `app/(producer)/p-63-my-team.tsx` | Implemented |
| P-64 Invite member | v3 | producer | `/producer/p-64-invite-member` | `app/(producer)/p-64-invite-member.tsx` | Implemented |
| P-65 Role limits | v3 | producer | `/producer/p-65-role-limits` | `app/(producer)/p-65-role-limits.tsx` | Implemented |
| P-66 Notifications | v3 | producer | `/producer/p-66-notifications` | `app/(producer)/p-66-notifications.tsx` | Implemented |
| P-67 Welcome coins | v3 | producer | `/producer/p-67-welcome-coins` | `app/(producer)/p-67-welcome-coins.tsx` | Implemented |
| P-68 Disputes | v3 | producer | `/producer/p-68-disputes` | `app/(producer)/p-68-disputes.tsx` | Implemented |
| P-69 Documents | v3 | producer | `/producer/p-69-documents` | `app/(producer)/p-69-documents.tsx` | Implemented |
| P-70 Settings | v3 | producer | `/producer/p-70-settings` | `app/(producer)/p-70-settings.tsx` | Implemented |
| P-71 Help | v3 | producer | `/producer/p-71-help` | `app/(producer)/p-71-help.tsx` | Implemented |
| P-72 empty | v3 | producer | `/producer/p-72-empty-lots` | `app/(producer)/p-72-empty-lots.tsx` | Implemented |
| P-73 loading | v3 | producer | `/producer/p-73-loading` | `app/(producer)/p-73-loading.tsx` | Implemented |
| P-74 offline | v5 | producer | `/producer/p-74-offline` | `app/(producer)/p-74-offline.tsx` | Implemented |
| P-75 error | v3 | producer | `/producer/p-75-error` | `app/(producer)/p-75-error.tsx` | Implemented |
| v5 producer weighment live | v5 | producer | `/producer/p-76-weighment-live` | `app/(producer)/p-76-weighment-live.tsx` | Implemented |
| v5 token autofill | v5 | producer | `/producer/p-77-token-autofill` | `app/(producer)/p-77-token-autofill.tsx` | Implemented |
| v5 discrepancy | v5 | producer | `/producer/p-78-discrepancy` | `app/(producer)/p-78-discrepancy.tsx` | Implemented |
| v5 resolved | v5 | producer | `/producer/p-79-resolved-bag` | `app/(producer)/p-79-resolved-bag.tsx` | Implemented |
| v5 offline sync | v5 | producer | `/producer/p-80-offline-queue` | `app/(producer)/p-80-offline-queue.tsx` | Implemented |
| v5 final summary | v5 | producer | `/producer/p-81-final-summary` | `app/(producer)/p-81-final-summary.tsx` | Implemented |
| v5 SMS preview | v5 | producer | `/producer/p-82-sms-preview` | `app/(producer)/p-82-sms-preview.tsx` | Implemented |
| v7 producer offer reserve | v7 | producer | `/producer/p-83-offer-and-reserve` | `app/(producer)/p-83-offer-and-reserve.tsx` | Implemented |
| v7 bids vs reserve | v7 | producer | `/producer/p-84-bids-versus-reserve` | `app/(producer)/p-84-bids-versus-reserve.tsx` | Implemented |
| v7 edit reserve audit | v7 | producer | `/producer/p-85-edit-reserve` | `app/(producer)/p-85-edit-reserve.tsx` | Implemented |
| v7 close sold | v7 | producer | `/producer/p-86-close-sold` | `app/(producer)/p-86-close-sold.tsx` | Implemented |
| v7 close unsold | v7 | producer | `/producer/p-87-close-unsold` | `app/(producer)/p-87-close-unsold.tsx` | Implemented |
| v7 producer agent price OTP | v7 | producer | `/producer/p-88-agent-price-otp` | `app/(producer)/p-88-agent-price-otp.tsx` | Implemented |
| v6 lots by commodity | v6 | producer | `/producer/p-89-lots-by-commodity` | `app/(producer)/p-89-lots-by-commodity.tsx` | Implemented |
| v6 create lot cascade | v6 | producer | `/producer/p-90-create-lot-cascade` | `app/(producer)/p-90-create-lot-cascade.tsx` | Implemented |
| v6 bag picker | v6 | producer | `/producer/p-91-bag-picker` | `app/(producer)/p-91-bag-picker.tsx` | Implemented |
| v6 paddy unit | v6 | producer | `/producer/p-92-paddy-unit` | `app/(producer)/p-92-paddy-unit.tsx` | Implemented |
| A-01 Home | v3 | agent | `/agent/a-01-home` | `app/(agent)/a-01-home.tsx` | Implemented |
| A-02 My farmers | v3 | agent | `/agent/a-02-my-farmers` | `app/(agent)/a-02-my-farmers.tsx` | Implemented |
| v5 agent AI alerts | v5 | agent | `/agent/a-03-alerts` | `app/(agent)/a-03-alerts.tsx` | Implemented |
| A-04 Auction desk | v3 | agent | `/agent/a-04-auction-desk` | `app/(agent)/a-04-auction-desk.tsx` | Implemented |
| A-05 Tasks | v3 | agent | `/agent/a-05-tasks` | `app/(agent)/a-05-tasks.tsx` | Implemented |
| A-06 Business profile | v3 | agent | `/agent/a-06-business-profile` | `app/(agent)/a-06-business-profile.tsx` | Implemented |
| A-07 My team | v3 | agent | `/agent/a-07-my-team` | `app/(agent)/a-07-my-team.tsx` | Implemented |
| A-08 Add producer | v3 | agent | `/agent/a-08-add-producer` | `app/(agent)/a-08-add-producer.tsx` | Implemented |
| A-09 Producer profile | v3 | agent | `/agent/a-09-producer-profile` | `app/(agent)/a-09-producer-profile.tsx` | Implemented |
| A-10 Confirm arrival | v3 | agent | `/agent/a-10-confirm-arrival` | `app/(agent)/a-10-confirm-arrival.tsx` | Implemented |
| A-11 Advance ledger | v3 | agent | `/agent/a-11-advance-ledger` | `app/(agent)/a-11-advance-ledger.tsx` | Implemented |
| A-12 Producer activity | v3 | agent | `/agent/a-12-producer-activity` | `app/(agent)/a-12-producer-activity.tsx` | Implemented |
| A-13 Report discrepancy | v3 | agent | `/agent/a-13-report-discrepancy` | `app/(agent)/a-13-report-discrepancy.tsx` | Implemented |
| A-14 Record advance | v3 | agent | `/agent/a-14-record-advance` | `app/(agent)/a-14-record-advance.tsx` | Implemented |
| A-15 Buyers | v3 | agent | `/agent/a-15-buyers` | `app/(agent)/a-15-buyers.tsx` | Implemented |
| A-16 Add buyer | v3 | agent | `/agent/a-16-add-buyer` | `app/(agent)/a-16-add-buyer.tsx` | Implemented |
| A-17 Buyer risk | v3 | agent | `/agent/a-17-buyer-risk` | `app/(agent)/a-17-buyer-risk.tsx` | Implemented |
| A-18 Buyer requirements | v3 | agent | `/agent/a-18-buyer-requirements` | `app/(agent)/a-18-buyer-requirements.tsx` | Implemented |
| A-19 Edit listing | v3 | agent | `/agent/a-19-edit-listing` | `app/(agent)/a-19-edit-listing.tsx` | Implemented |
| A-20 Listings | v3 | agent | `/agent/a-20-listings` | `app/(agent)/a-20-listings.tsx` | Implemented |
| A-21 Live auction | v3 | agent | `/agent/a-21-live-auction` | `app/(agent)/a-21-live-auction.tsx` | Implemented |
| A-22 Negotiation | v3 | agent | `/agent/a-22-negotiation` | `app/(agent)/a-22-negotiation.tsx` | Implemented |
| A-23 Sampling request | v3 | agent | `/agent/a-23-sampling-request` | `app/(agent)/a-23-sampling-request.tsx` | Implemented |
| A-24 Sampling result | v3 | agent | `/agent/a-24-sampling-result` | `app/(agent)/a-24-sampling-result.tsx` | Implemented |
| A-25 Cancel auction | v3 | agent | `/agent/a-25-cancel-auction` | `app/(agent)/a-25-cancel-auction.tsx` | Implemented |
| A-26 Next bidder | v3 | agent | `/agent/a-26-next-bidder` | `app/(agent)/a-26-next-bidder.tsx` | Implemented |
| A-27 Force close | v3 | agent | `/agent/a-27-force-close` | `app/(agent)/a-27-force-close.tsx` | Implemented |
| A-28 Weighment schedule | v3 | agent | `/agent/a-28-weighment-schedule` | `app/(agent)/a-28-weighment-schedule.tsx` | Implemented |
| v5 agent assisted weighment | v5 | agent | `/agent/a-29-assisted-weighment` | `app/(agent)/a-29-assisted-weighment.tsx` | Implemented |
| A-30 Weight variance | v3 | agent | `/agent/a-30-weight-variance` | `app/(agent)/a-30-weight-variance.tsx` | Implemented |
| A-31 Generate bill | v6 | agent | `/agent/a-31-generate-bill` | `app/(agent)/a-31-generate-bill.tsx` | Implemented |
| A-32 Settlement confirmed | v3 | agent | `/agent/a-32-settlement-confirmed` | `app/(agent)/a-32-settlement-confirmed.tsx` | Implemented |
| A-33 Bill discounting | v3 | agent | `/agent/a-33-bill-discounting` | `app/(agent)/a-33-bill-discounting.tsx` | Implemented |
| A-34 Financiers | v3 | agent | `/agent/a-34-financiers` | `app/(agent)/a-34-financiers.tsx` | Implemented |
| A-35 Discount offer | v3 | agent | `/agent/a-35-discount-offer` | `app/(agent)/a-35-discount-offer.tsx` | Implemented |
| A-36 Discount receipt | v3 | agent | `/agent/a-36-discount-receipt` | `app/(agent)/a-36-discount-receipt.tsx` | Implemented |
| A-37 Book storage | v3 | agent | `/agent/a-37-book-storage` | `app/(agent)/a-37-book-storage.tsx` | Implemented |
| v6 agent ledger interest | v6 | agent | `/agent/a-38-ledger-interest` | `app/(agent)/a-38-ledger-interest.tsx` | Implemented |
| v6 bill interest | v6 | agent | `/agent/a-39-bill-interest` | `app/(agent)/a-39-bill-interest.tsx` | Implemented |
| v6 interest statement | v6 | agent | `/agent/a-40-interest-statement` | `app/(agent)/a-40-interest-statement.tsx` | Implemented |
| v6 partial payment | v6 | agent | `/agent/a-41-partial-payment` | `app/(agent)/a-41-partial-payment.tsx` | Implemented |
| v6 waiver | v6 | agent | `/agent/a-42-waiver` | `app/(agent)/a-42-waiver.tsx` | Implemented |
| v6 reminders | v6 | agent | `/agent/a-43-reminders` | `app/(agent)/a-43-reminders.tsx` | Implemented |
| v5 agent payment terms | v5 | agent | `/agent/a-44-payment-terms` | `app/(agent)/a-44-payment-terms.tsx` | Implemented |
| v6 terms dropdown | v6 | agent | `/agent/a-45-terms-sheet` | `app/(agent)/a-45-terms-sheet.tsx` | Implemented |
| v6 yard dropdown | v6 | agent | `/agent/a-46-yard-sheet` | `app/(agent)/a-46-yard-sheet.tsx` | Implemented |
| v7 agent reserve | v7 | agent | `/agent/a-47-reserve-for-producer` | `app/(agent)/a-47-reserve-for-producer.tsx` | Implemented |
| A-48 Role limits | v3 | agent | `/agent/a-48-role-limits` | `app/(agent)/a-48-role-limits.tsx` | Implemented |
| A-49 Audit | v3 | agent | `/agent/a-49-audit` | `app/(agent)/a-49-audit.tsx` | Implemented |
| A-50 Empty book | v3 | agent | `/agent/a-50-empty-book` | `app/(agent)/a-50-empty-book.tsx` | Implemented |
| A-51 Loading book | v3 | agent | `/agent/a-51-loading-book` | `app/(agent)/a-51-loading-book.tsx` | Implemented |
| v7 buyer browse | v7 | buyer | `/buyer/b-01-market` | `app/(buyer)/b-01-market.tsx` | Implemented |
| v7 lot detail | v7 | buyer | `/buyer/b-02-lot-detail` | `app/(buyer)/b-02-lot-detail.tsx` | Implemented |
| B-03 Home | v3 | buyer | `/buyer/b-03-home` | `app/(buyer)/b-03-home.tsx` | Implemented |
| B-04 Provenance | v3 | buyer | `/buyer/b-04-provenance` | `app/(buyer)/b-04-provenance.tsx` | Implemented |
| B-05 QC report | v3 | buyer | `/buyer/b-05-qc-report` | `app/(buyer)/b-05-qc-report.tsx` | Implemented |
| B-06 Watchlist | v3 | buyer | `/buyer/b-06-watchlist` | `app/(buyer)/b-06-watchlist.tsx` | Implemented |
| B-07 Post requirement | v3 | buyer | `/buyer/b-07-post-requirement` | `app/(buyer)/b-07-post-requirement.tsx` | Implemented |
| B-08 RFQ detail | v3 | buyer | `/buyer/b-08-rfq-detail` | `app/(buyer)/b-08-rfq-detail.tsx` | Implemented |
| B-09 AI matches | v3 | buyer | `/buyer/b-09-ai-matches` | `app/(buyer)/b-09-ai-matches.tsx` | Implemented |
| B-10 Compare lots | v3 | buyer | `/buyer/b-10-compare-lots` | `app/(buyer)/b-10-compare-lots.tsx` | Implemented |
| B-11 Price history | v3 | buyer | `/buyer/b-11-price-history` | `app/(buyer)/b-11-price-history.tsx` | Implemented |
| B-12 Seller profile | v3 | buyer | `/buyer/b-12-seller-profile` | `app/(buyer)/b-12-seller-profile.tsx` | Implemented |
| v6 market filters | v6 | buyer | `/buyer/b-13-advanced-search` | `app/(buyer)/b-13-advanced-search.tsx` | Implemented |
| B-14 Live auction | v3 | buyer | `/buyer/b-14-live-auction` | `app/(buyer)/b-14-live-auction.tsx` | Implemented |
| B-15 Hire inspector | v3 | buyer | `/buyer/b-15-hire-inspector` | `app/(buyer)/b-15-hire-inspector.tsx` | Implemented |
| B-16 Inspection report | v3 | buyer | `/buyer/b-16-inspection-report` | `app/(buyer)/b-16-inspection-report.tsx` | Implemented |
| B-17 Request sample | v3 | buyer | `/buyer/b-17-request-sample` | `app/(buyer)/b-17-request-sample.tsx` | Implemented |
| B-18 Trade contract | v3 | buyer | `/buyer/b-18-trade-contract` | `app/(buyer)/b-18-trade-contract.tsx` | Implemented |
| B-19 Negotiations | v3 | buyer | `/buyer/b-19-negotiations` | `app/(buyer)/b-19-negotiations.tsx` | Implemented |
| B-20 Negotiation chat | v3 | buyer | `/buyer/b-20-negotiation-chat` | `app/(buyer)/b-20-negotiation-chat.tsx` | Implemented |
| B-21 Contracts | v3 | buyer | `/buyer/b-21-contracts` | `app/(buyer)/b-21-contracts.tsx` | Implemented |
| B-22 Request amendment | v3 | buyer | `/buyer/b-22-request-amendment` | `app/(buyer)/b-22-request-amendment.tsx` | Implemented |
| B-23 Weighment tasks | v3 | buyer | `/buyer/b-23-weighment-tasks` | `app/(buyer)/b-23-weighment-tasks.tsx` | Implemented |
| v5 buyer weighment | v5 | buyer | `/buyer/b-24-buyer-weighment` | `app/(buyer)/b-24-buyer-weighment.tsx` | Implemented |
| B-25 Final weight | v3 | buyer | `/buyer/b-25-final-weight` | `app/(buyer)/b-25-final-weight.tsx` | Implemented |
| B-26 Track delivery | v3 | buyer | `/buyer/b-26-track-delivery` | `app/(buyer)/b-26-track-delivery.tsx` | Implemented |
| B-27 Confirm delivery | v3 | buyer | `/buyer/b-27-confirm-delivery` | `app/(buyer)/b-27-confirm-delivery.tsx` | Implemented |
| B-28 Record payment | v3 | buyer | `/buyer/b-28-record-payment` | `app/(buyer)/b-28-record-payment.tsx` | Implemented |
| B-29 Buyer ledger | v3 | buyer | `/buyer/b-29-buyer-ledger` | `app/(buyer)/b-29-buyer-ledger.tsx` | Implemented |
| B-30 Rate seller | v3 | buyer | `/buyer/b-30-rate-seller` | `app/(buyer)/b-30-rate-seller.tsx` | Implemented |
| B-31 Raise dispute | v3 | buyer | `/buyer/b-31-raise-dispute` | `app/(buyer)/b-31-raise-dispute.tsx` | Implemented |
| B-32 Dispute thread | v3 | buyer | `/buyer/b-32-dispute-thread` | `app/(buyer)/b-32-dispute-thread.tsx` | Implemented |
| B-33 Reorder | v3 | buyer | `/buyer/b-33-reorder` | `app/(buyer)/b-33-reorder.tsx` | Implemented |
| B-34 Order detail | v3 | buyer | `/buyer/b-34-order-detail` | `app/(buyer)/b-34-order-detail.tsx` | Implemented |
| B-35 Weighment certificate | v3 | buyer | `/buyer/b-35-weighment-certificate` | `app/(buyer)/b-35-weighment-certificate.tsx` | Implemented |
| B-36 Deal OTP | v3 | buyer | `/buyer/b-36-deal-otp` | `app/(buyer)/b-36-deal-otp.tsx` | Implemented |
| B-37 Inventory | v3 | buyer | `/buyer/b-37-inventory` | `app/(buyer)/b-37-inventory.tsx` | Implemented |
| B-38 Book storage | v3 | buyer | `/buyer/b-38-book-storage` | `app/(buyer)/b-38-book-storage.tsx` | Implemented |
| B-39 Request release | v3 | buyer | `/buyer/b-39-request-release` | `app/(buyer)/b-39-request-release.tsx` | Implemented |
| B-40 Pledged inventory | v3 | buyer | `/buyer/b-40-pledged-inventory` | `app/(buyer)/b-40-pledged-inventory.tsx` | Implemented |
| B-41 Ageing | v3 | buyer | `/buyer/b-41-ageing` | `app/(buyer)/b-41-ageing.tsx` | Implemented |
| B-42 Downstream buyers | v3 | buyer | `/buyer/b-42-downstream-buyers` | `app/(buyer)/b-42-downstream-buyers.tsx` | Implemented |
| B-43 Create quotation | v3 | buyer | `/buyer/b-43-create-quotation` | `app/(buyer)/b-43-create-quotation.tsx` | Implemented |
| B-44 Sales orders | v3 | buyer | `/buyer/b-44-sales-orders` | `app/(buyer)/b-44-sales-orders.tsx` | Implemented |
| B-45 Finance | v3 | buyer | `/buyer/b-45-finance` | `app/(buyer)/b-45-finance.tsx` | Implemented |
| B-46 Trade analytics | v3 | buyer | `/buyer/b-46-trade-analytics` | `app/(buyer)/b-46-trade-analytics.tsx` | Implemented |
| B-47 P and L | v3 | buyer | `/buyer/b-47-p-and-l` | `app/(buyer)/b-47-p-and-l.tsx` | Implemented |
| B-48 Tax summary | v3 | buyer | `/buyer/b-48-tax-summary` | `app/(buyer)/b-48-tax-summary.tsx` | Implemented |
| B-49 Market feed | v3 | buyer | `/buyer/b-49-market-feed` | `app/(buyer)/b-49-market-feed.tsx` | Implemented |
| B-50 Wallet | v3 | buyer | `/buyer/b-50-wallet` | `app/(buyer)/b-50-wallet.tsx` | Implemented |
| B-51 Addresses | v3 | buyer | `/buyer/b-51-addresses` | `app/(buyer)/b-51-addresses.tsx` | Implemented |
| B-52 Payment methods | v3 | buyer | `/buyer/b-52-payment-methods` | `app/(buyer)/b-52-payment-methods.tsx` | Implemented |
| B-53 My team | v3 | buyer | `/buyer/b-53-my-team` | `app/(buyer)/b-53-my-team.tsx` | Implemented |
| v6 role dropdown | v6 | buyer | `/buyer/b-54-role-sheet` | `app/(buyer)/b-54-role-sheet.tsx` | Implemented |
| v5 assign variety | v5 | buyer | `/buyer/b-55-assignments` | `app/(buyer)/b-55-assignments.tsx` | Implemented |
| B-56 Mandate | v4 | buyer | `/buyer/b-56-mandate` | `app/(buyer)/b-56-mandate.tsx` | Implemented |
| v5 buyer terms OTP | v5 | buyer | `/buyer/b-57-terms-otp` | `app/(buyer)/b-57-terms-otp.tsx` | Implemented |
| v6 payables interest | v6 | buyer | `/buyer/b-58-payables` | `app/(buyer)/b-58-payables.tsx` | Implemented |
| v6 overdue notice | v6 | buyer | `/buyer/b-59-overdue-notice` | `app/(buyer)/b-59-overdue-notice.tsx` | Implemented |
| v5 client notice | v5 | buyer | `/buyer/b-60-client-notice` | `app/(buyer)/b-60-client-notice.tsx` | Implemented |
| v7 physical inspection | v7 | buyer | `/buyer/b-61-physical-inspection` | `app/(buyer)/b-61-physical-inspection.tsx` | Implemented |
| v7 inspected badge | v7 | buyer | `/buyer/b-62-inspected-badge` | `app/(buyer)/b-62-inspected-badge.tsx` | Implemented |
| v7 bid not accepted | v7 | buyer | `/buyer/b-63-bid-not-accepted` | `app/(buyer)/b-63-bid-not-accepted.tsx` | Implemented |
| v7 autobid setup | v7 | buyer | `/buyer/b-64-auto-bid-setup` | `app/(buyer)/b-64-auto-bid-setup.tsx` | Implemented |
| v7 active autobids | v7 | buyer | `/buyer/b-65-active-auto-bids` | `app/(buyer)/b-65-active-auto-bids.tsx` | Implemented |
| v7 bid history | v7 | buyer | `/buyer/b-66-bid-history` | `app/(buyer)/b-66-bid-history.tsx` | Implemented |
| v7 outbid over max | v7 | buyer | `/buyer/b-67-outbid-over-max` | `app/(buyer)/b-67-outbid-over-max.tsx` | Implemented |
| v7 raise max approval | v7 | buyer | `/buyer/b-68-raise-max-approval` | `app/(buyer)/b-68-raise-max-approval.tsx` | Implemented |
| B-69 Processor batch | v4 | buyer | `/buyer/b-69-processor-batch` | `app/(buyer)/b-69-processor-batch.tsx` | Implemented |
| B-70 Plant QA | v4 | buyer | `/buyer/b-70-plant-qa` | `app/(buyer)/b-70-plant-qa.tsx` | Implemented |
| B-71 Export docs | v4 | buyer | `/buyer/b-71-export-docs` | `app/(buyer)/b-71-export-docs.tsx` | Implemented |
| B-72 Empty market | v3 | buyer | `/buyer/b-72-empty-market` | `app/(buyer)/b-72-empty-market.tsx` | Implemented |
| B-73 Loading market | v3 | buyer | `/buyer/b-73-loading-market` | `app/(buyer)/b-73-loading-market.tsx` | Implemented |
| B-74 Offline market | v3 | buyer | `/buyer/b-74-offline-market` | `app/(buyer)/b-74-offline-market.tsx` | Implemented |
| I-01 Home | v3 | inspector | `/quality/i-01-home` | `app/(quality)/i-01-home.tsx` | Implemented |
| I-02 Assigned jobs | v3 | inspector | `/quality/i-02-assigned-jobs` | `app/(quality)/i-02-assigned-jobs.tsx` | Implemented |
| I-03 Visit | v3 | inspector | `/quality/i-03-visit` | `app/(quality)/i-03-visit.tsx` | Implemented |
| I-04 Sample | v3 | inspector | `/quality/i-04-sample` | `app/(quality)/i-04-sample.tsx` | Implemented |
| I-05 Moisture | v3 | inspector | `/quality/i-05-moisture` | `app/(quality)/i-05-moisture.tsx` | Implemented |
| I-06 Colour | v3 | inspector | `/quality/i-06-colour` | `app/(quality)/i-06-colour.tsx` | Implemented |
| I-07 Photos | v3 | inspector | `/quality/i-07-photos` | `app/(quality)/i-07-photos.tsx` | Implemented |
| I-08 Checklist | v3 | inspector | `/quality/i-08-checklist` | `app/(quality)/i-08-checklist.tsx` | Implemented |
| I-09 Submit report | v3 | inspector | `/quality/i-09-submit-report` | `app/(quality)/i-09-submit-report.tsx` | Implemented |
| I-10 OTP handoff | v3 | inspector | `/quality/i-10-otp-handoff` | `app/(quality)/i-10-otp-handoff.tsx` | Implemented |
| I-11 Reinspection | v3 | inspector | `/quality/i-11-reinspection` | `app/(quality)/i-11-reinspection.tsx` | Implemented |
| I-12 Conflict check | v3 | inspector | `/quality/i-12-conflict-check` | `app/(quality)/i-12-conflict-check.tsx` | Implemented |
| I-13 My team | v3 | inspector | `/quality/i-13-my-team` | `app/(quality)/i-13-my-team.tsx` | Implemented |
| I-14 Rates | v3 | inspector | `/quality/i-14-rates` | `app/(quality)/i-14-rates.tsx` | Implemented |
| I-15 Empty jobs | v3 | inspector | `/quality/i-15-empty-jobs` | `app/(quality)/i-15-empty-jobs.tsx` | Implemented |
| I-16 Loading jobs | v3 | inspector | `/quality/i-16-loading-jobs` | `app/(quality)/i-16-loading-jobs.tsx` | Implemented |
| V-01 Home | v3 | verifier | `/quality/v-01-home` | `app/(quality)/v-01-home.tsx` | Implemented |
| V-02 Queue | v3 | verifier | `/quality/v-02-queue` | `app/(quality)/v-02-queue.tsx` | Implemented |
| V-03 Accept report | v3 | verifier | `/quality/v-03-accept-report` | `app/(quality)/v-03-accept-report.tsx` | Implemented |
| V-04 Raise issue | v3 | verifier | `/quality/v-04-raise-issue` | `app/(quality)/v-04-raise-issue.tsx` | Implemented |
| V-05 History | v3 | verifier | `/quality/v-05-history` | `app/(quality)/v-05-history.tsx` | Implemented |
| V-06 Authenticity | v3 | verifier | `/quality/v-06-authenticity` | `app/(quality)/v-06-authenticity.tsx` | Implemented |
| V-07 Limits | v3 | verifier | `/quality/v-07-limits` | `app/(quality)/v-07-limits.tsx` | Implemented |
| V-08 Offline | v3 | verifier | `/quality/v-08-offline` | `app/(quality)/v-08-offline.tsx` | Implemented |
| L-01 Home | v3 | lab | `/quality/l-01-home` | `app/(quality)/l-01-home.tsx` | Implemented |
| L-02 Samples | v3 | lab | `/quality/l-02-samples` | `app/(quality)/l-02-samples.tsx` | Implemented |
| L-03 Result entry | v3 | lab | `/quality/l-03-result-entry` | `app/(quality)/l-03-result-entry.tsx` | Implemented |
| L-04 Certificate | v3 | lab | `/quality/l-04-certificate` | `app/(quality)/l-04-certificate.tsx` | Implemented |
| L-05 Aflatoxin | v3 | lab | `/quality/l-05-aflatoxin` | `app/(quality)/l-05-aflatoxin.tsx` | Implemented |
| L-06 Retest | v3 | lab | `/quality/l-06-retest` | `app/(quality)/l-06-retest.tsx` | Implemented |
| L-07 Team | v3 | lab | `/quality/l-07-team` | `app/(quality)/l-07-team.tsx` | Implemented |
| L-08 Empty bench | v3 | lab | `/quality/l-08-empty-bench` | `app/(quality)/l-08-empty-bench.tsx` | Implemented |
| T-01 Home | v3 | transport | `/transport/t-01-home` | `app/(transport)/t-01-home.tsx` | Implemented |
| T-02 Available loads | v3 | transport | `/transport/t-02-available-loads` | `app/(transport)/t-02-available-loads.tsx` | Implemented |
| T-03 Trip detail | v3 | transport | `/transport/t-03-trip-detail` | `app/(transport)/t-03-trip-detail.tsx` | Implemented |
| T-04 Loading order | v3 | transport | `/transport/t-04-loading-order` | `app/(transport)/t-04-loading-order.tsx` | Implemented |
| T-05 e-Permit | v3 | transport | `/transport/t-05-e-permit` | `app/(transport)/t-05-e-permit.tsx` | Implemented |
| T-06 Live tracking | v3 | transport | `/transport/t-06-live-tracking` | `app/(transport)/t-06-live-tracking.tsx` | Implemented |
| T-07 Confirm pickup | v3 | transport | `/transport/t-07-confirm-pickup` | `app/(transport)/t-07-confirm-pickup.tsx` | Implemented |
| T-08 Confirm delivery | v3 | transport | `/transport/t-08-confirm-delivery` | `app/(transport)/t-08-confirm-delivery.tsx` | Implemented |
| T-09 Trip history | v3 | transport | `/transport/t-09-trip-history` | `app/(transport)/t-09-trip-history.tsx` | Implemented |
| T-10 Report issue | v3 | transport | `/transport/t-10-report-issue` | `app/(transport)/t-10-report-issue.tsx` | Implemented |
| T-11 Earnings | v3 | transport | `/transport/t-11-earnings` | `app/(transport)/t-11-earnings.tsx` | Implemented |
| T-12 Vehicles | v3 | transport | `/transport/t-12-vehicles` | `app/(transport)/t-12-vehicles.tsx` | Implemented |
| T-13 Drivers | v3 | transport | `/transport/t-13-drivers` | `app/(transport)/t-13-drivers.tsx` | Implemented |
| T-14 Ratings | v3 | transport | `/transport/t-14-ratings` | `app/(transport)/t-14-ratings.tsx` | Implemented |
| T-15 Quote | v3 | transport | `/transport/t-15-quote` | `app/(transport)/t-15-quote.tsx` | Implemented |
| T-16 Assign vehicle | v3 | transport | `/transport/t-16-assign-vehicle` | `app/(transport)/t-16-assign-vehicle.tsx` | Implemented |
| v5 transport offline | v5 | transport | `/transport/t-17-offline-trip` | `app/(transport)/t-17-offline-trip.tsx` | Implemented |
| T-18 KYC | v3 | transport | `/transport/t-18-kyc` | `app/(transport)/t-18-kyc.tsx` | Implemented |
| T-19 Limits | v3 | transport | `/transport/t-19-limits` | `app/(transport)/t-19-limits.tsx` | Implemented |
| T-20 Empty loads | v3 | transport | `/transport/t-20-empty-loads` | `app/(transport)/t-20-empty-loads.tsx` | Implemented |
| T-21 Loading | v3 | transport | `/transport/t-21-loading` | `app/(transport)/t-21-loading.tsx` | Implemented |
| T-22 Seal photo | v3 | transport | `/transport/t-22-seal-photo` | `app/(transport)/t-22-seal-photo.tsx` | Implemented |
| T-23 POD | v3 | transport | `/transport/t-23-pod` | `app/(transport)/t-23-pod.tsx` | Implemented |
| T-24 Help | v3 | transport | `/transport/t-24-help` | `app/(transport)/t-24-help.tsx` | Implemented |
| S-01 Home | v3 | storage | `/storage/s-01-home` | `app/(storage)/s-01-home.tsx` | Implemented |
| S-02 Inward requests | v3 | storage | `/storage/s-02-inward-requests` | `app/(storage)/s-02-inward-requests.tsx` | Implemented |
| S-03 Inward scan | v3 | storage | `/storage/s-03-inward-scan` | `app/(storage)/s-03-inward-scan.tsx` | Implemented |
| S-04 Assign location | v3 | storage | `/storage/s-04-assign-location` | `app/(storage)/s-04-assign-location.tsx` | Implemented |
| S-05 Bond | v3 | storage | `/storage/s-05-bond` | `app/(storage)/s-05-bond.tsx` | Implemented |
| S-06 Inventory | v3 | storage | `/storage/s-06-inventory` | `app/(storage)/s-06-inventory.tsx` | Implemented |
| S-07 Lot detail | v3 | storage | `/storage/s-07-lot-detail` | `app/(storage)/s-07-lot-detail.tsx` | Implemented |
| S-08 Rent invoice | v3 | storage | `/storage/s-08-rent-invoice` | `app/(storage)/s-08-rent-invoice.tsx` | Implemented |
| S-09 Outward requests | v3 | storage | `/storage/s-09-outward-requests` | `app/(storage)/s-09-outward-requests.tsx` | Implemented |
| S-10 Outward scan | v3 | storage | `/storage/s-10-outward-scan` | `app/(storage)/s-10-outward-scan.tsx` | Implemented |
| S-11 NOC | v3 | storage | `/storage/s-11-noc` | `app/(storage)/s-11-noc.tsx` | Implemented |
| S-12 Environment | v3 | storage | `/storage/s-12-environment` | `app/(storage)/s-12-environment.tsx` | Implemented |
| S-13 Ledger | v3 | storage | `/storage/s-13-ledger` | `app/(storage)/s-13-ledger.tsx` | Implemented |
| S-14 Capacity | v3 | storage | `/storage/s-14-capacity` | `app/(storage)/s-14-capacity.tsx` | Implemented |
| S-15 Facility settings | v3 | storage | `/storage/s-15-facility-settings` | `app/(storage)/s-15-facility-settings.tsx` | Implemented |
| S-16 Team | v3 | storage | `/storage/s-16-team` | `app/(storage)/s-16-team.tsx` | Implemented |
| S-17 Lien | v3 | storage | `/storage/s-17-lien` | `app/(storage)/s-17-lien.tsx` | Implemented |
| S-18 Temperature log | v3 | storage | `/storage/s-18-temperature-log` | `app/(storage)/s-18-temperature-log.tsx` | Implemented |
| S-19 Empty shed | v3 | storage | `/storage/s-19-empty-shed` | `app/(storage)/s-19-empty-shed.tsx` | Implemented |
| S-20 Loading | v3 | storage | `/storage/s-20-loading` | `app/(storage)/s-20-loading.tsx` | Implemented |
| S-21 Offline gate | v3 | storage | `/storage/s-21-offline-gate` | `app/(storage)/s-21-offline-gate.tsx` | Implemented |
| S-22 Sample hold | v3 | storage | `/storage/s-22-sample-hold` | `app/(storage)/s-22-sample-hold.tsx` | Implemented |
| S-23 Help | v3 | storage | `/storage/s-23-help` | `app/(storage)/s-23-help.tsx` | Implemented |
| S-24 Rating | v3 | storage | `/storage/s-24-rating` | `app/(storage)/s-24-rating.tsx` | Implemented |
| F-01 Home | v3 | bank | `/bank/f-01-home` | `app/(bank)/f-01-home.tsx` | Implemented |
| F-02 Applications | v3 | bank | `/bank/f-02-applications` | `app/(bank)/f-02-applications.tsx` | Implemented |
| F-03 Review | v3 | bank | `/bank/f-03-review` | `app/(bank)/f-03-review.tsx` | Implemented |
| F-04 Disburse | v3 | bank | `/bank/f-04-disburse` | `app/(bank)/f-04-disburse.tsx` | Implemented |
| F-05 Collateral | v3 | bank | `/bank/f-05-collateral` | `app/(bank)/f-05-collateral.tsx` | Implemented |
| F-06 Bill purchase | v3 | bank | `/bank/f-06-bill-purchase` | `app/(bank)/f-06-bill-purchase.tsx` | Implemented |
| F-07 Repayments | v3 | bank | `/bank/f-07-repayments` | `app/(bank)/f-07-repayments.tsx` | Implemented |
| F-08 Overdue | v3 | bank | `/bank/f-08-overdue` | `app/(bank)/f-08-overdue.tsx` | Implemented |
| F-09 Compliance | v3 | bank | `/bank/f-09-compliance` | `app/(bank)/f-09-compliance.tsx` | Implemented |
| F-10 Consent | v3 | bank | `/bank/f-10-consent` | `app/(bank)/f-10-consent.tsx` | Implemented |
| F-11 Team | v3 | bank | `/bank/f-11-team` | `app/(bank)/f-11-team.tsx` | Implemented |
| F-12 Sanction limit | v3 | bank | `/bank/f-12-sanction-limit` | `app/(bank)/f-12-sanction-limit.tsx` | Implemented |
| F-13 Settings | v3 | bank | `/bank/f-13-settings` | `app/(bank)/f-13-settings.tsx` | Implemented |
| F-14 Empty pipeline | v3 | bank | `/bank/f-14-empty-pipeline` | `app/(bank)/f-14-empty-pipeline.tsx` | Implemented |
| F-15 Loading | v3 | bank | `/bank/f-15-loading` | `app/(bank)/f-15-loading.tsx` | Implemented |
| F-16 AI score why | v3 | bank | `/bank/f-16-ai-score-why` | `app/(bank)/f-16-ai-score-why.tsx` | Implemented |
| F-17 Lien release | v3 | bank | `/bank/f-17-lien-release` | `app/(bank)/f-17-lien-release.tsx` | Implemented |
| F-18 Help | v3 | bank | `/bank/f-18-help` | `app/(bank)/f-18-help.tsx` | Implemented |
| N-01 Home | v3 | insurance | `/insurance/n-01-home` | `app/(insurance)/n-01-home.tsx` | Implemented |
| N-02 Products | v3 | insurance | `/insurance/n-02-products` | `app/(insurance)/n-02-products.tsx` | Implemented |
| N-03 Issue policy | v3 | insurance | `/insurance/n-03-issue-policy` | `app/(insurance)/n-03-issue-policy.tsx` | Implemented |
| N-04 Policy detail | v3 | insurance | `/insurance/n-04-policy-detail` | `app/(insurance)/n-04-policy-detail.tsx` | Implemented |
| N-05 Claim review | v3 | insurance | `/insurance/n-05-claim-review` | `app/(insurance)/n-05-claim-review.tsx` | Implemented |
| N-06 Assign surveyor | v3 | insurance | `/insurance/n-06-assign-surveyor` | `app/(insurance)/n-06-assign-surveyor.tsx` | Implemented |
| N-07 Assessment | v3 | insurance | `/insurance/n-07-assessment` | `app/(insurance)/n-07-assessment.tsx` | Implemented |
| N-08 Payout | v3 | insurance | `/insurance/n-08-payout` | `app/(insurance)/n-08-payout.tsx` | Implemented |
| N-09 Policies | v3 | insurance | `/insurance/n-09-policies` | `app/(insurance)/n-09-policies.tsx` | Implemented |
| N-10 Ledger | v3 | insurance | `/insurance/n-10-ledger` | `app/(insurance)/n-10-ledger.tsx` | Implemented |
| N-11 Settings | v3 | insurance | `/insurance/n-11-settings` | `app/(insurance)/n-11-settings.tsx` | Implemented |
| N-12 Team | v3 | insurance | `/insurance/n-12-team` | `app/(insurance)/n-12-team.tsx` | Implemented |
| N-13 Survey photos | v3 | insurance | `/insurance/n-13-survey-photos` | `app/(insurance)/n-13-survey-photos.tsx` | Implemented |
| N-14 Why this premium | v3 | insurance | `/insurance/n-14-why-this-premium` | `app/(insurance)/n-14-why-this-premium.tsx` | Implemented |
| N-15 Empty claims | v3 | insurance | `/insurance/n-15-empty-claims` | `app/(insurance)/n-15-empty-claims.tsx` | Implemented |
| N-16 Loading | v3 | insurance | `/insurance/n-16-loading` | `app/(insurance)/n-16-loading.tsx` | Implemented |
| N-17 Head office | v3 | insurance | `/insurance/n-17-head-office` | `app/(insurance)/n-17-head-office.tsx` | Implemented |
| N-18 Help | v3 | insurance | `/insurance/n-18-help` | `app/(insurance)/n-18-help.tsx` | Implemented |
| Y-01 Gate | v3 | yard | `/yard/y-01-gate` | `app/(yard)/y-01-gate.tsx` | Implemented |
| Y-02 Home | v3 | yard | `/yard/y-02-home` | `app/(yard)/y-02-home.tsx` | Implemented |
| Y-03 Manual entry | v3 | yard | `/yard/y-03-manual-entry` | `app/(yard)/y-03-manual-entry.tsx` | Implemented |
| Y-04 Queue | v3 | yard | `/yard/y-04-queue` | `app/(yard)/y-04-queue.tsx` | Implemented |
| Y-05 Price board | v3 | yard | `/yard/y-05-price-board` | `app/(yard)/y-05-price-board.tsx` | Implemented |
| Y-06 Weighbridge | v5 | yard | `/yard/y-06-weighbridge` | `app/(yard)/y-06-weighbridge.tsx` | Implemented |
| Y-07 Cess | v3 | yard | `/yard/y-07-cess` | `app/(yard)/y-07-cess.tsx` | Implemented |
| Y-08 Price bulletin | v3 | yard | `/yard/y-08-price-bulletin` | `app/(yard)/y-08-price-bulletin.tsx` | Implemented |
| Y-09 Disputes | v3 | yard | `/yard/y-09-disputes` | `app/(yard)/y-09-disputes.tsx` | Implemented |
| Y-10 Auction watch | v7 | yard | `/yard/y-10-auction-watch` | `app/(yard)/y-10-auction-watch.tsx` | Implemented |
| Y-11 Staff | v3 | yard | `/yard/y-11-staff` | `app/(yard)/y-11-staff.tsx` | Implemented |
| Y-12 Holidays | v3 | yard | `/yard/y-12-holidays` | `app/(yard)/y-12-holidays.tsx` | Implemented |
| Y-13 Membership | v3 | yard | `/yard/y-13-membership` | `app/(yard)/y-13-membership.tsx` | Implemented |
| Y-14 Collusion flag | v3 | yard | `/yard/y-14-collusion-flag` | `app/(yard)/y-14-collusion-flag.tsx` | Implemented |
| Y-15 Empty yard | v3 | yard | `/yard/y-15-empty-yard` | `app/(yard)/y-15-empty-yard.tsx` | Implemented |
| Y-16 Loading | v3 | yard | `/yard/y-16-loading` | `app/(yard)/y-16-loading.tsx` | Implemented |
| Y-17 Offline gate | v3 | yard | `/yard/y-17-offline-gate` | `app/(yard)/y-17-offline-gate.tsx` | Implemented |
| Y-18 Help | v3 | yard | `/yard/y-18-help` | `app/(yard)/y-18-help.tsx` | Implemented |
| IS-01 Home | v3 | seller | `/inputs/is-01-home` | `app/(inputs)/is-01-home.tsx` | Implemented |
| IS-02 Catalog | v3 | seller | `/inputs/is-02-catalog` | `app/(inputs)/is-02-catalog.tsx` | Implemented |
| IS-03 Add product | v3 | seller | `/inputs/is-03-add-product` | `app/(inputs)/is-03-add-product.tsx` | Implemented |
| IS-04 Orders | v3 | seller | `/inputs/is-04-orders` | `app/(inputs)/is-04-orders.tsx` | Implemented |
| IS-05 Fulfil | v3 | seller | `/inputs/is-05-fulfil` | `app/(inputs)/is-05-fulfil.tsx` | Implemented |
| IS-06 Delivery | v3 | seller | `/inputs/is-06-delivery` | `app/(inputs)/is-06-delivery.tsx` | Implemented |
| IS-07 Settlements | v3 | seller | `/inputs/is-07-settlements` | `app/(inputs)/is-07-settlements.tsx` | Implemented |
| IS-08 Ratings | v3 | seller | `/inputs/is-08-ratings` | `app/(inputs)/is-08-ratings.tsx` | Implemented |
| IS-09 Team | v3 | seller | `/inputs/is-09-team` | `app/(inputs)/is-09-team.tsx` | Implemented |
| IS-10 KYC | v3 | seller | `/inputs/is-10-kyc` | `app/(inputs)/is-10-kyc.tsx` | Implemented |
| IS-11 Empty orders | v3 | seller | `/inputs/is-11-empty-orders` | `app/(inputs)/is-11-empty-orders.tsx` | Implemented |
| IS-12 Help | v3 | seller | `/inputs/is-12-help` | `app/(inputs)/is-12-help.tsx` | Implemented |
| SP-01 Home | v3 | service | `/inputs/sp-01-home` | `app/(inputs)/sp-01-home.tsx` | Implemented |
| SP-02 Catalog | v3 | service | `/inputs/sp-02-catalog` | `app/(inputs)/sp-02-catalog.tsx` | Implemented |
| SP-03 Requests | v3 | service | `/inputs/sp-03-requests` | `app/(inputs)/sp-03-requests.tsx` | Implemented |
| SP-04 Assign | v3 | service | `/inputs/sp-04-assign` | `app/(inputs)/sp-04-assign.tsx` | Implemented |
| SP-05 Job status | v3 | service | `/inputs/sp-05-job-status` | `app/(inputs)/sp-05-job-status.tsx` | Implemented |
| SP-06 Proof | v3 | service | `/inputs/sp-06-proof` | `app/(inputs)/sp-06-proof.tsx` | Implemented |
| SP-07 Billing | v3 | service | `/inputs/sp-07-billing` | `app/(inputs)/sp-07-billing.tsx` | Implemented |
| SP-08 Dispute | v3 | service | `/inputs/sp-08-dispute` | `app/(inputs)/sp-08-dispute.tsx` | Implemented |
| SP-09 Team | v3 | service | `/inputs/sp-09-team` | `app/(inputs)/sp-09-team.tsx` | Implemented |
| SP-10 Empty | v3 | service | `/inputs/sp-10-empty` | `app/(inputs)/sp-10-empty.tsx` | Implemented |
| SH-01 Search | v3 | shared | `/shared/sh-01-search` | `app/(shared)/sh-01-search.tsx` | Implemented |
| SH-02 Notifications | v3 | shared | `/shared/sh-02-notifications` | `app/(shared)/sh-02-notifications.tsx` | Implemented |
| SH-03 Deal chat | v3 | shared | `/shared/sh-03-deal-chat` | `app/(shared)/sh-03-deal-chat.tsx` | Implemented |
| SH-04 Voice call | v3 | shared | `/shared/sh-04-voice-call` | `app/(shared)/sh-04-voice-call.tsx` | Implemented |
| SH-05 Documents | v3 | shared | `/shared/sh-05-documents` | `app/(shared)/sh-05-documents.tsx` | Implemented |
| SH-06 Scan token | v3 | shared | `/shared/sh-06-scan-token` | `app/(shared)/sh-06-scan-token.tsx` | Implemented |
| SH-07 Help | v3 | shared | `/shared/sh-07-help` | `app/(shared)/sh-07-help.tsx` | Implemented |
| SH-08 Support ticket | v3 | shared | `/shared/sh-08-support-ticket` | `app/(shared)/sh-08-support-ticket.tsx` | Implemented |
| SH-09 Profile | v3 | shared | `/shared/sh-09-profile` | `app/(shared)/sh-09-profile.tsx` | Implemented |
| SH-10 Settings | v3 | shared | `/shared/sh-10-settings` | `app/(shared)/sh-10-settings.tsx` | Implemented |
| v5 AI settings consent | v5 | shared | `/shared/sh-11-ai-consent` | `app/(shared)/sh-11-ai-consent.tsx` | Implemented |
| SH-12 Offline | v3 | shared | `/shared/sh-12-offline` | `app/(shared)/sh-12-offline.tsx` | Implemented |
| SH-13 Empty | v3 | shared | `/shared/sh-13-empty` | `app/(shared)/sh-13-empty.tsx` | Implemented |
| SH-14 Loading | v3 | shared | `/shared/sh-14-loading` | `app/(shared)/sh-14-loading.tsx` | Implemented |
| SH-15 Error | v3 | shared | `/shared/sh-15-error` | `app/(shared)/sh-15-error.tsx` | Implemented |
| v5 why this suggestion | v5 | shared | `/shared/sh-16-why-this-suggestion` | `app/(shared)/sh-16-why-this-suggestion.tsx` | Implemented |
| v5 admin mobile live | v5 | admin | `/admin/am-01-live-ops` | `app/(admin)/am-01-live-ops.tsx` | Implemented |
| v5 admin weighment progress | v5 | admin | `/admin/am-02-weighment-progress` | `app/(admin)/am-02-weighment-progress.tsx` | Implemented |
| AM-03 KYC queue | v3 | admin | `/admin/am-03-kyc-queue` | `app/(admin)/am-03-kyc-queue.tsx` | Implemented |
| AM-04 Alerts | v5 | admin | `/admin/am-04-alerts` | `app/(admin)/am-04-alerts.tsx` | Implemented |
| v6 payment rules | v6 | admin | `/admin/am-05-rules` | `app/(admin)/am-05-rules.tsx` | Implemented |
| v7 admin live autobid | v7 | admin | `/admin/am-06-auctions` | `app/(admin)/am-06-auctions.tsx` | Implemented |
| AM-07 Team | v3 | admin | `/admin/am-07-team` | `app/(admin)/am-07-team.tsx` | Implemented |
| AM-08 Waivers | v6 | admin | `/admin/am-08-waivers` | `app/(admin)/am-08-waivers.tsx` | Implemented |
| AM-09 Commodities | v6 | admin | `/admin/am-09-commodities` | `app/(admin)/am-09-commodities.tsx` | Implemented |
| AM-10 Yards | v6 | admin | `/admin/am-10-yards` | `app/(admin)/am-10-yards.tsx` | Implemented |
| AM-11 AI flags | v5 | admin | `/admin/am-11-ai-flags` | `app/(admin)/am-11-ai-flags.tsx` | Implemented |
| AM-12 Support | v3 | admin | `/admin/am-12-support` | `app/(admin)/am-12-support.tsx` | Implemented |
| AM-13 Empty | v3 | admin | `/admin/am-13-empty` | `app/(admin)/am-13-empty.tsx` | Implemented |
| AM-14 Offline | v3 | admin | `/admin/am-14-offline` | `app/(admin)/am-14-offline.tsx` | Implemented |
| v6 agent back office ledger | v6 | agent | `/backoffice/abo-01-ledger` | `app/(backoffice)/abo-01-ledger.tsx` | Implemented |
| v6 multi yard | v6 | agent | `/backoffice/abo-02-multi-yard` | `app/(backoffice)/abo-02-multi-yard.tsx` | Implemented |
| ABO-03 Farmers | v3 | agent | `/backoffice/abo-03-farmers` | `app/(backoffice)/abo-03-farmers.tsx` | Implemented |
| ABO-04 Auctions | v3 | agent | `/backoffice/abo-04-auctions` | `app/(backoffice)/abo-04-auctions.tsx` | Implemented |
| v5 agent BO ledger terms | v5 | agent | `/backoffice/abo-05-bills` | `app/(backoffice)/abo-05-bills.tsx` | Implemented |
| ABO-06 Approvals | v3 | agent | `/backoffice/abo-06-approvals` | `app/(backoffice)/abo-06-approvals.tsx` | Implemented |
| ABO-07 Team | v3 | agent | `/backoffice/abo-07-team` | `app/(backoffice)/abo-07-team.tsx` | Implemented |
| ABO-08 Waivers | v3 | agent | `/backoffice/abo-08-waivers` | `app/(backoffice)/abo-08-waivers.tsx` | Implemented |
| ABO-09 Audit | v3 | agent | `/backoffice/abo-09-audit` | `app/(backoffice)/abo-09-audit.tsx` | Implemented |
| ABO-10 Storage | v3 | agent | `/backoffice/abo-10-storage` | `app/(backoffice)/abo-10-storage.tsx` | Implemented |
| ABO-11 Buyers | v3 | agent | `/backoffice/abo-11-buyers` | `app/(backoffice)/abo-11-buyers.tsx` | Implemented |
| ABO-12 Reports | v3 | agent | `/backoffice/abo-12-reports` | `app/(backoffice)/abo-12-reports.tsx` | Implemented |
| ABO-13 Empty | v3 | agent | `/backoffice/abo-13-empty` | `app/(backoffice)/abo-13-empty.tsx` | Implemented |
| ABO-14 Settings | v3 | agent | `/backoffice/abo-14-settings` | `app/(backoffice)/abo-14-settings.tsx` | Implemented |
| v5 buyer BO live ops | v5 | buyer | `/backoffice/tbo-01-dashboard` | `app/(backoffice)/tbo-01-dashboard.tsx` | Implemented |
| v6 buyer BO filters | v6 | buyer | `/backoffice/tbo-02-market` | `app/(backoffice)/tbo-02-market.tsx` | Implemented |
| TBO-03 Weighing | v3 | buyer | `/backoffice/tbo-03-weighing` | `app/(backoffice)/tbo-03-weighing.tsx` | Implemented |
| TBO-04 Inventory | v3 | buyer | `/backoffice/tbo-04-inventory` | `app/(backoffice)/tbo-04-inventory.tsx` | Implemented |
| v6 buyer BO payables | v6 | buyer | `/backoffice/tbo-05-payables` | `app/(backoffice)/tbo-05-payables.tsx` | Implemented |
| v7 buyer BO autobids | v7 | buyer | `/backoffice/tbo-06-auto-bids` | `app/(backoffice)/tbo-06-auto-bids.tsx` | Implemented |
| v7 BO approval detail | v7 | buyer | `/backoffice/tbo-07-approvals` | `app/(backoffice)/tbo-07-approvals.tsx` | Implemented |
| v7 BO approvals | v7 | buyer | `/backoffice/tbo-08-approval-list` | `app/(backoffice)/tbo-08-approval-list.tsx` | Implemented |
| TBO-09 Finance | v3 | buyer | `/backoffice/tbo-09-finance` | `app/(backoffice)/tbo-09-finance.tsx` | Implemented |
| TBO-10 Mandates | v4 | buyer | `/backoffice/tbo-10-mandates` | `app/(backoffice)/tbo-10-mandates.tsx` | Implemented |
| TBO-11 Processor | v4 | buyer | `/backoffice/tbo-11-processor` | `app/(backoffice)/tbo-11-processor.tsx` | Implemented |
| TBO-12 Team | v3 | buyer | `/backoffice/tbo-12-team` | `app/(backoffice)/tbo-12-team.tsx` | Implemented |
| TBO-13 QC | v3 | buyer | `/backoffice/tbo-13-qc` | `app/(backoffice)/tbo-13-qc.tsx` | Implemented |
| TBO-14 Logistics | v3 | buyer | `/backoffice/tbo-14-logistics` | `app/(backoffice)/tbo-14-logistics.tsx` | Implemented |
| TBO-15 Disputes | v3 | buyer | `/backoffice/tbo-15-disputes` | `app/(backoffice)/tbo-15-disputes.tsx` | Implemented |
| TBO-16 Contracts | v3 | buyer | `/backoffice/tbo-16-contracts` | `app/(backoffice)/tbo-16-contracts.tsx` | Implemented |
| TBO-17 Assignments | v5 | buyer | `/backoffice/tbo-17-assignments` | `app/(backoffice)/tbo-17-assignments.tsx` | Implemented |
| TBO-18 Settings | v4 | buyer | `/backoffice/tbo-18-settings` | `app/(backoffice)/tbo-18-settings.tsx` | Implemented |
| TBO-19 Empty | v3 | buyer | `/backoffice/tbo-19-empty` | `app/(backoffice)/tbo-19-empty.tsx` | Implemented |
| TBO-20 Audit | v7 | buyer | `/backoffice/tbo-20-audit` | `app/(backoffice)/tbo-20-audit.tsx` | Implemented |
| TRB-01 Fleet | v3 | transport | `/backoffice/trb-01-fleet` | `app/(backoffice)/trb-01-fleet.tsx` | Implemented |
| TRB-02 Trips | v3 | transport | `/backoffice/trb-02-trips` | `app/(backoffice)/trb-02-trips.tsx` | Implemented |
| TRB-03 Quotes | v3 | transport | `/backoffice/trb-03-quotes` | `app/(backoffice)/trb-03-quotes.tsx` | Implemented |
| TRB-04 Drivers | v3 | transport | `/backoffice/trb-04-drivers` | `app/(backoffice)/trb-04-drivers.tsx` | Implemented |
| TRB-05 Permits | v3 | transport | `/backoffice/trb-05-permits` | `app/(backoffice)/trb-05-permits.tsx` | Implemented |
| TRB-06 Earnings | v3 | transport | `/backoffice/trb-06-earnings` | `app/(backoffice)/trb-06-earnings.tsx` | Implemented |
| TRB-07 Issues | v3 | transport | `/backoffice/trb-07-issues` | `app/(backoffice)/trb-07-issues.tsx` | Implemented |
| TRB-08 Settings | v3 | transport | `/backoffice/trb-08-settings` | `app/(backoffice)/trb-08-settings.tsx` | Implemented |
| SBO-01 Overview | v3 | storage | `/backoffice/sbo-01-overview` | `app/(backoffice)/sbo-01-overview.tsx` | Implemented |
| SBO-02 Requests | v3 | storage | `/backoffice/sbo-02-requests` | `app/(backoffice)/sbo-02-requests.tsx` | Implemented |
| SBO-03 Inventory | v3 | storage | `/backoffice/sbo-03-inventory` | `app/(backoffice)/sbo-03-inventory.tsx` | Implemented |
| SBO-04 Rent | v3 | storage | `/backoffice/sbo-04-rent` | `app/(backoffice)/sbo-04-rent.tsx` | Implemented |
| SBO-05 Liens | v3 | storage | `/backoffice/sbo-05-liens` | `app/(backoffice)/sbo-05-liens.tsx` | Implemented |
| SBO-06 Temperature | v3 | storage | `/backoffice/sbo-06-temperature` | `app/(backoffice)/sbo-06-temperature.tsx` | Implemented |
| SBO-07 Finance | v3 | storage | `/backoffice/sbo-07-finance` | `app/(backoffice)/sbo-07-finance.tsx` | Implemented |
| SBO-08 Team | v3 | storage | `/backoffice/sbo-08-team` | `app/(backoffice)/sbo-08-team.tsx` | Implemented |
| SBO-09 Settings | v3 | storage | `/backoffice/sbo-09-settings` | `app/(backoffice)/sbo-09-settings.tsx` | Implemented |
| SBO-10 Empty | v3 | storage | `/backoffice/sbo-10-empty` | `app/(backoffice)/sbo-10-empty.tsx` | Implemented |
| YRB-01 Overview | v3 | yard | `/backoffice/yrb-01-overview` | `app/(backoffice)/yrb-01-overview.tsx` | Implemented |
| YRB-02 District | v3 | yard | `/backoffice/yrb-02-district` | `app/(backoffice)/yrb-02-district.tsx` | Implemented |
| YRB-03 State | v3 | yard | `/backoffice/yrb-03-state` | `app/(backoffice)/yrb-03-state.tsx` | Implemented |
| YRB-04 Compliance | v3 | yard | `/backoffice/yrb-04-compliance` | `app/(backoffice)/yrb-04-compliance.tsx` | Implemented |
| v7 admin auction settings | v7 | yard | `/backoffice/yrb-05-auction-settings` | `app/(backoffice)/yrb-05-auction-settings.tsx` | Implemented |
| v6 yard master | v6 | yard | `/backoffice/yrb-06-yard-master` | `app/(backoffice)/yrb-06-yard-master.tsx` | Implemented |
| v6 admin dashboard | v6 | admin | `/backoffice/bo-01-dashboard` | `app/(backoffice)/bo-01-dashboard.tsx` | Implemented |
| BO-02 Users | v3 | admin | `/backoffice/bo-02-users` | `app/(backoffice)/bo-02-users.tsx` | Implemented |
| BO-03 Roles | v3 | admin | `/backoffice/bo-03-roles` | `app/(backoffice)/bo-03-roles.tsx` | Implemented |
| BO-04 Role templates | v3 | admin | `/backoffice/bo-04-role-templates` | `app/(backoffice)/bo-04-role-templates.tsx` | Implemented |
| BO-05 KYC queue | v3 | admin | `/backoffice/bo-05-kyc-queue` | `app/(backoffice)/bo-05-kyc-queue.tsx` | Implemented |
| BO-06 KYC detail | v3 | admin | `/backoffice/bo-06-kyc-detail` | `app/(backoffice)/bo-06-kyc-detail.tsx` | Implemented |
| BO-07 Orgs | v3 | admin | `/backoffice/bo-07-orgs` | `app/(backoffice)/bo-07-orgs.tsx` | Implemented |
| BO-08 Entities | v3 | admin | `/backoffice/bo-08-entities` | `app/(backoffice)/bo-08-entities.tsx` | Implemented |
| BO-09 Disputes | v3 | admin | `/backoffice/bo-09-disputes` | `app/(backoffice)/bo-09-disputes.tsx` | Implemented |
| BO-10 Dispute detail | v3 | admin | `/backoffice/bo-10-dispute-detail` | `app/(backoffice)/bo-10-dispute-detail.tsx` | Implemented |
| BO-11 Rectification | v3 | admin | `/backoffice/bo-11-rectification` | `app/(backoffice)/bo-11-rectification.tsx` | Implemented |
| v5 AI decision log | v5 | admin | `/backoffice/bo-12-ai-log` | `app/(backoffice)/bo-12-ai-log.tsx` | Implemented |
| BO-13 Ledger correction | v3 | admin | `/backoffice/bo-13-ledger-correction` | `app/(backoffice)/bo-13-ledger-correction.tsx` | Implemented |
| BO-14 Audit trail | v3 | admin | `/backoffice/bo-14-audit-trail` | `app/(backoffice)/bo-14-audit-trail.tsx` | Implemented |
| BO-15 Broadcast | v3 | admin | `/backoffice/bo-15-broadcast` | `app/(backoffice)/bo-15-broadcast.tsx` | Implemented |
| BO-16 Fees | v3 | admin | `/backoffice/bo-16-fees` | `app/(backoffice)/bo-16-fees.tsx` | Implemented |
| BO-17 Coins | v3 | admin | `/backoffice/bo-17-coins` | `app/(backoffice)/bo-17-coins.tsx` | Implemented |
| v5 Grok integration | v5 | admin | `/backoffice/bo-18-integrations` | `app/(backoffice)/bo-18-integrations.tsx` | Implemented |
| BO-19 System | v3 | admin | `/backoffice/bo-19-system` | `app/(backoffice)/bo-19-system.tsx` | Implemented |
| BO-20 Tickets | v3 | admin | `/backoffice/bo-20-tickets` | `app/(backoffice)/bo-20-tickets.tsx` | Implemented |
| BO-21 Reports | v3 | admin | `/backoffice/bo-21-reports` | `app/(backoffice)/bo-21-reports.tsx` | Implemented |
| v6 commodity master | v6 | admin | `/backoffice/bo-22-commodity-master` | `app/(backoffice)/bo-22-commodity-master.tsx` | Implemented |
| v6 cotton master | v6 | admin | `/backoffice/bo-23-cotton-master` | `app/(backoffice)/bo-23-cotton-master.tsx` | Implemented |
| v6 add variety | v6 | admin | `/backoffice/bo-24-add-variety` | `app/(backoffice)/bo-24-add-variety.tsx` | Implemented |
| v6 yard master | v6 | admin | `/backoffice/bo-25-yard-master` | `app/(backoffice)/bo-25-yard-master.tsx` | Implemented |
| v6 yard detail | v6 | admin | `/backoffice/bo-26-yard-detail` | `app/(backoffice)/bo-26-yard-detail.tsx` | Implemented |
| v6 payment rules config | v6 | admin | `/backoffice/bo-27-payment-rules` | `app/(backoffice)/bo-27-payment-rules.tsx` | Implemented |
| v6 waivers audit | v6 | admin | `/backoffice/bo-28-waiver-audit` | `app/(backoffice)/bo-28-waiver-audit.tsx` | Implemented |
| v7 auction settings | v7 | admin | `/backoffice/bo-29-auction-settings` | `app/(backoffice)/bo-29-auction-settings.tsx` | Implemented |
| v7 admin live autobid | v7 | admin | `/backoffice/bo-30-live-auto-bids` | `app/(backoffice)/bo-30-live-auto-bids.tsx` | Implemented |
| v5 fraud anomaly | v5 | admin | `/backoffice/bo-31-fraud-flags` | `app/(backoffice)/bo-31-fraud-flags.tsx` | Implemented |
| v5 flow weighment | v5 | admin | `/backoffice/bo-32-flows-weighment` | `app/(backoffice)/bo-32-flows-weighment.tsx` | Implemented |
| v6 flow interest | v6 | admin | `/backoffice/bo-33-flows-interest` | `app/(backoffice)/bo-33-flows-interest.tsx` | Implemented |
| v7 flow auction | v7 | admin | `/backoffice/bo-34-flows-auction` | `app/(backoffice)/bo-34-flows-auction.tsx` | Implemented |
| v6 flow masters | v6 | admin | `/backoffice/bo-35-flows-masters` | `app/(backoffice)/bo-35-flows-masters.tsx` | Implemented |

## Intentionally not a product screen

| Frame | Reason |
|---|---|
| Contract registry / TRDToken | Blockchain console. The lot token is a user-facing id, not a chain mint. |
| Network infrastructure / sync height | Same. Not a stakeholder screen. |
| NFT lot minting, smart-contract bill discounting | Out of the Rytuvo user scope. Bill discounting is a request record only. |
| Multimodal / air freight planners | Not used for these yards. |
| Consumer advertising portals | Outside the B2B market. |
| Dropdown component set (v6) | Built as `BottomSheetPicker` in the design system, not a route. |

## Counts

| Kind | Stakeholder | Screens |
|---|---|---|
| desktop | admin | 35 |
| desktop | agent | 14 |
| desktop | buyer | 20 |
| desktop | storage | 10 |
| desktop | transport | 8 |
| desktop | yard | 6 |
| mobile | admin | 14 |
| mobile | agent | 51 |
| mobile | bank | 18 |
| mobile | buyer | 74 |
| mobile | inspector | 16 |
| mobile | insurance | 18 |
| mobile | lab | 8 |
| mobile | onboarding | 32 |
| mobile | producer | 92 |
| mobile | seller | 12 |
| mobile | service | 10 |
| mobile | shared | 16 |
| mobile | storage | 24 |
| mobile | transport | 24 |
| mobile | verifier | 8 |
| mobile | yard | 18 |

Mobile 435 · desktop 93.
