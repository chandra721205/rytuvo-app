#!/usr/bin/env python3
"""Generate the screen catalog, expo-router routes, and SCREEN_MAP.md."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "app"
OUT = ROOT / "src" / "screens" / "catalog.ts"
MAP = ROOT / "SCREEN_MAP.md"

screens: list[dict] = []


def slugify(title: str) -> str:
    text = title.lower()
    text = text.replace("&", " and ")
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text[:42] or "screen"


def add(prefix: str, number: int, title: str, title_te: str, template: str, summary: str, summary_te: str, stakeholder: str, group: str, **extra) -> None:
    sid = f"{prefix}-{number:02d}"
    slug = f"{sid.lower()}-{slugify(title)}"
    kind = extra.pop("kind", "mobile")
    version = extra.pop("version", "v3")
    nav = extra.pop("nav", stakeholder if kind == "mobile" else f"bo-{stakeholder}")
    route = f"/{group}/{slug}"
    file = f"app/({group})/{slug}.tsx"
    screens.append(
        {
            "id": sid,
            "figmaFrame": extra.pop("figmaFrame", f"{sid} {title}"),
            "version": version,
            "title": title,
            "titleTe": title_te,
            "summary": summary,
            "summaryTe": summary_te,
            "stakeholder": stakeholder,
            "nav": nav,
            "group": group,
            "slug": slug,
            "route": route,
            "file": file,
            "kind": kind,
            "template": template,
            **extra,
        }
    )


def S(label: str, label_te: str, value: str) -> dict:
    return {"label": label, "labelTe": label_te, "value": value}


def I(title: str, title_te: str, subtitle: str, meta: str = "", badge: str = "", tone: str = "info") -> dict:
    row = {"title": title, "titleTe": title_te, "subtitle": subtitle}
    if meta:
        row["meta"] = meta
    if badge:
        row["badge"] = badge
        row["tone"] = tone
    return row


LOT_ITEMS = [
    I("Teja · Grade A", "తేజ · గ్రేడ్ A", "Guntur · 42 bags · 1,680 kg", "₹22,400/q", "Bidding", "info"),
    I("Guntur Sannam S17", "గుంటూరు సన్నం", "Weighment · 12 bags", "TKN-…C4E19B02", "Weighment", "warning"),
    I("Bunny cotton", "బన్నీ పత్తి", "Warangal · 20 bales", "₹71,500/q", "Listed", "gold"),
    I("Nizamabad turmeric", "నిజామాబాద్ పసుపు", "30 bags · finger", "₹16,200/q", "Bidding", "info"),
    I("BPT 5204 paddy", "బిపిటి వరి", "Kurnool · billed", "TRD-2026-004218", "Billed", "success"),
]

FARMER_ITEMS = [
    I("Ramesh Naidu Kotha", "రమేష్ నాయుడు", "Tadepalli · chilli, cotton, turmeric", "3 lots", "Linked", "success"),
    I("Lakshmi farm", "లక్ష్మి పొలం", "Tenali · paddy", "1 lot", "Invited", "warning"),
    I("Srinivas Reddy", "శ్రీనివాస్ రెడ్డి", "Sattenapalle · chilli", "2 lots", "Linked", "success"),
]

TASK_ITEMS = [
    I("Bag B-03 mismatch", "B-03 తేడా", "1.8 kg between the two phones", "09:48", "Dispute", "danger"),
    I("Buyer A is above reserve", "రిజర్వ్ పైన", "₹22,150/q · identity masked", "10:12", "Bid", "success"),
    I("Interest on TRD-2026-004218", "వడ్డీ", "15 days late on the balance", "08:00", "Due", "warning"),
]


def block(prefix, stakeholder, group, rows, **common):
    for index, row in enumerate(rows, start=1):
        title, te, template, summary, te_summary = row[:5]
        extra = dict(row[5]) if len(row) > 5 else {}
        extra.update({k: v for k, v in common.items() if k not in extra})
        add(prefix, index, title, te, template, summary, te_summary, stakeholder, group, **extra)


# --- Onboarding ---
block(
    "OB",
    "onboarding",
    "onboarding",
    [
        ("Splash", "స్వాగతం", "splash", "Rytuvo opens on the cream canvas with the field-green mark.", "రైతువో స్వాగతం.", {"hideNav": True, "version": "v1"}),
        ("Language", "భాష", "language", "English or Telugu for this phone. The choice follows every screen.", "ఇంగ్లీష్ లేదా తెలుగు.", {"hideNav": True, "version": "v6", "figmaFrame": "v6 language bottom sheet"}),
        ("Mobile number", "మొబైల్ నంబర్", "phone", "Enter the 10-digit number. Demo phones are listed on the splash.", "10 అంకెల నంబర్.", {"hideNav": True, "version": "v1"}),
        ("Verify OTP", "OTP", "otp", "Six digits. The demo code is 123456 and is labelled DEV ONLY.", "ఆరు అంకెలు. డెమో 123456.", {"hideNav": True, "version": "v1", "primary": {"label": "Continue", "labelTe": "కొనసాగండి", "to": "/onboarding/ob-05-choose-role"}}),
        ("Choose role", "పాత్ర", "roles", "The platform assigns the organisation type. You can add roles later.", "సంస్థ రకం ప్లాట్‌ఫాం ఇస్తుంది.", {"hideNav": True, "version": "v1"}),
        ("Profile", "ప్రొఫైల్", "form", "Name, village and language. Producer Ramesh Naidu Kotha is the sample.", "పేరు, ఊరు, భాష.", {"hideNav": True}),
        ("KYC levels", "కేవైసీ స్థాయులు", "kyc", "Minimum KYC lets you look. Higher tiers unlock payments and advances.", "కనీస కేవైసీ చూడటానికి. పై స్థాయి చెల్లింపులకు.", {"mode": "levels"}),
        ("Aadhaar", "ఆధార్", "kyc", "Upload the identity document. This demo stores nothing off the phone.", "గుర్తింపు పత్రం.", {"mode": "identity"}),
        ("Selfie check", "సెల్ఫీ", "kyc", "Face check is a guided step. It does not call a live verifier.", "ముఖం తనిఖీ దశ.", {"mode": "selfie"}),
        ("Bank and PAN", "బ్యాంక్ మరియు పాన్", "kyc", "Account name Ramesh Naidu Kotha. Used only as a record.", "ఖాతా పేరు రమేష్ నాయుడు.", {"mode": "bank"}),
        ("Business type", "వ్యాపార రకం", "form", "Individual, family, partnership or company. Sets the org shell.", "వ్యక్తి, కుటుంబం, భాగస్వామ్యం లేదా కంపెనీ."),
        ("Verification pending", "వేచి ఉంది", "kyc", "KYC reviewer Kavya sees this queue. Reviewers cannot approve themselves.", "సమీక్షకుడు తన కేవైసీని ఆమోదించలేరు.", {"mode": "pending"}),
        ("Org approved", "సంస్థ ఆమోదం", "detail", "Anitha approved Kotha Farm as a producer organisation.", "కొత్త పొలం రైతు సంస్థగా ఆమోదం.", {"items": [I("Status", "స్థితి", "Approved", "", "Live", "success")]}),
        ("Welcome bonus", "స్వాగత బోనస్", "detail", "250 Rytuvo Coins after OTP and profile. Coins are not money.", "250 నాణేలు. ఇవి డబ్బు కాదు.", {"items": [I("WELCOME_BONUS", "స్వాగతం", "250 coins", "", "Once", "gold")]}),
        ("Welcome 1", "పరిచయం 1", "flow", "Sell, weigh and get paid with both phones in the same yard.", "అమ్మండి, తూకం వేయండి, చెల్లింపు పొందండి.", {"notes": ["Create a lot token", "Set a hidden reserve", "Weigh bag by bag"], "hideNav": True}),
        ("Welcome 2", "పరిచయం 2", "flow", "Commission agents, buyers and yards share one record.", "ఏజెంట్, కొనుగోలుదారు, యార్డు ఒకే రికార్డు.", {"notes": ["Masked bidder letters", "OTP on both sides", "Interest only after day 15"], "hideNav": True}),
        ("Welcome 3", "పరిచయం 3", "flow", "Telugu and English. AI suggests. People confirm money.", "తెలుగు మరియు ఇంగ్లీష్. AI సూచిస్తుంది.", {"notes": ["Suggestions show confidence", "No automatic payments", "Owner sets limits"], "hideNav": True}),
        ("Welcome back", "మళ్ళీ స్వాగతం", "phone", "Returning users start from the mobile number.", "తిరిగి వచ్చినవారు నంబర్ నుండి.", {"hideNav": True}),
        ("Recover account", "ఖాతా పునరుద్ధరణ", "phone", "Recovery sends a fresh OTP to the same phone.", "అదే ఫోన్‌కు కొత్త OTP.", {"hideNav": True}),
        ("Add more roles", "మరిన్ని పాత్రలు", "roles", "A person may belong to several orgs. One role per org.", "ఒక సంస్థలో ఒక పాత్ర."),
        ("Permissions", "అనుమతులు", "detail", "Location, alerts and camera are requested with a reason.", "స్థానం, అలర్ట్, కెమెరా కారణంతో.", {"items": [I("Alerts", "అలర్ట్లు", "Bids, weighment, interest", "", "Ask", "info"), I("Location", "స్థానం", "Yard gate and plots", "", "Ask", "info"), I("Camera", "కెమెరా", "Bags, samples, KYC", "", "Ask", "info")]}),
        ("Address", "చిరునామా", "form", "Ganesh Nagar, Tadepalli, Guntur district.", "గణేష్ నగర్, తాడేపల్లి, గుంటూరు."),
        ("KYC upgrade", "కేవైసీ అప్‌గ్రేడ్", "form", "Higher tier is a record in this demo, not a card charge.", "ఈ డెమోలో చెల్లింపు లేదు."),
        ("Commodities and yards", "సరుకులు మరియు యార్డులు", "cascade", "Pick what you grow and where you sell. Guntur, Warangal, Nizamabad, Kurnool, Unjha, Rajkot.", "ఏమి పండిస్తారు, ఎక్కడ అమ్ముతారు.", {"version": "v6", "figmaFrame": "v6 onboarding commodities and yards"}),
        ("Yard cascade", "యార్డు ఎంపిక", "cascade", "State, then district, then yard. The sheet is the dropdown.", "రాష్ట్రం, జిల్లా, యార్డు.", {"version": "v6", "figmaFrame": "v6 yard cascading open"}),
        ("KYC trader", "వ్యాపారి కేవైసీ", "kyc", "Trader purpose needs an APMC or trader licence and GSTIN.", "వ్యాపారికి లైసెన్స్ మరియు GSTIN.", {"mode": "purpose", "version": "v4"}),
        ("KYC transporter", "రవాణా కేవైసీ", "kyc", "Vehicle, permit and driver licence for Durga Roadlines.", "వాహనం, పర్మిట్, లైసెన్స్.", {"mode": "identity"}),
        ("KYC inspector", "తనిఖీ కేవైసీ", "kyc", "Lab head approves the inspector before jobs are assigned.", "ల్యాబ్ హెడ్ ఆమోదం తర్వాత పనులు.", {"mode": "pending"}),
        ("KYC storage", "నిల్వ కేవైసీ", "kyc", "Warehouse licence and chamber list for Guntur Cold Storage.", "గోడౌన్ లైసెన్స్ మరియు చాంబర్లు.", {"mode": "address"}),
        ("KYC bank", "బ్యాంక్ కేవైసీ", "kyc", "NBFC or bank staff are approved by the platform, not self-assigned.", "బ్యాంక్ సిబ్బందిని ప్లాట్‌ఫాం ఆమోదిస్తుంది.", {"mode": "pending"}),
        ("KYC insurance", "బీమా కేవైసీ", "kyc", "Underwriter, surveyor and claims officer are separate duties.", "అండర్‌రైటర్, సర్వేయర్, క్లెయిమ్స్ విడివిడిగా.", {"mode": "levels"}),
        ("Buyer purposes", "కొనుగోలు ఉద్దేశాలు", "purposes", "Trader, processor and sourcing agent. Each purpose is verified on its own.", "వ్యాపారి, ప్రాసెసర్, సోర్సింగ్. ప్రతి దానికి వేరు కేవైసీ.", {"version": "v4", "figmaFrame": "v6 buyer purpose multiselect", "hideNav": True}),
    ],
)

# --- Producer ---
block(
    "P",
    "producer",
    "producer",
    [
        ("Home", "హోమ్", "dashboard", "Good morning, Ramesh. Teja is in auction at Guntur until 23:50.", "శుభోదయం రమేష్. తేజ వేలం 23:50 వరకు.", {"stats": [S("Modal", "మోడల్", "₹21,600"), S("Offer", "ఆఫర్", "₹22,400"), S("Reserve", "రిజర్వ్", "Hidden")], "items": TASK_ITEMS, "version": "v1"}),
        ("Farm and plots", "పొలాలు", "list", "Three plots around Tadepalli. North field is in Teja.", "తాడేపల్లి చుట్టూ మూడు ప్లాట్లు.", {"items": [I("North field", "ఉత్తర పొలం", "1.8 acres · Teja", "Flowering", "Live", "success"), I("Tank plot", "చెరువు ప్లాట్", "1.1 acres · fallow", "", "Empty", "warning"), I("East plot", "తూర్పు ప్లాట్", "2.0 acres · BPT 5204", "Harvested", "Done", "info")]}),
        ("Crop cycle", "పంట చక్రం", "list", "Teja timeline: nursery, transplant, flowering, harvest.", "తేజ దశలు.", {"items": [I("Transplant", "నాటు", "12 Aug · 4 workers", "", "Done", "success"), I("Flowering spray", "పూత స్ప్రే", "2 Oct · Ravi Sprayers", "", "Done", "success"), I("Harvest", "కోత", "8 Oct · 42 bags", "", "Token", "gold")]}),
        ("Today", "ఈ రోజు", "list", "What needs Ramesh before the yard closes.", "యార్డు మూసేలోపు పనులు.", {"items": TASK_ITEMS}),
        ("Create listing", "లిస్టింగ్", "form", "Path A is direct. Path B is via Venkata Rao. One open listing per token.", "నేరుగా లేదా ఏజెంట్ ద్వారా.", {"version": "v1"}),
        ("Live bids", "ప్రత్యక్ష బిడ్లు", "auction", "Bidders are A, B and C. The reserve stays on this phone.", "బిడ్డర్లు A, B, C. రిజర్వ్ ఈ ఫోన్‌లో.", {"mode": "bids", "version": "v1"}),
        ("Negotiation", "చర్చ", "chat", "Counter at ₹22,200. Both sides still need a sale OTP.", "₹22,200 కౌంటర్. ఇరువైపుల OTP.", {"items": [I("You", "మీరు", "Can you do ₹22,300 for the full lot?", "10:40", "", "info"), I("Agent", "ఏజెంట్", "Buyer A is at ₹22,150. Identity stays masked.", "10:44", "", "info")]}),
        ("Sale OTP", "అమ్మకం OTP", "otp", "Seller OTP confirms the deal. The buyer confirms on their phone.", "అమ్మకపు OTP. కొనుగోలుదారు వారి ఫోన్‌లో.", {"primary": {"label": "Confirm sale", "labelTe": "అమ్మకం నిర్ధారణ", "to": "/producer/p-40-settlement"}}),
        ("Deal", "ఒప్పందం", "detail", "Teja, 1,680 kg, offered at ₹22,400/q. Not closed yet.", "తేజ ఇంకా ముగియలేదు.", {"items": [I("Token", "టోకెన్", "TKN-20261011-8F3A21C9"), I("Close", "ముగింపు", "23:50 IST"), I("Free cancel", "ఉచిత రద్దు", "20 minutes after both OTPs")]}),
        ("Quality result", "నాణ్యత ఫలితం", "detail", "Moisture 9.4%. Grade A stands. You see the result, you do not sign QC.", "తేమ 9.4%. గ్రేడ్ A.", {"items": [I("Moisture", "తేమ", "9.4%"), I("Colour", "రంగు", "Deep red"), I("ASTA", "ASTA", "128")]}),
        ("Arrivals", "రాకలు", "list", "Gate slip is with yard clerk Srinu.", "గేట్ స్లిప్ క్లర్క్ శ్రీను వద్ద.", {"items": [I("Gate", "గేట్", "Guntur bay 4 · 09:10", "", "In", "success")]}),
        ("Payments", "చెల్లింపులు", "interest", "Open bills, partial NEFT, and interest on the balance.", "బిల్లులు, పాక్షిక NEFT, వడ్డీ.", {"mode": "ledger", "version": "v6", "permission": "payment.reconcile"}),
        ("Advances", "అడ్వాన్సులు", "list", "Agent advances need your OTP. The app does not move the money.", "అడ్వాన్సుకు మీ OTP. యాప్ డబ్బు కదపదు.", {"items": [I("On account", "ఖాతాలో", "₹50,000 requested by Prasad", "", "OTP", "warning")]}),
        ("Agent links", "ఏజెంట్ లింక్", "list", "Venkata Rao is linked. He may list on your behalf when you allow it.", "వెంకటరావు లింక్ అయ్యారు.", {"items": FARMER_ITEMS[:1]}),
        ("Coins", "నాణేలు", "detail", "Loyalty coins, not rupees. Welcome 250, plot 50, activity 25, sale closed 100.", "నాణేలు రూపాయలు కావు.", {"items": [I("Balance", "బ్యాలెన్స్", "325"), I("Next", "తర్వాత", "100 when the bill is reconciled")]}),
        ("Profile", "ప్రొఫైల్", "detail", "Ramesh Naidu Kotha · pattadar · Tadepalli.", "రమేష్ నాయుడు · పట్టాదారు.", {"items": [I("Phone", "ఫోన్", "+91 98480 12345"), I("Role", "పాత్ర", "PR_OWNER")]}),
        ("Edit profile", "ప్రొఫైల్ మార్పు", "form", "Village and preferred yard.", "ఊరు మరియు యార్డు."),
        ("Language", "భాష", "language", "Switch this phone between English and Telugu.", "ఇంగ్లీష్ మరియు తెలుగు."),
        ("Add plot", "ప్లాట్ జోడింపు", "form", "Name it, for example Tank bund south.", "పేరు పెట్టండి."),
        ("Plot detail", "ప్లాట్ వివరం", "detail", "North field, 1.8 acres, survey 214/B.", "ఉత్తర పొలం 1.8 ఎకరాలు.", {"items": [I("Survey", "సర్వే", "214/B"), I("Crop", "పంట", "Chilli Teja")]}),
        ("Assign crop", "పంట కేటాయింపు", "cascade", "Category, commodity, variety. Chilli → Teja.", "వర్గం, సరుకు, రకం."),
        ("Crop calendar", "పంట క్యాలెండర్", "list", "15 May nursery, 12 Aug transplant, 8 Oct harvest.", "నర్సరీ, నాటు, కోత.", {"items": [I("15 May", "15 మే", "Nursery"), I("12 Aug", "12 ఆగస్టు", "Transplant"), I("8 Oct", "8 అక్టోబర్", "Harvest")]}),
        ("Add activity", "పని జోడింపు", "form", "Irrigation, spray, labour. No future dates.", "నీరు, స్ప్రే, కూలీ. రాబోయే తేదీలు లేవు."),
        ("Activity detail", "పని వివరం", "detail", "Flowering spray on 2 Oct. Delete asks for a confirm.", "2 అక్టోబర్ స్ప్రే.", {"items": [I("Cost", "ఖర్చు", "₹1,800"), I("Who", "ఎవరు", "Ravi Sprayers")]}),
        ("Input cost", "ఇన్‌పుట్ ఖర్చు", "form", "Urea and plant protection against the plot.", "యూరియా మరియు మందు."),
        ("Labour", "కూలీ", "form", "Nagamma's picking day and wage.", "నాగమ్మ కూలీ."),
        ("Harvest batches", "కోత బ్యాచ్‌లు", "list", "One batch became token TKN-20261011-8F3A21C9.", "ఒక బ్యాచ్ టోకెన్ అయింది.", {"items": LOT_ITEMS}),
        ("Record harvest", "కోత నమోదు", "form", "Bags and estimated kg. The weighbridge is the legal weight.", "బ్యాగులు మరియు అంచనా కిలోలు."),
        ("Process and pack", "ప్యాక్", "form", "40 kg jute bags for chilli. Packing is its own bill line.", "40 కిలో బస్తాలు. ప్యాకింగ్ వేరు లైన్."),
        ("Self quality", "స్వీయ నాణ్యత", "form", "Your own moisture and colour before the lab.", "ల్యాబ్‌కు ముందు మీ తేమ, రంగు."),
        ("Create token", "టోకెన్", "form", "Token preview. This is a lot id, not a blockchain mint.", "టోకెన్ ఒక లాట్ ఐడి. బ్లాక్‌చెయిన్ కాదు."),
        ("Token created", "టోకెన్ సిద్ధం", "detail", "TKN-20261011-8F3A21C9 is ready to list.", "టోకెన్ లిస్ట్‌కు సిద్ధం.", {"items": [I("Token", "టోకెన్", "TKN-20261011-8F3A21C9", "", "Ready", "success")]}),
        ("My tokens", "నా టోకెన్లు", "list", "Every lot token from this farm.", "ఈ పొలం టోకెన్లు.", {"items": LOT_ITEMS}),
        ("Token detail", "టోకెన్ వివరం", "detail", "Provenance from plot to bag. Share does not reveal the reserve.", "ప్లాట్ నుండి బ్యాగు వరకు. రిజర్వ్ పంచరు.", {"items": [I("Plot", "ప్లాట్", "North field"), I("Variety", "రకం", "Teja"), I("Grade", "గ్రేడ్", "A")]}),
        ("Sell options", "అమ్మకం మార్గాలు", "list", "At the farm, via the commission agent, or store and sell.", "పొలంలో, ఏజెంట్ ద్వారా, లేదా నిల్వ.", {"items": [I("Path A", "మార్గం A", "You list"), I("Path B", "మార్గం B", "Venkata Rao lists"), I("Path C", "మార్గం C", "Cold store, sell later")]}),
        ("Preview listing", "లిస్టింగ్ మునుజూపు", "detail", "Chilli Teja, grade A, floor is the offer you publish.", "తేజ గ్రేడ్ A.", {"items": [I("Offer", "ఆఫర్", "₹22,400/q"), I("Bags", "బ్యాగులు", "42")]}),
        ("Listing published", "లిస్టింగ్ ప్రచురణ", "detail", "Buyers can browse. Your name stays masked.", "కొనుగోలుదారులు చూడగలరు. పేరు దాచబడింది.", {"items": [I("Link", "లింక్", "rytuvo://lot/TKN-20261011-8F3A21C9")]}),
        ("My listings", "నా లిస్టింగ్‌లు", "list", "Open, sold and stored lots.", "తెరిచిన, అమ్మిన, నిల్వ లాట్లు.", {"items": LOT_ITEMS}),
        ("Final offer", "చివరి ఆఫర్", "auction", "Buyer A is the high bid. You still choose.", "కొనుగోలుదారు A ఎక్కువ. నిర్ణయం మీది.", {"mode": "bids"}),
        ("Settlement", "సెటిల్‌మెంట్", "detail", "Commodity line is kg/100 × price per quintal. Packing is separate.", "సరుకు లైన్ కిలో/100 × క్వింటాల్ ధర.", {"items": [I("Commodity", "సరుకు", "₹3,16,000"), I("Packing", "ప్యాకింగ్", "₹2,400"), I("Due", "గడువు", "Sale + 15 days")]}),
        ("Change agent", "ఏజెంట్ మార్పు", "list", "Move the link only with a fresh OTP.", "కొత్త OTPతోనే మార్పు.", {"items": [I("Current", "ప్రస్తుతం", "Venkata Rao Commission")]}),
        ("Arrange transport", "రవాణా", "list", "Durga Roadlines quoted ₹18,400 Guntur to the buyer godown.", "దుర్గా రోడ్‌లైన్స్ ₹18,400.", {"items": [I("AP 07 TX 4545", "వాహనం", "Nagaraju · loading", "", "Trip", "info")]}),
        ("Transport permit", "పర్మిట్", "detail", "Permit TRD-CHL-089234 rides with the vehicle.", "పర్మిట్ వాహనంతో ఉంటుంది.", {"items": [I("Permit", "పర్మిట్", "TRD-CHL-089234")]}),
        ("Find storage", "నిల్వ వెతకండి", "list", "Guntur Cold Storage, ₹5 per bag per day.", "గుంటూరు కోల్డ్ స్టోరేజ్, బ్యాగుకు రోజుకు ₹5.", {"items": [I("Chamber B-2", "చాంబర్ B-2", "6°C · Byadgi", "", "Space", "success")]}),
        ("Storage detail", "నిల్వ వివరం", "detail", "Bond for Byadgi already in chamber B-2.", "బ్యాడగి బాండ్ B-2లో ఉంది.", {"items": [I("Rent", "అద్దె", "₹5 / bag / day"), I("Bags", "బ్యాగులు", "18")]}),
        ("Confirm storage", "నిల్వ నిర్ధారణ", "otp", "Your OTP releases the bond request to the warehouse.", "మీ OTP బాండ్ అభ్యర్థన."),
        ("Sample requests", "నమూనా అభ్యర్థనలు", "list", "A buyer asked for 200 g. You approve.", "కొనుగోలుదారు 200 గ్రాములు అడిగారు.", {"items": [I("Sai Exports", "సాయి ఎక్స్‌పోర్ట్స్", "200 g Teja", "", "Pending", "warning")]}),
        ("Loan offers", "రుణ ఆఫర్లు", "list", "Deccan Agri Finance can look at the warehouse receipt if you consent.", "గోడౌన్ రసీదుపై రుణం, మీ అనుమతితో.", {"items": [I("₹5,00,000", "రుణం", "Score 6.5 · receipt TKN-20260928", "", "Review", "info")]}),
        ("Apply for loan", "రుణం అభ్యర్థన", "form", "Consent OTP goes to your phone, not the banker's.", "అనుమతి OTP మీ ఫోన్‌కే."),
        ("My loans", "నా రుణాలు", "list", "Applications you consented to.", "మీరు అనుమతించిన అభ్యర్థనలు.", {"items": [I("Deccan Agri", "దక్కన్", "Appraisal", "", "Open", "warning")]}),
        ("My ledger", "నా లెడ్జర్", "interest", "What is due to the farm after commission.", "కమీషన్ తర్వాత పొలానికి రావలసినది.", {"mode": "ledger"}),
        ("Request advance", "అడ్వాన్సు అభ్యర్థన", "form", "You ask. The munim records. You confirm with OTP.", "మీరు అడగండి. మునీం నమోదు. మీరు OTP."),
        ("Repay advance", "అడ్వాన్సు తిరిగి", "form", "Repayment is a record against the next bill.", "తిరిగి చెల్లింపు తర్వాతి బిల్లుపై."),
        ("Market prices", "మార్కెట్ ధరలు", "list", "Modal prices this morning across six yards.", "ఆరు యార్డుల మోడల్ ధరలు.", {"items": [I("Guntur Teja", "గుంటూరు తేజ", "₹21,600/q", "", "Modal", "gold"), I("Warangal Bunny", "వరంగల్ బన్నీ", "₹70,200/q"), I("Nizamabad finger", "నిజామాబాద్", "₹15,400/q"), I("Kurnool BPT", "కర్నూలు", "₹2,240/q"), I("Unjha chilli", "ఉంఝా", "₹20,100/q"), I("Rajkot Shankar-6", "రాజ్‌కోట్", "₹68,400/q")]}),
        ("Ask Grok", "గ్రోక్‌ను అడగండి", "assistant", "Suggestions with a confidence score. Nothing is done for you.", "నమ్మకంతో సూచనలు. ఏదీ మీకోసం జరగదు.", {"mode": "chat", "version": "v5", "figmaFrame": "v5 producer Grok Telugu"}),
        ("Weather and risk", "వాతావరణం", "detail", "Light rain risk on the north field this week.", "ఈ వారం ఉత్తర పొలంపై వర్షం.", {"items": [I("Today", "ఈ రోజు", "31°C · dry"), I("Risk", "రిస్క్", "Low fungal pressure")]}),
        ("Demand forecast", "డిమాండ్", "detail", "Grok thinks Guntur arrivals stay thin after 3 pm.", "సాయంత్రం రాకలు తక్కువగా ఉండొచ్చు.", {"items": [I("Confidence", "నమ్మకం", "74%", "", "Suggestion", "gold")]}),
        ("Profit estimator", "లాభం అంచనా", "detail", "Offer versus costs. It does not place a bid.", "ఆఫర్ మరియు ఖర్చులు. బిడ్ వేయదు.", {"stats": [S("Offer value", "ఆఫర్ విలువ", "₹3.76 L"), S("Costs", "ఖర్చులు", "₹48,000"), S("Estimate", "అంచనా", "₹3.28 L")]}),
        ("Services", "సేవలు", "list", "Spraying, labour and transport you can request.", "స్ప్రే, కూలీ, రవాణా.", {"items": [I("Ravi Sprayers", "రవి స్ప్రేయర్స్", "2 acres booked", "", "Assigned", "info")]}),
        ("Request service", "సేవ అభ్యర్థన", "form", "Ask for a sprayer on the east plot.", "తూర్పు ప్లాట్‌కు స్ప్రేయర్."),
        ("Track service", "సేవ ట్రాక్", "detail", "The job is assigned. Payment is still a record, not a transfer.", "పని కేటాయింపు అయింది.", {"items": [I("Status", "స్థితి", "Assigned")]}),
        ("Service settlement", "సేవ సెటిల్‌మెంట్", "detail", "₹1,800 spray, to be adjusted in the ledger.", "₹1,800 స్ప్రే లెడ్జర్‌లో.", {"items": [I("Amount", "మొత్తం", "₹1,800")]}),
        ("My team", "నా బృందం", "team", "Owner, farm manager Suresh, field worker Nagamma.", "యజమాని, మేనేజర్ సురేష్, కూలీ నాగమ్మ.", {"mode": "list"}),
        ("Invite member", "సభ్యుడిని ఆహ్వానించండి", "form", "Invite by phone. They accept with OTP.", "ఫోన్‌తో ఆహ్వానం. OTPతో అంగీకారం."),
        ("Role limits", "పాత్ర పరిమితులు", "team", "Suresh may accept a sale up to ₹3,00,000. Above that, you get the OTP.", "సురేష్ ₹3 లక్షల వరకు. పైన మీ OTP.", {"mode": "limits"}),
        ("Notifications", "నోటిఫికేషన్లు", "alerts", "Bids, mismatches and reminders.", "బిడ్లు, తేడాలు, రిమైండర్లు.", {"items": TASK_ITEMS}),
        ("Welcome coins", "స్వాగత నాణేలు", "detail", "250 coins landed after profile. One credit per rule.", "ప్రొఫైల్ తర్వాత 250.", {"items": [I("Rule", "నియమం", "WELCOME_BONUS")]}),
        ("Disputes", "వివాదాలు", "list", "Moisture on the stored Byadgi is with the yard.", "బ్యాడగి తేమ వివాదం యార్డు వద్ద.", {"items": [I("D-2041", "వివాదం", "Moisture deduction", "", "Yard", "warning")]}),
        ("Documents", "పత్రాలు", "list", "Pattadar passbook and bank proof, on this phone only in the demo.", "పట్టా మరియు బ్యాంక్ రుజువు.", {"items": [I("Passbook", "పాస్‌బుక్", "Uploaded"), I("PAN", "పాన్", "Uploaded")]}),
        ("Settings", "సెట్టింగులు", "settings", "Language, offline demo, AI consent.", "భాష, ఆఫ్‌లైన్, AI అనుమతి.", {"items": [I("AI", "AI", "Suggestions only", "", "On", "success"), I("Offline demo", "ఆఫ్‌లైన్", "Toggle on the weighment screen")]}),
        ("Help", "సహాయం", "list", "How reserves, weighment and interest work.", "రిజర్వ్, తూకం, వడ్డీ.", {"items": [I("Reserve", "రిజర్వ్", "Hidden from buyers"), I("Interest", "వడ్డీ", "21% simple after day 15")]}),
        ("Empty lots", "ఖాళీ లాట్లు", "empty", "A new farm has no tokens yet.", "కొత్త పొలానికి టోకెన్లు లేవు.", {"version": "v3", "figmaFrame": "P-72 empty"}),
        ("Loading", "లోడ్", "loading", "Prices are loading from the yard.", "ధరలు లోడ్ అవుతున్నాయి.", {"figmaFrame": "P-73 loading"}),
        ("Offline", "ఆఫ్‌లైన్", "offline", "The phone keeps bag weights until the network returns.", "నెట్‌వర్క్ వచ్చే వరకు తూకాలు ఫోన్‌లో.", {"figmaFrame": "P-74 offline", "version": "v5"}),
        ("Error", "లోపం", "error", "The yard did not answer. Your draft is still here.", "యార్డు సమాధానం లేదు. డ్రాఫ్ట్ ఉంది.", {"figmaFrame": "P-75 error"}),
        ("Weighment live", "ప్రత్యక్ష తూకం", "weighment", "Per-bag kilograms on the seller phone. The buyer phone is the same session.", "అమ్మకపు ఫోన్‌లో బ్యాగు కిలోలు.", {"mode": "live", "version": "v5", "figmaFrame": "v5 producer weighment live"}),
        ("Token autofill", "టోకెన్ ఆటోఫిల్", "weighment", "The gate token fills the lot, bags and buyer.", "గేట్ టోకెన్ లాట్, బ్యాగులు, కొనుగోలుదారుని నింపుతుంది.", {"mode": "autofill", "version": "v5", "figmaFrame": "v5 token autofill"}),
        ("Discrepancy", "తేడా", "weighment", "Bag B-03 is 41.4 kg on this phone and 39.6 kg on the buyer phone.", "B-03 ఈ ఫోన్‌లో 41.4, కొనుగోలు ఫోన్‌లో 39.6.", {"mode": "discrepancy", "version": "v5", "figmaFrame": "v5 discrepancy"}),
        ("Resolved bag", "తేడా పరిష్కారం", "weighment", "The wrong side corrects the bag. A match clears the alert.", "తప్పు వైపు సరిచేస్తే అలర్ట్ పోతుంది.", {"mode": "resolved", "version": "v5", "figmaFrame": "v5 resolved"}),
        ("Offline queue", "ఆఫ్‌లైన్ క్యూ", "weighment", "Entries queue on the phone and compare when you reconnect.", "ఎంట్రీలు క్యూలో ఉండి కనెక్ట్ అయిన తర్వాత పోల్చబడతాయి.", {"mode": "offline", "version": "v5", "figmaFrame": "v5 offline sync"}),
        ("Final summary", "చివరి సారాంశం", "weighment", "Bags, total kg, price and amount. Both OTPs lock it.", "బ్యాగులు, కిలోలు, ధర. రెండు OTPలు లాక్ చేస్తాయి.", {"mode": "summary", "version": "v5", "figmaFrame": "v5 final summary"}),
        ("SMS preview", "SMS మునుజూపు", "weighment", "The message the producer and, for sourcing deals, the client would receive.", "రైతుకు మరియు క్లయింట్‌కు వెళ్ళే సందేశం.", {"mode": "sms", "version": "v5", "figmaFrame": "v5 SMS preview"}),
        ("Offer and reserve", "ఆఫర్ మరియు రిజర్వ్", "auction", "Offer ₹22,400/q. Hidden reserve ₹21,400/q. Auto-accept is on.", "ఆఫర్ ₹22,400. రిజర్వ్ ₹21,400. ఆటో అంగీకారం ఉంది.", {"mode": "offer", "version": "v7", "figmaFrame": "v7 producer offer reserve"}),
        ("Bids versus reserve", "బిడ్లు మరియు రిజర్వ్", "auction", "You see every bid marked above or below the reserve. Buyers do not.", "మీరు ప్రతి బిడ్ చూస్తారు. కొనుగోలుదారులు చూడరు.", {"mode": "bids", "version": "v7", "figmaFrame": "v7 bids vs reserve"}),
        ("Edit reserve", "రిజర్వ్ మార్పు", "auction", "Editable until close, with OTP and an audit line. Rejected bids stay rejected.", "ముగిసే వరకు OTPతో మార్పు.", {"mode": "edit", "version": "v7", "figmaFrame": "v7 edit reserve audit"}),
        ("Close sold", "అమ్మకం ముగింపు", "auction", "Highest bid at or above the reserve sells. QC OTP is next.", "రిజర్వ్ పైన ఉన్న అత్యధిక బిడ్ అమ్ముడవుతుంది.", {"mode": "sold", "version": "v7", "figmaFrame": "v7 close sold"}),
        ("Close unsold", "అమ్మకం కాలేదు", "auction", "Below the reserve: re-list, negotiate, or store.", "రిజర్వ్ కంటే తక్కువైతే మళ్ళీ లిస్ట్, చర్చ, లేదా నిల్వ.", {"mode": "unsold", "version": "v7", "figmaFrame": "v7 close unsold"}),
        ("Agent price OTP", "ఏజెంట్ ధర OTP", "otp", "If Venkata Rao changes the reserve, you confirm on your phone.", "ఏజెంట్ రిజర్వ్ మార్చితే మీ ఫోన్ OTP.", {"version": "v7", "figmaFrame": "v7 producer agent price OTP"}),
        ("Lots by commodity", "సరుకు వారీగా లాట్లు", "list", "Chilli, cotton, turmeric and paddy on one farm.", "మిరప, పత్తి, పసుపు, వరి.", {"items": LOT_ITEMS, "version": "v6", "figmaFrame": "v6 lots by commodity"}),
        ("Create lot cascade", "లాట్ ఎంపిక", "cascade", "Category, commodity, variety and yard in sheets.", "వర్గం నుండి యార్డు వరకు షీట్లు.", {"version": "v6", "figmaFrame": "v6 create lot cascade"}),
        ("Bag picker", "బ్యాగు ఎంపిక", "form", "Standard bag: 40 kg chilli, 50 kg turmeric, 75 kg paddy, bale for cotton.", "ప్రామాణిక బ్యాగు సరుకును బట్టి.", {"version": "v6", "figmaFrame": "v6 bag picker"}),
        ("Paddy unit", "వరి ప్రమాణం", "form", "Kurnool paddy is quoted per quintal and packed in 75 kg bags.", "కర్నూలు వరి క్వింటాల్ మరియు 75 కిలో బ్యాగు.", {"version": "v6", "figmaFrame": "v6 paddy unit"}),
    ],
)

# Continue in the same script — remaining stakeholders are appended by functions below.


def more():
    block(
        "A",
        "agent",
        "agent",
        [
            ("Home", "హోమ్", "dashboard", "Venkata Rao's morning: 3 farmers in the yard, one mismatch, one bill past due.", "వెంకటరావు ఉదయం.", {"stats": [S("Farmers", "రైతులు", "18"), S("Live", "ప్రత్యక్షం", "4"), S("Due", "బకాయి", "₹2.18 L")], "items": TASK_ITEMS}),
            ("My farmers", "నా రైతులు", "list", "Search by name, village or mobile.", "పేరు, ఊరు, మొబైల్.", {"items": FARMER_ITEMS}),
            ("Alerts", "అలర్ట్లు", "assistant", "Agent alerts stay suggestions.", "ఏజెంట్ అలర్ట్లు సూచనలు.", {"mode": "alerts", "version": "v5", "figmaFrame": "v5 agent AI alerts"}),
            ("Auction desk", "వేలం", "auction", "You see real buyer names. The producer sees letters.", "మీరు అసలు పేర్లు చూస్తారు. రైతు అక్షరాలు చూస్తారు.", {"mode": "bids"}),
            ("Tasks", "పనులు", "list", "Weighment for TKN-20261008 is waiting on bag B-03.", "B-03 తూకం మిగిలి ఉంది.", {"items": TASK_ITEMS}),
            ("Business profile", "వ్యాపారం", "detail", "Venkata Rao Commission · Guntur and Warangal.", "గుంటూరు మరియు వరంగల్.", {"items": [I("Yards", "యార్డులు", "2"), I("Commission", "కమీషన్", "2% Guntur chilli")]}),
            ("My team", "నా బృందం", "team", "Owner, sales Kiran, munim Prasad, field Ravi, clerk Srinu.", "యజమాని, సేల్స్, మునీం, ఫీల్డ్, క్లర్క్.", {"mode": "list"}),
            ("Add producer", "రైతు జోడింపు", "form", "Link request. The producer accepts with OTP.", "లింక్ అభ్యర్థన. రైతు OTP."),
            ("Producer profile", "రైతు ప్రొఫైల్", "detail", "Ramesh, Tadepalli, three commodities.", "రమేష్, తాడేపల్లి.", {"items": [I("Lots", "లాట్లు", "6"), I("Agent", "ఏజెంట్", "Linked")]}),
            ("Confirm arrival", "రాక నిర్ధారణ", "form", "Photo of the vehicle at the gate. Demo stores no image.", "గేట్ వద్ద వాహనం."),
            ("Advance ledger", "అడ్వాన్సు లెడ్జర్", "list", "Advances sit on the farmer account until the bill.", "బిల్లు వరకు అడ్వాన్సు.", {"items": [I("Ramesh", "రమేష్", "₹50,000 requested", "", "OTP", "warning")]}),
            ("Producer activity", "రైతు కార్యకలాపం", "list", "Recent plots and listings.", "ఇటీవలి ప్లాట్లు.", {"items": LOT_ITEMS[:3]}),
            ("Report discrepancy", "తేడా నివేదిక", "form", "Send bag B-03 to the yard supervisor.", "B-03ను యార్డు సూపర్‌వైజర్‌కు."),
            ("Record advance", "అడ్వాన్సు నమోదు", "form", "Munim records up to ₹50,000. Above that, the owner and the farmer OTP.", "₹50,000 వరకు మునీం. పైన యజమాని మరియు రైతు OTP."),
            ("Buyers", "కొనుగోలుదారులు", "list", "Sai Exports score and outstanding.", "సాయి ఎక్స్‌పోర్ట్స్ స్కోర్.", {"items": [I("Sai Exports", "సాయి", "Trader · processor · sourcing", "₹2.18 L", "Watch", "warning")]}),
            ("Add buyer", "కొనుగోలుదారు జోడింపు", "form", "Invite a buyer firm to the yard book.", "యార్డు పుస్తకానికి ఆహ్వానం."),
            ("Buyer risk", "కొనుగోలు రిస్క్", "detail", "Score 3.2 is a suggestion. You still decide.", "స్కోర్ సూచన. నిర్ణయం మీది.", {"items": [I("Score", "స్కోర్", "3.2", "", "Suggestion", "gold"), I("Days late", "ఆలస్యం", "15")]}),
            ("Buyer requirements", "కొనుగోలు అవసరాలు", "list", "Sai Exports wants Teja, grade A, moisture under 10%.", "తేజ, గ్రేడ్ A, తేమ 10% లోపు.", {"items": [I("Mandate", "మాండేట్", "Export client hidden from the farmer")]}),
            ("Edit listing", "లిస్టింగ్ మార్పు", "form", "Change the offer. Reserve edits notify the producer.", "ఆఫర్ మార్పు. రిజర్వ్ మార్పు రైతుకు తెలుస్తుంది."),
            ("Listings", "లిస్టింగ్‌లు", "list", "All farmer lots on your book.", "మీ పుస్తకంలోని లాట్లు.", {"items": LOT_ITEMS}),
            ("Live auction", "ప్రత్యక్ష వేలం", "auction", "Clock to 23:50. Real names on this desk.", "23:50 వరకు.", {"mode": "bids"}),
            ("Negotiation", "చర్చ", "chat", "Counter on behalf of Ramesh, inside your limit.", "మీ పరిమితిలో కౌంటర్.", {"items": [I("Kiran", "కిరణ్", "Recommend accept A", "10:20")]}),
            ("Sampling request", "నమూనా", "form", "Buyer asked for a sample. Producer OTP required.", "నమూనాకు రైతు OTP."),
            ("Sampling result", "నమూనా ఫలితం", "detail", "Lab passed grade A.", "ల్యాబ్ గ్రేడ్ A ఇచ్చింది.", {"items": [I("Result", "ఫలితం", "Pass")]}),
            ("Cancel auction", "వేలం రద్దు", "form", "Cancel needs a reason and is audited.", "కారణం మరియు ఆడిట్."),
            ("Next bidder", "తర్వాతి బిడ్డర్", "auction", "If A drops, B is next. Rejected bids stay rejected.", "A వదిలితే B తర్వాత.", {"mode": "bids"}),
            ("Force close", "బలవంతపు ముగింపు", "form", "Only with the producer or yard admin. Reason required.", "కారణం తప్పనిసరి."),
            ("Weighment schedule", "తూకం షెడ్యూల్", "list", "Today's tokens at the Guntur scale.", "ఈ రోజు తూకాలు.", {"items": [I("TKN-…C4E19B02", "టోకెన్", "12 bags · Sannam", "", "Now", "warning")]}),
            ("Assisted weighment", "సహాయ తూకం", "weighment", "Yard clerk Srinu can enter seller-side bags when you allow it.", "క్లర్క్ శ్రీను అమ్మకపు వైపు నమోదు చేయగలరు.", {"mode": "live", "version": "v5", "figmaFrame": "v5 agent assisted weighment"}),
            ("Weight variance", "తూకం తేడా", "weighment", "Variance above 2% or a single bag outside 0.2 kg is flagged.", "2% లేదా 0.2 కిలో బయట ఫ్లాగ్.", {"mode": "discrepancy"}),
            ("Generate bill", "బిల్లు", "interest", "Bill TRD-2026-004218 snapshots the Guntur chilli rule.", "బిల్లు నియమాన్ని నమోదు చేస్తుంది.", {"mode": "bill", "version": "v6"}),
            ("Settlement confirmed", "సెటిల్‌మెంట్", "detail", "Both OTPs done. Coins wait until reconciliation.", "రెండు OTPలు అయ్యాయి.", {"items": [I("Status", "స్థితి", "Confirmed")]}),
            ("Bill discounting", "బిల్లు డిస్కౌంట్", "list", "Banks may buy the bill. This is a request, not a payout.", "బ్యాంకు అభ్యర్థన. చెల్లింపు కాదు.", {"items": [I("Deccan Agri", "దక్కన్", "1.5% for 15 days", "", "Offer", "info")]}),
            ("Financiers", "ఫైనాన్సర్లు", "list", "Deccan Agri Finance and two others.", "మూడు సంస్థలు.", {"items": [I("Deccan", "దక్కన్", "1.2–2.0%")]}),
            ("Discount offer", "డిస్కౌంట్ ఆఫర్", "detail", "₹1,18,000 offered against a larger bill. Producer must know.", "రైతుకు తెలియాలి.", {"items": [I("Offer", "ఆఫర్", "₹1,18,000")]}),
            ("Discount receipt", "రసీదు", "detail", "Receipt of the request. Money is not moved here.", "డబ్బు ఇక్కడ కదగదు.", {"items": [I("Receipt", "రసీదు", "Recorded")]}),
            ("Book storage", "నిల్వ బుకింగ్", "form", "Book cold store for the farmer. Their OTP confirms.", "రైతు OTPతో నిల్వ."),
            ("Ledger interest", "లెడ్జర్ వడ్డీ", "interest", "Outstanding principal earns 21% simple interest for each day late.", "బకాయి అసలుపై రోజుకు 21% సాధారణ వడ్డీ.", {"mode": "ledger", "version": "v6", "figmaFrame": "v6 agent ledger interest"}),
            ("Bill interest", "బిల్లు వడ్డీ", "interest", "The bill shows principal, periods and the waiver line.", "అసలు, కాలాలు, మాఫీ.", {"mode": "bill", "version": "v6", "figmaFrame": "v6 bill interest"}),
            ("Interest statement", "వడ్డీ స్టేట్‌మెంట్", "interest", "Period-wise statement after the partial NEFT.", "పాక్షిక NEFT తర్వాత కాలాల వారీగా.", {"mode": "statement", "version": "v6", "figmaFrame": "v6 interest statement"}),
            ("Partial payment", "పాక్షిక చెల్లింపు", "interest", "A part payment reduces the principal. Interest follows the new balance.", "పాక్షిక చెల్లింపు అసలును తగ్గిస్తుంది.", {"mode": "partial", "version": "v6", "figmaFrame": "v6 partial payment"}),
            ("Waiver", "మాఫీ", "interest", "Prasad requests. Venkata Rao approves with OTP.", "ప్రసాద్ అభ్యర్థన. వెంకటరావు OTP.", {"mode": "waiver", "version": "v6", "figmaFrame": "v6 waiver"}),
            ("Reminders", "రిమైండర్లు", "interest", "Three days before, on the due date, then daily with interest to date.", "3 రోజుల ముందు, గడువు రోజు, తర్వాత ప్రతిరోజు.", {"mode": "reminders", "version": "v6", "figmaFrame": "v6 reminders"}),
            ("Payment terms", "చెల్లింపు నియమాలు", "interest", "Association 15 days, then 21% p.a. simple. Stipulated dates need both OTPs.", "15 రోజులు, తర్వాత 21%.", {"mode": "rules", "version": "v5", "figmaFrame": "v5 agent payment terms"}),
            ("Terms sheet", "నియమాల షీట్", "master", "Pick yard × commodity × association. Unverified rules stay marked.", "యార్డు × సరుకు × సంఘం.", {"mode": "rules", "version": "v6", "figmaFrame": "v6 terms dropdown"}),
            ("Yard sheet", "యార్డు షీట్", "cascade", "This firm sits in Guntur and Warangal.", "ఈ సంస్థ గుంటూరు మరియు వరంగల్.", {"version": "v6", "figmaFrame": "v6 yard dropdown"}),
            ("Reserve for producer", "రైతు తరఫున రిజర్వ్", "auction", "You may set the reserve when the producer has delegated it.", "రైతు అప్పగించినప్పుడు రిజర్వ్.", {"mode": "offer", "version": "v7", "figmaFrame": "v7 agent reserve"}),
            ("Role limits", "పరిమితులు", "team", "Kiran accepts up to ₹5,00,000. Prasad advances up to ₹50,000.", "కిరణ్ ₹5 లక్షలు. ప్రసాద్ ₹50,000.", {"mode": "limits"}),
            ("Audit", "ఆడిట్", "list", "Reserve edits, waivers and role changes.", "రిజర్వ్, మాఫీ, పాత్ర మార్పులు.", {"items": [I("Reserve edit", "రిజర్వ్", "Ramesh OTP · 09:10", "", "Audit", "info"), I("Waiver request", "మాఫీ", "Open", "", "Pending", "warning")]}),
            ("Empty book", "ఖాళీ పుస్తకం", "empty", "A new agency has no farmers yet.", "కొత్త ఏజెన్సీకి రైతులు లేరు."),
            ("Loading book", "లోడ్", "loading", "The farmer book is loading.", "రైతు పుస్తకం లోడ్ అవుతోంది."),
        ],
    )


more()

# The rest of the catalog is defined in gen_catalog_rest.py and imported if present.
rest = Path(__file__).with_name("gen_catalog_rest.py")
if rest.exists():
    scope = {"add": add, "block": block, "S": S, "I": I, "LOT_ITEMS": LOT_ITEMS, "FARMER_ITEMS": FARMER_ITEMS, "TASK_ITEMS": TASK_ITEMS}
    exec(rest.read_text(), scope)

# --- write files ---

def ts(value) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


tabs = {
    "producer": [("P-01", "Home", "హోమ్", "home"), ("P-38", "Lots", "లాట్లు", "inventory-2"), ("P-02", "Farm", "పొలం", "agriculture"), ("P-12", "Pay", "చెల్లింపు", "payments"), ("P-63", "Team", "బృందం", "groups")],
    "agent": [("A-01", "Home", "హోమ్", "home"), ("A-02", "Farmers", "రైతులు", "groups"), ("A-21", "Auction", "వేలం", "gavel"), ("A-45", "Ledger", "లెడ్జర్", "menu-book"), ("A-07", "Team", "బృందం", "groups")],
    "onboarding": [],
}

# Tabs for stakeholders added in the rest file are merged from scope if provided.
if rest.exists():
    tabs.update(scope.get("TABS", {}))

# Validate ids referenced by tabs exist once catalog is complete.
by_id = {s["id"]: s for s in screens}
missing_tabs = [item[0] for rows in tabs.values() for item in rows if item[0] not in by_id]
if missing_tabs:
    raise SystemExit(f"Tab ids missing from catalog: {missing_tabs}")

dupes = [sid for sid, count in __import__("collections").Counter(s["id"] for s in screens).items() if count > 1]
if dupes:
    raise SystemExit(f"Duplicate ids: {dupes}")
slugs = [s["slug"] for s in screens]
if len(slugs) != len(set(slugs)):
    raise SystemExit("Duplicate slugs")

# Clear generated route groups but keep root layout files.
keep_groups = set()
for screen in screens:
    group_dir = APP / f"({screen['group']})"
    keep_groups.add(group_dir.name)
    group_dir.mkdir(parents=True, exist_ok=True)

for child in APP.iterdir():
    if child.is_dir() and child.name.startswith("(") and child.name not in keep_groups:
        shutil.rmtree(child)

written_groups = set()
for screen in screens:
    group_dir = APP / f"({screen['group']})"
    if screen["group"] not in written_groups:
        for old in group_dir.glob("*.tsx"):
            old.unlink()
        (group_dir / "_layout.tsx").write_text(
            "import { Stack } from 'expo-router';\n\nexport default function Layout() {\n  return <Stack screenOptions={{ headerShown: false }} />;\n}\n"
        )
        written_groups.add(screen["group"])
    (group_dir / f"{screen['slug']}.tsx").write_text(
        "import { ScreenHost } from '@/screens/ScreenHost';\n\n"
        f"export default function Route{screen['id'].replace('-', '')}() {{\n"
        f"  return <ScreenHost id=\"{screen['id']}\" />;\n"
        "}\n"
    )

tab_ts = {key: [{"id": a, "label": b, "labelTe": c, "icon": d} for a, b, c, d in rows] for key, rows in tabs.items()}
OUT.write_text(
    "import type { ScreenSpec, TabSpec } from './types';\n\n"
    f"export const catalog: ScreenSpec[] = {ts(screens)};\n\n"
    "export const catalogById: Record<string, ScreenSpec> = Object.fromEntries(catalog.map((screen) => [screen.id, screen]));\n\n"
    f"export const tabs: Record<string, TabSpec[]> = {ts(tab_ts)};\n"
)

# SCREEN_MAP
lines = [
    "# Rytuvo screen map",
    "",
    "Figma file: https://www.figma.com/design/g5MlDevajExftsptWA94OZ",
    "",
    "Live Figma node ids were not available in this environment (no Figma connector). Each row uses the Rytuvo screen code as the frame key. Those codes are the ones in the design handoff (`COVERAGE_MATRIX.md`) plus the v4–v7 frames named in the screenshot set.",
    "",
    "The Figma file is about 660 frames (542 mobile, 114 desktop). Many of those frames are duplicate states, component variants, and the desktop mirrors of the same flow. This app implements 528 routes (435 mobile, 93 desktop): every stakeholder home, the v5–v7 weighment, payment-terms, AI, dropdown, interest, multi-commodity, reserve, and auto-bid flows, plus empty, loading, and offline states. Rows below are implemented. The next section lists frames that are intentionally not routes.",
    "",
    f"Implemented routes: **{len(screens)}**.",
    "",
    "| Frame key | Version | Stakeholder | Route | File | Status |",
    "|---|---|---|---|---|---|",
]
for screen in screens:
    lines.append(
        f"| {screen['figmaFrame']} | {screen['version']} | {screen['stakeholder']} | `{screen['route']}` | `{screen['file']}` | Implemented |"
    )

lines += [
    "",
    "## Intentionally not a product screen",
    "",
    "| Frame | Reason |",
    "|---|---|",
    "| Contract registry / TRDToken | Blockchain console. The lot token is a user-facing id, not a chain mint. |",
    "| Network infrastructure / sync height | Same. Not a stakeholder screen. |",
    "| NFT lot minting, smart-contract bill discounting | Out of the Rytuvo user scope. Bill discounting is a request record only. |",
    "| Multimodal / air freight planners | Not used for these yards. |",
    "| Consumer advertising portals | Outside the B2B market. |",
    "| Dropdown component set (v6) | Built as `BottomSheetPicker` in the design system, not a route. |",
    "",
    "## Counts",
    "",
]
from collections import Counter
kind_stake = Counter((s["kind"], s["stakeholder"]) for s in screens)
lines.append("| Kind | Stakeholder | Screens |")
lines.append("|---|---|---|")
for (kind, stakeholder), count in sorted(kind_stake.items()):
    lines.append(f"| {kind} | {stakeholder} | {count} |")
lines.append("")
lines.append(f"Mobile {sum(1 for s in screens if s['kind']=='mobile')} · desktop {sum(1 for s in screens if s['kind']=='desktop')}.")
MAP.write_text("\n".join(lines) + "\n")
print(f"screens {len(screens)} mobile {sum(1 for s in screens if s['kind']=='mobile')} desktop {sum(1 for s in screens if s['kind']=='desktop')}")
