# 1Tradie → Rytuvo producer cross-check (v1.2.0)

Source: `chandra721205/1tradie` producer flow as used in TRADIE-unified 1Tradie mode (`ProducerMasterFlowNavigator.live.tsx`, 26 stages, 8 phases). Fields were extracted by `scripts/extract_1tradie.py` into `src/oneTradie/stages.json` and run in the app at `/producer/1t/<stage>` (entry: Producer journey → "Full 1Tradie producer flow", or All screens → producer).

Order and branching are kept as in 1Tradie: Store → Storage → Complete; Sell → Marketplace → Matchmaking → Commission agent → Buyer verification → Order confirmation → Market & auction → Transport → Destination → Weighing → Complete. Optional stages can be skipped as in 1Tradie.

| # | 1Tradie stage | Phase | 1Tradie source | 1Tradie fields kept | Existing Rytuvo screens | Rytuvo additions / sync |
|---|---|---|---|---|---|---|
| 1 | Dashboard | setup | ../ProducerAIDashboardComplete.tsx | — (display/AI screen, no form) | P-01 / P-100 | Ask Grok, market prices |
| 2 | Producer Profile | setup | ProducerProfile.tsx | Full Name, Email, Village, Pincode | P-16, P-17, P-101 | producer type → shared trade; consents link (P-116) |
| 3 | Crop Selection | farm | CropSelectionWithAI.tsx | Soil Type, Water Availability, Location, Previous Crop, Variety, Irrigation Schedule, Fertilizers Used, Pesticides Used, Harvesting Method, Select soil type, Select water source, e.g., Wheat, e.g., HD-2967, e.g., Weekly | P-21 |  |
| 4 | Log Activities | farm | ActivityLoggerEnhanced.tsx | Ploughing Method, Sowing Method, Seed Variety, Seed Source, Irrigation Type, Water Volume, Fertilizer Type, N (%), P (%), K (%), Product Name, Dosage, Application Method, Pesticide Type | P-23, P-24 |  |
| 5 | Input & Cost | farm | InputCostTrackerEnhanced.tsx | View Date, Product Name, Category, Quantity Purchased, Unit, Price per Unit (₹), Purchase Date, Supplier, Upload Invoice/Receipt, Notes, Activity Name, Activity Type, Date, Total Expense Amount (₹) | P-25, P-26 |  |
| 6 | Crop Lifecycle | farm | CropJournalingTokenization.tsx | — (1Tradie screen is a "Coming Soon" stub) | P-22 |  |
| 7 | Crop Health & AI | farm | CropHealthMonitor.tsx | Select | P-56 |  |
| 8 | Harvest & Listing | harvest | HarvestCommodityListing.tsx | — (1Tradie screen is a "Coming Soon" stub) | P-27, P-28 |  |
| 9 | Lot Management | harvest | CreateLotWorkflow.tsx | Quantity, Unit, Description (Optional), Moisture Content (%), Purity (%), Foreign Matter (%), Broken Grains (%), Enter quantity, Add notes about this lot, e.g., 12, e.g., 98, e.g., 2, e.g., 5, Select | P-05, P-90, P-91 | commodity/variety/yard dropdowns, bags, kg/bag, offer + hidden stop-loss → creates the shared lot (agent notified) |
| 10 | Sampling & Quality | quality | SamplingQualityCheck.tsx | — (1Tradie screen is a "Coming Soon" stub) | P-30, P-47 | withdraw link (allowed until sampling & sale) |
| 11 | AI Quality Check | quality | EnhancedQualityCheckWithAI.tsx | Size, Color, Quality, Moisture, Freshness, Select | P-104 |  |
| 12 | Grading | quality | GradingCompletionScreen.tsx | — (display/AI screen, no form) | P-105 | final grade → sampling done (withdraw blocked after sale) |
| 13 | QR & Provenance | quality | ProvenanceTracker.tsx | Select Variety/Subtype, Custom Variety Name, Crop Batch ID (will be generated), Harvest Date, Location, Harvest Method * (select all that apply), Quantity, Unit, Weather Conditions, Soil Conditions, Notes (optional), Verification Type, Verifier Name, Rating (out of 5) | P-34 |  |
| 14 | Tokenization | quality | LotCreationTokenizationWorkflow.tsx | Batch/Harvest, Grade, Quantity, Unit, Certificate Name, Certificate Type, Notes (Optional), Select a batch, Select grade, e.g., Organic Certification, Select type, Additional notes..., Select a tokenized lot, Select | P-31, P-32 |  |
| 15 | Store or Sell | decision | StorageSellDecisionScreen.tsx | — (display/AI screen, no form) | P-35 | Store/Sell dropdown drives the branch |
| 16 | Storage | decision | EnhancedStorageSelectionScreen.tsx | Search facilities..., Punjab Agri Warehouse, Green Valley Warehouse, Arctic Cold Storage, FreshKeep Cold Storage, Farm Direct Storage Hub, Farmers Collective Storage, Modern Grain Silos, Select | P-44–P-46, P-115 | storage loan + OTP settlement link (P-115) |
| 17 | Marketplace | selling | MarketplaceAgentBrowsingScreen.tsx | Min Rating, Specialty, Distance, Punjab Mandi, Green Valley Market, Farmer\, Rajesh Sharma, Amit Singh, Select | P-14 |  |
| 18 | Matchmaking | selling | MatchmakingScreen.tsx | Match Type, Transaction History, Maharashtra Grains Co., Punjab Agricultural Traders, Karnataka Quality Lots, Gujarat Commodity Exchange | P-102 |  |
| 19 | Commission Agent | selling | CommissionAgentEngagementScreen.tsx | Enter OTP, Enter 6-digit OTP | P-103 | commission % (≤5% cap) + OTP → engages agent |
| 20 | Buyer Verification | selling | BuyerVerificationView.tsx | Enter Token ID or Batch ID, Premium Wheat, Rajesh Kumar, Quality Certificate, Organic Certification, Lab Test Report | P-34 (token) |  |
| 21 | Order Confirmation | selling | OrderConfirmationVerificationScreen.tsx | Enter OTP, Enter 6-digit OTP | P-106 |  |
| 22 | Market & Auction | transaction | MarketDisplayAuction.tsx | — (display/AI screen, no form) | P-06, P-84, P-107 | live bids from buyers; sale OTP confirms sale; withdraw link |
| 23 | Transport | transaction | TransportBooking.tsx | Vehicle Number, Driver Mobile, Route, Pickup Date, Pickup Time, Expected Delivery, PB-01-AB-1234, +91-98765-43210, Select, OTP | P-42, P-43 |  |
| 24 | Destination | transaction | DestinationReceiving.tsx | Full Name, Employee/Agent ID, Mobile Number, Role, Issue Type, Affected Bags, Detailed Description, Upload Photos, Assign Storage Location, Enter your full name, Enter your ID, +91-98765-43210, Describe the damage or issue in detail..., e.g., Warehouse A, Section 2, Row 5 | P-108, P-109 |  |
| 25 | Weighing & Settlement | transaction | WeighingConfirmation.tsx | — (display/AI screen, no form) | P-76, P-81, P-112 | patti OTP accepts deductions; later payout consent (P-117) |
| 26 | Complete | complete | CompletionScreen.tsx | — (display/AI screen, no form) | P-111 | advance recovery (P-110), summary |

## Findings

- 3 1Tradie stages are "Coming Soon" stubs (Crop Lifecycle, Harvest & Listing, Sampling & Quality); Rytuvo fills them with real fields (crop stage, harvest date/qty/moisture, sample bags/sampler/moisture).
- Several 1Tradie stages (Dashboard, Grading, Store/Sell, Market & Auction, Weighing, Complete) have no form in 1Tradie; Rytuvo adds the minimal fields needed to drive the shared trade (grade, path choice, sale OTP, patti OTP).
- 1Tradie Order Confirmation sits before Market & Auction; kept as is. Its OTP is the order confirmation; the binding sale OTP is taken at Market & Auction after the agent closes the auction as sold.
- 1Tradie had no hidden stop-loss, storage loan settlement, consents, withdraw, patti deductions or buyer back-out; these Rytuvo-only features are kept and linked from the matching 1Tradie stage.
- 1Tradie never charged commission explicitly; Rytuvo applies the producer-pays commission (cap 5%, negotiable) per your answers.
- Field extraction is label/placeholder/dropdown based. Purely visual widgets (charts, maps, photo/video capture, QR rendering) in 1Tradie are not reproduced as forms.

## Navigation & sync (v1.2.0)

- Every catalog screen now has a footer with previous / All screens / next for its stakeholder, plus back and tabs; `/menu/<stakeholder>` lists every screen. `src/screens/routeGraph.test.ts` fails on broken links, dead ends or orphans (was 423 unreachable screens and 6 broken links in 1.1.0).
- Shared offline store: lot → agent incoming → publish → buyer bid (reserve hidden, "Bid not accepted") → live bids on producer screens → sold → sale OTP → weighment OTP → patti OTP → producer paid (advance recovered) → e-way bill → lifting OTP → buyer payment (15-day / 21% rule), with notifications to the other roles on their home screens. `src/state/tradeE2E.test.ts` runs one full trade.
