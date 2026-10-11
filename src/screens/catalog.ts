import type { ScreenSpec, TabSpec } from './types';

export const catalog: ScreenSpec[] = [
  {
    "id": "OB-01",
    "figmaFrame": "OB-01 Splash",
    "version": "v1",
    "title": "Splash",
    "titleTe": "స్వాగతం",
    "summary": "Rytuvo opens on the cream canvas with the field-green mark.",
    "summaryTe": "రైతువో స్వాగతం.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-01-splash",
    "route": "/onboarding/ob-01-splash",
    "file": "app/onboarding/ob-01-splash.tsx",
    "kind": "mobile",
    "template": "splash",
    "hideNav": true
  },
  {
    "id": "OB-02",
    "figmaFrame": "v6 language bottom sheet",
    "version": "v6",
    "title": "Language",
    "titleTe": "భాష",
    "summary": "English or Telugu for this phone. The choice follows every screen.",
    "summaryTe": "ఇంగ్లీష్ లేదా తెలుగు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-02-language",
    "route": "/onboarding/ob-02-language",
    "file": "app/onboarding/ob-02-language.tsx",
    "kind": "mobile",
    "template": "language",
    "hideNav": true
  },
  {
    "id": "OB-03",
    "figmaFrame": "OB-03 Mobile number",
    "version": "v1",
    "title": "Mobile number",
    "titleTe": "మొబైల్ నంబర్",
    "summary": "Enter the 10-digit number. Demo phones are listed on the splash.",
    "summaryTe": "10 అంకెల నంబర్.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-03-mobile-number",
    "route": "/onboarding/ob-03-mobile-number",
    "file": "app/onboarding/ob-03-mobile-number.tsx",
    "kind": "mobile",
    "template": "phone",
    "hideNav": true
  },
  {
    "id": "OB-04",
    "figmaFrame": "OB-04 Verify OTP",
    "version": "v1",
    "title": "Verify OTP",
    "titleTe": "OTP",
    "summary": "Six digits. The demo code is 123456 and is labelled DEV ONLY.",
    "summaryTe": "ఆరు అంకెలు. డెమో 123456.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-04-verify-otp",
    "route": "/onboarding/ob-04-verify-otp",
    "file": "app/onboarding/ob-04-verify-otp.tsx",
    "kind": "mobile",
    "template": "otp",
    "hideNav": true,
    "primary": {
      "label": "Continue",
      "labelTe": "కొనసాగండి",
      "to": "/onboarding/ob-05-choose-role"
    }
  },
  {
    "id": "OB-05",
    "figmaFrame": "OB-05 Choose role",
    "version": "v1",
    "title": "Choose role",
    "titleTe": "పాత్ర",
    "summary": "The platform assigns the organisation type. You can add roles later.",
    "summaryTe": "సంస్థ రకం ప్లాట్‌ఫాం ఇస్తుంది.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-05-choose-role",
    "route": "/onboarding/ob-05-choose-role",
    "file": "app/onboarding/ob-05-choose-role.tsx",
    "kind": "mobile",
    "template": "roles",
    "hideNav": true
  },
  {
    "id": "OB-06",
    "figmaFrame": "OB-06 Profile",
    "version": "v3",
    "title": "Profile",
    "titleTe": "ప్రొఫైల్",
    "summary": "Name, village and language. Producer Ramesh Naidu Kotha is the sample.",
    "summaryTe": "పేరు, ఊరు, భాష.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-06-profile",
    "route": "/onboarding/ob-06-profile",
    "file": "app/onboarding/ob-06-profile.tsx",
    "kind": "mobile",
    "template": "form",
    "hideNav": true
  },
  {
    "id": "OB-07",
    "figmaFrame": "OB-07 KYC levels",
    "version": "v3",
    "title": "KYC levels",
    "titleTe": "కేవైసీ స్థాయులు",
    "summary": "Minimum KYC lets you look. Higher tiers unlock payments and advances.",
    "summaryTe": "కనీస కేవైసీ చూడటానికి. పై స్థాయి చెల్లింపులకు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-07-kyc-levels",
    "route": "/onboarding/ob-07-kyc-levels",
    "file": "app/onboarding/ob-07-kyc-levels.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "levels"
  },
  {
    "id": "OB-08",
    "figmaFrame": "OB-08 Aadhaar",
    "version": "v3",
    "title": "Aadhaar",
    "titleTe": "ఆధార్",
    "summary": "Upload the identity document. This demo stores nothing off the phone.",
    "summaryTe": "గుర్తింపు పత్రం.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-08-aadhaar",
    "route": "/onboarding/ob-08-aadhaar",
    "file": "app/onboarding/ob-08-aadhaar.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "identity"
  },
  {
    "id": "OB-09",
    "figmaFrame": "OB-09 Selfie check",
    "version": "v3",
    "title": "Selfie check",
    "titleTe": "సెల్ఫీ",
    "summary": "Face check is a guided step. It does not call a live verifier.",
    "summaryTe": "ముఖం తనిఖీ దశ.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-09-selfie-check",
    "route": "/onboarding/ob-09-selfie-check",
    "file": "app/onboarding/ob-09-selfie-check.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "selfie"
  },
  {
    "id": "OB-10",
    "figmaFrame": "OB-10 Bank and PAN",
    "version": "v3",
    "title": "Bank and PAN",
    "titleTe": "బ్యాంక్ మరియు పాన్",
    "summary": "Account name Ramesh Naidu Kotha. Used only as a record.",
    "summaryTe": "ఖాతా పేరు రమేష్ నాయుడు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-10-bank-and-pan",
    "route": "/onboarding/ob-10-bank-and-pan",
    "file": "app/onboarding/ob-10-bank-and-pan.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "bank"
  },
  {
    "id": "OB-11",
    "figmaFrame": "OB-11 Business type",
    "version": "v3",
    "title": "Business type",
    "titleTe": "వ్యాపార రకం",
    "summary": "Individual, family, partnership or company. Sets the org shell.",
    "summaryTe": "వ్యక్తి, కుటుంబం, భాగస్వామ్యం లేదా కంపెనీ.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-11-business-type",
    "route": "/onboarding/ob-11-business-type",
    "file": "app/onboarding/ob-11-business-type.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "OB-12",
    "figmaFrame": "OB-12 Verification pending",
    "version": "v3",
    "title": "Verification pending",
    "titleTe": "వేచి ఉంది",
    "summary": "KYC reviewer Kavya sees this queue. Reviewers cannot approve themselves.",
    "summaryTe": "సమీక్షకుడు తన కేవైసీని ఆమోదించలేరు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-12-verification-pending",
    "route": "/onboarding/ob-12-verification-pending",
    "file": "app/onboarding/ob-12-verification-pending.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "pending"
  },
  {
    "id": "OB-13",
    "figmaFrame": "OB-13 Org approved",
    "version": "v3",
    "title": "Org approved",
    "titleTe": "సంస్థ ఆమోదం",
    "summary": "Anitha approved Kotha Farm as a producer organisation.",
    "summaryTe": "కొత్త పొలం రైతు సంస్థగా ఆమోదం.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-13-org-approved",
    "route": "/onboarding/ob-13-org-approved",
    "file": "app/onboarding/ob-13-org-approved.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Approved",
        "badge": "Live",
        "tone": "success"
      }
    ]
  },
  {
    "id": "OB-14",
    "figmaFrame": "OB-14 Welcome bonus",
    "version": "v3",
    "title": "Welcome bonus",
    "titleTe": "స్వాగత బోనస్",
    "summary": "250 Rytuvo Coins after OTP and profile. Coins are not money.",
    "summaryTe": "250 నాణేలు. ఇవి డబ్బు కాదు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-14-welcome-bonus",
    "route": "/onboarding/ob-14-welcome-bonus",
    "file": "app/onboarding/ob-14-welcome-bonus.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "WELCOME_BONUS",
        "titleTe": "స్వాగతం",
        "subtitle": "250 coins",
        "badge": "Once",
        "tone": "gold"
      }
    ]
  },
  {
    "id": "OB-15",
    "figmaFrame": "OB-15 Welcome 1",
    "version": "v3",
    "title": "Welcome 1",
    "titleTe": "పరిచయం 1",
    "summary": "Sell, weigh and get paid with both phones in the same yard.",
    "summaryTe": "అమ్మండి, తూకం వేయండి, చెల్లింపు పొందండి.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-15-welcome-1",
    "route": "/onboarding/ob-15-welcome-1",
    "file": "app/onboarding/ob-15-welcome-1.tsx",
    "kind": "mobile",
    "template": "flow",
    "notes": [
      "Create a lot token",
      "Set a hidden reserve",
      "Weigh bag by bag"
    ],
    "hideNav": true
  },
  {
    "id": "OB-16",
    "figmaFrame": "OB-16 Welcome 2",
    "version": "v3",
    "title": "Welcome 2",
    "titleTe": "పరిచయం 2",
    "summary": "Commission agents, buyers and yards share one record.",
    "summaryTe": "ఏజెంట్, కొనుగోలుదారు, యార్డు ఒకే రికార్డు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-16-welcome-2",
    "route": "/onboarding/ob-16-welcome-2",
    "file": "app/onboarding/ob-16-welcome-2.tsx",
    "kind": "mobile",
    "template": "flow",
    "notes": [
      "Masked bidder letters",
      "OTP on both sides",
      "Interest only after day 15"
    ],
    "hideNav": true
  },
  {
    "id": "OB-17",
    "figmaFrame": "OB-17 Welcome 3",
    "version": "v3",
    "title": "Welcome 3",
    "titleTe": "పరిచయం 3",
    "summary": "Telugu and English. AI suggests. People confirm money.",
    "summaryTe": "తెలుగు మరియు ఇంగ్లీష్. AI సూచిస్తుంది.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-17-welcome-3",
    "route": "/onboarding/ob-17-welcome-3",
    "file": "app/onboarding/ob-17-welcome-3.tsx",
    "kind": "mobile",
    "template": "flow",
    "notes": [
      "Suggestions show confidence",
      "No automatic payments",
      "Owner sets limits"
    ],
    "hideNav": true
  },
  {
    "id": "OB-18",
    "figmaFrame": "OB-18 Welcome back",
    "version": "v3",
    "title": "Welcome back",
    "titleTe": "మళ్ళీ స్వాగతం",
    "summary": "Returning users start from the mobile number.",
    "summaryTe": "తిరిగి వచ్చినవారు నంబర్ నుండి.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-18-welcome-back",
    "route": "/onboarding/ob-18-welcome-back",
    "file": "app/onboarding/ob-18-welcome-back.tsx",
    "kind": "mobile",
    "template": "phone",
    "hideNav": true
  },
  {
    "id": "OB-19",
    "figmaFrame": "OB-19 Recover account",
    "version": "v3",
    "title": "Recover account",
    "titleTe": "ఖాతా పునరుద్ధరణ",
    "summary": "Recovery sends a fresh OTP to the same phone.",
    "summaryTe": "అదే ఫోన్‌కు కొత్త OTP.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-19-recover-account",
    "route": "/onboarding/ob-19-recover-account",
    "file": "app/onboarding/ob-19-recover-account.tsx",
    "kind": "mobile",
    "template": "phone",
    "hideNav": true
  },
  {
    "id": "OB-20",
    "figmaFrame": "OB-20 Add more roles",
    "version": "v3",
    "title": "Add more roles",
    "titleTe": "మరిన్ని పాత్రలు",
    "summary": "A person may belong to several orgs. One role per org.",
    "summaryTe": "ఒక సంస్థలో ఒక పాత్ర.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-20-add-more-roles",
    "route": "/onboarding/ob-20-add-more-roles",
    "file": "app/onboarding/ob-20-add-more-roles.tsx",
    "kind": "mobile",
    "template": "roles"
  },
  {
    "id": "OB-21",
    "figmaFrame": "OB-21 Permissions",
    "version": "v3",
    "title": "Permissions",
    "titleTe": "అనుమతులు",
    "summary": "Location, alerts and camera are requested with a reason.",
    "summaryTe": "స్థానం, అలర్ట్, కెమెరా కారణంతో.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-21-permissions",
    "route": "/onboarding/ob-21-permissions",
    "file": "app/onboarding/ob-21-permissions.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Alerts",
        "titleTe": "అలర్ట్లు",
        "subtitle": "Bids, weighment, interest",
        "badge": "Ask",
        "tone": "info"
      },
      {
        "title": "Location",
        "titleTe": "స్థానం",
        "subtitle": "Yard gate and plots",
        "badge": "Ask",
        "tone": "info"
      },
      {
        "title": "Camera",
        "titleTe": "కెమెరా",
        "subtitle": "Bags, samples, KYC",
        "badge": "Ask",
        "tone": "info"
      }
    ]
  },
  {
    "id": "OB-22",
    "figmaFrame": "OB-22 Address",
    "version": "v3",
    "title": "Address",
    "titleTe": "చిరునామా",
    "summary": "Ganesh Nagar, Tadepalli, Guntur district.",
    "summaryTe": "గణేష్ నగర్, తాడేపల్లి, గుంటూరు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-22-address",
    "route": "/onboarding/ob-22-address",
    "file": "app/onboarding/ob-22-address.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "OB-23",
    "figmaFrame": "OB-23 KYC upgrade",
    "version": "v3",
    "title": "KYC upgrade",
    "titleTe": "కేవైసీ అప్‌గ్రేడ్",
    "summary": "Higher tier is a record in this demo, not a card charge.",
    "summaryTe": "ఈ డెమోలో చెల్లింపు లేదు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-23-kyc-upgrade",
    "route": "/onboarding/ob-23-kyc-upgrade",
    "file": "app/onboarding/ob-23-kyc-upgrade.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "OB-24",
    "figmaFrame": "v6 onboarding commodities and yards",
    "version": "v6",
    "title": "Commodities and yards",
    "titleTe": "సరుకులు మరియు యార్డులు",
    "summary": "Pick what you grow and where you sell. Guntur, Warangal, Nizamabad, Kurnool, Unjha, Rajkot.",
    "summaryTe": "ఏమి పండిస్తారు, ఎక్కడ అమ్ముతారు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-24-commodities-and-yards",
    "route": "/onboarding/ob-24-commodities-and-yards",
    "file": "app/onboarding/ob-24-commodities-and-yards.tsx",
    "kind": "mobile",
    "template": "cascade"
  },
  {
    "id": "OB-25",
    "figmaFrame": "v6 yard cascading open",
    "version": "v6",
    "title": "Yard cascade",
    "titleTe": "యార్డు ఎంపిక",
    "summary": "State, then district, then yard. The sheet is the dropdown.",
    "summaryTe": "రాష్ట్రం, జిల్లా, యార్డు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-25-yard-cascade",
    "route": "/onboarding/ob-25-yard-cascade",
    "file": "app/onboarding/ob-25-yard-cascade.tsx",
    "kind": "mobile",
    "template": "cascade"
  },
  {
    "id": "OB-26",
    "figmaFrame": "OB-26 KYC trader",
    "version": "v4",
    "title": "KYC trader",
    "titleTe": "వ్యాపారి కేవైసీ",
    "summary": "Trader purpose needs an APMC or trader licence and GSTIN.",
    "summaryTe": "వ్యాపారికి లైసెన్స్ మరియు GSTIN.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-26-kyc-trader",
    "route": "/onboarding/ob-26-kyc-trader",
    "file": "app/onboarding/ob-26-kyc-trader.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "purpose"
  },
  {
    "id": "OB-27",
    "figmaFrame": "OB-27 KYC transporter",
    "version": "v3",
    "title": "KYC transporter",
    "titleTe": "రవాణా కేవైసీ",
    "summary": "Vehicle, permit and driver licence for Durga Roadlines.",
    "summaryTe": "వాహనం, పర్మిట్, లైసెన్స్.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-27-kyc-transporter",
    "route": "/onboarding/ob-27-kyc-transporter",
    "file": "app/onboarding/ob-27-kyc-transporter.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "identity"
  },
  {
    "id": "OB-28",
    "figmaFrame": "OB-28 KYC inspector",
    "version": "v3",
    "title": "KYC inspector",
    "titleTe": "తనిఖీ కేవైసీ",
    "summary": "Lab head approves the inspector before jobs are assigned.",
    "summaryTe": "ల్యాబ్ హెడ్ ఆమోదం తర్వాత పనులు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-28-kyc-inspector",
    "route": "/onboarding/ob-28-kyc-inspector",
    "file": "app/onboarding/ob-28-kyc-inspector.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "pending"
  },
  {
    "id": "OB-29",
    "figmaFrame": "OB-29 KYC storage",
    "version": "v3",
    "title": "KYC storage",
    "titleTe": "నిల్వ కేవైసీ",
    "summary": "Warehouse licence and chamber list for Guntur Cold Storage.",
    "summaryTe": "గోడౌన్ లైసెన్స్ మరియు చాంబర్లు.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-29-kyc-storage",
    "route": "/onboarding/ob-29-kyc-storage",
    "file": "app/onboarding/ob-29-kyc-storage.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "address"
  },
  {
    "id": "OB-30",
    "figmaFrame": "OB-30 KYC bank",
    "version": "v3",
    "title": "KYC bank",
    "titleTe": "బ్యాంక్ కేవైసీ",
    "summary": "NBFC or bank staff are approved by the platform, not self-assigned.",
    "summaryTe": "బ్యాంక్ సిబ్బందిని ప్లాట్‌ఫాం ఆమోదిస్తుంది.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-30-kyc-bank",
    "route": "/onboarding/ob-30-kyc-bank",
    "file": "app/onboarding/ob-30-kyc-bank.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "pending"
  },
  {
    "id": "OB-31",
    "figmaFrame": "OB-31 KYC insurance",
    "version": "v3",
    "title": "KYC insurance",
    "titleTe": "బీమా కేవైసీ",
    "summary": "Underwriter, surveyor and claims officer are separate duties.",
    "summaryTe": "అండర్‌రైటర్, సర్వేయర్, క్లెయిమ్స్ విడివిడిగా.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-31-kyc-insurance",
    "route": "/onboarding/ob-31-kyc-insurance",
    "file": "app/onboarding/ob-31-kyc-insurance.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "levels"
  },
  {
    "id": "OB-32",
    "figmaFrame": "v6 buyer purpose multiselect",
    "version": "v4",
    "title": "Buyer purposes",
    "titleTe": "కొనుగోలు ఉద్దేశాలు",
    "summary": "Trader, processor and sourcing agent. Each purpose is verified on its own.",
    "summaryTe": "వ్యాపారి, ప్రాసెసర్, సోర్సింగ్. ప్రతి దానికి వేరు కేవైసీ.",
    "stakeholder": "onboarding",
    "nav": "onboarding",
    "group": "onboarding",
    "slug": "ob-32-buyer-purposes",
    "route": "/onboarding/ob-32-buyer-purposes",
    "file": "app/onboarding/ob-32-buyer-purposes.tsx",
    "kind": "mobile",
    "template": "purposes",
    "hideNav": true
  },
  {
    "id": "P-01",
    "figmaFrame": "P-01 Home",
    "version": "v1",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Good morning, Ramesh. Teja is in auction at Guntur until 23:50.",
    "summaryTe": "శుభోదయం రమేష్. తేజ వేలం 23:50 వరకు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-01-home",
    "route": "/producer/p-01-home",
    "file": "app/producer/p-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Modal",
        "labelTe": "మోడల్",
        "value": "₹21,600"
      },
      {
        "label": "Offer",
        "labelTe": "ఆఫర్",
        "value": "₹22,400"
      },
      {
        "label": "Reserve",
        "labelTe": "రిజర్వ్",
        "value": "Hidden"
      }
    ],
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-02",
    "figmaFrame": "P-02 Farm and plots",
    "version": "v3",
    "title": "Farm and plots",
    "titleTe": "పొలాలు",
    "summary": "Three plots around Tadepalli. North field is in Teja.",
    "summaryTe": "తాడేపల్లి చుట్టూ మూడు ప్లాట్లు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-02-farm-and-plots",
    "route": "/producer/p-02-farm-and-plots",
    "file": "app/producer/p-02-farm-and-plots.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "North field",
        "titleTe": "ఉత్తర పొలం",
        "subtitle": "1.8 acres · Teja",
        "meta": "Flowering",
        "badge": "Live",
        "tone": "success"
      },
      {
        "title": "Tank plot",
        "titleTe": "చెరువు ప్లాట్",
        "subtitle": "1.1 acres · fallow",
        "badge": "Empty",
        "tone": "warning"
      },
      {
        "title": "East plot",
        "titleTe": "తూర్పు ప్లాట్",
        "subtitle": "2.0 acres · BPT 5204",
        "meta": "Harvested",
        "badge": "Done",
        "tone": "info"
      }
    ]
  },
  {
    "id": "P-03",
    "figmaFrame": "P-03 Crop cycle",
    "version": "v3",
    "title": "Crop cycle",
    "titleTe": "పంట చక్రం",
    "summary": "Teja timeline: nursery, transplant, flowering, harvest.",
    "summaryTe": "తేజ దశలు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-03-crop-cycle",
    "route": "/producer/p-03-crop-cycle",
    "file": "app/producer/p-03-crop-cycle.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Transplant",
        "titleTe": "నాటు",
        "subtitle": "12 Aug · 4 workers",
        "badge": "Done",
        "tone": "success"
      },
      {
        "title": "Flowering spray",
        "titleTe": "పూత స్ప్రే",
        "subtitle": "2 Oct · Ravi Sprayers",
        "badge": "Done",
        "tone": "success"
      },
      {
        "title": "Harvest",
        "titleTe": "కోత",
        "subtitle": "8 Oct · 42 bags",
        "badge": "Token",
        "tone": "gold"
      }
    ]
  },
  {
    "id": "P-04",
    "figmaFrame": "P-04 Today",
    "version": "v3",
    "title": "Today",
    "titleTe": "ఈ రోజు",
    "summary": "What needs Ramesh before the yard closes.",
    "summaryTe": "యార్డు మూసేలోపు పనులు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-04-today",
    "route": "/producer/p-04-today",
    "file": "app/producer/p-04-today.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-05",
    "figmaFrame": "P-05 Create listing",
    "version": "v1",
    "title": "Create listing",
    "titleTe": "లిస్టింగ్",
    "summary": "Path A is direct. Path B is via Venkata Rao. One open listing per token.",
    "summaryTe": "నేరుగా లేదా ఏజెంట్ ద్వారా.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-05-create-listing",
    "route": "/producer/p-05-create-listing",
    "file": "app/producer/p-05-create-listing.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-06",
    "figmaFrame": "P-06 Live bids",
    "version": "v1",
    "title": "Live bids",
    "titleTe": "ప్రత్యక్ష బిడ్లు",
    "summary": "Bidders are A, B and C. The reserve stays on this phone.",
    "summaryTe": "బిడ్డర్లు A, B, C. రిజర్వ్ ఈ ఫోన్‌లో.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-06-live-bids",
    "route": "/producer/p-06-live-bids",
    "file": "app/producer/p-06-live-bids.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "P-07",
    "figmaFrame": "P-07 Negotiation",
    "version": "v3",
    "title": "Negotiation",
    "titleTe": "చర్చ",
    "summary": "Counter at ₹22,200. Both sides still need a sale OTP.",
    "summaryTe": "₹22,200 కౌంటర్. ఇరువైపుల OTP.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-07-negotiation",
    "route": "/producer/p-07-negotiation",
    "file": "app/producer/p-07-negotiation.tsx",
    "kind": "mobile",
    "template": "chat",
    "items": [
      {
        "title": "You",
        "titleTe": "మీరు",
        "subtitle": "Can you do ₹22,300 for the full lot?",
        "meta": "10:40"
      },
      {
        "title": "Agent",
        "titleTe": "ఏజెంట్",
        "subtitle": "Buyer A is at ₹22,150. Identity stays masked.",
        "meta": "10:44"
      }
    ]
  },
  {
    "id": "P-08",
    "figmaFrame": "P-08 Sale OTP",
    "version": "v3",
    "title": "Sale OTP",
    "titleTe": "అమ్మకం OTP",
    "summary": "Seller OTP confirms the deal. The buyer confirms on their phone.",
    "summaryTe": "అమ్మకపు OTP. కొనుగోలుదారు వారి ఫోన్‌లో.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-08-sale-otp",
    "route": "/producer/p-08-sale-otp",
    "file": "app/producer/p-08-sale-otp.tsx",
    "kind": "mobile",
    "template": "otp",
    "primary": {
      "label": "Confirm sale",
      "labelTe": "అమ్మకం నిర్ధారణ",
      "to": "/producer/p-40-settlement"
    }
  },
  {
    "id": "P-09",
    "figmaFrame": "P-09 Deal",
    "version": "v3",
    "title": "Deal",
    "titleTe": "ఒప్పందం",
    "summary": "Teja, 1,680 kg, offered at ₹22,400/q. Not closed yet.",
    "summaryTe": "తేజ ఇంకా ముగియలేదు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-09-deal",
    "route": "/producer/p-09-deal",
    "file": "app/producer/p-09-deal.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Token",
        "titleTe": "టోకెన్",
        "subtitle": "TKN-20261011-8F3A21C9"
      },
      {
        "title": "Close",
        "titleTe": "ముగింపు",
        "subtitle": "23:50 IST"
      },
      {
        "title": "Free cancel",
        "titleTe": "ఉచిత రద్దు",
        "subtitle": "20 minutes after both OTPs"
      }
    ]
  },
  {
    "id": "P-10",
    "figmaFrame": "P-10 Quality result",
    "version": "v3",
    "title": "Quality result",
    "titleTe": "నాణ్యత ఫలితం",
    "summary": "Moisture 9.4%. Grade A stands. You see the result, you do not sign QC.",
    "summaryTe": "తేమ 9.4%. గ్రేడ్ A.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-10-quality-result",
    "route": "/producer/p-10-quality-result",
    "file": "app/producer/p-10-quality-result.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Moisture",
        "titleTe": "తేమ",
        "subtitle": "9.4%"
      },
      {
        "title": "Colour",
        "titleTe": "రంగు",
        "subtitle": "Deep red"
      },
      {
        "title": "ASTA",
        "titleTe": "ASTA",
        "subtitle": "128"
      }
    ]
  },
  {
    "id": "P-11",
    "figmaFrame": "P-11 Arrivals",
    "version": "v3",
    "title": "Arrivals",
    "titleTe": "రాకలు",
    "summary": "Gate slip is with yard clerk Srinu.",
    "summaryTe": "గేట్ స్లిప్ క్లర్క్ శ్రీను వద్ద.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-11-arrivals",
    "route": "/producer/p-11-arrivals",
    "file": "app/producer/p-11-arrivals.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Gate",
        "titleTe": "గేట్",
        "subtitle": "Guntur bay 4 · 09:10",
        "badge": "In",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-12",
    "figmaFrame": "P-12 Payments",
    "version": "v6",
    "title": "Payments",
    "titleTe": "చెల్లింపులు",
    "summary": "Open bills, partial NEFT, and interest on the balance.",
    "summaryTe": "బిల్లులు, పాక్షిక NEFT, వడ్డీ.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-12-payments",
    "route": "/producer/p-12-payments",
    "file": "app/producer/p-12-payments.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "ledger",
    "permission": "payment.reconcile"
  },
  {
    "id": "P-13",
    "figmaFrame": "P-13 Advances",
    "version": "v3",
    "title": "Advances",
    "titleTe": "అడ్వాన్సులు",
    "summary": "Agent advances need your OTP. The app does not move the money.",
    "summaryTe": "అడ్వాన్సుకు మీ OTP. యాప్ డబ్బు కదపదు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-13-advances",
    "route": "/producer/p-13-advances",
    "file": "app/producer/p-13-advances.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "On account",
        "titleTe": "ఖాతాలో",
        "subtitle": "₹50,000 requested by Prasad",
        "badge": "OTP",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-14",
    "figmaFrame": "P-14 Agent links",
    "version": "v3",
    "title": "Agent links",
    "titleTe": "ఏజెంట్ లింక్",
    "summary": "Venkata Rao is linked. He may list on your behalf when you allow it.",
    "summaryTe": "వెంకటరావు లింక్ అయ్యారు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-14-agent-links",
    "route": "/producer/p-14-agent-links",
    "file": "app/producer/p-14-agent-links.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Ramesh Naidu Kotha",
        "titleTe": "రమేష్ నాయుడు",
        "subtitle": "Tadepalli · chilli, cotton, turmeric",
        "meta": "3 lots",
        "badge": "Linked",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-15",
    "figmaFrame": "P-15 Coins",
    "version": "v3",
    "title": "Coins",
    "titleTe": "నాణేలు",
    "summary": "Loyalty coins, not rupees. Welcome 250, plot 50, activity 25, sale closed 100.",
    "summaryTe": "నాణేలు రూపాయలు కావు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-15-coins",
    "route": "/producer/p-15-coins",
    "file": "app/producer/p-15-coins.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Balance",
        "titleTe": "బ్యాలెన్స్",
        "subtitle": "325"
      },
      {
        "title": "Next",
        "titleTe": "తర్వాత",
        "subtitle": "100 when the bill is reconciled"
      }
    ]
  },
  {
    "id": "P-16",
    "figmaFrame": "P-16 Profile",
    "version": "v3",
    "title": "Profile",
    "titleTe": "ప్రొఫైల్",
    "summary": "Ramesh Naidu Kotha · pattadar · Tadepalli.",
    "summaryTe": "రమేష్ నాయుడు · పట్టాదారు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-16-profile",
    "route": "/producer/p-16-profile",
    "file": "app/producer/p-16-profile.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Phone",
        "titleTe": "ఫోన్",
        "subtitle": "+91 98480 12345"
      },
      {
        "title": "Role",
        "titleTe": "పాత్ర",
        "subtitle": "PR_OWNER"
      }
    ]
  },
  {
    "id": "P-17",
    "figmaFrame": "P-17 Edit profile",
    "version": "v3",
    "title": "Edit profile",
    "titleTe": "ప్రొఫైల్ మార్పు",
    "summary": "Village and preferred yard.",
    "summaryTe": "ఊరు మరియు యార్డు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-17-edit-profile",
    "route": "/producer/p-17-edit-profile",
    "file": "app/producer/p-17-edit-profile.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-18",
    "figmaFrame": "P-18 Language",
    "version": "v3",
    "title": "Language",
    "titleTe": "భాష",
    "summary": "Switch this phone between English and Telugu.",
    "summaryTe": "ఇంగ్లీష్ మరియు తెలుగు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-18-language",
    "route": "/producer/p-18-language",
    "file": "app/producer/p-18-language.tsx",
    "kind": "mobile",
    "template": "language"
  },
  {
    "id": "P-19",
    "figmaFrame": "P-19 Add plot",
    "version": "v3",
    "title": "Add plot",
    "titleTe": "ప్లాట్ జోడింపు",
    "summary": "Name it, for example Tank bund south.",
    "summaryTe": "పేరు పెట్టండి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-19-add-plot",
    "route": "/producer/p-19-add-plot",
    "file": "app/producer/p-19-add-plot.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-20",
    "figmaFrame": "P-20 Plot detail",
    "version": "v3",
    "title": "Plot detail",
    "titleTe": "ప్లాట్ వివరం",
    "summary": "North field, 1.8 acres, survey 214/B.",
    "summaryTe": "ఉత్తర పొలం 1.8 ఎకరాలు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-20-plot-detail",
    "route": "/producer/p-20-plot-detail",
    "file": "app/producer/p-20-plot-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Survey",
        "titleTe": "సర్వే",
        "subtitle": "214/B"
      },
      {
        "title": "Crop",
        "titleTe": "పంట",
        "subtitle": "Chilli Teja"
      }
    ]
  },
  {
    "id": "P-21",
    "figmaFrame": "P-21 Assign crop",
    "version": "v3",
    "title": "Assign crop",
    "titleTe": "పంట కేటాయింపు",
    "summary": "Category, commodity, variety. Chilli → Teja.",
    "summaryTe": "వర్గం, సరుకు, రకం.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-21-assign-crop",
    "route": "/producer/p-21-assign-crop",
    "file": "app/producer/p-21-assign-crop.tsx",
    "kind": "mobile",
    "template": "cascade"
  },
  {
    "id": "P-22",
    "figmaFrame": "P-22 Crop calendar",
    "version": "v3",
    "title": "Crop calendar",
    "titleTe": "పంట క్యాలెండర్",
    "summary": "15 May nursery, 12 Aug transplant, 8 Oct harvest.",
    "summaryTe": "నర్సరీ, నాటు, కోత.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-22-crop-calendar",
    "route": "/producer/p-22-crop-calendar",
    "file": "app/producer/p-22-crop-calendar.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "15 May",
        "titleTe": "15 మే",
        "subtitle": "Nursery"
      },
      {
        "title": "12 Aug",
        "titleTe": "12 ఆగస్టు",
        "subtitle": "Transplant"
      },
      {
        "title": "8 Oct",
        "titleTe": "8 అక్టోబర్",
        "subtitle": "Harvest"
      }
    ]
  },
  {
    "id": "P-23",
    "figmaFrame": "P-23 Add activity",
    "version": "v3",
    "title": "Add activity",
    "titleTe": "పని జోడింపు",
    "summary": "Irrigation, spray, labour. No future dates.",
    "summaryTe": "నీరు, స్ప్రే, కూలీ. రాబోయే తేదీలు లేవు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-23-add-activity",
    "route": "/producer/p-23-add-activity",
    "file": "app/producer/p-23-add-activity.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-24",
    "figmaFrame": "P-24 Activity detail",
    "version": "v3",
    "title": "Activity detail",
    "titleTe": "పని వివరం",
    "summary": "Flowering spray on 2 Oct. Delete asks for a confirm.",
    "summaryTe": "2 అక్టోబర్ స్ప్రే.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-24-activity-detail",
    "route": "/producer/p-24-activity-detail",
    "file": "app/producer/p-24-activity-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Cost",
        "titleTe": "ఖర్చు",
        "subtitle": "₹1,800"
      },
      {
        "title": "Who",
        "titleTe": "ఎవరు",
        "subtitle": "Ravi Sprayers"
      }
    ]
  },
  {
    "id": "P-25",
    "figmaFrame": "P-25 Input cost",
    "version": "v3",
    "title": "Input cost",
    "titleTe": "ఇన్‌పుట్ ఖర్చు",
    "summary": "Urea and plant protection against the plot.",
    "summaryTe": "యూరియా మరియు మందు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-25-input-cost",
    "route": "/producer/p-25-input-cost",
    "file": "app/producer/p-25-input-cost.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-26",
    "figmaFrame": "P-26 Labour",
    "version": "v3",
    "title": "Labour",
    "titleTe": "కూలీ",
    "summary": "Nagamma's picking day and wage.",
    "summaryTe": "నాగమ్మ కూలీ.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-26-labour",
    "route": "/producer/p-26-labour",
    "file": "app/producer/p-26-labour.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-27",
    "figmaFrame": "P-27 Harvest batches",
    "version": "v3",
    "title": "Harvest batches",
    "titleTe": "కోత బ్యాచ్‌లు",
    "summary": "One batch became token TKN-20261011-8F3A21C9.",
    "summaryTe": "ఒక బ్యాచ్ టోకెన్ అయింది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-27-harvest-batches",
    "route": "/producer/p-27-harvest-batches",
    "file": "app/producer/p-27-harvest-batches.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      },
      {
        "title": "Nizamabad turmeric",
        "titleTe": "నిజామాబాద్ పసుపు",
        "subtitle": "30 bags · finger",
        "meta": "₹16,200/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "BPT 5204 paddy",
        "titleTe": "బిపిటి వరి",
        "subtitle": "Kurnool · billed",
        "meta": "TRD-2026-004218",
        "badge": "Billed",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-28",
    "figmaFrame": "P-28 Record harvest",
    "version": "v3",
    "title": "Record harvest",
    "titleTe": "కోత నమోదు",
    "summary": "Bags and estimated kg. The weighbridge is the legal weight.",
    "summaryTe": "బ్యాగులు మరియు అంచనా కిలోలు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-28-record-harvest",
    "route": "/producer/p-28-record-harvest",
    "file": "app/producer/p-28-record-harvest.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-29",
    "figmaFrame": "P-29 Process and pack",
    "version": "v3",
    "title": "Process and pack",
    "titleTe": "ప్యాక్",
    "summary": "40 kg jute bags for chilli. Packing is its own bill line.",
    "summaryTe": "40 కిలో బస్తాలు. ప్యాకింగ్ వేరు లైన్.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-29-process-and-pack",
    "route": "/producer/p-29-process-and-pack",
    "file": "app/producer/p-29-process-and-pack.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-30",
    "figmaFrame": "P-30 Self quality",
    "version": "v3",
    "title": "Self quality",
    "titleTe": "స్వీయ నాణ్యత",
    "summary": "Your own moisture and colour before the lab.",
    "summaryTe": "ల్యాబ్‌కు ముందు మీ తేమ, రంగు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-30-self-quality",
    "route": "/producer/p-30-self-quality",
    "file": "app/producer/p-30-self-quality.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-31",
    "figmaFrame": "P-31 Create token",
    "version": "v3",
    "title": "Create token",
    "titleTe": "టోకెన్",
    "summary": "Token preview. This is a lot id, not a blockchain mint.",
    "summaryTe": "టోకెన్ ఒక లాట్ ఐడి. బ్లాక్‌చెయిన్ కాదు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-31-create-token",
    "route": "/producer/p-31-create-token",
    "file": "app/producer/p-31-create-token.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-32",
    "figmaFrame": "P-32 Token created",
    "version": "v3",
    "title": "Token created",
    "titleTe": "టోకెన్ సిద్ధం",
    "summary": "TKN-20261011-8F3A21C9 is ready to list.",
    "summaryTe": "టోకెన్ లిస్ట్‌కు సిద్ధం.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-32-token-created",
    "route": "/producer/p-32-token-created",
    "file": "app/producer/p-32-token-created.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Token",
        "titleTe": "టోకెన్",
        "subtitle": "TKN-20261011-8F3A21C9",
        "badge": "Ready",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-33",
    "figmaFrame": "P-33 My tokens",
    "version": "v3",
    "title": "My tokens",
    "titleTe": "నా టోకెన్లు",
    "summary": "Every lot token from this farm.",
    "summaryTe": "ఈ పొలం టోకెన్లు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-33-my-tokens",
    "route": "/producer/p-33-my-tokens",
    "file": "app/producer/p-33-my-tokens.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      },
      {
        "title": "Nizamabad turmeric",
        "titleTe": "నిజామాబాద్ పసుపు",
        "subtitle": "30 bags · finger",
        "meta": "₹16,200/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "BPT 5204 paddy",
        "titleTe": "బిపిటి వరి",
        "subtitle": "Kurnool · billed",
        "meta": "TRD-2026-004218",
        "badge": "Billed",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-34",
    "figmaFrame": "P-34 Token detail",
    "version": "v3",
    "title": "Token detail",
    "titleTe": "టోకెన్ వివరం",
    "summary": "Provenance from plot to bag. Share does not reveal the reserve.",
    "summaryTe": "ప్లాట్ నుండి బ్యాగు వరకు. రిజర్వ్ పంచరు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-34-token-detail",
    "route": "/producer/p-34-token-detail",
    "file": "app/producer/p-34-token-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Plot",
        "titleTe": "ప్లాట్",
        "subtitle": "North field"
      },
      {
        "title": "Variety",
        "titleTe": "రకం",
        "subtitle": "Teja"
      },
      {
        "title": "Grade",
        "titleTe": "గ్రేడ్",
        "subtitle": "A"
      }
    ]
  },
  {
    "id": "P-35",
    "figmaFrame": "P-35 Sell options",
    "version": "v3",
    "title": "Sell options",
    "titleTe": "అమ్మకం మార్గాలు",
    "summary": "At the farm, via the commission agent, or store and sell.",
    "summaryTe": "పొలంలో, ఏజెంట్ ద్వారా, లేదా నిల్వ.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-35-sell-options",
    "route": "/producer/p-35-sell-options",
    "file": "app/producer/p-35-sell-options.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Path A",
        "titleTe": "మార్గం A",
        "subtitle": "You list"
      },
      {
        "title": "Path B",
        "titleTe": "మార్గం B",
        "subtitle": "Venkata Rao lists"
      },
      {
        "title": "Path C",
        "titleTe": "మార్గం C",
        "subtitle": "Cold store, sell later"
      }
    ]
  },
  {
    "id": "P-36",
    "figmaFrame": "P-36 Preview listing",
    "version": "v3",
    "title": "Preview listing",
    "titleTe": "లిస్టింగ్ మునుజూపు",
    "summary": "Chilli Teja, grade A, floor is the offer you publish.",
    "summaryTe": "తేజ గ్రేడ్ A.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-36-preview-listing",
    "route": "/producer/p-36-preview-listing",
    "file": "app/producer/p-36-preview-listing.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Offer",
        "titleTe": "ఆఫర్",
        "subtitle": "₹22,400/q"
      },
      {
        "title": "Bags",
        "titleTe": "బ్యాగులు",
        "subtitle": "42"
      }
    ]
  },
  {
    "id": "P-37",
    "figmaFrame": "P-37 Listing published",
    "version": "v3",
    "title": "Listing published",
    "titleTe": "లిస్టింగ్ ప్రచురణ",
    "summary": "Buyers can browse. Your name stays masked.",
    "summaryTe": "కొనుగోలుదారులు చూడగలరు. పేరు దాచబడింది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-37-listing-published",
    "route": "/producer/p-37-listing-published",
    "file": "app/producer/p-37-listing-published.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Link",
        "titleTe": "లింక్",
        "subtitle": "rytuvo://lot/TKN-20261011-8F3A21C9"
      }
    ]
  },
  {
    "id": "P-38",
    "figmaFrame": "P-38 My listings",
    "version": "v3",
    "title": "My listings",
    "titleTe": "నా లిస్టింగ్‌లు",
    "summary": "Open, sold and stored lots.",
    "summaryTe": "తెరిచిన, అమ్మిన, నిల్వ లాట్లు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-38-my-listings",
    "route": "/producer/p-38-my-listings",
    "file": "app/producer/p-38-my-listings.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      },
      {
        "title": "Nizamabad turmeric",
        "titleTe": "నిజామాబాద్ పసుపు",
        "subtitle": "30 bags · finger",
        "meta": "₹16,200/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "BPT 5204 paddy",
        "titleTe": "బిపిటి వరి",
        "subtitle": "Kurnool · billed",
        "meta": "TRD-2026-004218",
        "badge": "Billed",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-39",
    "figmaFrame": "P-39 Final offer",
    "version": "v3",
    "title": "Final offer",
    "titleTe": "చివరి ఆఫర్",
    "summary": "Buyer A is the high bid. You still choose.",
    "summaryTe": "కొనుగోలుదారు A ఎక్కువ. నిర్ణయం మీది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-39-final-offer",
    "route": "/producer/p-39-final-offer",
    "file": "app/producer/p-39-final-offer.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "P-40",
    "figmaFrame": "P-40 Settlement",
    "version": "v3",
    "title": "Settlement",
    "titleTe": "సెటిల్‌మెంట్",
    "summary": "Commodity line is kg/100 × price per quintal. Packing is separate.",
    "summaryTe": "సరుకు లైన్ కిలో/100 × క్వింటాల్ ధర.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-40-settlement",
    "route": "/producer/p-40-settlement",
    "file": "app/producer/p-40-settlement.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Commodity",
        "titleTe": "సరుకు",
        "subtitle": "₹3,16,000"
      },
      {
        "title": "Packing",
        "titleTe": "ప్యాకింగ్",
        "subtitle": "₹2,400"
      },
      {
        "title": "Due",
        "titleTe": "గడువు",
        "subtitle": "Sale + 15 days"
      }
    ]
  },
  {
    "id": "P-41",
    "figmaFrame": "P-41 Change agent",
    "version": "v3",
    "title": "Change agent",
    "titleTe": "ఏజెంట్ మార్పు",
    "summary": "Move the link only with a fresh OTP.",
    "summaryTe": "కొత్త OTPతోనే మార్పు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-41-change-agent",
    "route": "/producer/p-41-change-agent",
    "file": "app/producer/p-41-change-agent.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Current",
        "titleTe": "ప్రస్తుతం",
        "subtitle": "Venkata Rao Commission"
      }
    ]
  },
  {
    "id": "P-42",
    "figmaFrame": "P-42 Arrange transport",
    "version": "v3",
    "title": "Arrange transport",
    "titleTe": "రవాణా",
    "summary": "Durga Roadlines quoted ₹18,400 Guntur to the buyer godown.",
    "summaryTe": "దుర్గా రోడ్‌లైన్స్ ₹18,400.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-42-arrange-transport",
    "route": "/producer/p-42-arrange-transport",
    "file": "app/producer/p-42-arrange-transport.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "AP 07 TX 4545",
        "titleTe": "వాహనం",
        "subtitle": "Nagaraju · loading",
        "badge": "Trip",
        "tone": "info"
      }
    ]
  },
  {
    "id": "P-43",
    "figmaFrame": "P-43 Transport permit",
    "version": "v3",
    "title": "Transport permit",
    "titleTe": "పర్మిట్",
    "summary": "Permit TRD-CHL-089234 rides with the vehicle.",
    "summaryTe": "పర్మిట్ వాహనంతో ఉంటుంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-43-transport-permit",
    "route": "/producer/p-43-transport-permit",
    "file": "app/producer/p-43-transport-permit.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Permit",
        "titleTe": "పర్మిట్",
        "subtitle": "TRD-CHL-089234"
      }
    ]
  },
  {
    "id": "P-44",
    "figmaFrame": "P-44 Find storage",
    "version": "v3",
    "title": "Find storage",
    "titleTe": "నిల్వ వెతకండి",
    "summary": "Guntur Cold Storage, ₹5 per bag per day.",
    "summaryTe": "గుంటూరు కోల్డ్ స్టోరేజ్, బ్యాగుకు రోజుకు ₹5.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-44-find-storage",
    "route": "/producer/p-44-find-storage",
    "file": "app/producer/p-44-find-storage.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Chamber B-2",
        "titleTe": "చాంబర్ B-2",
        "subtitle": "6°C · Byadgi",
        "badge": "Space",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-45",
    "figmaFrame": "P-45 Storage detail",
    "version": "v3",
    "title": "Storage detail",
    "titleTe": "నిల్వ వివరం",
    "summary": "Bond for Byadgi already in chamber B-2.",
    "summaryTe": "బ్యాడగి బాండ్ B-2లో ఉంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-45-storage-detail",
    "route": "/producer/p-45-storage-detail",
    "file": "app/producer/p-45-storage-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Rent",
        "titleTe": "అద్దె",
        "subtitle": "₹5 / bag / day"
      },
      {
        "title": "Bags",
        "titleTe": "బ్యాగులు",
        "subtitle": "18"
      }
    ]
  },
  {
    "id": "P-46",
    "figmaFrame": "P-46 Confirm storage",
    "version": "v3",
    "title": "Confirm storage",
    "titleTe": "నిల్వ నిర్ధారణ",
    "summary": "Your OTP releases the bond request to the warehouse.",
    "summaryTe": "మీ OTP బాండ్ అభ్యర్థన.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-46-confirm-storage",
    "route": "/producer/p-46-confirm-storage",
    "file": "app/producer/p-46-confirm-storage.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "P-47",
    "figmaFrame": "P-47 Sample requests",
    "version": "v3",
    "title": "Sample requests",
    "titleTe": "నమూనా అభ్యర్థనలు",
    "summary": "A buyer asked for 200 g. You approve.",
    "summaryTe": "కొనుగోలుదారు 200 గ్రాములు అడిగారు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-47-sample-requests",
    "route": "/producer/p-47-sample-requests",
    "file": "app/producer/p-47-sample-requests.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Sai Exports",
        "titleTe": "సాయి ఎక్స్‌పోర్ట్స్",
        "subtitle": "200 g Teja",
        "badge": "Pending",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-48",
    "figmaFrame": "P-48 Loan offers",
    "version": "v3",
    "title": "Loan offers",
    "titleTe": "రుణ ఆఫర్లు",
    "summary": "Deccan Agri Finance can look at the warehouse receipt if you consent.",
    "summaryTe": "గోడౌన్ రసీదుపై రుణం, మీ అనుమతితో.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-48-loan-offers",
    "route": "/producer/p-48-loan-offers",
    "file": "app/producer/p-48-loan-offers.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "₹5,00,000",
        "titleTe": "రుణం",
        "subtitle": "Score 6.5 · receipt TKN-20260928",
        "badge": "Review",
        "tone": "info"
      }
    ]
  },
  {
    "id": "P-49",
    "figmaFrame": "P-49 Apply for loan",
    "version": "v3",
    "title": "Apply for loan",
    "titleTe": "రుణం అభ్యర్థన",
    "summary": "Consent OTP goes to your phone, not the banker's.",
    "summaryTe": "అనుమతి OTP మీ ఫోన్‌కే.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-49-apply-for-loan",
    "route": "/producer/p-49-apply-for-loan",
    "file": "app/producer/p-49-apply-for-loan.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-50",
    "figmaFrame": "P-50 My loans",
    "version": "v3",
    "title": "My loans",
    "titleTe": "నా రుణాలు",
    "summary": "Applications you consented to.",
    "summaryTe": "మీరు అనుమతించిన అభ్యర్థనలు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-50-my-loans",
    "route": "/producer/p-50-my-loans",
    "file": "app/producer/p-50-my-loans.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Deccan Agri",
        "titleTe": "దక్కన్",
        "subtitle": "Appraisal",
        "badge": "Open",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-51",
    "figmaFrame": "P-51 My ledger",
    "version": "v3",
    "title": "My ledger",
    "titleTe": "నా లెడ్జర్",
    "summary": "What is due to the farm after commission.",
    "summaryTe": "కమీషన్ తర్వాత పొలానికి రావలసినది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-51-my-ledger",
    "route": "/producer/p-51-my-ledger",
    "file": "app/producer/p-51-my-ledger.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "P-52",
    "figmaFrame": "P-52 Request advance",
    "version": "v3",
    "title": "Request advance",
    "titleTe": "అడ్వాన్సు అభ్యర్థన",
    "summary": "You ask. The munim records. You confirm with OTP.",
    "summaryTe": "మీరు అడగండి. మునీం నమోదు. మీరు OTP.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-52-request-advance",
    "route": "/producer/p-52-request-advance",
    "file": "app/producer/p-52-request-advance.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-53",
    "figmaFrame": "P-53 Repay advance",
    "version": "v3",
    "title": "Repay advance",
    "titleTe": "అడ్వాన్సు తిరిగి",
    "summary": "Repayment is a record against the next bill.",
    "summaryTe": "తిరిగి చెల్లింపు తర్వాతి బిల్లుపై.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-53-repay-advance",
    "route": "/producer/p-53-repay-advance",
    "file": "app/producer/p-53-repay-advance.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-54",
    "figmaFrame": "P-54 Market prices",
    "version": "v3",
    "title": "Market prices",
    "titleTe": "మార్కెట్ ధరలు",
    "summary": "Modal prices this morning across six yards.",
    "summaryTe": "ఆరు యార్డుల మోడల్ ధరలు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-54-market-prices",
    "route": "/producer/p-54-market-prices",
    "file": "app/producer/p-54-market-prices.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Guntur Teja",
        "titleTe": "గుంటూరు తేజ",
        "subtitle": "₹21,600/q",
        "badge": "Modal",
        "tone": "gold"
      },
      {
        "title": "Warangal Bunny",
        "titleTe": "వరంగల్ బన్నీ",
        "subtitle": "₹70,200/q"
      },
      {
        "title": "Nizamabad finger",
        "titleTe": "నిజామాబాద్",
        "subtitle": "₹15,400/q"
      },
      {
        "title": "Kurnool BPT",
        "titleTe": "కర్నూలు",
        "subtitle": "₹2,240/q"
      },
      {
        "title": "Unjha chilli",
        "titleTe": "ఉంఝా",
        "subtitle": "₹20,100/q"
      },
      {
        "title": "Rajkot Shankar-6",
        "titleTe": "రాజ్‌కోట్",
        "subtitle": "₹68,400/q"
      }
    ]
  },
  {
    "id": "P-55",
    "figmaFrame": "v5 producer Grok Telugu",
    "version": "v5",
    "title": "Ask Grok",
    "titleTe": "గ్రోక్‌ను అడగండి",
    "summary": "Suggestions with a confidence score. Nothing is done for you.",
    "summaryTe": "నమ్మకంతో సూచనలు. ఏదీ మీకోసం జరగదు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-55-ask-grok",
    "route": "/producer/p-55-ask-grok",
    "file": "app/producer/p-55-ask-grok.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "chat"
  },
  {
    "id": "P-56",
    "figmaFrame": "P-56 Weather and risk",
    "version": "v3",
    "title": "Weather and risk",
    "titleTe": "వాతావరణం",
    "summary": "Light rain risk on the north field this week.",
    "summaryTe": "ఈ వారం ఉత్తర పొలంపై వర్షం.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-56-weather-and-risk",
    "route": "/producer/p-56-weather-and-risk",
    "file": "app/producer/p-56-weather-and-risk.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Today",
        "titleTe": "ఈ రోజు",
        "subtitle": "31°C · dry"
      },
      {
        "title": "Risk",
        "titleTe": "రిస్క్",
        "subtitle": "Low fungal pressure"
      }
    ]
  },
  {
    "id": "P-57",
    "figmaFrame": "P-57 Demand forecast",
    "version": "v3",
    "title": "Demand forecast",
    "titleTe": "డిమాండ్",
    "summary": "Grok thinks Guntur arrivals stay thin after 3 pm.",
    "summaryTe": "సాయంత్రం రాకలు తక్కువగా ఉండొచ్చు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-57-demand-forecast",
    "route": "/producer/p-57-demand-forecast",
    "file": "app/producer/p-57-demand-forecast.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Confidence",
        "titleTe": "నమ్మకం",
        "subtitle": "74%",
        "badge": "Suggestion",
        "tone": "gold"
      }
    ]
  },
  {
    "id": "P-58",
    "figmaFrame": "P-58 Profit estimator",
    "version": "v3",
    "title": "Profit estimator",
    "titleTe": "లాభం అంచనా",
    "summary": "Offer versus costs. It does not place a bid.",
    "summaryTe": "ఆఫర్ మరియు ఖర్చులు. బిడ్ వేయదు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-58-profit-estimator",
    "route": "/producer/p-58-profit-estimator",
    "file": "app/producer/p-58-profit-estimator.tsx",
    "kind": "mobile",
    "template": "detail",
    "stats": [
      {
        "label": "Offer value",
        "labelTe": "ఆఫర్ విలువ",
        "value": "₹3.76 L"
      },
      {
        "label": "Costs",
        "labelTe": "ఖర్చులు",
        "value": "₹48,000"
      },
      {
        "label": "Estimate",
        "labelTe": "అంచనా",
        "value": "₹3.28 L"
      }
    ]
  },
  {
    "id": "P-59",
    "figmaFrame": "P-59 Services",
    "version": "v3",
    "title": "Services",
    "titleTe": "సేవలు",
    "summary": "Spraying, labour and transport you can request.",
    "summaryTe": "స్ప్రే, కూలీ, రవాణా.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-59-services",
    "route": "/producer/p-59-services",
    "file": "app/producer/p-59-services.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Ravi Sprayers",
        "titleTe": "రవి స్ప్రేయర్స్",
        "subtitle": "2 acres booked",
        "badge": "Assigned",
        "tone": "info"
      }
    ]
  },
  {
    "id": "P-60",
    "figmaFrame": "P-60 Request service",
    "version": "v3",
    "title": "Request service",
    "titleTe": "సేవ అభ్యర్థన",
    "summary": "Ask for a sprayer on the east plot.",
    "summaryTe": "తూర్పు ప్లాట్‌కు స్ప్రేయర్.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-60-request-service",
    "route": "/producer/p-60-request-service",
    "file": "app/producer/p-60-request-service.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-61",
    "figmaFrame": "P-61 Track service",
    "version": "v3",
    "title": "Track service",
    "titleTe": "సేవ ట్రాక్",
    "summary": "The job is assigned. Payment is still a record, not a transfer.",
    "summaryTe": "పని కేటాయింపు అయింది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-61-track-service",
    "route": "/producer/p-61-track-service",
    "file": "app/producer/p-61-track-service.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Assigned"
      }
    ]
  },
  {
    "id": "P-62",
    "figmaFrame": "P-62 Service settlement",
    "version": "v3",
    "title": "Service settlement",
    "titleTe": "సేవ సెటిల్‌మెంట్",
    "summary": "₹1,800 spray, to be adjusted in the ledger.",
    "summaryTe": "₹1,800 స్ప్రే లెడ్జర్‌లో.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-62-service-settlement",
    "route": "/producer/p-62-service-settlement",
    "file": "app/producer/p-62-service-settlement.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Amount",
        "titleTe": "మొత్తం",
        "subtitle": "₹1,800"
      }
    ]
  },
  {
    "id": "P-63",
    "figmaFrame": "P-63 My team",
    "version": "v3",
    "title": "My team",
    "titleTe": "నా బృందం",
    "summary": "Owner, farm manager Suresh, field worker Nagamma.",
    "summaryTe": "యజమాని, మేనేజర్ సురేష్, కూలీ నాగమ్మ.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-63-my-team",
    "route": "/producer/p-63-my-team",
    "file": "app/producer/p-63-my-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "P-64",
    "figmaFrame": "P-64 Invite member",
    "version": "v3",
    "title": "Invite member",
    "titleTe": "సభ్యుడిని ఆహ్వానించండి",
    "summary": "Invite by phone. They accept with OTP.",
    "summaryTe": "ఫోన్‌తో ఆహ్వానం. OTPతో అంగీకారం.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-64-invite-member",
    "route": "/producer/p-64-invite-member",
    "file": "app/producer/p-64-invite-member.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-65",
    "figmaFrame": "P-65 Role limits",
    "version": "v3",
    "title": "Role limits",
    "titleTe": "పాత్ర పరిమితులు",
    "summary": "Suresh may accept a sale up to ₹3,00,000. Above that, you get the OTP.",
    "summaryTe": "సురేష్ ₹3 లక్షల వరకు. పైన మీ OTP.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-65-role-limits",
    "route": "/producer/p-65-role-limits",
    "file": "app/producer/p-65-role-limits.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "P-66",
    "figmaFrame": "P-66 Notifications",
    "version": "v3",
    "title": "Notifications",
    "titleTe": "నోటిఫికేషన్లు",
    "summary": "Bids, mismatches and reminders.",
    "summaryTe": "బిడ్లు, తేడాలు, రిమైండర్లు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-66-notifications",
    "route": "/producer/p-66-notifications",
    "file": "app/producer/p-66-notifications.tsx",
    "kind": "mobile",
    "template": "alerts",
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-67",
    "figmaFrame": "P-67 Welcome coins",
    "version": "v3",
    "title": "Welcome coins",
    "titleTe": "స్వాగత నాణేలు",
    "summary": "250 coins landed after profile. One credit per rule.",
    "summaryTe": "ప్రొఫైల్ తర్వాత 250.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-67-welcome-coins",
    "route": "/producer/p-67-welcome-coins",
    "file": "app/producer/p-67-welcome-coins.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Rule",
        "titleTe": "నియమం",
        "subtitle": "WELCOME_BONUS"
      }
    ]
  },
  {
    "id": "P-68",
    "figmaFrame": "P-68 Disputes",
    "version": "v3",
    "title": "Disputes",
    "titleTe": "వివాదాలు",
    "summary": "Moisture on the stored Byadgi is with the yard.",
    "summaryTe": "బ్యాడగి తేమ వివాదం యార్డు వద్ద.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-68-disputes",
    "route": "/producer/p-68-disputes",
    "file": "app/producer/p-68-disputes.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "D-2041",
        "titleTe": "వివాదం",
        "subtitle": "Moisture deduction",
        "badge": "Yard",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "P-69",
    "figmaFrame": "P-69 Documents",
    "version": "v3",
    "title": "Documents",
    "titleTe": "పత్రాలు",
    "summary": "Pattadar passbook and bank proof, on this phone only in the demo.",
    "summaryTe": "పట్టా మరియు బ్యాంక్ రుజువు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-69-documents",
    "route": "/producer/p-69-documents",
    "file": "app/producer/p-69-documents.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Passbook",
        "titleTe": "పాస్‌బుక్",
        "subtitle": "Uploaded"
      },
      {
        "title": "PAN",
        "titleTe": "పాన్",
        "subtitle": "Uploaded"
      }
    ]
  },
  {
    "id": "P-70",
    "figmaFrame": "P-70 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Language, offline demo, AI consent.",
    "summaryTe": "భాష, ఆఫ్‌లైన్, AI అనుమతి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-70-settings",
    "route": "/producer/p-70-settings",
    "file": "app/producer/p-70-settings.tsx",
    "kind": "mobile",
    "template": "settings",
    "items": [
      {
        "title": "AI",
        "titleTe": "AI",
        "subtitle": "Suggestions only",
        "badge": "On",
        "tone": "success"
      },
      {
        "title": "Offline demo",
        "titleTe": "ఆఫ్‌లైన్",
        "subtitle": "Toggle on the weighment screen"
      }
    ]
  },
  {
    "id": "P-71",
    "figmaFrame": "P-71 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "How reserves, weighment and interest work.",
    "summaryTe": "రిజర్వ్, తూకం, వడ్డీ.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-71-help",
    "route": "/producer/p-71-help",
    "file": "app/producer/p-71-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Reserve",
        "titleTe": "రిజర్వ్",
        "subtitle": "Hidden from buyers"
      },
      {
        "title": "Interest",
        "titleTe": "వడ్డీ",
        "subtitle": "21% simple after day 15"
      }
    ]
  },
  {
    "id": "P-72",
    "figmaFrame": "P-72 empty",
    "version": "v3",
    "title": "Empty lots",
    "titleTe": "ఖాళీ లాట్లు",
    "summary": "A new farm has no tokens yet.",
    "summaryTe": "కొత్త పొలానికి టోకెన్లు లేవు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-72-empty-lots",
    "route": "/producer/p-72-empty-lots",
    "file": "app/producer/p-72-empty-lots.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "P-73",
    "figmaFrame": "P-73 loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "Prices are loading from the yard.",
    "summaryTe": "ధరలు లోడ్ అవుతున్నాయి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-73-loading",
    "route": "/producer/p-73-loading",
    "file": "app/producer/p-73-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "P-74",
    "figmaFrame": "P-74 offline",
    "version": "v5",
    "title": "Offline",
    "titleTe": "ఆఫ్‌లైన్",
    "summary": "The phone keeps bag weights until the network returns.",
    "summaryTe": "నెట్‌వర్క్ వచ్చే వరకు తూకాలు ఫోన్‌లో.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-74-offline",
    "route": "/producer/p-74-offline",
    "file": "app/producer/p-74-offline.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "P-75",
    "figmaFrame": "P-75 error",
    "version": "v3",
    "title": "Error",
    "titleTe": "లోపం",
    "summary": "The yard did not answer. Your draft is still here.",
    "summaryTe": "యార్డు సమాధానం లేదు. డ్రాఫ్ట్ ఉంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-75-error",
    "route": "/producer/p-75-error",
    "file": "app/producer/p-75-error.tsx",
    "kind": "mobile",
    "template": "error"
  },
  {
    "id": "P-76",
    "figmaFrame": "v5 producer weighment live",
    "version": "v5",
    "title": "Weighment live",
    "titleTe": "ప్రత్యక్ష తూకం",
    "summary": "Per-bag kilograms on the seller phone. The buyer phone is the same session.",
    "summaryTe": "అమ్మకపు ఫోన్‌లో బ్యాగు కిలోలు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-76-weighment-live",
    "route": "/producer/p-76-weighment-live",
    "file": "app/producer/p-76-weighment-live.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "live"
  },
  {
    "id": "P-77",
    "figmaFrame": "v5 token autofill",
    "version": "v5",
    "title": "Token autofill",
    "titleTe": "టోకెన్ ఆటోఫిల్",
    "summary": "The gate token fills the lot, bags and buyer.",
    "summaryTe": "గేట్ టోకెన్ లాట్, బ్యాగులు, కొనుగోలుదారుని నింపుతుంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-77-token-autofill",
    "route": "/producer/p-77-token-autofill",
    "file": "app/producer/p-77-token-autofill.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "autofill"
  },
  {
    "id": "P-78",
    "figmaFrame": "v5 discrepancy",
    "version": "v5",
    "title": "Discrepancy",
    "titleTe": "తేడా",
    "summary": "Bag B-03 is 41.4 kg on this phone and 39.6 kg on the buyer phone.",
    "summaryTe": "B-03 ఈ ఫోన్‌లో 41.4, కొనుగోలు ఫోన్‌లో 39.6.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-78-discrepancy",
    "route": "/producer/p-78-discrepancy",
    "file": "app/producer/p-78-discrepancy.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "discrepancy"
  },
  {
    "id": "P-79",
    "figmaFrame": "v5 resolved",
    "version": "v5",
    "title": "Resolved bag",
    "titleTe": "తేడా పరిష్కారం",
    "summary": "The wrong side corrects the bag. A match clears the alert.",
    "summaryTe": "తప్పు వైపు సరిచేస్తే అలర్ట్ పోతుంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-79-resolved-bag",
    "route": "/producer/p-79-resolved-bag",
    "file": "app/producer/p-79-resolved-bag.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "resolved"
  },
  {
    "id": "P-80",
    "figmaFrame": "v5 offline sync",
    "version": "v5",
    "title": "Offline queue",
    "titleTe": "ఆఫ్‌లైన్ క్యూ",
    "summary": "Entries queue on the phone and compare when you reconnect.",
    "summaryTe": "ఎంట్రీలు క్యూలో ఉండి కనెక్ట్ అయిన తర్వాత పోల్చబడతాయి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-80-offline-queue",
    "route": "/producer/p-80-offline-queue",
    "file": "app/producer/p-80-offline-queue.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "offline"
  },
  {
    "id": "P-81",
    "figmaFrame": "v5 final summary",
    "version": "v5",
    "title": "Final summary",
    "titleTe": "చివరి సారాంశం",
    "summary": "Bags, total kg, price and amount. Both OTPs lock it.",
    "summaryTe": "బ్యాగులు, కిలోలు, ధర. రెండు OTPలు లాక్ చేస్తాయి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-81-final-summary",
    "route": "/producer/p-81-final-summary",
    "file": "app/producer/p-81-final-summary.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "summary"
  },
  {
    "id": "P-82",
    "figmaFrame": "v5 SMS preview",
    "version": "v5",
    "title": "SMS preview",
    "titleTe": "SMS మునుజూపు",
    "summary": "The message the producer and, for sourcing deals, the client would receive.",
    "summaryTe": "రైతుకు మరియు క్లయింట్‌కు వెళ్ళే సందేశం.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-82-sms-preview",
    "route": "/producer/p-82-sms-preview",
    "file": "app/producer/p-82-sms-preview.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "sms"
  },
  {
    "id": "P-83",
    "figmaFrame": "v7 producer offer reserve",
    "version": "v7",
    "title": "Offer and reserve",
    "titleTe": "ఆఫర్ మరియు రిజర్వ్",
    "summary": "Offer ₹22,400/q. Hidden reserve ₹21,400/q. Auto-accept is on.",
    "summaryTe": "ఆఫర్ ₹22,400. రిజర్వ్ ₹21,400. ఆటో అంగీకారం ఉంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-83-offer-and-reserve",
    "route": "/producer/p-83-offer-and-reserve",
    "file": "app/producer/p-83-offer-and-reserve.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "offer"
  },
  {
    "id": "P-84",
    "figmaFrame": "v7 bids vs reserve",
    "version": "v7",
    "title": "Bids versus reserve",
    "titleTe": "బిడ్లు మరియు రిజర్వ్",
    "summary": "You see every bid marked above or below the reserve. Buyers do not.",
    "summaryTe": "మీరు ప్రతి బిడ్ చూస్తారు. కొనుగోలుదారులు చూడరు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-84-bids-versus-reserve",
    "route": "/producer/p-84-bids-versus-reserve",
    "file": "app/producer/p-84-bids-versus-reserve.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "P-85",
    "figmaFrame": "v7 edit reserve audit",
    "version": "v7",
    "title": "Edit reserve",
    "titleTe": "రిజర్వ్ మార్పు",
    "summary": "Editable until close, with OTP and an audit line. Rejected bids stay rejected.",
    "summaryTe": "ముగిసే వరకు OTPతో మార్పు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-85-edit-reserve",
    "route": "/producer/p-85-edit-reserve",
    "file": "app/producer/p-85-edit-reserve.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "edit"
  },
  {
    "id": "P-86",
    "figmaFrame": "v7 close sold",
    "version": "v7",
    "title": "Close sold",
    "titleTe": "అమ్మకం ముగింపు",
    "summary": "Highest bid at or above the reserve sells. QC OTP is next.",
    "summaryTe": "రిజర్వ్ పైన ఉన్న అత్యధిక బిడ్ అమ్ముడవుతుంది.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-86-close-sold",
    "route": "/producer/p-86-close-sold",
    "file": "app/producer/p-86-close-sold.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "sold"
  },
  {
    "id": "P-87",
    "figmaFrame": "v7 close unsold",
    "version": "v7",
    "title": "Close unsold",
    "titleTe": "అమ్మకం కాలేదు",
    "summary": "Below the reserve: re-list, negotiate, or store.",
    "summaryTe": "రిజర్వ్ కంటే తక్కువైతే మళ్ళీ లిస్ట్, చర్చ, లేదా నిల్వ.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-87-close-unsold",
    "route": "/producer/p-87-close-unsold",
    "file": "app/producer/p-87-close-unsold.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "unsold"
  },
  {
    "id": "P-88",
    "figmaFrame": "v7 producer agent price OTP",
    "version": "v7",
    "title": "Agent price OTP",
    "titleTe": "ఏజెంట్ ధర OTP",
    "summary": "If Venkata Rao changes the reserve, you confirm on your phone.",
    "summaryTe": "ఏజెంట్ రిజర్వ్ మార్చితే మీ ఫోన్ OTP.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-88-agent-price-otp",
    "route": "/producer/p-88-agent-price-otp",
    "file": "app/producer/p-88-agent-price-otp.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "P-89",
    "figmaFrame": "v6 lots by commodity",
    "version": "v6",
    "title": "Lots by commodity",
    "titleTe": "సరుకు వారీగా లాట్లు",
    "summary": "Chilli, cotton, turmeric and paddy on one farm.",
    "summaryTe": "మిరప, పత్తి, పసుపు, వరి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-89-lots-by-commodity",
    "route": "/producer/p-89-lots-by-commodity",
    "file": "app/producer/p-89-lots-by-commodity.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      },
      {
        "title": "Nizamabad turmeric",
        "titleTe": "నిజామాబాద్ పసుపు",
        "subtitle": "30 bags · finger",
        "meta": "₹16,200/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "BPT 5204 paddy",
        "titleTe": "బిపిటి వరి",
        "subtitle": "Kurnool · billed",
        "meta": "TRD-2026-004218",
        "badge": "Billed",
        "tone": "success"
      }
    ]
  },
  {
    "id": "P-90",
    "figmaFrame": "v6 create lot cascade",
    "version": "v6",
    "title": "Create lot cascade",
    "titleTe": "లాట్ ఎంపిక",
    "summary": "Category, commodity, variety and yard in sheets.",
    "summaryTe": "వర్గం నుండి యార్డు వరకు షీట్లు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-90-create-lot-cascade",
    "route": "/producer/p-90-create-lot-cascade",
    "file": "app/producer/p-90-create-lot-cascade.tsx",
    "kind": "mobile",
    "template": "cascade"
  },
  {
    "id": "P-91",
    "figmaFrame": "v6 bag picker",
    "version": "v6",
    "title": "Bag picker",
    "titleTe": "బ్యాగు ఎంపిక",
    "summary": "Standard bag: 40 kg chilli, 50 kg turmeric, 75 kg paddy, bale for cotton.",
    "summaryTe": "ప్రామాణిక బ్యాగు సరుకును బట్టి.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-91-bag-picker",
    "route": "/producer/p-91-bag-picker",
    "file": "app/producer/p-91-bag-picker.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "P-92",
    "figmaFrame": "v6 paddy unit",
    "version": "v6",
    "title": "Paddy unit",
    "titleTe": "వరి ప్రమాణం",
    "summary": "Kurnool paddy is quoted per quintal and packed in 75 kg bags.",
    "summaryTe": "కర్నూలు వరి క్వింటాల్ మరియు 75 కిలో బ్యాగు.",
    "stakeholder": "producer",
    "nav": "producer",
    "group": "producer",
    "slug": "p-92-paddy-unit",
    "route": "/producer/p-92-paddy-unit",
    "file": "app/producer/p-92-paddy-unit.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-01",
    "figmaFrame": "A-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Venkata Rao's morning: 3 farmers in the yard, one mismatch, one bill past due.",
    "summaryTe": "వెంకటరావు ఉదయం.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-01-home",
    "route": "/agent/a-01-home",
    "file": "app/agent/a-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Farmers",
        "labelTe": "రైతులు",
        "value": "18"
      },
      {
        "label": "Live",
        "labelTe": "ప్రత్యక్షం",
        "value": "4"
      },
      {
        "label": "Due",
        "labelTe": "బకాయి",
        "value": "₹2.18 L"
      }
    ],
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "A-02",
    "figmaFrame": "A-02 My farmers",
    "version": "v3",
    "title": "My farmers",
    "titleTe": "నా రైతులు",
    "summary": "Search by name, village or mobile.",
    "summaryTe": "పేరు, ఊరు, మొబైల్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-02-my-farmers",
    "route": "/agent/a-02-my-farmers",
    "file": "app/agent/a-02-my-farmers.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Ramesh Naidu Kotha",
        "titleTe": "రమేష్ నాయుడు",
        "subtitle": "Tadepalli · chilli, cotton, turmeric",
        "meta": "3 lots",
        "badge": "Linked",
        "tone": "success"
      },
      {
        "title": "Lakshmi farm",
        "titleTe": "లక్ష్మి పొలం",
        "subtitle": "Tenali · paddy",
        "meta": "1 lot",
        "badge": "Invited",
        "tone": "warning"
      },
      {
        "title": "Srinivas Reddy",
        "titleTe": "శ్రీనివాస్ రెడ్డి",
        "subtitle": "Sattenapalle · chilli",
        "meta": "2 lots",
        "badge": "Linked",
        "tone": "success"
      }
    ]
  },
  {
    "id": "A-03",
    "figmaFrame": "v5 agent AI alerts",
    "version": "v5",
    "title": "Alerts",
    "titleTe": "అలర్ట్లు",
    "summary": "Agent alerts stay suggestions.",
    "summaryTe": "ఏజెంట్ అలర్ట్లు సూచనలు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-03-alerts",
    "route": "/agent/a-03-alerts",
    "file": "app/agent/a-03-alerts.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "alerts"
  },
  {
    "id": "A-04",
    "figmaFrame": "A-04 Auction desk",
    "version": "v3",
    "title": "Auction desk",
    "titleTe": "వేలం",
    "summary": "You see real buyer names. The producer sees letters.",
    "summaryTe": "మీరు అసలు పేర్లు చూస్తారు. రైతు అక్షరాలు చూస్తారు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-04-auction-desk",
    "route": "/agent/a-04-auction-desk",
    "file": "app/agent/a-04-auction-desk.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "A-05",
    "figmaFrame": "A-05 Tasks",
    "version": "v3",
    "title": "Tasks",
    "titleTe": "పనులు",
    "summary": "Weighment for TKN-20261008 is waiting on bag B-03.",
    "summaryTe": "B-03 తూకం మిగిలి ఉంది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-05-tasks",
    "route": "/agent/a-05-tasks",
    "file": "app/agent/a-05-tasks.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "A-06",
    "figmaFrame": "A-06 Business profile",
    "version": "v3",
    "title": "Business profile",
    "titleTe": "వ్యాపారం",
    "summary": "Venkata Rao Commission · Guntur and Warangal.",
    "summaryTe": "గుంటూరు మరియు వరంగల్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-06-business-profile",
    "route": "/agent/a-06-business-profile",
    "file": "app/agent/a-06-business-profile.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Yards",
        "titleTe": "యార్డులు",
        "subtitle": "2"
      },
      {
        "title": "Commission",
        "titleTe": "కమీషన్",
        "subtitle": "2% Guntur chilli"
      }
    ]
  },
  {
    "id": "A-07",
    "figmaFrame": "A-07 My team",
    "version": "v3",
    "title": "My team",
    "titleTe": "నా బృందం",
    "summary": "Owner, sales Kiran, munim Prasad, field Ravi, clerk Srinu.",
    "summaryTe": "యజమాని, సేల్స్, మునీం, ఫీల్డ్, క్లర్క్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-07-my-team",
    "route": "/agent/a-07-my-team",
    "file": "app/agent/a-07-my-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "A-08",
    "figmaFrame": "A-08 Add producer",
    "version": "v3",
    "title": "Add producer",
    "titleTe": "రైతు జోడింపు",
    "summary": "Link request. The producer accepts with OTP.",
    "summaryTe": "లింక్ అభ్యర్థన. రైతు OTP.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-08-add-producer",
    "route": "/agent/a-08-add-producer",
    "file": "app/agent/a-08-add-producer.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-09",
    "figmaFrame": "A-09 Producer profile",
    "version": "v3",
    "title": "Producer profile",
    "titleTe": "రైతు ప్రొఫైల్",
    "summary": "Ramesh, Tadepalli, three commodities.",
    "summaryTe": "రమేష్, తాడేపల్లి.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-09-producer-profile",
    "route": "/agent/a-09-producer-profile",
    "file": "app/agent/a-09-producer-profile.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Lots",
        "titleTe": "లాట్లు",
        "subtitle": "6"
      },
      {
        "title": "Agent",
        "titleTe": "ఏజెంట్",
        "subtitle": "Linked"
      }
    ]
  },
  {
    "id": "A-10",
    "figmaFrame": "A-10 Confirm arrival",
    "version": "v3",
    "title": "Confirm arrival",
    "titleTe": "రాక నిర్ధారణ",
    "summary": "Photo of the vehicle at the gate. Demo stores no image.",
    "summaryTe": "గేట్ వద్ద వాహనం.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-10-confirm-arrival",
    "route": "/agent/a-10-confirm-arrival",
    "file": "app/agent/a-10-confirm-arrival.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-11",
    "figmaFrame": "A-11 Advance ledger",
    "version": "v3",
    "title": "Advance ledger",
    "titleTe": "అడ్వాన్సు లెడ్జర్",
    "summary": "Advances sit on the farmer account until the bill.",
    "summaryTe": "బిల్లు వరకు అడ్వాన్సు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-11-advance-ledger",
    "route": "/agent/a-11-advance-ledger",
    "file": "app/agent/a-11-advance-ledger.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Ramesh",
        "titleTe": "రమేష్",
        "subtitle": "₹50,000 requested",
        "badge": "OTP",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "A-12",
    "figmaFrame": "A-12 Producer activity",
    "version": "v3",
    "title": "Producer activity",
    "titleTe": "రైతు కార్యకలాపం",
    "summary": "Recent plots and listings.",
    "summaryTe": "ఇటీవలి ప్లాట్లు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-12-producer-activity",
    "route": "/agent/a-12-producer-activity",
    "file": "app/agent/a-12-producer-activity.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      }
    ]
  },
  {
    "id": "A-13",
    "figmaFrame": "A-13 Report discrepancy",
    "version": "v3",
    "title": "Report discrepancy",
    "titleTe": "తేడా నివేదిక",
    "summary": "Send bag B-03 to the yard supervisor.",
    "summaryTe": "B-03ను యార్డు సూపర్‌వైజర్‌కు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-13-report-discrepancy",
    "route": "/agent/a-13-report-discrepancy",
    "file": "app/agent/a-13-report-discrepancy.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-14",
    "figmaFrame": "A-14 Record advance",
    "version": "v3",
    "title": "Record advance",
    "titleTe": "అడ్వాన్సు నమోదు",
    "summary": "Munim records up to ₹50,000. Above that, the owner and the farmer OTP.",
    "summaryTe": "₹50,000 వరకు మునీం. పైన యజమాని మరియు రైతు OTP.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-14-record-advance",
    "route": "/agent/a-14-record-advance",
    "file": "app/agent/a-14-record-advance.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-15",
    "figmaFrame": "A-15 Buyers",
    "version": "v3",
    "title": "Buyers",
    "titleTe": "కొనుగోలుదారులు",
    "summary": "Sai Exports score and outstanding.",
    "summaryTe": "సాయి ఎక్స్‌పోర్ట్స్ స్కోర్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-15-buyers",
    "route": "/agent/a-15-buyers",
    "file": "app/agent/a-15-buyers.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Sai Exports",
        "titleTe": "సాయి",
        "subtitle": "Trader · processor · sourcing",
        "meta": "₹2.18 L",
        "badge": "Watch",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "A-16",
    "figmaFrame": "A-16 Add buyer",
    "version": "v3",
    "title": "Add buyer",
    "titleTe": "కొనుగోలుదారు జోడింపు",
    "summary": "Invite a buyer firm to the yard book.",
    "summaryTe": "యార్డు పుస్తకానికి ఆహ్వానం.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-16-add-buyer",
    "route": "/agent/a-16-add-buyer",
    "file": "app/agent/a-16-add-buyer.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-17",
    "figmaFrame": "A-17 Buyer risk",
    "version": "v3",
    "title": "Buyer risk",
    "titleTe": "కొనుగోలు రిస్క్",
    "summary": "Score 3.2 is a suggestion. You still decide.",
    "summaryTe": "స్కోర్ సూచన. నిర్ణయం మీది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-17-buyer-risk",
    "route": "/agent/a-17-buyer-risk",
    "file": "app/agent/a-17-buyer-risk.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Score",
        "titleTe": "స్కోర్",
        "subtitle": "3.2",
        "badge": "Suggestion",
        "tone": "gold"
      },
      {
        "title": "Days late",
        "titleTe": "ఆలస్యం",
        "subtitle": "15"
      }
    ]
  },
  {
    "id": "A-18",
    "figmaFrame": "A-18 Buyer requirements",
    "version": "v3",
    "title": "Buyer requirements",
    "titleTe": "కొనుగోలు అవసరాలు",
    "summary": "Sai Exports wants Teja, grade A, moisture under 10%.",
    "summaryTe": "తేజ, గ్రేడ్ A, తేమ 10% లోపు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-18-buyer-requirements",
    "route": "/agent/a-18-buyer-requirements",
    "file": "app/agent/a-18-buyer-requirements.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Mandate",
        "titleTe": "మాండేట్",
        "subtitle": "Export client hidden from the farmer"
      }
    ]
  },
  {
    "id": "A-19",
    "figmaFrame": "A-19 Edit listing",
    "version": "v3",
    "title": "Edit listing",
    "titleTe": "లిస్టింగ్ మార్పు",
    "summary": "Change the offer. Reserve edits notify the producer.",
    "summaryTe": "ఆఫర్ మార్పు. రిజర్వ్ మార్పు రైతుకు తెలుస్తుంది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-19-edit-listing",
    "route": "/agent/a-19-edit-listing",
    "file": "app/agent/a-19-edit-listing.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-20",
    "figmaFrame": "A-20 Listings",
    "version": "v3",
    "title": "Listings",
    "titleTe": "లిస్టింగ్‌లు",
    "summary": "All farmer lots on your book.",
    "summaryTe": "మీ పుస్తకంలోని లాట్లు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-20-listings",
    "route": "/agent/a-20-listings",
    "file": "app/agent/a-20-listings.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      },
      {
        "title": "Nizamabad turmeric",
        "titleTe": "నిజామాబాద్ పసుపు",
        "subtitle": "30 bags · finger",
        "meta": "₹16,200/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "BPT 5204 paddy",
        "titleTe": "బిపిటి వరి",
        "subtitle": "Kurnool · billed",
        "meta": "TRD-2026-004218",
        "badge": "Billed",
        "tone": "success"
      }
    ]
  },
  {
    "id": "A-21",
    "figmaFrame": "A-21 Live auction",
    "version": "v3",
    "title": "Live auction",
    "titleTe": "ప్రత్యక్ష వేలం",
    "summary": "Clock to 23:50. Real names on this desk.",
    "summaryTe": "23:50 వరకు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-21-live-auction",
    "route": "/agent/a-21-live-auction",
    "file": "app/agent/a-21-live-auction.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "A-22",
    "figmaFrame": "A-22 Negotiation",
    "version": "v3",
    "title": "Negotiation",
    "titleTe": "చర్చ",
    "summary": "Counter on behalf of Ramesh, inside your limit.",
    "summaryTe": "మీ పరిమితిలో కౌంటర్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-22-negotiation",
    "route": "/agent/a-22-negotiation",
    "file": "app/agent/a-22-negotiation.tsx",
    "kind": "mobile",
    "template": "chat",
    "items": [
      {
        "title": "Kiran",
        "titleTe": "కిరణ్",
        "subtitle": "Recommend accept A",
        "meta": "10:20"
      }
    ]
  },
  {
    "id": "A-23",
    "figmaFrame": "A-23 Sampling request",
    "version": "v3",
    "title": "Sampling request",
    "titleTe": "నమూనా",
    "summary": "Buyer asked for a sample. Producer OTP required.",
    "summaryTe": "నమూనాకు రైతు OTP.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-23-sampling-request",
    "route": "/agent/a-23-sampling-request",
    "file": "app/agent/a-23-sampling-request.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-24",
    "figmaFrame": "A-24 Sampling result",
    "version": "v3",
    "title": "Sampling result",
    "titleTe": "నమూనా ఫలితం",
    "summary": "Lab passed grade A.",
    "summaryTe": "ల్యాబ్ గ్రేడ్ A ఇచ్చింది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-24-sampling-result",
    "route": "/agent/a-24-sampling-result",
    "file": "app/agent/a-24-sampling-result.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Result",
        "titleTe": "ఫలితం",
        "subtitle": "Pass"
      }
    ]
  },
  {
    "id": "A-25",
    "figmaFrame": "A-25 Cancel auction",
    "version": "v3",
    "title": "Cancel auction",
    "titleTe": "వేలం రద్దు",
    "summary": "Cancel needs a reason and is audited.",
    "summaryTe": "కారణం మరియు ఆడిట్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-25-cancel-auction",
    "route": "/agent/a-25-cancel-auction",
    "file": "app/agent/a-25-cancel-auction.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-26",
    "figmaFrame": "A-26 Next bidder",
    "version": "v3",
    "title": "Next bidder",
    "titleTe": "తర్వాతి బిడ్డర్",
    "summary": "If A drops, B is next. Rejected bids stay rejected.",
    "summaryTe": "A వదిలితే B తర్వాత.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-26-next-bidder",
    "route": "/agent/a-26-next-bidder",
    "file": "app/agent/a-26-next-bidder.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "A-27",
    "figmaFrame": "A-27 Force close",
    "version": "v3",
    "title": "Force close",
    "titleTe": "బలవంతపు ముగింపు",
    "summary": "Only with the producer or yard admin. Reason required.",
    "summaryTe": "కారణం తప్పనిసరి.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-27-force-close",
    "route": "/agent/a-27-force-close",
    "file": "app/agent/a-27-force-close.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-28",
    "figmaFrame": "A-28 Weighment schedule",
    "version": "v3",
    "title": "Weighment schedule",
    "titleTe": "తూకం షెడ్యూల్",
    "summary": "Today's tokens at the Guntur scale.",
    "summaryTe": "ఈ రోజు తూకాలు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-28-weighment-schedule",
    "route": "/agent/a-28-weighment-schedule",
    "file": "app/agent/a-28-weighment-schedule.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "TKN-…C4E19B02",
        "titleTe": "టోకెన్",
        "subtitle": "12 bags · Sannam",
        "badge": "Now",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "A-29",
    "figmaFrame": "v5 agent assisted weighment",
    "version": "v5",
    "title": "Assisted weighment",
    "titleTe": "సహాయ తూకం",
    "summary": "Yard clerk Srinu can enter seller-side bags when you allow it.",
    "summaryTe": "క్లర్క్ శ్రీను అమ్మకపు వైపు నమోదు చేయగలరు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-29-assisted-weighment",
    "route": "/agent/a-29-assisted-weighment",
    "file": "app/agent/a-29-assisted-weighment.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "live"
  },
  {
    "id": "A-30",
    "figmaFrame": "A-30 Weight variance",
    "version": "v3",
    "title": "Weight variance",
    "titleTe": "తూకం తేడా",
    "summary": "Variance above 2% or a single bag outside 0.2 kg is flagged.",
    "summaryTe": "2% లేదా 0.2 కిలో బయట ఫ్లాగ్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-30-weight-variance",
    "route": "/agent/a-30-weight-variance",
    "file": "app/agent/a-30-weight-variance.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "discrepancy"
  },
  {
    "id": "A-31",
    "figmaFrame": "A-31 Generate bill",
    "version": "v6",
    "title": "Generate bill",
    "titleTe": "బిల్లు",
    "summary": "Bill TRD-2026-004218 snapshots the Guntur chilli rule.",
    "summaryTe": "బిల్లు నియమాన్ని నమోదు చేస్తుంది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-31-generate-bill",
    "route": "/agent/a-31-generate-bill",
    "file": "app/agent/a-31-generate-bill.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "bill"
  },
  {
    "id": "A-32",
    "figmaFrame": "A-32 Settlement confirmed",
    "version": "v3",
    "title": "Settlement confirmed",
    "titleTe": "సెటిల్‌మెంట్",
    "summary": "Both OTPs done. Coins wait until reconciliation.",
    "summaryTe": "రెండు OTPలు అయ్యాయి.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-32-settlement-confirmed",
    "route": "/agent/a-32-settlement-confirmed",
    "file": "app/agent/a-32-settlement-confirmed.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Confirmed"
      }
    ]
  },
  {
    "id": "A-33",
    "figmaFrame": "A-33 Bill discounting",
    "version": "v3",
    "title": "Bill discounting",
    "titleTe": "బిల్లు డిస్కౌంట్",
    "summary": "Banks may buy the bill. This is a request, not a payout.",
    "summaryTe": "బ్యాంకు అభ్యర్థన. చెల్లింపు కాదు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-33-bill-discounting",
    "route": "/agent/a-33-bill-discounting",
    "file": "app/agent/a-33-bill-discounting.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Deccan Agri",
        "titleTe": "దక్కన్",
        "subtitle": "1.5% for 15 days",
        "badge": "Offer",
        "tone": "info"
      }
    ]
  },
  {
    "id": "A-34",
    "figmaFrame": "A-34 Financiers",
    "version": "v3",
    "title": "Financiers",
    "titleTe": "ఫైనాన్సర్లు",
    "summary": "Deccan Agri Finance and two others.",
    "summaryTe": "మూడు సంస్థలు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-34-financiers",
    "route": "/agent/a-34-financiers",
    "file": "app/agent/a-34-financiers.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Deccan",
        "titleTe": "దక్కన్",
        "subtitle": "1.2–2.0%"
      }
    ]
  },
  {
    "id": "A-35",
    "figmaFrame": "A-35 Discount offer",
    "version": "v3",
    "title": "Discount offer",
    "titleTe": "డిస్కౌంట్ ఆఫర్",
    "summary": "₹1,18,000 offered against a larger bill. Producer must know.",
    "summaryTe": "రైతుకు తెలియాలి.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-35-discount-offer",
    "route": "/agent/a-35-discount-offer",
    "file": "app/agent/a-35-discount-offer.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Offer",
        "titleTe": "ఆఫర్",
        "subtitle": "₹1,18,000"
      }
    ]
  },
  {
    "id": "A-36",
    "figmaFrame": "A-36 Discount receipt",
    "version": "v3",
    "title": "Discount receipt",
    "titleTe": "రసీదు",
    "summary": "Receipt of the request. Money is not moved here.",
    "summaryTe": "డబ్బు ఇక్కడ కదగదు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-36-discount-receipt",
    "route": "/agent/a-36-discount-receipt",
    "file": "app/agent/a-36-discount-receipt.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Receipt",
        "titleTe": "రసీదు",
        "subtitle": "Recorded"
      }
    ]
  },
  {
    "id": "A-37",
    "figmaFrame": "A-37 Book storage",
    "version": "v3",
    "title": "Book storage",
    "titleTe": "నిల్వ బుకింగ్",
    "summary": "Book cold store for the farmer. Their OTP confirms.",
    "summaryTe": "రైతు OTPతో నిల్వ.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-37-book-storage",
    "route": "/agent/a-37-book-storage",
    "file": "app/agent/a-37-book-storage.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "A-38",
    "figmaFrame": "v6 agent ledger interest",
    "version": "v6",
    "title": "Ledger interest",
    "titleTe": "లెడ్జర్ వడ్డీ",
    "summary": "Outstanding principal earns 21% simple interest for each day late.",
    "summaryTe": "బకాయి అసలుపై రోజుకు 21% సాధారణ వడ్డీ.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-38-ledger-interest",
    "route": "/agent/a-38-ledger-interest",
    "file": "app/agent/a-38-ledger-interest.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "A-39",
    "figmaFrame": "v6 bill interest",
    "version": "v6",
    "title": "Bill interest",
    "titleTe": "బిల్లు వడ్డీ",
    "summary": "The bill shows principal, periods and the waiver line.",
    "summaryTe": "అసలు, కాలాలు, మాఫీ.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-39-bill-interest",
    "route": "/agent/a-39-bill-interest",
    "file": "app/agent/a-39-bill-interest.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "bill"
  },
  {
    "id": "A-40",
    "figmaFrame": "v6 interest statement",
    "version": "v6",
    "title": "Interest statement",
    "titleTe": "వడ్డీ స్టేట్‌మెంట్",
    "summary": "Period-wise statement after the partial NEFT.",
    "summaryTe": "పాక్షిక NEFT తర్వాత కాలాల వారీగా.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-40-interest-statement",
    "route": "/agent/a-40-interest-statement",
    "file": "app/agent/a-40-interest-statement.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "statement"
  },
  {
    "id": "A-41",
    "figmaFrame": "v6 partial payment",
    "version": "v6",
    "title": "Partial payment",
    "titleTe": "పాక్షిక చెల్లింపు",
    "summary": "A part payment reduces the principal. Interest follows the new balance.",
    "summaryTe": "పాక్షిక చెల్లింపు అసలును తగ్గిస్తుంది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-41-partial-payment",
    "route": "/agent/a-41-partial-payment",
    "file": "app/agent/a-41-partial-payment.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "partial"
  },
  {
    "id": "A-42",
    "figmaFrame": "v6 waiver",
    "version": "v6",
    "title": "Waiver",
    "titleTe": "మాఫీ",
    "summary": "Prasad requests. Venkata Rao approves with OTP.",
    "summaryTe": "ప్రసాద్ అభ్యర్థన. వెంకటరావు OTP.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-42-waiver",
    "route": "/agent/a-42-waiver",
    "file": "app/agent/a-42-waiver.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "waiver"
  },
  {
    "id": "A-43",
    "figmaFrame": "v6 reminders",
    "version": "v6",
    "title": "Reminders",
    "titleTe": "రిమైండర్లు",
    "summary": "Three days before, on the due date, then daily with interest to date.",
    "summaryTe": "3 రోజుల ముందు, గడువు రోజు, తర్వాత ప్రతిరోజు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-43-reminders",
    "route": "/agent/a-43-reminders",
    "file": "app/agent/a-43-reminders.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "reminders"
  },
  {
    "id": "A-44",
    "figmaFrame": "v5 agent payment terms",
    "version": "v5",
    "title": "Payment terms",
    "titleTe": "చెల్లింపు నియమాలు",
    "summary": "Association 15 days, then 21% p.a. simple. Stipulated dates need both OTPs.",
    "summaryTe": "15 రోజులు, తర్వాత 21%.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-44-payment-terms",
    "route": "/agent/a-44-payment-terms",
    "file": "app/agent/a-44-payment-terms.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "rules"
  },
  {
    "id": "A-45",
    "figmaFrame": "v6 terms dropdown",
    "version": "v6",
    "title": "Terms sheet",
    "titleTe": "నియమాల షీట్",
    "summary": "Pick yard × commodity × association. Unverified rules stay marked.",
    "summaryTe": "యార్డు × సరుకు × సంఘం.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-45-terms-sheet",
    "route": "/agent/a-45-terms-sheet",
    "file": "app/agent/a-45-terms-sheet.tsx",
    "kind": "mobile",
    "template": "master",
    "mode": "rules"
  },
  {
    "id": "A-46",
    "figmaFrame": "v6 yard dropdown",
    "version": "v6",
    "title": "Yard sheet",
    "titleTe": "యార్డు షీట్",
    "summary": "This firm sits in Guntur and Warangal.",
    "summaryTe": "ఈ సంస్థ గుంటూరు మరియు వరంగల్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-46-yard-sheet",
    "route": "/agent/a-46-yard-sheet",
    "file": "app/agent/a-46-yard-sheet.tsx",
    "kind": "mobile",
    "template": "cascade"
  },
  {
    "id": "A-47",
    "figmaFrame": "v7 agent reserve",
    "version": "v7",
    "title": "Reserve for producer",
    "titleTe": "రైతు తరఫున రిజర్వ్",
    "summary": "You may set the reserve when the producer has delegated it.",
    "summaryTe": "రైతు అప్పగించినప్పుడు రిజర్వ్.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-47-reserve-for-producer",
    "route": "/agent/a-47-reserve-for-producer",
    "file": "app/agent/a-47-reserve-for-producer.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "offer"
  },
  {
    "id": "A-48",
    "figmaFrame": "A-48 Role limits",
    "version": "v3",
    "title": "Role limits",
    "titleTe": "పరిమితులు",
    "summary": "Kiran accepts up to ₹5,00,000. Prasad advances up to ₹50,000.",
    "summaryTe": "కిరణ్ ₹5 లక్షలు. ప్రసాద్ ₹50,000.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-48-role-limits",
    "route": "/agent/a-48-role-limits",
    "file": "app/agent/a-48-role-limits.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "A-49",
    "figmaFrame": "A-49 Audit",
    "version": "v3",
    "title": "Audit",
    "titleTe": "ఆడిట్",
    "summary": "Reserve edits, waivers and role changes.",
    "summaryTe": "రిజర్వ్, మాఫీ, పాత్ర మార్పులు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-49-audit",
    "route": "/agent/a-49-audit",
    "file": "app/agent/a-49-audit.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Reserve edit",
        "titleTe": "రిజర్వ్",
        "subtitle": "Ramesh OTP · 09:10",
        "badge": "Audit",
        "tone": "info"
      },
      {
        "title": "Waiver request",
        "titleTe": "మాఫీ",
        "subtitle": "Open",
        "badge": "Pending",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "A-50",
    "figmaFrame": "A-50 Empty book",
    "version": "v3",
    "title": "Empty book",
    "titleTe": "ఖాళీ పుస్తకం",
    "summary": "A new agency has no farmers yet.",
    "summaryTe": "కొత్త ఏజెన్సీకి రైతులు లేరు.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-50-empty-book",
    "route": "/agent/a-50-empty-book",
    "file": "app/agent/a-50-empty-book.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "A-51",
    "figmaFrame": "A-51 Loading book",
    "version": "v3",
    "title": "Loading book",
    "titleTe": "లోడ్",
    "summary": "The farmer book is loading.",
    "summaryTe": "రైతు పుస్తకం లోడ్ అవుతోంది.",
    "stakeholder": "agent",
    "nav": "agent",
    "group": "agent",
    "slug": "a-51-loading-book",
    "route": "/agent/a-51-loading-book",
    "file": "app/agent/a-51-loading-book.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "B-01",
    "figmaFrame": "v7 buyer browse",
    "version": "v7",
    "title": "Market",
    "titleTe": "మార్కెట్",
    "summary": "Browse lots across chilli, cotton, turmeric and paddy. Names of farmers stay masked.",
    "summaryTe": "లాట్లు. రైతు పేర్లు దాచబడ్డాయి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-01-market",
    "route": "/buyer/b-01-market",
    "file": "app/buyer/b-01-market.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "browse"
  },
  {
    "id": "B-02",
    "figmaFrame": "v7 lot detail",
    "version": "v7",
    "title": "Lot detail",
    "titleTe": "లాట్ వివరం",
    "summary": "Teja grade A, inspection done, offer visible, reserve hidden.",
    "summaryTe": "ఆఫర్ కనిపిస్తుంది. రిజర్వ్ దాచబడింది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-02-lot-detail",
    "route": "/buyer/b-02-lot-detail",
    "file": "app/buyer/b-02-lot-detail.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "detail"
  },
  {
    "id": "B-03",
    "figmaFrame": "B-03 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Sai Exports this morning: one leading bid, one auto-bid over the max, one bill late.",
    "summaryTe": "ఈ ఉదయం సాయి ఎక్స్‌పోర్ట్స్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-03-home",
    "route": "/buyer/b-03-home",
    "file": "app/buyer/b-03-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Bids",
        "labelTe": "బిడ్లు",
        "value": "4"
      },
      {
        "label": "Payables",
        "labelTe": "బకాయిలు",
        "value": "₹2.18 L"
      },
      {
        "label": "Cap",
        "labelTe": "పరిమితి",
        "value": "₹22,500"
      }
    ],
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "B-04",
    "figmaFrame": "B-04 Provenance",
    "version": "v3",
    "title": "Provenance",
    "titleTe": "మూలం",
    "summary": "Plot to token to grade. Farmer name hidden.",
    "summaryTe": "ప్లాట్ నుండి గ్రేడ్. పేరు దాచబడింది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-04-provenance",
    "route": "/buyer/b-04-provenance",
    "file": "app/buyer/b-04-provenance.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Token",
        "titleTe": "టోకెన్",
        "subtitle": "TKN-20261011-8F3A21C9"
      },
      {
        "title": "Yard",
        "titleTe": "యార్డు",
        "subtitle": "Guntur"
      }
    ]
  },
  {
    "id": "B-05",
    "figmaFrame": "B-05 QC report",
    "version": "v3",
    "title": "QC report",
    "titleTe": "నాణ్యత నివేదిక",
    "summary": "Moisture 9.4%, colour deep red, ASTA 128.",
    "summaryTe": "తేమ 9.4%.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-05-qc-report",
    "route": "/buyer/b-05-qc-report",
    "file": "app/buyer/b-05-qc-report.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Grade",
        "titleTe": "గ్రేడ్",
        "subtitle": "A",
        "badge": "Pass",
        "tone": "success"
      }
    ]
  },
  {
    "id": "B-06",
    "figmaFrame": "B-06 Watchlist",
    "version": "v3",
    "title": "Watchlist",
    "titleTe": "వాచ్‌లిస్ట్",
    "summary": "Lots you saved. Saving does not bid.",
    "summaryTe": "సేవ్ చేయడం బిడ్ కాదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-06-watchlist",
    "route": "/buyer/b-06-watchlist",
    "file": "app/buyer/b-06-watchlist.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      }
    ]
  },
  {
    "id": "B-07",
    "figmaFrame": "B-07 Post requirement",
    "version": "v3",
    "title": "Post requirement",
    "titleTe": "అవసరం",
    "summary": "RFQ for Teja, grade A, under 10% moisture.",
    "summaryTe": "తేజ RFQ.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-07-post-requirement",
    "route": "/buyer/b-07-post-requirement",
    "file": "app/buyer/b-07-post-requirement.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-08",
    "figmaFrame": "B-08 RFQ detail",
    "version": "v3",
    "title": "RFQ detail",
    "titleTe": "RFQ వివరం",
    "summary": "RQ-123 is open until Friday.",
    "summaryTe": "RQ-123 శుక్రవారం వరకు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-08-rfq-detail",
    "route": "/buyer/b-08-rfq-detail",
    "file": "app/buyer/b-08-rfq-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Qty",
        "titleTe": "పరిమాణం",
        "subtitle": "20 MT"
      },
      {
        "title": "Cap",
        "titleTe": "పరిమితి",
        "subtitle": "₹22,500/q"
      }
    ]
  },
  {
    "id": "B-09",
    "figmaFrame": "B-09 AI matches",
    "version": "v3",
    "title": "AI matches",
    "titleTe": "AI జోడీలు",
    "summary": "Matches are suggestions with confidence. You still bid.",
    "summaryTe": "జోడీలు సూచనలు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-09-ai-matches",
    "route": "/buyer/b-09-ai-matches",
    "file": "app/buyer/b-09-ai-matches.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "why"
  },
  {
    "id": "B-10",
    "figmaFrame": "B-10 Compare lots",
    "version": "v3",
    "title": "Compare lots",
    "titleTe": "లాట్ల పోలిక",
    "summary": "Teja versus Byadgi versus Sannam on moisture and offer.",
    "summaryTe": "తేమ మరియు ఆఫర్ పోలిక.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-10-compare-lots",
    "route": "/buyer/b-10-compare-lots",
    "file": "app/buyer/b-10-compare-lots.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      }
    ]
  },
  {
    "id": "B-11",
    "figmaFrame": "B-11 Price history",
    "version": "v3",
    "title": "Price history",
    "titleTe": "ధర చరిత్ర",
    "summary": "Guntur Teja modal this week.",
    "summaryTe": "ఈ వారం గుంటూరు తేజ.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-11-price-history",
    "route": "/buyer/b-11-price-history",
    "file": "app/buyer/b-11-price-history.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Mon",
        "titleTe": "సోమ",
        "subtitle": "₹21,200"
      },
      {
        "title": "Thu",
        "titleTe": "గురు",
        "subtitle": "₹21,600"
      },
      {
        "title": "Today",
        "titleTe": "ఈ రోజు",
        "subtitle": "₹21,600"
      }
    ]
  },
  {
    "id": "B-12",
    "figmaFrame": "B-12 Seller profile",
    "version": "v3",
    "title": "Seller profile",
    "titleTe": "అమ్మకపు ప్రొఫైల్",
    "summary": "Shown as the commission agent. Farmer identity masked.",
    "summaryTe": "ఏజెంట్ పేరు. రైతు దాచబడింది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-12-seller-profile",
    "route": "/buyer/b-12-seller-profile",
    "file": "app/buyer/b-12-seller-profile.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Seller",
        "titleTe": "అమ్మకం",
        "subtitle": "Venkata Rao Commission"
      },
      {
        "title": "Score",
        "titleTe": "స్కోర్",
        "subtitle": "4.6"
      }
    ]
  },
  {
    "id": "B-13",
    "figmaFrame": "v6 market filters",
    "version": "v6",
    "title": "Advanced search",
    "titleTe": "విశ్లేషణ శోధన",
    "summary": "Filter yard, commodity, variety and grade.",
    "summaryTe": "యార్డు, సరుకు, రకం, గ్రేడ్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-13-advanced-search",
    "route": "/buyer/b-13-advanced-search",
    "file": "app/buyer/b-13-advanced-search.tsx",
    "kind": "mobile",
    "template": "cascade"
  },
  {
    "id": "B-14",
    "figmaFrame": "B-14 Live auction",
    "version": "v3",
    "title": "Live auction",
    "titleTe": "ప్రత్యక్ష వేలం",
    "summary": "Place a bid. Under the reserve you only see Bid not accepted.",
    "summaryTe": "రిజర్వ్ కంటే తక్కువైతే బిడ్ అంగీకరించబడలేదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-14-live-auction",
    "route": "/buyer/b-14-live-auction",
    "file": "app/buyer/b-14-live-auction.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "detail"
  },
  {
    "id": "B-15",
    "figmaFrame": "B-15 Hire inspector",
    "version": "v3",
    "title": "Hire inspector",
    "titleTe": "తనిఖీదారు",
    "summary": "Ask Prasad Quality Lab. Paying them is a record.",
    "summaryTe": "ల్యాబ్ అభ్యర్థన.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-15-hire-inspector",
    "route": "/buyer/b-15-hire-inspector",
    "file": "app/buyer/b-15-hire-inspector.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-16",
    "figmaFrame": "B-16 Inspection report",
    "version": "v3",
    "title": "Inspection report",
    "titleTe": "తనిఖీ నివేదిక",
    "summary": "Passed. Photos stay as evidence notes in the demo.",
    "summaryTe": "ఉత్తీర్ణం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-16-inspection-report",
    "route": "/buyer/b-16-inspection-report",
    "file": "app/buyer/b-16-inspection-report.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Passed",
        "badge": "QC",
        "tone": "success"
      }
    ]
  },
  {
    "id": "B-17",
    "figmaFrame": "B-17 Request sample",
    "version": "v3",
    "title": "Request sample",
    "titleTe": "నమూనా",
    "summary": "200 g. The producer must approve.",
    "summaryTe": "200 గ్రాములు. రైతు ఆమోదం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-17-request-sample",
    "route": "/buyer/b-17-request-sample",
    "file": "app/buyer/b-17-request-sample.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-18",
    "figmaFrame": "B-18 Trade contract",
    "version": "v3",
    "title": "Trade contract",
    "titleTe": "ఒప్పందం",
    "summary": "Sale contract preview. Both OTPs still required.",
    "summaryTe": "ఇరువైపుల OTP ఇంకా కావాలి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-18-trade-contract",
    "route": "/buyer/b-18-trade-contract",
    "file": "app/buyer/b-18-trade-contract.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Parties",
        "titleTe": "పార్టీలు",
        "subtitle": "Sai Exports ↔ Venkata Rao Commission"
      },
      {
        "title": "Price",
        "titleTe": "ధర",
        "subtitle": "₹22,150/q"
      }
    ]
  },
  {
    "id": "B-19",
    "figmaFrame": "B-19 Negotiations",
    "version": "v3",
    "title": "Negotiations",
    "titleTe": "చర్చలు",
    "summary": "Open counters.",
    "summaryTe": "తెరిచిన కౌంటర్లు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-19-negotiations",
    "route": "/buyer/b-19-negotiations",
    "file": "app/buyer/b-19-negotiations.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "Counter ₹22,200",
        "badge": "Open",
        "tone": "info"
      }
    ]
  },
  {
    "id": "B-20",
    "figmaFrame": "B-20 Negotiation chat",
    "version": "v3",
    "title": "Negotiation chat",
    "titleTe": "చర్చ",
    "summary": "Messages about delivery and price. Money actions stay on the bill.",
    "summaryTe": "ధర మరియు డెలివరీ. డబ్బు బిల్లుపై.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-20-negotiation-chat",
    "route": "/buyer/b-20-negotiation-chat",
    "file": "app/buyer/b-20-negotiation-chat.tsx",
    "kind": "mobile",
    "template": "chat",
    "items": [
      {
        "title": "You",
        "titleTe": "మీరు",
        "subtitle": "₹22,150 for the full lot"
      },
      {
        "title": "Agent",
        "titleTe": "ఏజెంట్",
        "subtitle": "Checking with the farmer"
      }
    ]
  },
  {
    "id": "B-21",
    "figmaFrame": "B-21 Contracts",
    "version": "v3",
    "title": "Contracts",
    "titleTe": "ఒప్పందాలు",
    "summary": "Confirmed and draft contracts.",
    "summaryTe": "ధృవీకరించిన ఒప్పందాలు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-21-contracts",
    "route": "/buyer/b-21-contracts",
    "file": "app/buyer/b-21-contracts.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "C-20261008",
        "titleTe": "ఒప్పందం",
        "subtitle": "Sannam · weighment",
        "badge": "Live",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "B-22",
    "figmaFrame": "B-22 Request amendment",
    "version": "v3",
    "title": "Request amendment",
    "titleTe": "సవరణ",
    "summary": "Ask to change delivery day. The other side must accept.",
    "summaryTe": "డెలివరీ రోజు మార్పు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-22-request-amendment",
    "route": "/buyer/b-22-request-amendment",
    "file": "app/buyer/b-22-request-amendment.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-23",
    "figmaFrame": "B-23 Weighment tasks",
    "version": "v3",
    "title": "Weighment tasks",
    "titleTe": "తూకం పనులు",
    "summary": "Lots waiting for the buyer phone.",
    "summaryTe": "కొనుగోలు ఫోన్ కోసం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-23-weighment-tasks",
    "route": "/buyer/b-23-weighment-tasks",
    "file": "app/buyer/b-23-weighment-tasks.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Sannam",
        "titleTe": "సన్నం",
        "subtitle": "Bag B-03 open",
        "badge": "Now",
        "tone": "danger"
      }
    ]
  },
  {
    "id": "B-24",
    "figmaFrame": "v5 buyer weighment",
    "version": "v5",
    "title": "Buyer weighment",
    "titleTe": "కొనుగోలు తూకం",
    "summary": "Enter kilograms on this phone. A difference flags both sides.",
    "summaryTe": "ఈ ఫోన్‌లో కిలోలు. తేడా రెండు వైపులా.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-24-buyer-weighment",
    "route": "/buyer/b-24-buyer-weighment",
    "file": "app/buyer/b-24-buyer-weighment.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "buyer"
  },
  {
    "id": "B-25",
    "figmaFrame": "B-25 Final weight",
    "version": "v3",
    "title": "Final weight",
    "titleTe": "చివరి తూకం",
    "summary": "Summary before the buyer OTP.",
    "summaryTe": "కొనుగోలు OTPకు ముందు సారాంశం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-25-final-weight",
    "route": "/buyer/b-25-final-weight",
    "file": "app/buyer/b-25-final-weight.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "summary"
  },
  {
    "id": "B-26",
    "figmaFrame": "B-26 Track delivery",
    "version": "v3",
    "title": "Track delivery",
    "titleTe": "డెలివరీ ట్రాక్",
    "summary": "AP 07 TX 4545 is loading at Guntur.",
    "summaryTe": "గుంటూరులో లోడవుతోంది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-26-track-delivery",
    "route": "/buyer/b-26-track-delivery",
    "file": "app/buyer/b-26-track-delivery.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Vehicle",
        "titleTe": "వాహనం",
        "subtitle": "AP 07 TX 4545"
      },
      {
        "title": "Driver",
        "titleTe": "డ్రైవర్",
        "subtitle": "Nagaraju"
      }
    ]
  },
  {
    "id": "B-27",
    "figmaFrame": "B-27 Confirm delivery",
    "version": "v3",
    "title": "Confirm delivery",
    "titleTe": "డెలివరీ నిర్ధారణ",
    "summary": "Consignee OTP. The driver collects it, the code is not shown to them in production.",
    "summaryTe": "స్వీకర్త OTP.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-27-confirm-delivery",
    "route": "/buyer/b-27-confirm-delivery",
    "file": "app/buyer/b-27-confirm-delivery.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "B-28",
    "figmaFrame": "B-28 Record payment",
    "version": "v3",
    "title": "Record payment",
    "titleTe": "చెల్లింపు నమోదు",
    "summary": "Accounts records the NEFT. They cannot reconcile their own entry.",
    "summaryTe": "అకౌంట్స్ NEFT నమోదు. స్వీయ సరిదిద్దుట కాదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-28-record-payment",
    "route": "/buyer/b-28-record-payment",
    "file": "app/buyer/b-28-record-payment.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "partial"
  },
  {
    "id": "B-29",
    "figmaFrame": "B-29 Buyer ledger",
    "version": "v3",
    "title": "Buyer ledger",
    "titleTe": "లెడ్జర్",
    "summary": "Payables with interest on the outstanding balance.",
    "summaryTe": "బకాయిపై వడ్డీ.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-29-buyer-ledger",
    "route": "/buyer/b-29-buyer-ledger",
    "file": "app/buyer/b-29-buyer-ledger.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "B-30",
    "figmaFrame": "B-30 Rate seller",
    "version": "v3",
    "title": "Rate seller",
    "titleTe": "రేటింగ్",
    "summary": "Score the agent after settlement.",
    "summaryTe": "సెటిల్‌మెంట్ తర్వాత రేటింగ్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-30-rate-seller",
    "route": "/buyer/b-30-rate-seller",
    "file": "app/buyer/b-30-rate-seller.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-31",
    "figmaFrame": "B-31 Raise dispute",
    "version": "v3",
    "title": "Raise dispute",
    "titleTe": "వివాదం",
    "summary": "Moisture on Byadgi. The yard sees it.",
    "summaryTe": "బ్యాడగి తేమ. యార్డు చూస్తుంది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-31-raise-dispute",
    "route": "/buyer/b-31-raise-dispute",
    "file": "app/buyer/b-31-raise-dispute.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-32",
    "figmaFrame": "B-32 Dispute thread",
    "version": "v3",
    "title": "Dispute thread",
    "titleTe": "వివాదం థ్రెడ్",
    "summary": "D-2041 with the yard supervisor.",
    "summaryTe": "D-2041 యార్డు సూపర్‌వైజర్‌తో.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-32-dispute-thread",
    "route": "/buyer/b-32-dispute-thread",
    "file": "app/buyer/b-32-dispute-thread.tsx",
    "kind": "mobile",
    "template": "chat",
    "items": [
      {
        "title": "You",
        "titleTe": "మీరు",
        "subtitle": "Moisture looks higher than the lab"
      },
      {
        "title": "Yard",
        "titleTe": "యార్డు",
        "subtitle": "Re-weigh booked"
      }
    ]
  },
  {
    "id": "B-33",
    "figmaFrame": "B-33 Reorder",
    "version": "v3",
    "title": "Reorder",
    "titleTe": "మళ్ళీ కొనుగోలు",
    "summary": "Same variety, new quantity. It becomes a fresh bid.",
    "summaryTe": "అదే రకం, కొత్త పరిమాణం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-33-reorder",
    "route": "/buyer/b-33-reorder",
    "file": "app/buyer/b-33-reorder.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-34",
    "figmaFrame": "B-34 Order detail",
    "version": "v3",
    "title": "Order detail",
    "titleTe": "ఆర్డర్",
    "summary": "Sannam deal in weighment.",
    "summaryTe": "సన్నం తూకంలో ఉంది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-34-order-detail",
    "route": "/buyer/b-34-order-detail",
    "file": "app/buyer/b-34-order-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Token",
        "titleTe": "టోకెన్",
        "subtitle": "TKN-20261008-C4E19B02"
      }
    ]
  },
  {
    "id": "B-35",
    "figmaFrame": "B-35 Weighment certificate",
    "version": "v3",
    "title": "Weighment certificate",
    "titleTe": "తూకం సర్టిఫికేట్",
    "summary": "Issued after both OTPs. Not before.",
    "summaryTe": "రెండు OTPల తర్వాత.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-35-weighment-certificate",
    "route": "/buyer/b-35-weighment-certificate",
    "file": "app/buyer/b-35-weighment-certificate.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Waiting for OTP",
        "badge": "Open",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "B-36",
    "figmaFrame": "B-36 Deal OTP",
    "version": "v3",
    "title": "Deal OTP",
    "titleTe": "డీల్ OTP",
    "summary": "Buyer confirmation of the sale.",
    "summaryTe": "అమ్మకపు నిర్ధారణ.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-36-deal-otp",
    "route": "/buyer/b-36-deal-otp",
    "file": "app/buyer/b-36-deal-otp.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "B-37",
    "figmaFrame": "B-37 Inventory",
    "version": "v3",
    "title": "Inventory",
    "titleTe": "నిల్వ సరుకు",
    "summary": "Lots you already bought.",
    "summaryTe": "మీరు కొన్న లాట్లు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-37-inventory",
    "route": "/buyer/b-37-inventory",
    "file": "app/buyer/b-37-inventory.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "In cold store B-2",
        "badge": "Stored",
        "tone": "info"
      }
    ]
  },
  {
    "id": "B-38",
    "figmaFrame": "B-38 Book storage",
    "version": "v3",
    "title": "Book storage",
    "titleTe": "నిల్వ",
    "summary": "Rent a chamber for bought lots.",
    "summaryTe": "కొన్న లాట్లకు చాంబర్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-38-book-storage",
    "route": "/buyer/b-38-book-storage",
    "file": "app/buyer/b-38-book-storage.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-39",
    "figmaFrame": "B-39 Request release",
    "version": "v3",
    "title": "Request release",
    "titleTe": "విడుదల",
    "summary": "Depositor OTP releases stock. The keeper cannot skip it.",
    "summaryTe": "దాఖలుదారు OTP.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-39-request-release",
    "route": "/buyer/b-39-request-release",
    "file": "app/buyer/b-39-request-release.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "B-40",
    "figmaFrame": "B-40 Pledged inventory",
    "version": "v3",
    "title": "Pledged inventory",
    "titleTe": "తాకట్టు",
    "summary": "Receipt pledged to Deccan Agri. Release needs the bank.",
    "summaryTe": "రసీదు బ్యాంకుకు తాకట్టు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-40-pledged-inventory",
    "route": "/buyer/b-40-pledged-inventory",
    "file": "app/buyer/b-40-pledged-inventory.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Pledge",
        "titleTe": "తాకట్టు",
        "subtitle": "₹20,00,000"
      }
    ]
  },
  {
    "id": "B-41",
    "figmaFrame": "B-41 Ageing",
    "version": "v3",
    "title": "Ageing",
    "titleTe": "వయస్సు",
    "summary": "How long bought lots have sat.",
    "summaryTe": "ఎంతకాలం ఉన్నాయి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-41-ageing",
    "route": "/buyer/b-41-ageing",
    "file": "app/buyer/b-41-ageing.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "13 days",
        "badge": "Watch",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "B-42",
    "figmaFrame": "B-42 Downstream buyers",
    "version": "v3",
    "title": "Downstream buyers",
    "titleTe": "తర్వాతి కొనుగోలుదారులు",
    "summary": "Resale customers. The farmer price is not reduced by your margin.",
    "summaryTe": "మీ మార్జిన్ రైతు ధర నుండి కాదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-42-downstream-buyers",
    "route": "/buyer/b-42-downstream-buyers",
    "file": "app/buyer/b-42-downstream-buyers.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "ABC Exports",
        "titleTe": "ABC",
        "subtitle": "Export client"
      }
    ]
  },
  {
    "id": "B-43",
    "figmaFrame": "B-43 Create quotation",
    "version": "v3",
    "title": "Create quotation",
    "titleTe": "కొటేషన్",
    "summary": "Quote a resale. Traceability keeps the farmer token.",
    "summaryTe": "అమ్మకపు కొటేషన్. టోకెన్ ఉంటుంది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-43-create-quotation",
    "route": "/buyer/b-43-create-quotation",
    "file": "app/buyer/b-43-create-quotation.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-44",
    "figmaFrame": "B-44 Sales orders",
    "version": "v3",
    "title": "Sales orders",
    "titleTe": "అమ్మకపు ఆర్డర్లు",
    "summary": "Orders to downstream buyers.",
    "summaryTe": "తర్వాతి ఆర్డర్లు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-44-sales-orders",
    "route": "/buyer/b-44-sales-orders",
    "file": "app/buyer/b-44-sales-orders.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "SO-19",
        "titleTe": "ఆర్డర్",
        "subtitle": "₹8.2 L",
        "badge": "Open",
        "tone": "info"
      }
    ]
  },
  {
    "id": "B-45",
    "figmaFrame": "B-45 Finance",
    "version": "v3",
    "title": "Finance",
    "titleTe": "ఫైనాన్స్",
    "summary": "Payables, limits and the late bill.",
    "summaryTe": "బకాయిలు మరియు ఆలస్య బిల్లు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-45-finance",
    "route": "/buyer/b-45-finance",
    "file": "app/buyer/b-45-finance.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "B-46",
    "figmaFrame": "B-46 Trade analytics",
    "version": "v3",
    "title": "Trade analytics",
    "titleTe": "విశ్లేషణ",
    "summary": "Bought versus sold. A suggestion, not a booking.",
    "summaryTe": "కొనుగోలు మరియు అమ్మకం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-46-trade-analytics",
    "route": "/buyer/b-46-trade-analytics",
    "file": "app/buyer/b-46-trade-analytics.tsx",
    "kind": "mobile",
    "template": "detail",
    "stats": [
      {
        "label": "Bought",
        "labelTe": "కొనుగోలు",
        "value": "₹48 L"
      },
      {
        "label": "Sold",
        "labelTe": "అమ్మకం",
        "value": "₹12 L"
      },
      {
        "label": "Stock",
        "labelTe": "నిల్వ",
        "value": "₹36 L"
      }
    ]
  },
  {
    "id": "B-47",
    "figmaFrame": "B-47 P and L",
    "version": "v3",
    "title": "P and L",
    "titleTe": "లాభ నష్టాలు",
    "summary": "Margin model versus commission model.",
    "summaryTe": "మార్జిన్ మరియు కమీషన్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-47-p-and-l",
    "route": "/buyer/b-47-p-and-l",
    "file": "app/buyer/b-47-p-and-l.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Commission model",
        "titleTe": "కమీషన్",
        "subtitle": "Yard bills the beneficiary"
      },
      {
        "title": "Margin model",
        "titleTe": "మార్జిన్",
        "subtitle": "You are the buyer of record"
      }
    ]
  },
  {
    "id": "B-48",
    "figmaFrame": "B-48 Tax summary",
    "version": "v3",
    "title": "Tax summary",
    "titleTe": "పన్ను",
    "summary": "GST shown as a record for the accountant.",
    "summaryTe": "అకౌంటెంట్ కోసం GST.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-48-tax-summary",
    "route": "/buyer/b-48-tax-summary",
    "file": "app/buyer/b-48-tax-summary.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Output",
        "titleTe": "అవుట్‌పుట్",
        "subtitle": "₹4,30,000"
      }
    ]
  },
  {
    "id": "B-49",
    "figmaFrame": "B-49 Market feed",
    "version": "v3",
    "title": "Market feed",
    "titleTe": "మార్కెట్ వార్తలు",
    "summary": "Yard notes. Not trading advice that moves money.",
    "summaryTe": "యార్డు నోట్స్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-49-market-feed",
    "route": "/buyer/b-49-market-feed",
    "file": "app/buyer/b-49-market-feed.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Guntur",
        "titleTe": "గుంటూరు",
        "subtitle": "Arrivals thin after 3 pm"
      }
    ]
  },
  {
    "id": "B-50",
    "figmaFrame": "B-50 Wallet",
    "version": "v3",
    "title": "Wallet",
    "titleTe": "వాలెట్",
    "summary": "Rytuvo Coins. Not a payment wallet.",
    "summaryTe": "నాణేలు. చెల్లింపు వాలెట్ కాదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-50-wallet",
    "route": "/buyer/b-50-wallet",
    "file": "app/buyer/b-50-wallet.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Coins",
        "titleTe": "నాణేలు",
        "subtitle": "1,200"
      }
    ]
  },
  {
    "id": "B-51",
    "figmaFrame": "B-51 Addresses",
    "version": "v3",
    "title": "Addresses",
    "titleTe": "చిరునామాలు",
    "summary": "Guntur unit and the cold store.",
    "summaryTe": "గుంటూరు యూనిట్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-51-addresses",
    "route": "/buyer/b-51-addresses",
    "file": "app/buyer/b-51-addresses.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Unit 1",
        "titleTe": "యూనిట్ 1",
        "subtitle": "Guntur industrial estate"
      }
    ]
  },
  {
    "id": "B-52",
    "figmaFrame": "B-52 Payment methods",
    "version": "v3",
    "title": "Payment methods",
    "titleTe": "చెల్లింపు పద్ధతులు",
    "summary": "NEFT and UPI references. Cash needs no reference.",
    "summaryTe": "NEFT, UPI. నగదుకు రిఫరెన్స్ వద్దు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-52-payment-methods",
    "route": "/buyer/b-52-payment-methods",
    "file": "app/buyer/b-52-payment-methods.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "HDFC",
        "titleTe": "HDFC",
        "subtitle": "NEFT"
      },
      {
        "title": "UPI",
        "titleTe": "UPI",
        "subtitle": "sai.exports@upi"
      }
    ]
  },
  {
    "id": "B-53",
    "figmaFrame": "B-53 My team",
    "version": "v3",
    "title": "My team",
    "titleTe": "నా బృందం",
    "summary": "Owner Sai, purchaser Arjun, QC Meena, accounts Rafiq, logistics Naveen.",
    "summaryTe": "యజమాని, కొనుగోలు, నాణ్యత, అకౌంట్స్, లాజిస్టిక్స్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-53-my-team",
    "route": "/buyer/b-53-my-team",
    "file": "app/buyer/b-53-my-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "B-54",
    "figmaFrame": "v6 role dropdown",
    "version": "v6",
    "title": "Role sheet",
    "titleTe": "పాత్ర షీట్",
    "summary": "Switch the signed-in member and watch modules hide.",
    "summaryTe": "సభ్యుడిని మార్చండి. మాడ్యూల్స్ దాచబడతాయి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-54-role-sheet",
    "route": "/buyer/b-54-role-sheet",
    "file": "app/buyer/b-54-role-sheet.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "B-55",
    "figmaFrame": "v5 assign variety",
    "version": "v5",
    "title": "Assignments",
    "titleTe": "కేటాయింపులు",
    "summary": "Variety to purchaser, with a backup and a bid cap.",
    "summaryTe": "రకానికి కొనుగోలుదారు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-55-assignments",
    "route": "/buyer/b-55-assignments",
    "file": "app/buyer/b-55-assignments.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "Arjun · cap ₹22,500/q",
        "badge": "Primary",
        "tone": "success"
      },
      {
        "title": "Turmeric",
        "titleTe": "పసుపు",
        "subtitle": "Unassigned",
        "badge": "Open",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "B-56",
    "figmaFrame": "B-56 Mandate",
    "version": "v4",
    "title": "Mandate",
    "titleTe": "మాండేట్",
    "summary": "Sourcing bids need an active client mandate. The farmer sees sourcing agent, not the client.",
    "summaryTe": "రైతు క్లయింట్ పేరు చూడరు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-56-mandate",
    "route": "/buyer/b-56-mandate",
    "file": "app/buyer/b-56-mandate.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Client",
        "titleTe": "క్లయింట్",
        "subtitle": "Hidden from producer"
      },
      {
        "title": "Ceiling",
        "titleTe": "పరిమితి",
        "subtitle": "₹24,000/q"
      },
      {
        "title": "Qty left",
        "titleTe": "మిగిలినది",
        "subtitle": "4,000 kg"
      }
    ]
  },
  {
    "id": "B-57",
    "figmaFrame": "v5 buyer terms OTP",
    "version": "v5",
    "title": "Terms OTP",
    "titleTe": "నియమాల OTP",
    "summary": "Confirm the stipulated date. Association default is still 15 days.",
    "summaryTe": "నిర్ణీత తేదీ OTP. డిఫాల్ట్ 15 రోజులు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-57-terms-otp",
    "route": "/buyer/b-57-terms-otp",
    "file": "app/buyer/b-57-terms-otp.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "B-58",
    "figmaFrame": "v6 payables interest",
    "version": "v6",
    "title": "Payables",
    "titleTe": "బకాయిలు",
    "summary": "What Sai Exports owes, with interest on the unpaid principal.",
    "summaryTe": "బకాయి అసలుపై వడ్డీ.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-58-payables",
    "route": "/buyer/b-58-payables",
    "file": "app/buyer/b-58-payables.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "B-59",
    "figmaFrame": "v6 overdue notice",
    "version": "v6",
    "title": "Overdue notice",
    "titleTe": "గడువు దాటిన నోటీసు",
    "summary": "Daily reminder with interest to date. It does not debit anyone.",
    "summaryTe": "ప్రతిరోజు రిమైండర్. డెబిట్ కాదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-59-overdue-notice",
    "route": "/buyer/b-59-overdue-notice",
    "file": "app/buyer/b-59-overdue-notice.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "reminders"
  },
  {
    "id": "B-60",
    "figmaFrame": "v5 client notice",
    "version": "v5",
    "title": "Client notice",
    "titleTe": "క్లయింట్ నోటీసు",
    "summary": "Sourcing deals also preview the summary for the end client.",
    "summaryTe": "సోర్సింగ్ డీల్‌కు క్లయింట్ సారాంశం.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-60-client-notice",
    "route": "/buyer/b-60-client-notice",
    "file": "app/buyer/b-60-client-notice.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "sms"
  },
  {
    "id": "B-61",
    "figmaFrame": "v7 physical inspection",
    "version": "v7",
    "title": "Physical inspection",
    "titleTe": "భౌతిక తనిఖీ",
    "summary": "Book a look at the lot. The yard marks required or recommended.",
    "summaryTe": "లాట్ చూడటం బుక్ చేయండి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-61-physical-inspection",
    "route": "/buyer/b-61-physical-inspection",
    "file": "app/buyer/b-61-physical-inspection.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "detail"
  },
  {
    "id": "B-62",
    "figmaFrame": "v7 inspected badge",
    "version": "v7",
    "title": "Inspected badge",
    "titleTe": "తనిఖీ బ్యాడ్జ్",
    "summary": "This lot shows Inspected to your team.",
    "summaryTe": "మీ బృందానికి తనిఖీ బ్యాడ్జ్.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-62-inspected-badge",
    "route": "/buyer/b-62-inspected-badge",
    "file": "app/buyer/b-62-inspected-badge.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "browse"
  },
  {
    "id": "B-63",
    "figmaFrame": "v7 bid not accepted",
    "version": "v7",
    "title": "Bid not accepted",
    "titleTe": "బిడ్ అంగీకారం లేదు",
    "summary": "The only message when a bid is under the reserve.",
    "summaryTe": "రిజర్వ్ కంటే తక్కువైతే ఈ సందేశం మాత్రమే.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-63-bid-not-accepted",
    "route": "/buyer/b-63-bid-not-accepted",
    "file": "app/buyer/b-63-bid-not-accepted.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "detail"
  },
  {
    "id": "B-64",
    "figmaFrame": "v7 autobid setup",
    "version": "v7",
    "title": "Auto-bid setup",
    "titleTe": "ఆటో-బిడ్",
    "summary": "Max, step and quantity. The max must sit inside Arjun's limit.",
    "summaryTe": "గరిష్ఠం, అడుగు, పరిమాణం. పరిమితి లోపల.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-64-auto-bid-setup",
    "route": "/buyer/b-64-auto-bid-setup",
    "file": "app/buyer/b-64-auto-bid-setup.tsx",
    "kind": "mobile",
    "template": "autobid",
    "mode": "setup"
  },
  {
    "id": "B-65",
    "figmaFrame": "v7 active autobids",
    "version": "v7",
    "title": "Active auto-bids",
    "titleTe": "నడుస్తున్న ఆటో-బిడ్లు",
    "summary": "Grok raises by the minimum step to lead, never above the max.",
    "summaryTe": "గరిష్ఠం దాటకుండా అడుగు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-65-active-auto-bids",
    "route": "/buyer/b-65-active-auto-bids",
    "file": "app/buyer/b-65-active-auto-bids.tsx",
    "kind": "mobile",
    "template": "autobid",
    "mode": "active"
  },
  {
    "id": "B-66",
    "figmaFrame": "v7 bid history",
    "version": "v7",
    "title": "Bid history",
    "titleTe": "బిడ్ చరిత్ర",
    "summary": "Each bid is marked manual or AI.",
    "summaryTe": "ప్రతి బిడ్ మాన్యువల్ లేదా AI.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-66-bid-history",
    "route": "/buyer/b-66-bid-history",
    "file": "app/buyer/b-66-bid-history.tsx",
    "kind": "mobile",
    "template": "autobid",
    "mode": "history"
  },
  {
    "id": "B-67",
    "figmaFrame": "v7 outbid over max",
    "version": "v7",
    "title": "Outbid over max",
    "titleTe": "గరిష్ఠం దాటింది",
    "summary": "Raise, stop, or let go. Raising past the cap needs the owner.",
    "summaryTe": "పెంచండి, ఆపండి, లేదా వదలండి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-67-outbid-over-max",
    "route": "/buyer/b-67-outbid-over-max",
    "file": "app/buyer/b-67-outbid-over-max.tsx",
    "kind": "mobile",
    "template": "autobid",
    "mode": "outbid"
  },
  {
    "id": "B-68",
    "figmaFrame": "v7 raise max approval",
    "version": "v7",
    "title": "Raise max approval",
    "titleTe": "గరిష్ఠం ఆమోదం",
    "summary": "Sai Prakash approves a higher max with OTP. No money moves.",
    "summaryTe": "సాయి ప్రకాష్ OTP. డబ్బు కదగదు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-68-raise-max-approval",
    "route": "/buyer/b-68-raise-max-approval",
    "file": "app/buyer/b-68-raise-max-approval.tsx",
    "kind": "mobile",
    "template": "autobid",
    "mode": "approval"
  },
  {
    "id": "B-69",
    "figmaFrame": "B-69 Processor batch",
    "version": "v4",
    "title": "Processor batch",
    "titleTe": "ప్రాసెస్ బ్యాచ్",
    "summary": "Raw lot tokens stay on the finished batch. FG release needs QA OTP.",
    "summaryTe": "ముడి టోకెన్లు ఉంటాయి. FGకు QA OTP.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-69-processor-batch",
    "route": "/buyer/b-69-processor-batch",
    "file": "app/buyer/b-69-processor-batch.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Input",
        "titleTe": "ఇన్‌పుట్",
        "subtitle": "TKN-20261011-8F3A21C9"
      },
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Held for QA",
        "badge": "Hold",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "B-70",
    "figmaFrame": "B-70 Plant QA",
    "version": "v4",
    "title": "Plant QA",
    "titleTe": "ప్లాంట్ QA",
    "summary": "Hold or pass the finished lot. FSSAI must already be verified.",
    "summaryTe": "FSSAI ధృవీకరణ తర్వాతే.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-70-plant-qa",
    "route": "/buyer/b-70-plant-qa",
    "file": "app/buyer/b-70-plant-qa.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "B-71",
    "figmaFrame": "B-71 Export docs",
    "version": "v4",
    "title": "Export docs",
    "titleTe": "ఎగుమతి పత్రాలు",
    "summary": "PI, packing list, COO, phyto. Dispatch OTP is a separate step.",
    "summaryTe": "PI, ప్యాకింగ్, COO.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-71-export-docs",
    "route": "/buyer/b-71-export-docs",
    "file": "app/buyer/b-71-export-docs.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "PI",
        "titleTe": "PI",
        "subtitle": "Draft"
      },
      {
        "title": "Phyto",
        "titleTe": "ఫైటో",
        "subtitle": "Not requested"
      }
    ]
  },
  {
    "id": "B-72",
    "figmaFrame": "B-72 Empty market",
    "version": "v3",
    "title": "Empty market",
    "titleTe": "ఖాళీ మార్కెట్",
    "summary": "No lots match these filters.",
    "summaryTe": "ఈ ఫిల్టర్లకు లాట్లు లేవు.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-72-empty-market",
    "route": "/buyer/b-72-empty-market",
    "file": "app/buyer/b-72-empty-market.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "B-73",
    "figmaFrame": "B-73 Loading market",
    "version": "v3",
    "title": "Loading market",
    "titleTe": "లోడ్",
    "summary": "The board is loading.",
    "summaryTe": "బోర్డు లోడ్ అవుతోంది.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-73-loading-market",
    "route": "/buyer/b-73-loading-market",
    "file": "app/buyer/b-73-loading-market.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "B-74",
    "figmaFrame": "B-74 Offline market",
    "version": "v3",
    "title": "Offline market",
    "titleTe": "ఆఫ్‌లైన్",
    "summary": "Saved lots stay readable. New bids wait.",
    "summaryTe": "సేవ్ చేసిన లాట్లు కనిపిస్తాయి.",
    "stakeholder": "buyer",
    "nav": "buyer",
    "group": "buyer",
    "slug": "b-74-offline-market",
    "route": "/buyer/b-74-offline-market",
    "file": "app/buyer/b-74-offline-market.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "I-01",
    "figmaFrame": "I-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Harish has two jobs today. He cannot be a party to the deal.",
    "summaryTe": "హరీష్‌కు రెండు పనులు. డీల్‌లో పార్టీ కాకూడదు.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-01-home",
    "route": "/quality/i-01-home",
    "file": "app/quality/i-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Jobs",
        "labelTe": "పనులు",
        "value": "3"
      },
      {
        "label": "Due",
        "labelTe": "గడువు",
        "value": "1"
      },
      {
        "label": "Passed",
        "labelTe": "ఉత్తీర్ణం",
        "value": "1"
      }
    ],
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "Passed · 9.4%",
        "badge": "Done",
        "tone": "success"
      },
      {
        "title": "Turmeric",
        "titleTe": "పసుపు",
        "subtitle": "Sampling",
        "badge": "Now",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "I-02",
    "figmaFrame": "I-02 Assigned jobs",
    "version": "v3",
    "title": "Assigned jobs",
    "titleTe": "కేటాయించిన పనులు",
    "summary": "Jobs the lab head assigned.",
    "summaryTe": "ల్యాబ్ హెడ్ కేటాయించినవి.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-02-assigned-jobs",
    "route": "/quality/i-02-assigned-jobs",
    "file": "app/quality/i-02-assigned-jobs.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Job 2",
        "titleTe": "పని 2",
        "subtitle": "Nizamabad turmeric",
        "badge": "Sampling",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "I-03",
    "figmaFrame": "I-03 Visit",
    "version": "v3",
    "title": "Visit",
    "titleTe": "సందర్శన",
    "summary": "Gate pass and bay.",
    "summaryTe": "గేట్ పాస్.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-03-visit",
    "route": "/quality/i-03-visit",
    "file": "app/quality/i-03-visit.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Bay",
        "titleTe": "బే",
        "subtitle": "Guntur 4"
      }
    ]
  },
  {
    "id": "I-04",
    "figmaFrame": "I-04 Sample",
    "version": "v3",
    "title": "Sample",
    "titleTe": "నమూనా",
    "summary": "Draw the sample and seal it.",
    "summaryTe": "నమూనా తీసి సీల్ చేయండి.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-04-sample",
    "route": "/quality/i-04-sample",
    "file": "app/quality/i-04-sample.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "I-05",
    "figmaFrame": "I-05 Moisture",
    "version": "v3",
    "title": "Moisture",
    "titleTe": "తేమ",
    "summary": "Enter moisture. It does not change the price by itself.",
    "summaryTe": "తేమ నమోదు. ధర దానంతట అది మారదు.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-05-moisture",
    "route": "/quality/i-05-moisture",
    "file": "app/quality/i-05-moisture.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "I-06",
    "figmaFrame": "I-06 Colour",
    "version": "v3",
    "title": "Colour",
    "titleTe": "రంగు",
    "summary": "Colour grade against the commodity template.",
    "summaryTe": "సరుకు టెంప్లేట్‌తో రంగు.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-06-colour",
    "route": "/quality/i-06-colour",
    "file": "app/quality/i-06-colour.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "I-07",
    "figmaFrame": "I-07 Photos",
    "version": "v3",
    "title": "Photos",
    "titleTe": "ఫోటోలు",
    "summary": "Evidence notes. The demo does not upload a file.",
    "summaryTe": "సాక్ష్యం నోట్స్.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-07-photos",
    "route": "/quality/i-07-photos",
    "file": "app/quality/i-07-photos.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "I-08",
    "figmaFrame": "I-08 Checklist",
    "version": "v3",
    "title": "Checklist",
    "titleTe": "చెక్‌లిస్ట్",
    "summary": "Commodity QC template.",
    "summaryTe": "నాణ్యత టెంప్లేట్.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-08-checklist",
    "route": "/quality/i-08-checklist",
    "file": "app/quality/i-08-checklist.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Moisture",
        "titleTe": "తేమ",
        "subtitle": "≤ 10% for grade A"
      },
      {
        "title": "Foreign matter",
        "titleTe": "ఇతర పదార్థం",
        "subtitle": "≤ 1%"
      }
    ]
  },
  {
    "id": "I-09",
    "figmaFrame": "I-09 Submit report",
    "version": "v3",
    "title": "Submit report",
    "titleTe": "నివేదిక",
    "summary": "Submit for both parties to accept by OTP.",
    "summaryTe": "ఇరువైపుల OTP అంగీకారం.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-09-submit-report",
    "route": "/quality/i-09-submit-report",
    "file": "app/quality/i-09-submit-report.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "I-10",
    "figmaFrame": "I-10 OTP handoff",
    "version": "v3",
    "title": "OTP handoff",
    "titleTe": "OTP",
    "summary": "You trigger the OTPs. You do not enter them.",
    "summaryTe": "మీరు OTPలను ప్రారంభిస్తారు. మీరు ఎంటర్ చేయరు.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-10-otp-handoff",
    "route": "/quality/i-10-otp-handoff",
    "file": "app/quality/i-10-otp-handoff.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "I-11",
    "figmaFrame": "I-11 Reinspection",
    "version": "v3",
    "title": "Reinspection",
    "titleTe": "మళ్ళీ తనిఖీ",
    "summary": "Dispute D-2041 asks for a second look.",
    "summaryTe": "D-2041 రెండోసారి.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-11-reinspection",
    "route": "/quality/i-11-reinspection",
    "file": "app/quality/i-11-reinspection.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Queued"
      }
    ]
  },
  {
    "id": "I-12",
    "figmaFrame": "I-12 Conflict check",
    "version": "v3",
    "title": "Conflict check",
    "titleTe": "విరుద్ధం",
    "summary": "An inspector who is also the buyer is blocked.",
    "summaryTe": "కొనుగోలుదారు అయిన తనిఖీదారు నిరోధం.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-12-conflict-check",
    "route": "/quality/i-12-conflict-check",
    "file": "app/quality/i-12-conflict-check.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Harish",
        "titleTe": "హరీష్",
        "subtitle": "Clear",
        "badge": "OK",
        "tone": "success"
      }
    ]
  },
  {
    "id": "I-13",
    "figmaFrame": "I-13 My team",
    "version": "v3",
    "title": "My team",
    "titleTe": "నా బృందం",
    "summary": "Lab head, field inspector, technician.",
    "summaryTe": "ల్యాబ్ హెడ్, ఫీల్డ్, టెక్నీషియన్.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-13-my-team",
    "route": "/quality/i-13-my-team",
    "file": "app/quality/i-13-my-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "I-14",
    "figmaFrame": "I-14 Rates",
    "version": "v3",
    "title": "Rates",
    "titleTe": "రేట్లు",
    "summary": "Lab head sets the visit rate.",
    "summaryTe": "సందర్శన రేటు.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-14-rates",
    "route": "/quality/i-14-rates",
    "file": "app/quality/i-14-rates.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "I-15",
    "figmaFrame": "I-15 Empty jobs",
    "version": "v3",
    "title": "Empty jobs",
    "titleTe": "ఖాళీ పనులు",
    "summary": "No inspections assigned.",
    "summaryTe": "తనిఖీలు లేవు.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-15-empty-jobs",
    "route": "/quality/i-15-empty-jobs",
    "file": "app/quality/i-15-empty-jobs.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "I-16",
    "figmaFrame": "I-16 Loading jobs",
    "version": "v3",
    "title": "Loading jobs",
    "titleTe": "లోడ్",
    "summary": "The job list is loading.",
    "summaryTe": "పనులు లోడ్ అవుతున్నాయి.",
    "stakeholder": "inspector",
    "nav": "inspector",
    "group": "quality",
    "slug": "i-16-loading-jobs",
    "route": "/quality/i-16-loading-jobs",
    "file": "app/quality/i-16-loading-jobs.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "V-01",
    "figmaFrame": "V-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Meena signs buyer-side QC. She is the only buyer role that can.",
    "summaryTe": "మీనా కొనుగోలు QC సంతకం.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-01-home",
    "route": "/quality/v-01-home",
    "file": "app/quality/v-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "Awaiting sign-off",
        "badge": "QC",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "V-02",
    "figmaFrame": "V-02 Queue",
    "version": "v3",
    "title": "Queue",
    "titleTe": "క్యూ",
    "summary": "Deals waiting for buyer QC.",
    "summaryTe": "కొనుగోలు QC కోసం.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-02-queue",
    "route": "/quality/v-02-queue",
    "file": "app/quality/v-02-queue.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Sannam",
        "titleTe": "సన్నం",
        "subtitle": "Lab passed",
        "badge": "Sign",
        "tone": "info"
      }
    ]
  },
  {
    "id": "V-03",
    "figmaFrame": "V-03 Accept report",
    "version": "v3",
    "title": "Accept report",
    "titleTe": "నివేదిక అంగీకారం",
    "summary": "Buyer QC OTP. A verifier cannot also be the purchaser on this deal.",
    "summaryTe": "QC OTP. కొనుగోలుదారు కాకూడదు.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-03-accept-report",
    "route": "/quality/v-03-accept-report",
    "file": "app/quality/v-03-accept-report.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "V-04",
    "figmaFrame": "V-04 Raise issue",
    "version": "v3",
    "title": "Raise issue",
    "titleTe": "సమస్య",
    "summary": "Send the lot back before weighment.",
    "summaryTe": "తూకానికి ముందు వెనక్కి.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-04-raise-issue",
    "route": "/quality/v-04-raise-issue",
    "file": "app/quality/v-04-raise-issue.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "V-05",
    "figmaFrame": "V-05 History",
    "version": "v3",
    "title": "History",
    "titleTe": "చరిత్ర",
    "summary": "Past QC on this seller.",
    "summaryTe": "ఈ అమ్మకంపై గత QC.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-05-history",
    "route": "/quality/v-05-history",
    "file": "app/quality/v-05-history.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "Disputed moisture"
      }
    ]
  },
  {
    "id": "V-06",
    "figmaFrame": "V-06 Authenticity",
    "version": "v3",
    "title": "Authenticity",
    "titleTe": "నిజం",
    "summary": "Token matches the gate slip.",
    "summaryTe": "టోకెన్ గేట్ స్లిప్‌తో సరిపోతుంది.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-06-authenticity",
    "route": "/quality/v-06-authenticity",
    "file": "app/quality/v-06-authenticity.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Token",
        "titleTe": "టోకెన్",
        "subtitle": "Match",
        "badge": "OK",
        "tone": "success"
      }
    ]
  },
  {
    "id": "V-07",
    "figmaFrame": "V-07 Limits",
    "version": "v3",
    "title": "Limits",
    "titleTe": "పరిమితులు",
    "summary": "Meena can reject a lot on QC. She cannot pay.",
    "summaryTe": "తిరస్కరించగలరు. చెల్లించలేరు.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-07-limits",
    "route": "/quality/v-07-limits",
    "file": "app/quality/v-07-limits.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "V-08",
    "figmaFrame": "V-08 Offline",
    "version": "v3",
    "title": "Offline",
    "titleTe": "ఆఫ్‌లైన్",
    "summary": "Notes wait on the phone.",
    "summaryTe": "నోట్స్ ఫోన్‌లో ఉంటాయి.",
    "stakeholder": "verifier",
    "nav": "verifier",
    "group": "quality",
    "slug": "v-08-offline",
    "route": "/quality/v-08-offline",
    "file": "app/quality/v-08-offline.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "L-01",
    "figmaFrame": "L-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Divya's bench: ASTA and aflatoxin for Teja.",
    "summaryTe": "దివ్య బెంచ్: ASTA మరియు అఫ్లాటాక్సిన్.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-01-home",
    "route": "/quality/l-01-home",
    "file": "app/quality/l-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "ASTA pending",
        "badge": "Lab",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "L-02",
    "figmaFrame": "L-02 Samples",
    "version": "v3",
    "title": "Samples",
    "titleTe": "నమూనాలు",
    "summary": "Sealed samples in the lab.",
    "summaryTe": "సీల్ చేసిన నమూనాలు.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-02-samples",
    "route": "/quality/l-02-samples",
    "file": "app/quality/l-02-samples.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "S-19",
        "titleTe": "నమూనా",
        "subtitle": "Teja · Guntur"
      }
    ]
  },
  {
    "id": "L-03",
    "figmaFrame": "L-03 Result entry",
    "version": "v3",
    "title": "Result entry",
    "titleTe": "ఫలితం",
    "summary": "Enter ASTA. The field inspector still owns the visit.",
    "summaryTe": "ASTA నమోదు.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-03-result-entry",
    "route": "/quality/l-03-result-entry",
    "file": "app/quality/l-03-result-entry.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "L-04",
    "figmaFrame": "L-04 Certificate",
    "version": "v3",
    "title": "Certificate",
    "titleTe": "సర్టిఫికేట్",
    "summary": "Draft until the lab head signs.",
    "summaryTe": "ల్యాబ్ హెడ్ సంతకం వరకు డ్రాఫ్ట్.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-04-certificate",
    "route": "/quality/l-04-certificate",
    "file": "app/quality/l-04-certificate.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Draft"
      }
    ]
  },
  {
    "id": "L-05",
    "figmaFrame": "L-05 Aflatoxin",
    "version": "v3",
    "title": "Aflatoxin",
    "titleTe": "అఫ్లాటాక్సిన్",
    "summary": "Result against the commodity limit.",
    "summaryTe": "సరుకు పరిమితితో పోలిక.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-05-aflatoxin",
    "route": "/quality/l-05-aflatoxin",
    "file": "app/quality/l-05-aflatoxin.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "L-06",
    "figmaFrame": "L-06 Retest",
    "version": "v3",
    "title": "Retest",
    "titleTe": "మళ్ళీ పరీక్ష",
    "summary": "Lab head can order a retest.",
    "summaryTe": "ల్యాబ్ హెడ్ మళ్ళీ పరీక్ష.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-06-retest",
    "route": "/quality/l-06-retest",
    "file": "app/quality/l-06-retest.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "L-07",
    "figmaFrame": "L-07 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Head and technicians.",
    "summaryTe": "హెడ్ మరియు టెక్నీషియన్లు.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-07-team",
    "route": "/quality/l-07-team",
    "file": "app/quality/l-07-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "L-08",
    "figmaFrame": "L-08 Empty bench",
    "version": "v3",
    "title": "Empty bench",
    "titleTe": "ఖాళీ బెంచ్",
    "summary": "No samples checked in.",
    "summaryTe": "నమూనాలు లేవు.",
    "stakeholder": "lab",
    "nav": "lab",
    "group": "quality",
    "slug": "l-08-empty-bench",
    "route": "/quality/l-08-empty-bench",
    "file": "app/quality/l-08-empty-bench.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "T-01",
    "figmaFrame": "T-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Nagaraju's trip is loading at Guntur. Earnings are records.",
    "summaryTe": "నాగరాజు గుంటూరులో లోడవుతున్నాడు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-01-home",
    "route": "/transport/t-01-home",
    "file": "app/transport/t-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Today",
        "labelTe": "ఈ రోజు",
        "value": "1"
      },
      {
        "label": "Fare",
        "labelTe": "ఛార్జీ",
        "value": "₹18,400"
      },
      {
        "label": "Open",
        "labelTe": "తెరిచినవి",
        "value": "1"
      }
    ],
    "items": [
      {
        "title": "AP 07 TX 4545",
        "titleTe": "వాహనం",
        "subtitle": "Guntur → Sai Exports",
        "badge": "Loading",
        "tone": "info"
      }
    ]
  },
  {
    "id": "T-02",
    "figmaFrame": "T-02 Available loads",
    "version": "v3",
    "title": "Available loads",
    "titleTe": "లోడ్లు",
    "summary": "Loads you can quote. Above ₹30,000 the owner approves.",
    "summaryTe": "₹30,000 పైన యజమాని ఆమోదం.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-02-available-loads",
    "route": "/transport/t-02-available-loads",
    "file": "app/transport/t-02-available-loads.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Warangal cotton",
        "titleTe": "వరంగల్ పత్తి",
        "subtitle": "₹32,000 quote",
        "badge": "Needs owner",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "T-03",
    "figmaFrame": "T-03 Trip detail",
    "version": "v3",
    "title": "Trip detail",
    "titleTe": "ప్రయాణం",
    "summary": "Seal, bay and consignee.",
    "summaryTe": "సీల్, బే, స్వీకర్త.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-03-trip-detail",
    "route": "/transport/t-03-trip-detail",
    "file": "app/transport/t-03-trip-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "From",
        "titleTe": "నుండి",
        "subtitle": "Guntur yard"
      },
      {
        "title": "To",
        "titleTe": "వరకు",
        "subtitle": "Sai Exports"
      }
    ]
  },
  {
    "id": "T-04",
    "figmaFrame": "T-04 Loading order",
    "version": "v3",
    "title": "Loading order",
    "titleTe": "లోడింగ్ ఆర్డర్",
    "summary": "12 bags of Sannam.",
    "summaryTe": "సన్నం 12 బ్యాగులు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-04-loading-order",
    "route": "/transport/t-04-loading-order",
    "file": "app/transport/t-04-loading-order.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Bags",
        "titleTe": "బ్యాగులు",
        "subtitle": "12"
      }
    ]
  },
  {
    "id": "T-05",
    "figmaFrame": "T-05 e-Permit",
    "version": "v3",
    "title": "e-Permit",
    "titleTe": "పర్మిట్",
    "summary": "TRD-CHL-089234.",
    "summaryTe": "పర్మిట్ నంబర్.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-05-e-permit",
    "route": "/transport/t-05-e-permit",
    "file": "app/transport/t-05-e-permit.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Permit",
        "titleTe": "పర్మిట్",
        "subtitle": "TRD-CHL-089234"
      }
    ]
  },
  {
    "id": "T-06",
    "figmaFrame": "T-06 Live tracking",
    "version": "v3",
    "title": "Live tracking",
    "titleTe": "ట్రాకింగ్",
    "summary": "Last ping at the yard gate. Demo does not use GPS hardware.",
    "summaryTe": "గేట్ వద్ద చివరి స్థానం.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-06-live-tracking",
    "route": "/transport/t-06-live-tracking",
    "file": "app/transport/t-06-live-tracking.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Loading"
      }
    ]
  },
  {
    "id": "T-07",
    "figmaFrame": "T-07 Confirm pickup",
    "version": "v3",
    "title": "Confirm pickup",
    "titleTe": "పికప్",
    "summary": "Consignor OTP. The code goes to them, not to the driver.",
    "summaryTe": "పంపినవారి OTP. డ్రైవర్‌కు కోడ్ చూపించరు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-07-confirm-pickup",
    "route": "/transport/t-07-confirm-pickup",
    "file": "app/transport/t-07-confirm-pickup.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "T-08",
    "figmaFrame": "T-08 Confirm delivery",
    "version": "v3",
    "title": "Confirm delivery",
    "titleTe": "డెలివరీ",
    "summary": "Consignee OTP on arrival.",
    "summaryTe": "చేరాక స్వీకర్త OTP.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-08-confirm-delivery",
    "route": "/transport/t-08-confirm-delivery",
    "file": "app/transport/t-08-confirm-delivery.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "T-09",
    "figmaFrame": "T-09 Trip history",
    "version": "v3",
    "title": "Trip history",
    "titleTe": "చరిత్ర",
    "summary": "Completed trips.",
    "summaryTe": "పూర్తి ప్రయాణాలు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-09-trip-history",
    "route": "/transport/t-09-trip-history",
    "file": "app/transport/t-09-trip-history.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Yesterday",
        "titleTe": "నిన్న",
        "subtitle": "₹18,400",
        "badge": "Paid record",
        "tone": "success"
      }
    ]
  },
  {
    "id": "T-10",
    "figmaFrame": "T-10 Report issue",
    "version": "v3",
    "title": "Report issue",
    "titleTe": "సమస్య",
    "summary": "Seal broken or delay. The yard and the buyer see it.",
    "summaryTe": "సీల్ లేదా ఆలస్యం.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-10-report-issue",
    "route": "/transport/t-10-report-issue",
    "file": "app/transport/t-10-report-issue.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "T-11",
    "figmaFrame": "T-11 Earnings",
    "version": "v3",
    "title": "Earnings",
    "titleTe": "సంపాదన",
    "summary": "Fares recorded. Not a payout.",
    "summaryTe": "ఛార్జీల నమోదు. చెల్లింపు కాదు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-11-earnings",
    "route": "/transport/t-11-earnings",
    "file": "app/transport/t-11-earnings.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "October",
        "titleTe": "అక్టోబర్",
        "subtitle": "₹4.5 L recorded"
      }
    ]
  },
  {
    "id": "T-12",
    "figmaFrame": "T-12 Vehicles",
    "version": "v3",
    "title": "Vehicles",
    "titleTe": "వాహనాలు",
    "summary": "AP 07 TX 4545 and the spare.",
    "summaryTe": "వాహనాలు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-12-vehicles",
    "route": "/transport/t-12-vehicles",
    "file": "app/transport/t-12-vehicles.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "AP 07 TX 4545",
        "titleTe": "వాహనం",
        "subtitle": "On trip"
      }
    ]
  },
  {
    "id": "T-13",
    "figmaFrame": "T-13 Drivers",
    "version": "v3",
    "title": "Drivers",
    "titleTe": "డ్రైవర్లు",
    "summary": "Owner, dispatcher Kavitha, driver Nagaraju.",
    "summaryTe": "యజమాని, డిస్పాచర్, డ్రైవర్.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-13-drivers",
    "route": "/transport/t-13-drivers",
    "file": "app/transport/t-13-drivers.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "T-14",
    "figmaFrame": "T-14 Ratings",
    "version": "v3",
    "title": "Ratings",
    "titleTe": "రేటింగ్",
    "summary": "4.8 from completed trips.",
    "summaryTe": "4.8.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-14-ratings",
    "route": "/transport/t-14-ratings",
    "file": "app/transport/t-14-ratings.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Score",
        "titleTe": "స్కోర్",
        "subtitle": "4.8"
      }
    ]
  },
  {
    "id": "T-15",
    "figmaFrame": "T-15 Quote",
    "version": "v3",
    "title": "Quote",
    "titleTe": "కోట్",
    "summary": "Dispatcher quotes up to ₹30,000.",
    "summaryTe": "డిస్పాచర్ ₹30,000 వరకు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-15-quote",
    "route": "/transport/t-15-quote",
    "file": "app/transport/t-15-quote.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "T-16",
    "figmaFrame": "T-16 Assign vehicle",
    "version": "v3",
    "title": "Assign vehicle",
    "titleTe": "వాహనం కేటాయింపు",
    "summary": "Kavitha assigns the truck and driver.",
    "summaryTe": "కవిత ట్రక్ మరియు డ్రైవర్.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-16-assign-vehicle",
    "route": "/transport/t-16-assign-vehicle",
    "file": "app/transport/t-16-assign-vehicle.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "T-17",
    "figmaFrame": "v5 transport offline",
    "version": "v5",
    "title": "Offline trip",
    "titleTe": "ఆఫ్‌లైన్ ప్రయాణం",
    "summary": "Status updates wait on the phone.",
    "summaryTe": "స్థితి ఫోన్‌లో ఉంటుంది.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-17-offline-trip",
    "route": "/transport/t-17-offline-trip",
    "file": "app/transport/t-17-offline-trip.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "T-18",
    "figmaFrame": "T-18 KYC",
    "version": "v3",
    "title": "KYC",
    "titleTe": "కేవైసీ",
    "summary": "Vehicle papers for the fleet.",
    "summaryTe": "వాహన పత్రాలు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-18-kyc",
    "route": "/transport/t-18-kyc",
    "file": "app/transport/t-18-kyc.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "identity"
  },
  {
    "id": "T-19",
    "figmaFrame": "T-19 Limits",
    "version": "v3",
    "title": "Limits",
    "titleTe": "పరిమితులు",
    "summary": "Quotes above the cap route to Durga Prasad.",
    "summaryTe": "పరిమితి పైన దుర్గా ప్రసాద్.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-19-limits",
    "route": "/transport/t-19-limits",
    "file": "app/transport/t-19-limits.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "T-20",
    "figmaFrame": "T-20 Empty loads",
    "version": "v3",
    "title": "Empty loads",
    "titleTe": "ఖాళీ లోడ్లు",
    "summary": "No open loads in your lanes.",
    "summaryTe": "మీ మార్గాల్లో లోడ్లు లేవు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-20-empty-loads",
    "route": "/transport/t-20-empty-loads",
    "file": "app/transport/t-20-empty-loads.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "T-21",
    "figmaFrame": "T-21 Loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "Trips are loading.",
    "summaryTe": "ప్రయాణాలు లోడ్ అవుతున్నాయి.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-21-loading",
    "route": "/transport/t-21-loading",
    "file": "app/transport/t-21-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "T-22",
    "figmaFrame": "T-22 Seal photo",
    "version": "v3",
    "title": "Seal photo",
    "titleTe": "సీల్ ఫోటో",
    "summary": "Note the seal number. Demo keeps the number only.",
    "summaryTe": "సీల్ నంబర్.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-22-seal-photo",
    "route": "/transport/t-22-seal-photo",
    "file": "app/transport/t-22-seal-photo.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "T-23",
    "figmaFrame": "T-23 POD",
    "version": "v3",
    "title": "POD",
    "titleTe": "POD",
    "summary": "Proof of delivery after the consignee OTP.",
    "summaryTe": "స్వీకర్త OTP తర్వాత.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-23-pod",
    "route": "/transport/t-23-pod",
    "file": "app/transport/t-23-pod.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "POD",
        "titleTe": "POD",
        "subtitle": "Waiting"
      }
    ]
  },
  {
    "id": "T-24",
    "figmaFrame": "T-24 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "What the driver can and cannot confirm.",
    "summaryTe": "డ్రైవర్ ఏమి చేయగలరు.",
    "stakeholder": "transport",
    "nav": "transport",
    "group": "transport",
    "slug": "t-24-help",
    "route": "/transport/t-24-help",
    "file": "app/transport/t-24-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Can",
        "titleTe": "చేయగలరు",
        "subtitle": "Pickup and delivery OTP collection"
      },
      {
        "title": "Cannot",
        "titleTe": "చేయలేరు",
        "subtitle": "See the OTP code"
      }
    ]
  },
  {
    "id": "S-01",
    "figmaFrame": "S-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Guntur Cold Storage. Chamber B-2 holds Byadgi at 6°C.",
    "summaryTe": "B-2లో బ్యాడగి 6°C.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-01-home",
    "route": "/storage/s-01-home",
    "file": "app/storage/s-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Chambers",
        "labelTe": "చాంబర్లు",
        "value": "4"
      },
      {
        "label": "Bags",
        "labelTe": "బ్యాగులు",
        "value": "30"
      },
      {
        "label": "Rent",
        "labelTe": "అద్దె",
        "value": "₹5"
      }
    ],
    "items": [
      {
        "title": "B-2",
        "titleTe": "B-2",
        "subtitle": "Byadgi · 18 bags · 6°C",
        "badge": "Stored",
        "tone": "success"
      }
    ]
  },
  {
    "id": "S-02",
    "figmaFrame": "S-02 Inward requests",
    "version": "v3",
    "title": "Inward requests",
    "titleTe": "లోపలి అభ్యర్థనలు",
    "summary": "Lots asking for a bond.",
    "summaryTe": "బాండ్ అభ్యర్థనలు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-02-inward-requests",
    "route": "/storage/s-02-inward-requests",
    "file": "app/storage/s-02-inward-requests.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "REQ 9021",
        "titleTe": "అభ్యర్థన",
        "subtitle": "Sannam · 12 bags",
        "badge": "Inward",
        "tone": "info"
      }
    ]
  },
  {
    "id": "S-03",
    "figmaFrame": "S-03 Inward scan",
    "version": "v3",
    "title": "Inward scan",
    "titleTe": "లోపలి స్కాన్",
    "summary": "Bag count at the gate. Basha logs the vehicle.",
    "summaryTe": "గేట్ వద్ద బ్యాగులు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-03-inward-scan",
    "route": "/storage/s-03-inward-scan",
    "file": "app/storage/s-03-inward-scan.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "S-04",
    "figmaFrame": "S-04 Assign location",
    "version": "v3",
    "title": "Assign location",
    "titleTe": "స్థానం",
    "summary": "Put the lot in a chamber.",
    "summaryTe": "చాంబర్‌కు పంపండి.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-04-assign-location",
    "route": "/storage/s-04-assign-location",
    "file": "app/storage/s-04-assign-location.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "S-05",
    "figmaFrame": "S-05 Bond",
    "version": "v3",
    "title": "Bond",
    "titleTe": "బాండ్",
    "summary": "GCS-BOND-20250620-001.",
    "summaryTe": "బాండ్ నంబర్.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-05-bond",
    "route": "/storage/s-05-bond",
    "file": "app/storage/s-05-bond.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Bond",
        "titleTe": "బాండ్",
        "subtitle": "GCS-BOND-20250620-001"
      }
    ]
  },
  {
    "id": "S-06",
    "figmaFrame": "S-06 Inventory",
    "version": "v3",
    "title": "Inventory",
    "titleTe": "నిల్వ",
    "summary": "What is in the building.",
    "summaryTe": "భవనంలో ఉన్నది.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-06-inventory",
    "route": "/storage/s-06-inventory",
    "file": "app/storage/s-06-inventory.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "Chamber B-2",
        "badge": "Stored",
        "tone": "success"
      }
    ]
  },
  {
    "id": "S-07",
    "figmaFrame": "S-07 Lot detail",
    "version": "v3",
    "title": "Lot detail",
    "titleTe": "లాట్",
    "summary": "Token, bags, temperature, lien.",
    "summaryTe": "టోకెన్, బ్యాగులు, ఉష్ణోగ్రత.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-07-lot-detail",
    "route": "/storage/s-07-lot-detail",
    "file": "app/storage/s-07-lot-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Temp",
        "titleTe": "ఉష్ణోగ్రత",
        "subtitle": "6°C"
      },
      {
        "title": "Lien",
        "titleTe": "లీన్",
        "subtitle": "None"
      }
    ]
  },
  {
    "id": "S-08",
    "figmaFrame": "S-08 Rent invoice",
    "version": "v3",
    "title": "Rent invoice",
    "titleTe": "అద్దె బిల్లు",
    "summary": "₹5 per bag per day. A record, not a debit.",
    "summaryTe": "బ్యాగుకు రోజుకు ₹5.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-08-rent-invoice",
    "route": "/storage/s-08-rent-invoice",
    "file": "app/storage/s-08-rent-invoice.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "18 bags",
        "titleTe": "బ్యాగులు",
        "subtitle": "₹90 / day"
      }
    ]
  },
  {
    "id": "S-09",
    "figmaFrame": "S-09 Outward requests",
    "version": "v3",
    "title": "Outward requests",
    "titleTe": "బయటకు",
    "summary": "Release requests.",
    "summaryTe": "విడుదల అభ్యర్థనలు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-09-outward-requests",
    "route": "/storage/s-09-outward-requests",
    "file": "app/storage/s-09-outward-requests.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "REQ 1024",
        "titleTe": "అభ్యర్థన",
        "subtitle": "Waiting for depositor OTP",
        "badge": "Hold",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "S-10",
    "figmaFrame": "S-10 Outward scan",
    "version": "v3",
    "title": "Outward scan",
    "titleTe": "బయటి స్కాన్",
    "summary": "Stock release collects the depositor OTP.",
    "summaryTe": "దాఖలుదారు OTP.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-10-outward-scan",
    "route": "/storage/s-10-outward-scan",
    "file": "app/storage/s-10-outward-scan.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "S-11",
    "figmaFrame": "S-11 NOC",
    "version": "v3",
    "title": "NOC",
    "titleTe": "NOC",
    "summary": "No-objection note after rent is marked paid.",
    "summaryTe": "అద్దె నమోదు తర్వాత NOC.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-11-noc",
    "route": "/storage/s-11-noc",
    "file": "app/storage/s-11-noc.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "NOC",
        "titleTe": "NOC",
        "subtitle": "Draft"
      }
    ]
  },
  {
    "id": "S-12",
    "figmaFrame": "S-12 Environment",
    "version": "v3",
    "title": "Environment",
    "titleTe": "వాతావరణం",
    "summary": "6°C and 65% RH in B-2.",
    "summaryTe": "6°C మరియు 65% తేమ.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-12-environment",
    "route": "/storage/s-12-environment",
    "file": "app/storage/s-12-environment.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "B-2",
        "titleTe": "B-2",
        "subtitle": "6°C · 65%"
      }
    ]
  },
  {
    "id": "S-13",
    "figmaFrame": "S-13 Ledger",
    "version": "v3",
    "title": "Ledger",
    "titleTe": "లెడ్జర్",
    "summary": "Rent accrued.",
    "summaryTe": "అద్దె.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-13-ledger",
    "route": "/storage/s-13-ledger",
    "file": "app/storage/s-13-ledger.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "October",
        "titleTe": "అక్టోబర్",
        "subtitle": "₹8,850"
      }
    ]
  },
  {
    "id": "S-14",
    "figmaFrame": "S-14 Capacity",
    "version": "v3",
    "title": "Capacity",
    "titleTe": "సామర్థ్యం",
    "summary": "Update free bags.",
    "summaryTe": "ఖాళీ బ్యాగులు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-14-capacity",
    "route": "/storage/s-14-capacity",
    "file": "app/storage/s-14-capacity.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "S-15",
    "figmaFrame": "S-15 Facility settings",
    "version": "v3",
    "title": "Facility settings",
    "titleTe": "సౌకర్యం",
    "summary": "Rates and chambers.",
    "summaryTe": "రేట్లు మరియు చాంబర్లు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-15-facility-settings",
    "route": "/storage/s-15-facility-settings",
    "file": "app/storage/s-15-facility-settings.tsx",
    "kind": "mobile",
    "template": "settings",
    "items": [
      {
        "title": "Rate",
        "titleTe": "రేటు",
        "subtitle": "₹5 / bag / day"
      }
    ]
  },
  {
    "id": "S-16",
    "figmaFrame": "S-16 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Manager, gate clerk, stock keeper.",
    "summaryTe": "మేనేజర్, గేట్, కీపర్.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-16-team",
    "route": "/storage/s-16-team",
    "file": "app/storage/s-16-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "S-17",
    "figmaFrame": "S-17 Lien",
    "version": "v3",
    "title": "Lien",
    "titleTe": "లీన్",
    "summary": "A bank lien blocks release until the bank says so.",
    "summaryTe": "బ్యాంకు లీన్ విడుదలను ఆపుతుంది.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-17-lien",
    "route": "/storage/s-17-lien",
    "file": "app/storage/s-17-lien.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "No lien"
      }
    ]
  },
  {
    "id": "S-18",
    "figmaFrame": "S-18 Temperature log",
    "version": "v3",
    "title": "Temperature log",
    "titleTe": "ఉష్ణోగ్రత లాగ్",
    "summary": "Ramu's morning round.",
    "summaryTe": "రాము ఉదయం.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-18-temperature-log",
    "route": "/storage/s-18-temperature-log",
    "file": "app/storage/s-18-temperature-log.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "06:00",
        "titleTe": "ఉదయం",
        "subtitle": "6°C"
      }
    ]
  },
  {
    "id": "S-19",
    "figmaFrame": "S-19 Empty shed",
    "version": "v3",
    "title": "Empty shed",
    "titleTe": "ఖాళీ షెడ్",
    "summary": "No inward today.",
    "summaryTe": "ఈ రోజు లోపలి రాక లేదు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-19-empty-shed",
    "route": "/storage/s-19-empty-shed",
    "file": "app/storage/s-19-empty-shed.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "S-20",
    "figmaFrame": "S-20 Loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "Stock is loading.",
    "summaryTe": "నిల్వ లోడ్ అవుతోంది.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-20-loading",
    "route": "/storage/s-20-loading",
    "file": "app/storage/s-20-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "S-21",
    "figmaFrame": "S-21 Offline gate",
    "version": "v3",
    "title": "Offline gate",
    "titleTe": "ఆఫ్‌లైన్ గేట్",
    "summary": "Gate notes wait on the phone.",
    "summaryTe": "గేట్ నోట్స్ ఫోన్‌లో.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-21-offline-gate",
    "route": "/storage/s-21-offline-gate",
    "file": "app/storage/s-21-offline-gate.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "S-22",
    "figmaFrame": "S-22 Sample hold",
    "version": "v3",
    "title": "Sample hold",
    "titleTe": "నమూనా",
    "summary": "A sample can leave without a full release.",
    "summaryTe": "పూర్తి విడుదల లేకుండా నమూనా.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-22-sample-hold",
    "route": "/storage/s-22-sample-hold",
    "file": "app/storage/s-22-sample-hold.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "200 g",
        "titleTe": "నమూనా",
        "subtitle": "Allowed"
      }
    ]
  },
  {
    "id": "S-23",
    "figmaFrame": "S-23 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "Who can release stock.",
    "summaryTe": "ఎవరు విడుదల చేయగలరు.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-23-help",
    "route": "/storage/s-23-help",
    "file": "app/storage/s-23-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Manager",
        "titleTe": "మేనేజర్",
        "subtitle": "With depositor OTP"
      },
      {
        "title": "Keeper",
        "titleTe": "కీపర్",
        "subtitle": "Draft only"
      }
    ]
  },
  {
    "id": "S-24",
    "figmaFrame": "S-24 Rating",
    "version": "v3",
    "title": "Rating",
    "titleTe": "రేటింగ్",
    "summary": "Depositors rated the shed 4.7.",
    "summaryTe": "4.7.",
    "stakeholder": "storage",
    "nav": "storage",
    "group": "storage",
    "slug": "s-24-rating",
    "route": "/storage/s-24-rating",
    "file": "app/storage/s-24-rating.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Score",
        "titleTe": "స్కోర్",
        "subtitle": "4.7"
      }
    ]
  },
  {
    "id": "F-01",
    "figmaFrame": "F-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Deccan Agri Finance. Two files, one against a warehouse receipt.",
    "summaryTe": "రెండు ఫైళ్లు. ఒకటి గోడౌన్ రసీదుపై.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-01-home",
    "route": "/bank/f-01-home",
    "file": "app/bank/f-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Files",
        "labelTe": "ఫైళ్లు",
        "value": "2"
      },
      {
        "label": "Sanction cap",
        "labelTe": "పరిమితి",
        "value": "₹5 L"
      },
      {
        "label": "Score",
        "labelTe": "స్కోర్",
        "value": "6.5"
      }
    ],
    "items": [
      {
        "title": "Kotha",
        "titleTe": "కొత్త",
        "subtitle": "₹5,00,000 · receipt",
        "badge": "Appraisal",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "F-02",
    "figmaFrame": "F-02 Applications",
    "version": "v3",
    "title": "Applications",
    "titleTe": "అభ్యర్థనలు",
    "summary": "Consented farmers and buyers only.",
    "summaryTe": "అనుమతించినవారు మాత్రమే.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-02-applications",
    "route": "/bank/f-02-applications",
    "file": "app/bank/f-02-applications.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Ramesh",
        "titleTe": "రమేష్",
        "subtitle": "Warehouse receipt"
      },
      {
        "title": "Sai Exports",
        "titleTe": "సాయి",
        "subtitle": "Bill purchase"
      }
    ]
  },
  {
    "id": "F-03",
    "figmaFrame": "F-03 Review",
    "version": "v3",
    "title": "Review",
    "titleTe": "సమీక్ష",
    "summary": "Score 6.5 is a suggestion from the file, not an auto sanction.",
    "summaryTe": "స్కోర్ సూచన. ఆటో మంజూరు కాదు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-03-review",
    "route": "/bank/f-03-review",
    "file": "app/bank/f-03-review.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Score",
        "titleTe": "స్కోర్",
        "subtitle": "6.5",
        "badge": "Suggestion",
        "tone": "gold"
      },
      {
        "title": "Collateral",
        "titleTe": "తాకట్టు",
        "subtitle": "TKN-20260928-AA1200F3"
      }
    ]
  },
  {
    "id": "F-04",
    "figmaFrame": "F-04 Disburse",
    "version": "v3",
    "title": "Disburse",
    "titleTe": "పంపిణీ",
    "summary": "Record a sanction. The app does not transfer funds.",
    "summaryTe": "మంజూరు నమోదు. నిధులు పంపదు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-04-disburse",
    "route": "/bank/f-04-disburse",
    "file": "app/bank/f-04-disburse.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "F-05",
    "figmaFrame": "F-05 Collateral",
    "version": "v3",
    "title": "Collateral",
    "titleTe": "తాకట్టు",
    "summary": "Receipt stays in the cold store. Lien is a flag.",
    "summaryTe": "రసీదు గోడౌన్‌లో. లీన్ ఒక ఫ్లాగ్.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-05-collateral",
    "route": "/bank/f-05-collateral",
    "file": "app/bank/f-05-collateral.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Lien",
        "titleTe": "లీన్",
        "subtitle": "Not marked"
      }
    ]
  },
  {
    "id": "F-06",
    "figmaFrame": "F-06 Bill purchase",
    "version": "v3",
    "title": "Bill purchase",
    "titleTe": "బిల్లు కొనుగోలు",
    "summary": "Request against TRD-2026-004218.",
    "summaryTe": "బిల్లుపై అభ్యర్థన.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-06-bill-purchase",
    "route": "/bank/f-06-bill-purchase",
    "file": "app/bank/f-06-bill-purchase.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Bill",
        "titleTe": "బిల్లు",
        "subtitle": "TRD-2026-004218"
      }
    ]
  },
  {
    "id": "F-07",
    "figmaFrame": "F-07 Repayments",
    "version": "v3",
    "title": "Repayments",
    "titleTe": "తిరిగి చెల్లింపులు",
    "summary": "Schedule recorded on the file.",
    "summaryTe": "షెడ్యూల్ నమోదు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-07-repayments",
    "route": "/bank/f-07-repayments",
    "file": "app/bank/f-07-repayments.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Instalment",
        "titleTe": "వాయిదా",
        "subtitle": "Not started"
      }
    ]
  },
  {
    "id": "F-08",
    "figmaFrame": "F-08 Overdue",
    "version": "v3",
    "title": "Overdue",
    "titleTe": "గడువు దాటినవి",
    "summary": "Files past due.",
    "summaryTe": "గడువు దాటిన ఫైళ్లు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-08-overdue",
    "route": "/bank/f-08-overdue",
    "file": "app/bank/f-08-overdue.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "None",
        "titleTe": "లేవు",
        "subtitle": "No NPA in the demo",
        "badge": "Clear",
        "tone": "success"
      }
    ]
  },
  {
    "id": "F-09",
    "figmaFrame": "F-09 Compliance",
    "version": "v3",
    "title": "Compliance",
    "titleTe": "కంప్లయన్స్",
    "summary": "Reports the officer can export.",
    "summaryTe": "ఎగుమతి నివేదికలు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-09-compliance",
    "route": "/bank/f-09-compliance",
    "file": "app/bank/f-09-compliance.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Q2 note",
        "titleTe": "నోట్",
        "subtitle": "Internal record"
      }
    ]
  },
  {
    "id": "F-10",
    "figmaFrame": "F-10 Consent",
    "version": "v3",
    "title": "Consent",
    "titleTe": "అనుమతి",
    "summary": "The farmer OTP is required before you see the file.",
    "summaryTe": "ఫైల్ చూడటానికి రైతు OTP.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-10-consent",
    "route": "/bank/f-10-consent",
    "file": "app/bank/f-10-consent.tsx",
    "kind": "mobile",
    "template": "otp"
  },
  {
    "id": "F-11",
    "figmaFrame": "F-11 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "RM Anusha, credit Mohan, risk Ganesh.",
    "summaryTe": "RM, క్రెడిట్, రిస్క్.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-11-team",
    "route": "/bank/f-11-team",
    "file": "app/bank/f-11-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "F-12",
    "figmaFrame": "F-12 Sanction limit",
    "version": "v3",
    "title": "Sanction limit",
    "titleTe": "మంజూరు పరిమితి",
    "summary": "Mohan up to ₹5,00,000. Above that, Ganesh.",
    "summaryTe": "₹5 లక్షలు. పైన గణేష్.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-12-sanction-limit",
    "route": "/bank/f-12-sanction-limit",
    "file": "app/bank/f-12-sanction-limit.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Mohan",
        "titleTe": "మోహన్",
        "subtitle": "₹5,00,000"
      },
      {
        "title": "Ganesh",
        "titleTe": "గణేష్",
        "subtitle": "₹50,00,000"
      }
    ]
  },
  {
    "id": "F-13",
    "figmaFrame": "F-13 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Branch name and products.",
    "summaryTe": "బ్రాంచ్ పేరు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-13-settings",
    "route": "/bank/f-13-settings",
    "file": "app/bank/f-13-settings.tsx",
    "kind": "mobile",
    "template": "settings",
    "items": [
      {
        "title": "Branch",
        "titleTe": "బ్రాంచ్",
        "subtitle": "Guntur"
      }
    ]
  },
  {
    "id": "F-14",
    "figmaFrame": "F-14 Empty pipeline",
    "version": "v3",
    "title": "Empty pipeline",
    "titleTe": "ఖాళీ",
    "summary": "No consented applications.",
    "summaryTe": "అనుమతించిన అభ్యర్థనలు లేవు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-14-empty-pipeline",
    "route": "/bank/f-14-empty-pipeline",
    "file": "app/bank/f-14-empty-pipeline.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "F-15",
    "figmaFrame": "F-15 Loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "Files are loading.",
    "summaryTe": "ఫైళ్లు లోడ్ అవుతున్నాయి.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-15-loading",
    "route": "/bank/f-15-loading",
    "file": "app/bank/f-15-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "F-16",
    "figmaFrame": "F-16 AI score why",
    "version": "v3",
    "title": "AI score why",
    "titleTe": "స్కోర్ ఎందుకు",
    "summary": "Why the score is 6.5. It never sanctions.",
    "summaryTe": "స్కోర్ ఎందుకు. మంజూరు చేయదు.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-16-ai-score-why",
    "route": "/bank/f-16-ai-score-why",
    "file": "app/bank/f-16-ai-score-why.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "why"
  },
  {
    "id": "F-17",
    "figmaFrame": "F-17 Lien release",
    "version": "v3",
    "title": "Lien release",
    "titleTe": "లీన్ విడుదల",
    "summary": "Risk officer releases a lien. Audited.",
    "summaryTe": "రిస్క్ ఆఫీసర్ లీన్ విడుదల.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-17-lien-release",
    "route": "/bank/f-17-lien-release",
    "file": "app/bank/f-17-lien-release.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "F-18",
    "figmaFrame": "F-18 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "What this desk does not do.",
    "summaryTe": "ఈ డెస్క్ చేయనిది.",
    "stakeholder": "bank",
    "nav": "bank",
    "group": "bank",
    "slug": "f-18-help",
    "route": "/bank/f-18-help",
    "file": "app/bank/f-18-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Does not",
        "titleTe": "చేయదు",
        "subtitle": "Move money or auto-sanction"
      }
    ]
  },
  {
    "id": "N-01",
    "figmaFrame": "N-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Godavari Crop Cover. One active policy, one open claim.",
    "summaryTe": "ఒక పాలసీ, ఒక క్లెయిమ్.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-01-home",
    "route": "/insurance/n-01-home",
    "file": "app/insurance/n-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Policies",
        "labelTe": "పాలసీలు",
        "value": "1"
      },
      {
        "label": "Claims",
        "labelTe": "క్లెయిమ్‌లు",
        "value": "1"
      },
      {
        "label": "Cap",
        "labelTe": "పరిమితి",
        "value": "₹2 L"
      }
    ],
    "items": [
      {
        "title": "Weather",
        "titleTe": "వాతావరణం",
        "subtitle": "Kotha chilli plot",
        "badge": "Active",
        "tone": "success"
      }
    ]
  },
  {
    "id": "N-02",
    "figmaFrame": "N-02 Products",
    "version": "v3",
    "title": "Products",
    "titleTe": "ఉత్పత్తులు",
    "summary": "Weather, transit, stock.",
    "summaryTe": "వాతావరణం, రవాణా, నిల్వ.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-02-products",
    "route": "/insurance/n-02-products",
    "file": "app/insurance/n-02-products.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Weather",
        "titleTe": "వాతావరణం",
        "subtitle": "Per plot"
      },
      {
        "title": "Transit",
        "titleTe": "రవాణా",
        "subtitle": "Per trip"
      }
    ]
  },
  {
    "id": "N-03",
    "figmaFrame": "N-03 Issue policy",
    "version": "v3",
    "title": "Issue policy",
    "titleTe": "పాలసీ జారీ",
    "summary": "Underwriter Farah up to ₹25,00,000 sum insured.",
    "summaryTe": "ఫరా ₹25 లక్షల వరకు.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-03-issue-policy",
    "route": "/insurance/n-03-issue-policy",
    "file": "app/insurance/n-03-issue-policy.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "N-04",
    "figmaFrame": "N-04 Policy detail",
    "version": "v3",
    "title": "Policy detail",
    "titleTe": "పాలసీ",
    "summary": "Plot, sum, premium record.",
    "summaryTe": "ప్లాట్, మొత్తం, ప్రీమియం.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-04-policy-detail",
    "route": "/insurance/n-04-policy-detail",
    "file": "app/insurance/n-04-policy-detail.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Sum",
        "titleTe": "మొత్తం",
        "subtitle": "₹8,00,000"
      },
      {
        "title": "Plot",
        "titleTe": "ప్లాట్",
        "subtitle": "North field"
      }
    ]
  },
  {
    "id": "N-05",
    "figmaFrame": "N-05 Claim review",
    "version": "v3",
    "title": "Claim review",
    "titleTe": "క్లెయిమ్ సమీక్ష",
    "summary": "Transit claim ₹62,000. Above ₹2,00,000 goes to head office.",
    "summaryTe": "₹2 లక్షల పైన హెడ్ ఆఫీస్.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-05-claim-review",
    "route": "/insurance/n-05-claim-review",
    "file": "app/insurance/n-05-claim-review.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Claim",
        "titleTe": "క్లెయిమ్",
        "subtitle": "₹62,000",
        "badge": "Survey",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "N-06",
    "figmaFrame": "N-06 Assign surveyor",
    "version": "v3",
    "title": "Assign surveyor",
    "titleTe": "సర్వేయర్",
    "summary": "Send Chandu to the plot or the truck.",
    "summaryTe": "చందును పంపండి.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-06-assign-surveyor",
    "route": "/insurance/n-06-assign-surveyor",
    "file": "app/insurance/n-06-assign-surveyor.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "N-07",
    "figmaFrame": "N-07 Assessment",
    "version": "v3",
    "title": "Assessment",
    "titleTe": "అంచనా",
    "summary": "Loss estimate. Paying it is a separate recorded step.",
    "summaryTe": "నష్టం అంచనా.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-07-assessment",
    "route": "/insurance/n-07-assessment",
    "file": "app/insurance/n-07-assessment.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "N-08",
    "figmaFrame": "N-08 Payout",
    "version": "v3",
    "title": "Payout",
    "titleTe": "చెల్లింపు",
    "summary": "Record of a payout decision. No money leaves the app.",
    "summaryTe": "నిర్ణయం నమోదు. డబ్బు వెళ్లదు.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-08-payout",
    "route": "/insurance/n-08-payout",
    "file": "app/insurance/n-08-payout.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Decision",
        "titleTe": "నిర్ణయం",
        "subtitle": "Recorded"
      }
    ]
  },
  {
    "id": "N-09",
    "figmaFrame": "N-09 Policies",
    "version": "v3",
    "title": "Policies",
    "titleTe": "పాలసీలు",
    "summary": "Book of business.",
    "summaryTe": "పాలసీల పుస్తకం.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-09-policies",
    "route": "/insurance/n-09-policies",
    "file": "app/insurance/n-09-policies.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "POL-1",
        "titleTe": "పాలసీ",
        "subtitle": "Active weather"
      }
    ]
  },
  {
    "id": "N-10",
    "figmaFrame": "N-10 Ledger",
    "version": "v3",
    "title": "Ledger",
    "titleTe": "లెడ్జర్",
    "summary": "Premium and claim records.",
    "summaryTe": "ప్రీమియం మరియు క్లెయిమ్.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-10-ledger",
    "route": "/insurance/n-10-ledger",
    "file": "app/insurance/n-10-ledger.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Premium",
        "titleTe": "ప్రీమియం",
        "subtitle": "₹12,500 record"
      }
    ]
  },
  {
    "id": "N-11",
    "figmaFrame": "N-11 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Products and caps.",
    "summaryTe": "ఉత్పత్తులు మరియు పరిమితులు.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-11-settings",
    "route": "/insurance/n-11-settings",
    "file": "app/insurance/n-11-settings.tsx",
    "kind": "mobile",
    "template": "settings",
    "items": [
      {
        "title": "Claims cap",
        "titleTe": "పరిమితి",
        "subtitle": "₹2,00,000"
      }
    ]
  },
  {
    "id": "N-12",
    "figmaFrame": "N-12 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Underwriter, surveyor, claims.",
    "summaryTe": "అండర్‌రైటర్, సర్వేయర్, క్లెయిమ్స్.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-12-team",
    "route": "/insurance/n-12-team",
    "file": "app/insurance/n-12-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "N-13",
    "figmaFrame": "N-13 Survey photos",
    "version": "v3",
    "title": "Survey photos",
    "titleTe": "ఫోటోలు",
    "summary": "Chandu's visit notes.",
    "summaryTe": "చందు సందర్శన నోట్స్.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-13-survey-photos",
    "route": "/insurance/n-13-survey-photos",
    "file": "app/insurance/n-13-survey-photos.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "N-14",
    "figmaFrame": "N-14 Why this premium",
    "version": "v3",
    "title": "Why this premium",
    "titleTe": "ప్రీమియం ఎందుకు",
    "summary": "A suggestion with confidence. Farah still issues the policy.",
    "summaryTe": "సూచన. ఫరా జారీ చేస్తారు.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-14-why-this-premium",
    "route": "/insurance/n-14-why-this-premium",
    "file": "app/insurance/n-14-why-this-premium.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "why"
  },
  {
    "id": "N-15",
    "figmaFrame": "N-15 Empty claims",
    "version": "v3",
    "title": "Empty claims",
    "titleTe": "ఖాళీ",
    "summary": "No open claims.",
    "summaryTe": "తెరిచిన క్లెయిమ్‌లు లేవు.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-15-empty-claims",
    "route": "/insurance/n-15-empty-claims",
    "file": "app/insurance/n-15-empty-claims.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "N-16",
    "figmaFrame": "N-16 Loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "Policies are loading.",
    "summaryTe": "పాలసీలు లోడ్ అవుతున్నాయి.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-16-loading",
    "route": "/insurance/n-16-loading",
    "file": "app/insurance/n-16-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "N-17",
    "figmaFrame": "N-17 Head office",
    "version": "v3",
    "title": "Head office",
    "titleTe": "హెడ్ ఆఫీస్",
    "summary": "Claims above ₹2,00,000 wait here.",
    "summaryTe": "₹2 లక్షల పైన ఇక్కడ.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-17-head-office",
    "route": "/insurance/n-17-head-office",
    "file": "app/insurance/n-17-head-office.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Queue",
        "titleTe": "క్యూ",
        "subtitle": "Empty"
      }
    ]
  },
  {
    "id": "N-18",
    "figmaFrame": "N-18 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "Surveyors do not settle claims.",
    "summaryTe": "సర్వేయర్ క్లెయిమ్ ముగించరు.",
    "stakeholder": "insurance",
    "nav": "insurance",
    "group": "insurance",
    "slug": "n-18-help",
    "route": "/insurance/n-18-help",
    "file": "app/insurance/n-18-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Surveyor",
        "titleTe": "సర్వేయర్",
        "subtitle": "Visit only"
      }
    ]
  },
  {
    "id": "Y-01",
    "figmaFrame": "Y-01 Gate",
    "version": "v3",
    "title": "Gate",
    "titleTe": "గేట్",
    "summary": "Vehicles in. Token autofill starts here.",
    "summaryTe": "వాహనాలు. టోకెన్ ఇక్కడ మొదలు.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-01-gate",
    "route": "/yard/y-01-gate",
    "file": "app/yard/y-01-gate.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "AP 07 TX 4545",
        "titleTe": "వాహనం",
        "subtitle": "Sannam · 12 bags",
        "badge": "In",
        "tone": "success"
      },
      {
        "title": "TS 09 AB 2211",
        "titleTe": "వాహనం",
        "subtitle": "Teja · 42 bags",
        "badge": "Queue",
        "tone": "info"
      }
    ]
  },
  {
    "id": "Y-02",
    "figmaFrame": "Y-02 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Guntur yard today. Auction closes 23:50.",
    "summaryTe": "ఈ రోజు గుంటూరు. ముగింపు 23:50.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-02-home",
    "route": "/yard/y-02-home",
    "file": "app/yard/y-02-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Lots",
        "labelTe": "లాట్లు",
        "value": "24"
      },
      {
        "label": "Modal Teja",
        "labelTe": "తేజ",
        "value": "₹21,600"
      },
      {
        "label": "Disputes",
        "labelTe": "వివాదాలు",
        "value": "1"
      }
    ]
  },
  {
    "id": "Y-03",
    "figmaFrame": "Y-03 Manual entry",
    "version": "v3",
    "title": "Manual entry",
    "titleTe": "మాన్యువల్ ఎంట్రీ",
    "summary": "When the pass will not scan.",
    "summaryTe": "స్కాన్ కాకపోతే.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-03-manual-entry",
    "route": "/yard/y-03-manual-entry",
    "file": "app/yard/y-03-manual-entry.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "Y-04",
    "figmaFrame": "Y-04 Queue",
    "version": "v3",
    "title": "Queue",
    "titleTe": "క్యూ",
    "summary": "Bays and the weighbridge line.",
    "summaryTe": "బేలు మరియు తూకం వరుస.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-04-queue",
    "route": "/yard/y-04-queue",
    "file": "app/yard/y-04-queue.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Bay 4",
        "titleTe": "బే 4",
        "subtitle": "Sannam weighment",
        "badge": "Now",
        "tone": "warning"
      },
      {
        "title": "Bay 2",
        "titleTe": "బే 2",
        "subtitle": "Teja auction",
        "badge": "Live",
        "tone": "success"
      }
    ]
  },
  {
    "id": "Y-05",
    "figmaFrame": "Y-05 Price board",
    "version": "v3",
    "title": "Price board",
    "titleTe": "ధరల బోర్డు",
    "summary": "Live modal by commodity.",
    "summaryTe": "సరుకు వారీగా మోడల్.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-05-price-board",
    "route": "/yard/y-05-price-board",
    "file": "app/yard/y-05-price-board.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "₹21,600"
      },
      {
        "title": "Sannam",
        "titleTe": "సన్నం",
        "subtitle": "₹15,800"
      },
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "₹20,100"
      }
    ]
  },
  {
    "id": "Y-06",
    "figmaFrame": "Y-06 Weighbridge",
    "version": "v5",
    "title": "Weighbridge",
    "titleTe": "వేబ్రిడ్జ్",
    "summary": "Yusuf re-weighs when the two phones disagree for more than five minutes.",
    "summaryTe": "5 నిమిషాలకు పైగా తేడా ఉంటే మళ్ళీ తూకం.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-06-weighbridge",
    "route": "/yard/y-06-weighbridge",
    "file": "app/yard/y-06-weighbridge.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "yard"
  },
  {
    "id": "Y-07",
    "figmaFrame": "Y-07 Cess",
    "version": "v3",
    "title": "Cess",
    "titleTe": "సెస్",
    "summary": "Market fee 1% on Guntur chilli. A record.",
    "summaryTe": "మార్కెట్ ఫీజు 1%.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-07-cess",
    "route": "/yard/y-07-cess",
    "file": "app/yard/y-07-cess.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Fee",
        "titleTe": "ఫీజు",
        "subtitle": "1%"
      }
    ]
  },
  {
    "id": "Y-08",
    "figmaFrame": "Y-08 Price bulletin",
    "version": "v3",
    "title": "Price bulletin",
    "titleTe": "బులెటిన్",
    "summary": "Today's bulletin for the association.",
    "summaryTe": "ఈ రోజు బులెటిన్.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-08-price-bulletin",
    "route": "/yard/y-08-price-bulletin",
    "file": "app/yard/y-08-price-bulletin.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Arrivals",
        "titleTe": "రాకలు",
        "subtitle": "24 lots"
      }
    ]
  },
  {
    "id": "Y-09",
    "figmaFrame": "Y-09 Disputes",
    "version": "v3",
    "title": "Disputes",
    "titleTe": "వివాదాలు",
    "summary": "D-2041 moisture. Re-open needs the yard admin and a reason.",
    "summaryTe": "తిరిగి తెరవడానికి కారణం.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-09-disputes",
    "route": "/yard/y-09-disputes",
    "file": "app/yard/y-09-disputes.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "D-2041",
        "titleTe": "వివాదం",
        "subtitle": "Byadgi moisture",
        "badge": "Open",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "Y-10",
    "figmaFrame": "Y-10 Auction watch",
    "version": "v7",
    "title": "Auction watch",
    "titleTe": "వేలం",
    "summary": "Supervisor can pause a lot. Identities are visible here.",
    "summaryTe": "సూపర్‌వైజర్ లాట్‌ను ఆపగలరు. పేర్లు ఇక్కడ కనిపిస్తాయి.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-10-auction-watch",
    "route": "/yard/y-10-auction-watch",
    "file": "app/yard/y-10-auction-watch.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "Y-11",
    "figmaFrame": "Y-11 Staff",
    "version": "v3",
    "title": "Staff",
    "titleTe": "సిబ్బంది",
    "summary": "Secretary, auction supervisor, weighbridge.",
    "summaryTe": "కార్యదర్శి, సూపర్‌వైజర్, వేబ్రిడ్జ్.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-11-staff",
    "route": "/yard/y-11-staff",
    "file": "app/yard/y-11-staff.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "Y-12",
    "figmaFrame": "Y-12 Holidays",
    "version": "v3",
    "title": "Holidays",
    "titleTe": "సెలవులు",
    "summary": "Yard calendar.",
    "summaryTe": "యార్డు క్యాలెండర్.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-12-holidays",
    "route": "/yard/y-12-holidays",
    "file": "app/yard/y-12-holidays.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Sunday",
        "titleTe": "ఆదివారం",
        "subtitle": "Closed"
      }
    ]
  },
  {
    "id": "Y-13",
    "figmaFrame": "Y-13 Membership",
    "version": "v3",
    "title": "Membership",
    "titleTe": "సభ్యత్వం",
    "summary": "Agents and buyers licensed for this yard.",
    "summaryTe": "ఈ యార్డు లైసెన్స్‌లు.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-13-membership",
    "route": "/yard/y-13-membership",
    "file": "app/yard/y-13-membership.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Venkata Rao",
        "titleTe": "వెంకటరావు",
        "subtitle": "Agent",
        "badge": "Approved",
        "tone": "success"
      },
      {
        "title": "Sai Exports",
        "titleTe": "సాయి",
        "subtitle": "Buyer",
        "badge": "Approved",
        "tone": "success"
      }
    ]
  },
  {
    "id": "Y-14",
    "figmaFrame": "Y-14 Collusion flag",
    "version": "v3",
    "title": "Collusion flag",
    "titleTe": "కలయిక",
    "summary": "Flag a pattern. It does not cancel bids by itself.",
    "summaryTe": "ఫ్లాగ్. బిడ్లు దానంతట అవి రద్దు కావు.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-14-collusion-flag",
    "route": "/yard/y-14-collusion-flag",
    "file": "app/yard/y-14-collusion-flag.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "Y-15",
    "figmaFrame": "Y-15 Empty yard",
    "version": "v3",
    "title": "Empty yard",
    "titleTe": "ఖాళీ యార్డు",
    "summary": "No arrivals yet.",
    "summaryTe": "ఇంకా రాకలు లేవు.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-15-empty-yard",
    "route": "/yard/y-15-empty-yard",
    "file": "app/yard/y-15-empty-yard.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "Y-16",
    "figmaFrame": "Y-16 Loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "The board is loading.",
    "summaryTe": "బోర్డు లోడ్ అవుతోంది.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-16-loading",
    "route": "/yard/y-16-loading",
    "file": "app/yard/y-16-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "Y-17",
    "figmaFrame": "Y-17 Offline gate",
    "version": "v3",
    "title": "Offline gate",
    "titleTe": "ఆఫ్‌లైన్ గేట్",
    "summary": "Gate slips queue on the device.",
    "summaryTe": "గేట్ స్లిప్‌లు పరికరంలో.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-17-offline-gate",
    "route": "/yard/y-17-offline-gate",
    "file": "app/yard/y-17-offline-gate.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "Y-18",
    "figmaFrame": "Y-18 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "Who may extend the close.",
    "summaryTe": "ముగింపు ఎవరు పొడిగిస్తారు.",
    "stakeholder": "yard",
    "nav": "yard",
    "group": "yard",
    "slug": "y-18-help",
    "route": "/yard/y-18-help",
    "file": "app/yard/y-18-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Secretary",
        "titleTe": "కార్యదర్శి",
        "subtitle": "Extend close"
      },
      {
        "title": "Supervisor",
        "titleTe": "సూపర్‌వైజర్",
        "subtitle": "Pause a lot"
      }
    ]
  },
  {
    "id": "IS-01",
    "figmaFrame": "IS-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Srinivas Agro Inputs. Urea order from Kotha Farm.",
    "summaryTe": "కొత్త పొలం యూరియా ఆర్డర్.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-01-home",
    "route": "/inputs/is-01-home",
    "file": "app/inputs/is-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "items": [
      {
        "title": "Urea",
        "titleTe": "యూరియా",
        "subtitle": "10 bags · ₹3,500",
        "badge": "Requested",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "IS-02",
    "figmaFrame": "IS-02 Catalog",
    "version": "v3",
    "title": "Catalog",
    "titleTe": "జాబితా",
    "summary": "Fertiliser and plant protection.",
    "summaryTe": "ఎరువు మరియు మందు.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-02-catalog",
    "route": "/inputs/is-02-catalog",
    "file": "app/inputs/is-02-catalog.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Urea 50 kg",
        "titleTe": "యూరియా",
        "subtitle": "₹350"
      },
      {
        "title": "Neem cake",
        "titleTe": "వేప",
        "subtitle": "₹800"
      }
    ]
  },
  {
    "id": "IS-03",
    "figmaFrame": "IS-03 Add product",
    "version": "v3",
    "title": "Add product",
    "titleTe": "ఉత్పత్తి",
    "summary": "Name, pack and price.",
    "summaryTe": "పేరు, ప్యాక్, ధర.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-03-add-product",
    "route": "/inputs/is-03-add-product",
    "file": "app/inputs/is-03-add-product.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "IS-04",
    "figmaFrame": "IS-04 Orders",
    "version": "v3",
    "title": "Orders",
    "titleTe": "ఆర్డర్లు",
    "summary": "Open orders.",
    "summaryTe": "తెరిచిన ఆర్డర్లు.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-04-orders",
    "route": "/inputs/is-04-orders",
    "file": "app/inputs/is-04-orders.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "ORD-1",
        "titleTe": "ఆర్డర్",
        "subtitle": "Kotha Farm · urea"
      }
    ]
  },
  {
    "id": "IS-05",
    "figmaFrame": "IS-05 Fulfil",
    "version": "v3",
    "title": "Fulfil",
    "titleTe": "అందించు",
    "summary": "Mark packed. Payment is still a record.",
    "summaryTe": "ప్యాక్ నమోదు.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-05-fulfil",
    "route": "/inputs/is-05-fulfil",
    "file": "app/inputs/is-05-fulfil.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "IS-06",
    "figmaFrame": "IS-06 Delivery",
    "version": "v3",
    "title": "Delivery",
    "titleTe": "డెలివరీ",
    "summary": "Out for delivery to Tadepalli.",
    "summaryTe": "తాడేపల్లికి.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-06-delivery",
    "route": "/inputs/is-06-delivery",
    "file": "app/inputs/is-06-delivery.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Assigned"
      }
    ]
  },
  {
    "id": "IS-07",
    "figmaFrame": "IS-07 Settlements",
    "version": "v3",
    "title": "Settlements",
    "titleTe": "సెటిల్‌మెంట్లు",
    "summary": "What farmers owe the shop.",
    "summaryTe": "రైతులు షాపుకు బకాయి.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-07-settlements",
    "route": "/inputs/is-07-settlements",
    "file": "app/inputs/is-07-settlements.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Kotha",
        "titleTe": "కొత్త",
        "subtitle": "₹3,500",
        "badge": "Open",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "IS-08",
    "figmaFrame": "IS-08 Ratings",
    "version": "v3",
    "title": "Ratings",
    "titleTe": "రేటింగ్",
    "summary": "Shop score.",
    "summaryTe": "షాపు స్కోర్.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-08-ratings",
    "route": "/inputs/is-08-ratings",
    "file": "app/inputs/is-08-ratings.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Score",
        "titleTe": "స్కోర్",
        "subtitle": "4.4"
      }
    ]
  },
  {
    "id": "IS-09",
    "figmaFrame": "IS-09 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Owner and sales.",
    "summaryTe": "యజమాని మరియు సేల్స్.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-09-team",
    "route": "/inputs/is-09-team",
    "file": "app/inputs/is-09-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "IS-10",
    "figmaFrame": "IS-10 KYC",
    "version": "v3",
    "title": "KYC",
    "titleTe": "కేవైసీ",
    "summary": "Shop licence.",
    "summaryTe": "షాపు లైసెన్స్.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-10-kyc",
    "route": "/inputs/is-10-kyc",
    "file": "app/inputs/is-10-kyc.tsx",
    "kind": "mobile",
    "template": "kyc",
    "mode": "identity"
  },
  {
    "id": "IS-11",
    "figmaFrame": "IS-11 Empty orders",
    "version": "v3",
    "title": "Empty orders",
    "titleTe": "ఖాళీ",
    "summary": "No orders today.",
    "summaryTe": "ఈ రోజు ఆర్డర్లు లేవు.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-11-empty-orders",
    "route": "/inputs/is-11-empty-orders",
    "file": "app/inputs/is-11-empty-orders.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "IS-12",
    "figmaFrame": "IS-12 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "Input sellers do not see reserves.",
    "summaryTe": "ఇన్‌పుట్ వారు రిజర్వ్ చూడరు.",
    "stakeholder": "seller",
    "nav": "seller",
    "group": "inputs",
    "slug": "is-12-help",
    "route": "/inputs/is-12-help",
    "file": "app/inputs/is-12-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Hidden",
        "titleTe": "దాచబడింది",
        "subtitle": "Auction reserve"
      }
    ]
  },
  {
    "id": "SP-01",
    "figmaFrame": "SP-01 Home",
    "version": "v3",
    "title": "Home",
    "titleTe": "హోమ్",
    "summary": "Ravi Sprayers. One job on the north field.",
    "summaryTe": "ఉత్తర పొలంపై ఒక పని.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-01-home",
    "route": "/inputs/sp-01-home",
    "file": "app/inputs/sp-01-home.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "items": [
      {
        "title": "Spray",
        "titleTe": "స్ప్రే",
        "subtitle": "2 acres · assigned",
        "badge": "Today",
        "tone": "info"
      }
    ]
  },
  {
    "id": "SP-02",
    "figmaFrame": "SP-02 Catalog",
    "version": "v3",
    "title": "Catalog",
    "titleTe": "జాబితా",
    "summary": "Spray, labour, soil test.",
    "summaryTe": "స్ప్రే, కూలీ, మట్టి పరీక్ష.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-02-catalog",
    "route": "/inputs/sp-02-catalog",
    "file": "app/inputs/sp-02-catalog.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Power spray",
        "titleTe": "స్ప్రే",
        "subtitle": "₹900 / acre"
      }
    ]
  },
  {
    "id": "SP-03",
    "figmaFrame": "SP-03 Requests",
    "version": "v3",
    "title": "Requests",
    "titleTe": "అభ్యర్థనలు",
    "summary": "New bookings.",
    "summaryTe": "కొత్త బుకింగ్‌లు.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-03-requests",
    "route": "/inputs/sp-03-requests",
    "file": "app/inputs/sp-03-requests.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Kotha",
        "titleTe": "కొత్త",
        "subtitle": "Flowering spray"
      }
    ]
  },
  {
    "id": "SP-04",
    "figmaFrame": "SP-04 Assign",
    "version": "v3",
    "title": "Assign",
    "titleTe": "కేటాయింపు",
    "summary": "Send a technician.",
    "summaryTe": "టెక్నీషియన్‌ను పంపండి.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-04-assign",
    "route": "/inputs/sp-04-assign",
    "file": "app/inputs/sp-04-assign.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "SP-05",
    "figmaFrame": "SP-05 Job status",
    "version": "v3",
    "title": "Job status",
    "titleTe": "పని స్థితి",
    "summary": "On the way.",
    "summaryTe": "దారిలో.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-05-job-status",
    "route": "/inputs/sp-05-job-status",
    "file": "app/inputs/sp-05-job-status.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Status",
        "titleTe": "స్థితి",
        "subtitle": "Assigned"
      }
    ]
  },
  {
    "id": "SP-06",
    "figmaFrame": "SP-06 Proof",
    "version": "v3",
    "title": "Proof",
    "titleTe": "రుజువు",
    "summary": "Completion note.",
    "summaryTe": "పూర్తి నోట్.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-06-proof",
    "route": "/inputs/sp-06-proof",
    "file": "app/inputs/sp-06-proof.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "SP-07",
    "figmaFrame": "SP-07 Billing",
    "version": "v3",
    "title": "Billing",
    "titleTe": "బిల్లింగ్",
    "summary": "₹1,800 to the farm ledger.",
    "summaryTe": "పొలం లెడ్జర్‌కు ₹1,800.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-07-billing",
    "route": "/inputs/sp-07-billing",
    "file": "app/inputs/sp-07-billing.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Amount",
        "titleTe": "మొత్తం",
        "subtitle": "₹1,800"
      }
    ]
  },
  {
    "id": "SP-08",
    "figmaFrame": "SP-08 Dispute",
    "version": "v3",
    "title": "Dispute",
    "titleTe": "వివాదం",
    "summary": "The farmer disagreed with the acre count.",
    "summaryTe": "ఎకరాలపై విభేదం.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-08-dispute",
    "route": "/inputs/sp-08-dispute",
    "file": "app/inputs/sp-08-dispute.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "SP-09",
    "figmaFrame": "SP-09 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Owner and technician.",
    "summaryTe": "యజమాని మరియు టెక్నీషియన్.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-09-team",
    "route": "/inputs/sp-09-team",
    "file": "app/inputs/sp-09-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "SP-10",
    "figmaFrame": "SP-10 Empty",
    "version": "v3",
    "title": "Empty",
    "titleTe": "ఖాళీ",
    "summary": "No jobs booked.",
    "summaryTe": "పనులు లేవు.",
    "stakeholder": "service",
    "nav": "service",
    "group": "inputs",
    "slug": "sp-10-empty",
    "route": "/inputs/sp-10-empty",
    "file": "app/inputs/sp-10-empty.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "SH-01",
    "figmaFrame": "SH-01 Search",
    "version": "v3",
    "title": "Search",
    "titleTe": "శోధన",
    "summary": "Find a token, bill, person or yard.",
    "summaryTe": "టోకెన్, బిల్లు, వ్యక్తి, యార్డు.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-01-search",
    "route": "/shared/sh-01-search",
    "file": "app/shared/sh-01-search.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "SH-02",
    "figmaFrame": "SH-02 Notifications",
    "version": "v3",
    "title": "Notifications",
    "titleTe": "నోటిఫికేషన్లు",
    "summary": "Everything waiting on this phone.",
    "summaryTe": "ఈ ఫోన్‌పై వేచి ఉన్నవి.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-02-notifications",
    "route": "/shared/sh-02-notifications",
    "file": "app/shared/sh-02-notifications.tsx",
    "kind": "mobile",
    "template": "alerts",
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "SH-03",
    "figmaFrame": "SH-03 Deal chat",
    "version": "v3",
    "title": "Deal chat",
    "titleTe": "చర్చ",
    "summary": "One thread per deal.",
    "summaryTe": "ఒక్కో డీల్‌కు ఒక థ్రెడ్.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-03-deal-chat",
    "route": "/shared/sh-03-deal-chat",
    "file": "app/shared/sh-03-deal-chat.tsx",
    "kind": "mobile",
    "template": "chat",
    "items": [
      {
        "title": "Agent",
        "titleTe": "ఏజెంట్",
        "subtitle": "I can do ₹22,200"
      }
    ]
  },
  {
    "id": "SH-04",
    "figmaFrame": "SH-04 Voice call",
    "version": "v3",
    "title": "Voice call",
    "titleTe": "కాల్",
    "summary": "Call the agent. The demo does not place a call.",
    "summaryTe": "డెమో కాల్ చేయదు.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-04-voice-call",
    "route": "/shared/sh-04-voice-call",
    "file": "app/shared/sh-04-voice-call.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Venkata Rao",
        "titleTe": "వెంకటరావు",
        "subtitle": "+91 98480 91001"
      }
    ]
  },
  {
    "id": "SH-05",
    "figmaFrame": "SH-05 Documents",
    "version": "v3",
    "title": "Documents",
    "titleTe": "పత్రాలు",
    "summary": "Shared document list for the active org.",
    "summaryTe": "సంస్థ పత్రాలు.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-05-documents",
    "route": "/shared/sh-05-documents",
    "file": "app/shared/sh-05-documents.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Bill",
        "titleTe": "బిల్లు",
        "subtitle": "TRD-2026-004218"
      },
      {
        "title": "Permit",
        "titleTe": "పర్మిట్",
        "subtitle": "TRD-CHL-089234"
      }
    ]
  },
  {
    "id": "SH-06",
    "figmaFrame": "SH-06 Scan token",
    "version": "v3",
    "title": "Scan token",
    "titleTe": "టోకెన్ స్కాన్",
    "summary": "Type or scan a token. TKN-20261011-8F3A21C9 is the live lot.",
    "summaryTe": "టోకెన్ టైప్ చేయండి.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-06-scan-token",
    "route": "/shared/sh-06-scan-token",
    "file": "app/shared/sh-06-scan-token.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "SH-07",
    "figmaFrame": "SH-07 Help",
    "version": "v3",
    "title": "Help",
    "titleTe": "సహాయం",
    "summary": "Reserves, weighment, interest, roles.",
    "summaryTe": "రిజర్వ్, తూకం, వడ్డీ, పాత్రలు.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-07-help",
    "route": "/shared/sh-07-help",
    "file": "app/shared/sh-07-help.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "Interest",
        "titleTe": "వడ్డీ",
        "subtitle": "21% simple on the balance after day 15"
      },
      {
        "title": "Reserve",
        "titleTe": "రిజర్వ్",
        "subtitle": "Hidden from buyers forever"
      },
      {
        "title": "AI",
        "titleTe": "AI",
        "subtitle": "Suggests, never pays"
      }
    ]
  },
  {
    "id": "SH-08",
    "figmaFrame": "SH-08 Support ticket",
    "version": "v3",
    "title": "Support ticket",
    "titleTe": "టికెట్",
    "summary": "Write to platform support. Imran sees it.",
    "summaryTe": "ఇమ్రాన్ చూస్తారు.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-08-support-ticket",
    "route": "/shared/sh-08-support-ticket",
    "file": "app/shared/sh-08-support-ticket.tsx",
    "kind": "mobile",
    "template": "form"
  },
  {
    "id": "SH-09",
    "figmaFrame": "SH-09 Profile",
    "version": "v3",
    "title": "Profile",
    "titleTe": "ప్రొఫైల్",
    "summary": "The person signed in on this phone.",
    "summaryTe": "ఈ ఫోన్‌లో ఉన్న వ్యక్తి.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-09-profile",
    "route": "/shared/sh-09-profile",
    "file": "app/shared/sh-09-profile.tsx",
    "kind": "mobile",
    "template": "detail",
    "items": [
      {
        "title": "Switch",
        "titleTe": "మార్చు",
        "subtitle": "Use the team screen"
      }
    ]
  },
  {
    "id": "SH-10",
    "figmaFrame": "SH-10 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Language and AI consent.",
    "summaryTe": "భాష మరియు AI అనుమతి.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-10-settings",
    "route": "/shared/sh-10-settings",
    "file": "app/shared/sh-10-settings.tsx",
    "kind": "mobile",
    "template": "settings",
    "items": [
      {
        "title": "AI consent",
        "titleTe": "AI",
        "subtitle": "On · suggestions only",
        "badge": "On",
        "tone": "success"
      }
    ]
  },
  {
    "id": "SH-11",
    "figmaFrame": "v5 AI settings consent",
    "version": "v5",
    "title": "AI consent",
    "titleTe": "AI అనుమతి",
    "summary": "Per role flags. Super admin holds the model settings.",
    "summaryTe": "పాత్ర వారీగా. మోడల్ సెట్టింగులు సూపర్ అడ్మిన్.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-11-ai-consent",
    "route": "/shared/sh-11-ai-consent",
    "file": "app/shared/sh-11-ai-consent.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "settings"
  },
  {
    "id": "SH-12",
    "figmaFrame": "SH-12 Offline",
    "version": "v3",
    "title": "Offline",
    "titleTe": "ఆఫ్‌లైన్",
    "summary": "Shared offline state.",
    "summaryTe": "ఉమ్మడి ఆఫ్‌లైన్ స్థితి.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-12-offline",
    "route": "/shared/sh-12-offline",
    "file": "app/shared/sh-12-offline.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "SH-13",
    "figmaFrame": "SH-13 Empty",
    "version": "v3",
    "title": "Empty",
    "titleTe": "ఖాళీ",
    "summary": "Nothing in this list.",
    "summaryTe": "ఈ జాబితాలో ఏమీ లేదు.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-13-empty",
    "route": "/shared/sh-13-empty",
    "file": "app/shared/sh-13-empty.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "SH-14",
    "figmaFrame": "SH-14 Loading",
    "version": "v3",
    "title": "Loading",
    "titleTe": "లోడ్",
    "summary": "Loading.",
    "summaryTe": "లోడ్ అవుతోంది.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-14-loading",
    "route": "/shared/sh-14-loading",
    "file": "app/shared/sh-14-loading.tsx",
    "kind": "mobile",
    "template": "loading"
  },
  {
    "id": "SH-15",
    "figmaFrame": "SH-15 Error",
    "version": "v3",
    "title": "Error",
    "titleTe": "లోపం",
    "summary": "Try again. Drafts stay.",
    "summaryTe": "మళ్ళీ ప్రయత్నించండి.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-15-error",
    "route": "/shared/sh-15-error",
    "file": "app/shared/sh-15-error.tsx",
    "kind": "mobile",
    "template": "error"
  },
  {
    "id": "SH-16",
    "figmaFrame": "v5 why this suggestion",
    "version": "v5",
    "title": "Why this suggestion",
    "titleTe": "ఈ సూచన ఎందుకు",
    "summary": "Confidence, the reason, and a way to disagree.",
    "summaryTe": "నమ్మకం, కారణం, విభేదం.",
    "stakeholder": "shared",
    "nav": "shared",
    "group": "shared",
    "slug": "sh-16-why-this-suggestion",
    "route": "/shared/sh-16-why-this-suggestion",
    "file": "app/shared/sh-16-why-this-suggestion.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "why"
  },
  {
    "id": "AM-01",
    "figmaFrame": "v5 admin mobile live",
    "version": "v5",
    "title": "Live ops",
    "titleTe": "ప్రత్యక్షం",
    "summary": "Anitha's phone: auctions, weighment mismatches, late bills.",
    "summaryTe": "వేలాలు, తూకం తేడాలు, ఆలస్య బిల్లులు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-01-live-ops",
    "route": "/admin/am-01-live-ops",
    "file": "app/admin/am-01-live-ops.tsx",
    "kind": "mobile",
    "template": "dashboard",
    "stats": [
      {
        "label": "Auctions",
        "labelTe": "వేలాలు",
        "value": "4"
      },
      {
        "label": "Mismatch",
        "labelTe": "తేడా",
        "value": "1"
      },
      {
        "label": "Late",
        "labelTe": "ఆలస్యం",
        "value": "1"
      }
    ],
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "AM-02",
    "figmaFrame": "v5 admin weighment progress",
    "version": "v5",
    "title": "Weighment progress",
    "titleTe": "తూకం పురోగతి",
    "summary": "See both phones. Admins do not enter a weight.",
    "summaryTe": "రెండు ఫోన్లు. అడ్మిన్ తూకం వేయరు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-02-weighment-progress",
    "route": "/admin/am-02-weighment-progress",
    "file": "app/admin/am-02-weighment-progress.tsx",
    "kind": "mobile",
    "template": "weighment",
    "mode": "live"
  },
  {
    "id": "AM-03",
    "figmaFrame": "AM-03 KYC queue",
    "version": "v3",
    "title": "KYC queue",
    "titleTe": "కేవైసీ క్యూ",
    "summary": "Kavya reviews. She cannot approve her own file.",
    "summaryTe": "కావ్య సమీక్ష. తన ఫైలు కాదు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-03-kyc-queue",
    "route": "/admin/am-03-kyc-queue",
    "file": "app/admin/am-03-kyc-queue.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "New transporter",
        "titleTe": "రవాణా",
        "subtitle": "Waiting",
        "badge": "Queue",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "AM-04",
    "figmaFrame": "AM-04 Alerts",
    "version": "v5",
    "title": "Alerts",
    "titleTe": "అలర్ట్లు",
    "summary": "Fraud flags are suggestions. They never auto-block.",
    "summaryTe": "ఫ్రాడ్ ఫ్లాగ్‌లు సూచనలు. ఆటో బ్లాక్ కాదు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-04-alerts",
    "route": "/admin/am-04-alerts",
    "file": "app/admin/am-04-alerts.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "alerts"
  },
  {
    "id": "AM-05",
    "figmaFrame": "v6 payment rules",
    "version": "v6",
    "title": "Rules",
    "titleTe": "నియమాలు",
    "summary": "Association, yard and regulatory placeholders.",
    "summaryTe": "సంఘం, యార్డు, నియంత్రణ.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-05-rules",
    "route": "/admin/am-05-rules",
    "file": "app/admin/am-05-rules.tsx",
    "kind": "mobile",
    "template": "master",
    "mode": "rules"
  },
  {
    "id": "AM-06",
    "figmaFrame": "v7 admin live autobid",
    "version": "v7",
    "title": "Auctions",
    "titleTe": "వేలాలు",
    "summary": "Reserve is visible to audit, never to buyers.",
    "summaryTe": "ఆడిట్‌కు రిజర్వ్ కనిపిస్తుంది.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-06-auctions",
    "route": "/admin/am-06-auctions",
    "file": "app/admin/am-06-auctions.tsx",
    "kind": "mobile",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "AM-07",
    "figmaFrame": "AM-07 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Super admin, KYC, support, finance, auditor.",
    "summaryTe": "సూపర్ అడ్మిన్, కేవైసీ, సపోర్ట్, ఫైనాన్స్, ఆడిటర్.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-07-team",
    "route": "/admin/am-07-team",
    "file": "app/admin/am-07-team.tsx",
    "kind": "mobile",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "AM-08",
    "figmaFrame": "AM-08 Waivers",
    "version": "v6",
    "title": "Waivers",
    "titleTe": "మాఫీలు",
    "summary": "Finance can audit a waiver. The org owner approved it.",
    "summaryTe": "ఫైనాన్స్ మాఫీని చూడగలరు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-08-waivers",
    "route": "/admin/am-08-waivers",
    "file": "app/admin/am-08-waivers.tsx",
    "kind": "mobile",
    "template": "interest",
    "mode": "waiver"
  },
  {
    "id": "AM-09",
    "figmaFrame": "AM-09 Commodities",
    "version": "v6",
    "title": "Commodities",
    "titleTe": "సరుకులు",
    "summary": "Category, commodity, variety.",
    "summaryTe": "వర్గం, సరుకు, రకం.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-09-commodities",
    "route": "/admin/am-09-commodities",
    "file": "app/admin/am-09-commodities.tsx",
    "kind": "mobile",
    "template": "master",
    "mode": "commodity"
  },
  {
    "id": "AM-10",
    "figmaFrame": "AM-10 Yards",
    "version": "v6",
    "title": "Yards",
    "titleTe": "యార్డులు",
    "summary": "Six yards in the demo.",
    "summaryTe": "ఆరు యార్డులు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-10-yards",
    "route": "/admin/am-10-yards",
    "file": "app/admin/am-10-yards.tsx",
    "kind": "mobile",
    "template": "master",
    "mode": "yard"
  },
  {
    "id": "AM-11",
    "figmaFrame": "AM-11 AI flags",
    "version": "v5",
    "title": "AI flags",
    "titleTe": "AI ఫ్లాగ్‌లు",
    "summary": "Anomaly list for the auditor. No automatic block.",
    "summaryTe": "ఆడిటర్ కోసం. ఆటో బ్లాక్ లేదు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-11-ai-flags",
    "route": "/admin/am-11-ai-flags",
    "file": "app/admin/am-11-ai-flags.tsx",
    "kind": "mobile",
    "template": "assistant",
    "mode": "why"
  },
  {
    "id": "AM-12",
    "figmaFrame": "AM-12 Support",
    "version": "v3",
    "title": "Support",
    "titleTe": "సపోర్ట్",
    "summary": "Tickets from the shared help screen.",
    "summaryTe": "సహాయం నుండి టికెట్లు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-12-support",
    "route": "/admin/am-12-support",
    "file": "app/admin/am-12-support.tsx",
    "kind": "mobile",
    "template": "list",
    "items": [
      {
        "title": "T-12",
        "titleTe": "టికెట్",
        "subtitle": "Device reset request"
      }
    ]
  },
  {
    "id": "AM-13",
    "figmaFrame": "AM-13 Empty",
    "version": "v3",
    "title": "Empty",
    "titleTe": "ఖాళీ",
    "summary": "Nothing in this queue.",
    "summaryTe": "ఈ క్యూలో ఏమీ లేదు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-13-empty",
    "route": "/admin/am-13-empty",
    "file": "app/admin/am-13-empty.tsx",
    "kind": "mobile",
    "template": "empty"
  },
  {
    "id": "AM-14",
    "figmaFrame": "AM-14 Offline",
    "version": "v3",
    "title": "Offline",
    "titleTe": "ఆఫ్‌లైన్",
    "summary": "The admin phone can read the last sync.",
    "summaryTe": "చివరి సింక్ చదవగలరు.",
    "stakeholder": "admin",
    "nav": "admin",
    "group": "admin",
    "slug": "am-14-offline",
    "route": "/admin/am-14-offline",
    "file": "app/admin/am-14-offline.tsx",
    "kind": "mobile",
    "template": "offline"
  },
  {
    "id": "ABO-01",
    "figmaFrame": "v6 agent back office ledger",
    "version": "v6",
    "title": "Ledger",
    "titleTe": "లెడ్జర్",
    "summary": "All farmers, interest periods, and waivers.",
    "summaryTe": "రైతులు, వడ్డీ కాలాలు, మాఫీలు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-01-ledger",
    "route": "/backoffice/abo-01-ledger",
    "file": "app/backoffice/abo-01-ledger.tsx",
    "kind": "desktop",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "ABO-02",
    "figmaFrame": "v6 multi yard",
    "version": "v6",
    "title": "Multi yard",
    "titleTe": "బహుళ యార్డు",
    "summary": "Guntur and Warangal books side by side.",
    "summaryTe": "గుంటూరు మరియు వరంగల్.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-02-multi-yard",
    "route": "/backoffice/abo-02-multi-yard",
    "file": "app/backoffice/abo-02-multi-yard.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "yard"
  },
  {
    "id": "ABO-03",
    "figmaFrame": "ABO-03 Farmers",
    "version": "v3",
    "title": "Farmers",
    "titleTe": "రైతులు",
    "summary": "Farmer book with outstanding.",
    "summaryTe": "బకాయితో రైతు పుస్తకం.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-03-farmers",
    "route": "/backoffice/abo-03-farmers",
    "file": "app/backoffice/abo-03-farmers.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Ramesh Naidu Kotha",
        "titleTe": "రమేష్ నాయుడు",
        "subtitle": "Tadepalli · chilli, cotton, turmeric",
        "meta": "3 lots",
        "badge": "Linked",
        "tone": "success"
      },
      {
        "title": "Lakshmi farm",
        "titleTe": "లక్ష్మి పొలం",
        "subtitle": "Tenali · paddy",
        "meta": "1 lot",
        "badge": "Invited",
        "tone": "warning"
      },
      {
        "title": "Srinivas Reddy",
        "titleTe": "శ్రీనివాస్ రెడ్డి",
        "subtitle": "Sattenapalle · chilli",
        "meta": "2 lots",
        "badge": "Linked",
        "tone": "success"
      }
    ]
  },
  {
    "id": "ABO-04",
    "figmaFrame": "ABO-04 Auctions",
    "version": "v3",
    "title": "Auctions",
    "titleTe": "వేలాలు",
    "summary": "Live lots with real buyer names.",
    "summaryTe": "అసలు కొనుగోలు పేర్లు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-04-auctions",
    "route": "/backoffice/abo-04-auctions",
    "file": "app/backoffice/abo-04-auctions.tsx",
    "kind": "desktop",
    "template": "auction",
    "mode": "bids"
  },
  {
    "id": "ABO-05",
    "figmaFrame": "v5 agent BO ledger terms",
    "version": "v5",
    "title": "Bills",
    "titleTe": "బిల్లులు",
    "summary": "Bill queue and the 15-day rule.",
    "summaryTe": "15 రోజుల నియమం.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-05-bills",
    "route": "/backoffice/abo-05-bills",
    "file": "app/backoffice/abo-05-bills.tsx",
    "kind": "desktop",
    "template": "interest",
    "mode": "bill"
  },
  {
    "id": "ABO-06",
    "figmaFrame": "ABO-06 Approvals",
    "version": "v3",
    "title": "Approvals",
    "titleTe": "ఆమోదాలు",
    "summary": "Sales above ₹5,00,000 and advances above ₹50,000.",
    "summaryTe": "పరిమితి పైన ఆమోదాలు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-06-approvals",
    "route": "/backoffice/abo-06-approvals",
    "file": "app/backoffice/abo-06-approvals.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Kiran",
        "titleTe": "కిరణ్",
        "subtitle": "Deal above cap",
        "badge": "Owner",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "ABO-07",
    "figmaFrame": "ABO-07 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Roles and limits.",
    "summaryTe": "పాత్రలు మరియు పరిమితులు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-07-team",
    "route": "/backoffice/abo-07-team",
    "file": "app/backoffice/abo-07-team.tsx",
    "kind": "desktop",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "ABO-08",
    "figmaFrame": "ABO-08 Waivers",
    "version": "v3",
    "title": "Waivers",
    "titleTe": "మాఫీలు",
    "summary": "Before and after amounts.",
    "summaryTe": "ముందు మరియు తర్వాత మొత్తాలు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-08-waivers",
    "route": "/backoffice/abo-08-waivers",
    "file": "app/backoffice/abo-08-waivers.tsx",
    "kind": "desktop",
    "template": "interest",
    "mode": "waiver"
  },
  {
    "id": "ABO-09",
    "figmaFrame": "ABO-09 Audit",
    "version": "v3",
    "title": "Audit",
    "titleTe": "ఆడిట్",
    "summary": "Reserve edits and OTP events.",
    "summaryTe": "రిజర్వ్ మరియు OTP.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-09-audit",
    "route": "/backoffice/abo-09-audit",
    "file": "app/backoffice/abo-09-audit.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "09:10",
        "titleTe": "సమయం",
        "subtitle": "Reserve edit · Ramesh OTP"
      }
    ]
  },
  {
    "id": "ABO-10",
    "figmaFrame": "ABO-10 Storage",
    "version": "v3",
    "title": "Storage",
    "titleTe": "నిల్వ",
    "summary": "Bonds booked for farmers.",
    "summaryTe": "రైతుల బాండ్లు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-10-storage",
    "route": "/backoffice/abo-10-storage",
    "file": "app/backoffice/abo-10-storage.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Byadgi",
        "titleTe": "బ్యాడగి",
        "subtitle": "Chamber B-2"
      }
    ]
  },
  {
    "id": "ABO-11",
    "figmaFrame": "ABO-11 Buyers",
    "version": "v3",
    "title": "Buyers",
    "titleTe": "కొనుగోలుదారులు",
    "summary": "Risk notes.",
    "summaryTe": "రిస్క్ నోట్స్.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-11-buyers",
    "route": "/backoffice/abo-11-buyers",
    "file": "app/backoffice/abo-11-buyers.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Sai Exports",
        "titleTe": "సాయి",
        "subtitle": "15 days late"
      }
    ]
  },
  {
    "id": "ABO-12",
    "figmaFrame": "ABO-12 Reports",
    "version": "v3",
    "title": "Reports",
    "titleTe": "నివేదికలు",
    "summary": "Commission earned as a record.",
    "summaryTe": "కమీషన్ నమోదు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-12-reports",
    "route": "/backoffice/abo-12-reports",
    "file": "app/backoffice/abo-12-reports.tsx",
    "kind": "desktop",
    "template": "detail",
    "stats": [
      {
        "label": "Commission",
        "labelTe": "కమీషన్",
        "value": "₹48,000"
      }
    ]
  },
  {
    "id": "ABO-13",
    "figmaFrame": "ABO-13 Empty",
    "version": "v3",
    "title": "Empty",
    "titleTe": "ఖాళీ",
    "summary": "No rows.",
    "summaryTe": "వరుసలు లేవు.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-13-empty",
    "route": "/backoffice/abo-13-empty",
    "file": "app/backoffice/abo-13-empty.tsx",
    "kind": "desktop",
    "template": "empty"
  },
  {
    "id": "ABO-14",
    "figmaFrame": "ABO-14 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Reminder schedule.",
    "summaryTe": "రిమైండర్ షెడ్యూల్.",
    "stakeholder": "agent",
    "nav": "bo-agent",
    "group": "backoffice",
    "slug": "abo-14-settings",
    "route": "/backoffice/abo-14-settings",
    "file": "app/backoffice/abo-14-settings.tsx",
    "kind": "desktop",
    "template": "settings",
    "items": [
      {
        "title": "Before",
        "titleTe": "ముందు",
        "subtitle": "3 days"
      },
      {
        "title": "After",
        "titleTe": "తర్వాత",
        "subtitle": "Daily"
      }
    ]
  },
  {
    "id": "TBO-01",
    "figmaFrame": "v5 buyer BO live ops",
    "version": "v5",
    "title": "Dashboard",
    "titleTe": "డాష్‌బోర్డ్",
    "summary": "Sai Exports desk: bids, payables, auto-bids.",
    "summaryTe": "బిడ్లు, బకాయిలు, ఆటో-బిడ్లు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-01-dashboard",
    "route": "/backoffice/tbo-01-dashboard",
    "file": "app/backoffice/tbo-01-dashboard.tsx",
    "kind": "desktop",
    "template": "desktop-home",
    "stats": [
      {
        "label": "Open bids",
        "labelTe": "బిడ్లు",
        "value": "4"
      },
      {
        "label": "Payables",
        "labelTe": "బకాయిలు",
        "value": "₹2.18 L"
      },
      {
        "label": "Approvals",
        "labelTe": "ఆమోదాలు",
        "value": "1"
      }
    ],
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "TBO-02",
    "figmaFrame": "v6 buyer BO filters",
    "version": "v6",
    "title": "Market",
    "titleTe": "మార్కెట్",
    "summary": "Filters for yard and variety.",
    "summaryTe": "యార్డు మరియు రకం ఫిల్టర్లు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-02-market",
    "route": "/backoffice/tbo-02-market",
    "file": "app/backoffice/tbo-02-market.tsx",
    "kind": "desktop",
    "template": "auction",
    "mode": "browse"
  },
  {
    "id": "TBO-03",
    "figmaFrame": "TBO-03 Weighing",
    "version": "v3",
    "title": "Weighing",
    "titleTe": "తూకం",
    "summary": "Both phones on one desk.",
    "summaryTe": "రెండు ఫోన్లు ఒకే డెస్క్.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-03-weighing",
    "route": "/backoffice/tbo-03-weighing",
    "file": "app/backoffice/tbo-03-weighing.tsx",
    "kind": "desktop",
    "template": "weighment",
    "mode": "buyer"
  },
  {
    "id": "TBO-04",
    "figmaFrame": "TBO-04 Inventory",
    "version": "v3",
    "title": "Inventory",
    "titleTe": "నిల్వ",
    "summary": "Tokens you hold.",
    "summaryTe": "మీ టోకెన్లు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-04-inventory",
    "route": "/backoffice/tbo-04-inventory",
    "file": "app/backoffice/tbo-04-inventory.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Teja · Grade A",
        "titleTe": "తేజ · గ్రేడ్ A",
        "subtitle": "Guntur · 42 bags · 1,680 kg",
        "meta": "₹22,400/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "Guntur Sannam S17",
        "titleTe": "గుంటూరు సన్నం",
        "subtitle": "Weighment · 12 bags",
        "meta": "TKN-…C4E19B02",
        "badge": "Weighment",
        "tone": "warning"
      },
      {
        "title": "Bunny cotton",
        "titleTe": "బన్నీ పత్తి",
        "subtitle": "Warangal · 20 bales",
        "meta": "₹71,500/q",
        "badge": "Listed",
        "tone": "gold"
      },
      {
        "title": "Nizamabad turmeric",
        "titleTe": "నిజామాబాద్ పసుపు",
        "subtitle": "30 bags · finger",
        "meta": "₹16,200/q",
        "badge": "Bidding",
        "tone": "info"
      },
      {
        "title": "BPT 5204 paddy",
        "titleTe": "బిపిటి వరి",
        "subtitle": "Kurnool · billed",
        "meta": "TRD-2026-004218",
        "badge": "Billed",
        "tone": "success"
      }
    ]
  },
  {
    "id": "TBO-05",
    "figmaFrame": "v6 buyer BO payables",
    "version": "v6",
    "title": "Payables",
    "titleTe": "బకాయిలు",
    "summary": "Interest statement for the accountant.",
    "summaryTe": "అకౌంటెంట్ వడ్డీ స్టేట్‌మెంట్.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-05-payables",
    "route": "/backoffice/tbo-05-payables",
    "file": "app/backoffice/tbo-05-payables.tsx",
    "kind": "desktop",
    "template": "interest",
    "mode": "statement"
  },
  {
    "id": "TBO-06",
    "figmaFrame": "v7 buyer BO autobids",
    "version": "v7",
    "title": "Auto-bids",
    "titleTe": "ఆటో-బిడ్లు",
    "summary": "Active proxies and the outbid alert.",
    "summaryTe": "ప్రాక్సీలు మరియు అలర్ట్.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-06-auto-bids",
    "route": "/backoffice/tbo-06-auto-bids",
    "file": "app/backoffice/tbo-06-auto-bids.tsx",
    "kind": "desktop",
    "template": "autobid",
    "mode": "active"
  },
  {
    "id": "TBO-07",
    "figmaFrame": "v7 BO approval detail",
    "version": "v7",
    "title": "Approvals",
    "titleTe": "ఆమోదాలు",
    "summary": "Owner queue for a max above the purchaser cap.",
    "summaryTe": "పరిమితి పైన యజమాని క్యూ.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-07-approvals",
    "route": "/backoffice/tbo-07-approvals",
    "file": "app/backoffice/tbo-07-approvals.tsx",
    "kind": "desktop",
    "template": "autobid",
    "mode": "approval"
  },
  {
    "id": "TBO-08",
    "figmaFrame": "v7 BO approvals",
    "version": "v7",
    "title": "Approval list",
    "titleTe": "ఆమోద జాబితా",
    "summary": "Waiting on Sai Prakash.",
    "summaryTe": "సాయి ప్రకాష్ కోసం.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-08-approval-list",
    "route": "/backoffice/tbo-08-approval-list",
    "file": "app/backoffice/tbo-08-approval-list.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Turmeric max",
        "titleTe": "పసుపు",
        "subtitle": "₹17,000/q · above Arjun",
        "badge": "OTP",
        "tone": "danger"
      }
    ]
  },
  {
    "id": "TBO-09",
    "figmaFrame": "TBO-09 Finance",
    "version": "v3",
    "title": "Finance",
    "titleTe": "ఫైనాన్స్",
    "summary": "Tax and ageing.",
    "summaryTe": "పన్ను మరియు వయస్సు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-09-finance",
    "route": "/backoffice/tbo-09-finance",
    "file": "app/backoffice/tbo-09-finance.tsx",
    "kind": "desktop",
    "template": "interest",
    "mode": "ledger"
  },
  {
    "id": "TBO-10",
    "figmaFrame": "TBO-10 Mandates",
    "version": "v4",
    "title": "Mandates",
    "titleTe": "మాండేట్లు",
    "summary": "Client mandates for the sourcing purpose.",
    "summaryTe": "సోర్సింగ్ మాండేట్లు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-10-mandates",
    "route": "/backoffice/tbo-10-mandates",
    "file": "app/backoffice/tbo-10-mandates.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Export client",
        "titleTe": "క్లయింట్",
        "subtitle": "Hidden from farmers · ceiling ₹24,000/q"
      }
    ]
  },
  {
    "id": "TBO-11",
    "figmaFrame": "TBO-11 Processor",
    "version": "v4",
    "title": "Processor",
    "titleTe": "ప్రాసెసర్",
    "summary": "Raw to finished, with farmer tokens kept.",
    "summaryTe": "ముడి నుండి ఫినిష్డ్. టోకెన్లు ఉంటాయి.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-11-processor",
    "route": "/backoffice/tbo-11-processor",
    "file": "app/backoffice/tbo-11-processor.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Batch P-2",
        "titleTe": "బ్యాచ్",
        "subtitle": "Held for QA"
      }
    ]
  },
  {
    "id": "TBO-12",
    "figmaFrame": "TBO-12 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Limits for Arjun and Rafiq.",
    "summaryTe": "అర్జున్ మరియు రఫీఖ్ పరిమితులు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-12-team",
    "route": "/backoffice/tbo-12-team",
    "file": "app/backoffice/tbo-12-team.tsx",
    "kind": "desktop",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "TBO-13",
    "figmaFrame": "TBO-13 QC",
    "version": "v3",
    "title": "QC",
    "titleTe": "నాణ్యత",
    "summary": "Verifier queue.",
    "summaryTe": "వెరిఫయర్ క్యూ.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-13-qc",
    "route": "/backoffice/tbo-13-qc",
    "file": "app/backoffice/tbo-13-qc.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Teja",
        "titleTe": "తేజ",
        "subtitle": "Passed"
      }
    ]
  },
  {
    "id": "TBO-14",
    "figmaFrame": "TBO-14 Logistics",
    "version": "v3",
    "title": "Logistics",
    "titleTe": "లాజిస్టిక్స్",
    "summary": "Trips Naveen booked.",
    "summaryTe": "నవీన్ బుక్ చేసినవి.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-14-logistics",
    "route": "/backoffice/tbo-14-logistics",
    "file": "app/backoffice/tbo-14-logistics.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "AP 07 TX 4545",
        "titleTe": "వాహనం",
        "subtitle": "Loading"
      }
    ]
  },
  {
    "id": "TBO-15",
    "figmaFrame": "TBO-15 Disputes",
    "version": "v3",
    "title": "Disputes",
    "titleTe": "వివాదాలు",
    "summary": "Open disputes.",
    "summaryTe": "తెరిచిన వివాదాలు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-15-disputes",
    "route": "/backoffice/tbo-15-disputes",
    "file": "app/backoffice/tbo-15-disputes.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "D-2041",
        "titleTe": "వివాదం",
        "subtitle": "Moisture"
      }
    ]
  },
  {
    "id": "TBO-16",
    "figmaFrame": "TBO-16 Contracts",
    "version": "v3",
    "title": "Contracts",
    "titleTe": "ఒప్పందాలు",
    "summary": "Sale contracts.",
    "summaryTe": "అమ్మకపు ఒప్పందాలు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-16-contracts",
    "route": "/backoffice/tbo-16-contracts",
    "file": "app/backoffice/tbo-16-contracts.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "C-20261008",
        "titleTe": "ఒప్పందం",
        "subtitle": "Sannam"
      }
    ]
  },
  {
    "id": "TBO-17",
    "figmaFrame": "TBO-17 Assignments",
    "version": "v5",
    "title": "Assignments",
    "titleTe": "కేటాయింపులు",
    "summary": "Person × variety × yard.",
    "summaryTe": "వ్యక్తి × రకం × యార్డు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-17-assignments",
    "route": "/backoffice/tbo-17-assignments",
    "file": "app/backoffice/tbo-17-assignments.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Arjun",
        "titleTe": "అర్జున్",
        "subtitle": "Teja · Guntur · ₹22,500"
      }
    ]
  },
  {
    "id": "TBO-18",
    "figmaFrame": "TBO-18 Settings",
    "version": "v4",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Purposes and KYC status.",
    "summaryTe": "ఉద్దేశాలు మరియు కేవైసీ.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-18-settings",
    "route": "/backoffice/tbo-18-settings",
    "file": "app/backoffice/tbo-18-settings.tsx",
    "kind": "desktop",
    "template": "settings",
    "items": [
      {
        "title": "Trader",
        "titleTe": "వ్యాపారి",
        "subtitle": "Verified"
      },
      {
        "title": "Processor",
        "titleTe": "ప్రాసెసర్",
        "subtitle": "FSSAI pending"
      },
      {
        "title": "Sourcing",
        "titleTe": "సోర్సింగ్",
        "subtitle": "IEC verified"
      }
    ]
  },
  {
    "id": "TBO-19",
    "figmaFrame": "TBO-19 Empty",
    "version": "v3",
    "title": "Empty",
    "titleTe": "ఖాళీ",
    "summary": "No rows for this filter.",
    "summaryTe": "ఈ ఫిల్టర్‌కు వరుసలు లేవు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-19-empty",
    "route": "/backoffice/tbo-19-empty",
    "file": "app/backoffice/tbo-19-empty.tsx",
    "kind": "desktop",
    "template": "empty"
  },
  {
    "id": "TBO-20",
    "figmaFrame": "TBO-20 Audit",
    "version": "v7",
    "title": "Audit",
    "titleTe": "ఆడిట్",
    "summary": "Manual and AI bids.",
    "summaryTe": "మాన్యువల్ మరియు AI బిడ్లు.",
    "stakeholder": "buyer",
    "nav": "bo-buyer",
    "group": "backoffice",
    "slug": "tbo-20-audit",
    "route": "/backoffice/tbo-20-audit",
    "file": "app/backoffice/tbo-20-audit.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Bid B",
        "titleTe": "బిడ్ B",
        "subtitle": "AI · outbid"
      },
      {
        "title": "Bid A",
        "titleTe": "బిడ్ A",
        "subtitle": "Manual · leading"
      }
    ]
  },
  {
    "id": "TRB-01",
    "figmaFrame": "TRB-01 Fleet",
    "version": "v3",
    "title": "Fleet",
    "titleTe": "ఫ్లీట్",
    "summary": "Durga Roadlines desk.",
    "summaryTe": "దుర్గా రోడ్‌లైన్స్.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-01-fleet",
    "route": "/backoffice/trb-01-fleet",
    "file": "app/backoffice/trb-01-fleet.tsx",
    "kind": "desktop",
    "template": "dashboard",
    "stats": [
      {
        "label": "Trucks",
        "labelTe": "ట్రక్‌లు",
        "value": "2"
      },
      {
        "label": "Live",
        "labelTe": "ప్రత్యక్షం",
        "value": "1"
      }
    ]
  },
  {
    "id": "TRB-02",
    "figmaFrame": "TRB-02 Trips",
    "version": "v3",
    "title": "Trips",
    "titleTe": "ప్రయాణాలు",
    "summary": "All trips.",
    "summaryTe": "అన్ని ప్రయాణాలు.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-02-trips",
    "route": "/backoffice/trb-02-trips",
    "file": "app/backoffice/trb-02-trips.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Loading",
        "titleTe": "లోడ్",
        "subtitle": "AP 07 TX 4545"
      }
    ]
  },
  {
    "id": "TRB-03",
    "figmaFrame": "TRB-03 Quotes",
    "version": "v3",
    "title": "Quotes",
    "titleTe": "కోట్లు",
    "summary": "Above ₹30,000 waiting on the owner.",
    "summaryTe": "₹30,000 పైన యజమాని.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-03-quotes",
    "route": "/backoffice/trb-03-quotes",
    "file": "app/backoffice/trb-03-quotes.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Warangal",
        "titleTe": "వరంగల్",
        "subtitle": "₹32,000",
        "badge": "Owner",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "TRB-04",
    "figmaFrame": "TRB-04 Drivers",
    "version": "v3",
    "title": "Drivers",
    "titleTe": "డ్రైవర్లు",
    "summary": "Who is on a trip.",
    "summaryTe": "ఎవరు ప్రయాణంలో ఉన్నారు.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-04-drivers",
    "route": "/backoffice/trb-04-drivers",
    "file": "app/backoffice/trb-04-drivers.tsx",
    "kind": "desktop",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "TRB-05",
    "figmaFrame": "TRB-05 Permits",
    "version": "v3",
    "title": "Permits",
    "titleTe": "పర్మిట్లు",
    "summary": "e-permits.",
    "summaryTe": "పర్మిట్లు.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-05-permits",
    "route": "/backoffice/trb-05-permits",
    "file": "app/backoffice/trb-05-permits.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "TRD-CHL-089234",
        "titleTe": "పర్మిట్",
        "subtitle": "Guntur"
      }
    ]
  },
  {
    "id": "TRB-06",
    "figmaFrame": "TRB-06 Earnings",
    "version": "v3",
    "title": "Earnings",
    "titleTe": "సంపాదన",
    "summary": "Recorded fares.",
    "summaryTe": "నమోదు ఛార్జీలు.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-06-earnings",
    "route": "/backoffice/trb-06-earnings",
    "file": "app/backoffice/trb-06-earnings.tsx",
    "kind": "desktop",
    "template": "detail",
    "stats": [
      {
        "label": "Month",
        "labelTe": "నెల",
        "value": "₹4.5 L"
      }
    ]
  },
  {
    "id": "TRB-07",
    "figmaFrame": "TRB-07 Issues",
    "version": "v3",
    "title": "Issues",
    "titleTe": "సమస్యలు",
    "summary": "Reported delays.",
    "summaryTe": "ఆలస్యాలు.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-07-issues",
    "route": "/backoffice/trb-07-issues",
    "file": "app/backoffice/trb-07-issues.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "None today",
        "titleTe": "ఈ రోజు లేవు",
        "subtitle": "Clear"
      }
    ]
  },
  {
    "id": "TRB-08",
    "figmaFrame": "TRB-08 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Lanes and caps.",
    "summaryTe": "మార్గాలు మరియు పరిమితులు.",
    "stakeholder": "transport",
    "nav": "bo-transport",
    "group": "backoffice",
    "slug": "trb-08-settings",
    "route": "/backoffice/trb-08-settings",
    "file": "app/backoffice/trb-08-settings.tsx",
    "kind": "desktop",
    "template": "settings",
    "items": [
      {
        "title": "Quote cap",
        "titleTe": "పరిమితి",
        "subtitle": "₹30,000"
      }
    ]
  },
  {
    "id": "SBO-01",
    "figmaFrame": "SBO-01 Overview",
    "version": "v3",
    "title": "Overview",
    "titleTe": "అవలోకనం",
    "summary": "Chambers, rent, liens.",
    "summaryTe": "చాంబర్లు, అద్దె, లీన్లు.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-01-overview",
    "route": "/backoffice/sbo-01-overview",
    "file": "app/backoffice/sbo-01-overview.tsx",
    "kind": "desktop",
    "template": "dashboard",
    "stats": [
      {
        "label": "Bags",
        "labelTe": "బ్యాగులు",
        "value": "30"
      },
      {
        "label": "Rent today",
        "labelTe": "ఈ రోజు",
        "value": "₹150"
      }
    ]
  },
  {
    "id": "SBO-02",
    "figmaFrame": "SBO-02 Requests",
    "version": "v3",
    "title": "Requests",
    "titleTe": "అభ్యర్థనలు",
    "summary": "Inward and outward.",
    "summaryTe": "లోపలి మరియు బయటి.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-02-requests",
    "route": "/backoffice/sbo-02-requests",
    "file": "app/backoffice/sbo-02-requests.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "9021",
        "titleTe": "లోపలి",
        "subtitle": "Sannam"
      },
      {
        "title": "1024",
        "titleTe": "బయటి",
        "subtitle": "OTP waiting"
      }
    ]
  },
  {
    "id": "SBO-03",
    "figmaFrame": "SBO-03 Inventory",
    "version": "v3",
    "title": "Inventory",
    "titleTe": "నిల్వ",
    "summary": "By chamber.",
    "summaryTe": "చాంబర్ వారీగా.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-03-inventory",
    "route": "/backoffice/sbo-03-inventory",
    "file": "app/backoffice/sbo-03-inventory.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "B-2",
        "titleTe": "B-2",
        "subtitle": "Byadgi · 6°C"
      }
    ]
  },
  {
    "id": "SBO-04",
    "figmaFrame": "SBO-04 Rent",
    "version": "v3",
    "title": "Rent",
    "titleTe": "అద్దె",
    "summary": "Accrued rent.",
    "summaryTe": "పెరిగిన అద్దె.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-04-rent",
    "route": "/backoffice/sbo-04-rent",
    "file": "app/backoffice/sbo-04-rent.tsx",
    "kind": "desktop",
    "template": "detail",
    "items": [
      {
        "title": "October",
        "titleTe": "అక్టోబర్",
        "subtitle": "₹8,850"
      }
    ]
  },
  {
    "id": "SBO-05",
    "figmaFrame": "SBO-05 Liens",
    "version": "v3",
    "title": "Liens",
    "titleTe": "లీన్లు",
    "summary": "Bank flags.",
    "summaryTe": "బ్యాంకు ఫ్లాగ్‌లు.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-05-liens",
    "route": "/backoffice/sbo-05-liens",
    "file": "app/backoffice/sbo-05-liens.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "None",
        "titleTe": "లేవు",
        "subtitle": "No active lien"
      }
    ]
  },
  {
    "id": "SBO-06",
    "figmaFrame": "SBO-06 Temperature",
    "version": "v3",
    "title": "Temperature",
    "titleTe": "ఉష్ణోగ్రత",
    "summary": "Log.",
    "summaryTe": "లాగ్.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-06-temperature",
    "route": "/backoffice/sbo-06-temperature",
    "file": "app/backoffice/sbo-06-temperature.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "B-2",
        "titleTe": "B-2",
        "subtitle": "6°C · 65%"
      }
    ]
  },
  {
    "id": "SBO-07",
    "figmaFrame": "SBO-07 Finance",
    "version": "v3",
    "title": "Finance",
    "titleTe": "ఫైనాన్స్",
    "summary": "Rent invoices.",
    "summaryTe": "అద్దె బిల్లులు.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-07-finance",
    "route": "/backoffice/sbo-07-finance",
    "file": "app/backoffice/sbo-07-finance.tsx",
    "kind": "desktop",
    "template": "detail",
    "stats": [
      {
        "label": "Open",
        "labelTe": "తెరిచినవి",
        "value": "₹8,850"
      }
    ]
  },
  {
    "id": "SBO-08",
    "figmaFrame": "SBO-08 Team",
    "version": "v3",
    "title": "Team",
    "titleTe": "బృందం",
    "summary": "Manager, gate, keeper.",
    "summaryTe": "మేనేజర్, గేట్, కీపర్.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-08-team",
    "route": "/backoffice/sbo-08-team",
    "file": "app/backoffice/sbo-08-team.tsx",
    "kind": "desktop",
    "template": "team",
    "mode": "list"
  },
  {
    "id": "SBO-09",
    "figmaFrame": "SBO-09 Settings",
    "version": "v3",
    "title": "Settings",
    "titleTe": "సెట్టింగులు",
    "summary": "Rate card.",
    "summaryTe": "రేటు కార్డు.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-09-settings",
    "route": "/backoffice/sbo-09-settings",
    "file": "app/backoffice/sbo-09-settings.tsx",
    "kind": "desktop",
    "template": "settings",
    "items": [
      {
        "title": "Bag day",
        "titleTe": "బ్యాగు రోజు",
        "subtitle": "₹5"
      }
    ]
  },
  {
    "id": "SBO-10",
    "figmaFrame": "SBO-10 Empty",
    "version": "v3",
    "title": "Empty",
    "titleTe": "ఖాళీ",
    "summary": "No inward.",
    "summaryTe": "లోపలి రాక లేదు.",
    "stakeholder": "storage",
    "nav": "bo-storage",
    "group": "backoffice",
    "slug": "sbo-10-empty",
    "route": "/backoffice/sbo-10-empty",
    "file": "app/backoffice/sbo-10-empty.tsx",
    "kind": "desktop",
    "template": "empty"
  },
  {
    "id": "YRB-01",
    "figmaFrame": "YRB-01 Overview",
    "version": "v3",
    "title": "Overview",
    "titleTe": "అవలోకనం",
    "summary": "Guntur today: arrivals, modal, cess.",
    "summaryTe": "రాకలు, మోడల్, సెస్.",
    "stakeholder": "yard",
    "nav": "bo-yard",
    "group": "backoffice",
    "slug": "yrb-01-overview",
    "route": "/backoffice/yrb-01-overview",
    "file": "app/backoffice/yrb-01-overview.tsx",
    "kind": "desktop",
    "template": "dashboard",
    "stats": [
      {
        "label": "Lots",
        "labelTe": "లాట్లు",
        "value": "24"
      },
      {
        "label": "Modal",
        "labelTe": "మోడల్",
        "value": "₹21,600"
      },
      {
        "label": "Cess",
        "labelTe": "సెస్",
        "value": "1%"
      }
    ]
  },
  {
    "id": "YRB-02",
    "figmaFrame": "YRB-02 District",
    "version": "v3",
    "title": "District",
    "titleTe": "జిల్లా",
    "summary": "Guntur district yards.",
    "summaryTe": "గుంటూరు జిల్లా యార్డులు.",
    "stakeholder": "yard",
    "nav": "bo-yard",
    "group": "backoffice",
    "slug": "yrb-02-district",
    "route": "/backoffice/yrb-02-district",
    "file": "app/backoffice/yrb-02-district.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Guntur",
        "titleTe": "గుంటూరు",
        "subtitle": "24 lots"
      }
    ]
  },
  {
    "id": "YRB-03",
    "figmaFrame": "YRB-03 State",
    "version": "v3",
    "title": "State",
    "titleTe": "రాష్ట్రం",
    "summary": "Andhra and Telangana snapshot from the demo yards.",
    "summaryTe": "ఆంధ్ర మరియు తెలంగాణ.",
    "stakeholder": "yard",
    "nav": "bo-yard",
    "group": "backoffice",
    "slug": "yrb-03-state",
    "route": "/backoffice/yrb-03-state",
    "file": "app/backoffice/yrb-03-state.tsx",
    "kind": "desktop",
    "template": "detail",
    "stats": [
      {
        "label": "AP",
        "labelTe": "ఆంధ్ర",
        "value": "Guntur + Kurnool"
      },
      {
        "label": "TS",
        "labelTe": "తెలంగాణ",
        "value": "Warangal + Nizamabad"
      }
    ]
  },
  {
    "id": "YRB-04",
    "figmaFrame": "YRB-04 Compliance",
    "version": "v3",
    "title": "Compliance",
    "titleTe": "కంప్లయన్స్",
    "summary": "Audit of close extensions and disputes.",
    "summaryTe": "ముగింపు పొడిగింపుల ఆడిట్.",
    "stakeholder": "yard",
    "nav": "bo-yard",
    "group": "backoffice",
    "slug": "yrb-04-compliance",
    "route": "/backoffice/yrb-04-compliance",
    "file": "app/backoffice/yrb-04-compliance.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "D-2041",
        "titleTe": "వివాదం",
        "subtitle": "Open"
      }
    ]
  },
  {
    "id": "YRB-05",
    "figmaFrame": "v7 admin auction settings",
    "version": "v7",
    "title": "Auction settings",
    "titleTe": "వేలం సెట్టింగులు",
    "summary": "Close time, inspection required or recommended, anti-shill.",
    "summaryTe": "ముగింపు, తనిఖీ, షిల్ నిరోధం.",
    "stakeholder": "yard",
    "nav": "bo-yard",
    "group": "backoffice",
    "slug": "yrb-05-auction-settings",
    "route": "/backoffice/yrb-05-auction-settings",
    "file": "app/backoffice/yrb-05-auction-settings.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "rules"
  },
  {
    "id": "YRB-06",
    "figmaFrame": "v6 yard master",
    "version": "v6",
    "title": "Yard master",
    "titleTe": "యార్డు మాస్టర్",
    "summary": "Hours, fees, holidays, commodities.",
    "summaryTe": "గంటలు, ఫీజులు, సెలవులు, సరుకులు.",
    "stakeholder": "yard",
    "nav": "bo-yard",
    "group": "backoffice",
    "slug": "yrb-06-yard-master",
    "route": "/backoffice/yrb-06-yard-master",
    "file": "app/backoffice/yrb-06-yard-master.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "yard"
  },
  {
    "id": "BO-01",
    "figmaFrame": "v6 admin dashboard",
    "version": "v6",
    "title": "Dashboard",
    "titleTe": "డాష్‌బోర్డ్",
    "summary": "Platform live ops across yards and commodities.",
    "summaryTe": "యార్డులు మరియు సరుకులు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-01-dashboard",
    "route": "/backoffice/bo-01-dashboard",
    "file": "app/backoffice/bo-01-dashboard.tsx",
    "kind": "desktop",
    "template": "desktop-home",
    "stats": [
      {
        "label": "Orgs",
        "labelTe": "సంస్థలు",
        "value": "12"
      },
      {
        "label": "Live lots",
        "labelTe": "లాట్లు",
        "value": "4"
      },
      {
        "label": "Late bills",
        "labelTe": "ఆలస్యం",
        "value": "1"
      }
    ],
    "items": [
      {
        "title": "Bag B-03 mismatch",
        "titleTe": "B-03 తేడా",
        "subtitle": "1.8 kg between the two phones",
        "meta": "09:48",
        "badge": "Dispute",
        "tone": "danger"
      },
      {
        "title": "Buyer A is above reserve",
        "titleTe": "రిజర్వ్ పైన",
        "subtitle": "₹22,150/q · identity masked",
        "meta": "10:12",
        "badge": "Bid",
        "tone": "success"
      },
      {
        "title": "Interest on TRD-2026-004218",
        "titleTe": "వడ్డీ",
        "subtitle": "15 days late on the balance",
        "meta": "08:00",
        "badge": "Due",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "BO-02",
    "figmaFrame": "BO-02 Users",
    "version": "v3",
    "title": "Users",
    "titleTe": "వినియోగదారులు",
    "summary": "People, with phones masked for support.",
    "summaryTe": "సపోర్ట్‌కు ఫోన్లు దాచబడతాయి.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-02-users",
    "route": "/backoffice/bo-02-users",
    "file": "app/backoffice/bo-02-users.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Ramesh",
        "titleTe": "రమేష్",
        "subtitle": "Producer · approved"
      },
      {
        "title": "Sai",
        "titleTe": "సాయి",
        "subtitle": "Buyer · three purposes"
      }
    ]
  },
  {
    "id": "BO-03",
    "figmaFrame": "BO-03 Roles",
    "version": "v3",
    "title": "Roles",
    "titleTe": "పాత్రలు",
    "summary": "Two-level RBAC. Platform sets org type. Owners set members.",
    "summaryTe": "ప్లాట్‌ఫాం సంస్థ రకం. యజమానులు సభ్యులు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-03-roles",
    "route": "/backoffice/bo-03-roles",
    "file": "app/backoffice/bo-03-roles.tsx",
    "kind": "desktop",
    "template": "team",
    "mode": "limits"
  },
  {
    "id": "BO-04",
    "figmaFrame": "BO-04 Role templates",
    "version": "v3",
    "title": "Role templates",
    "titleTe": "పాత్ర టెంప్లేట్లు",
    "summary": "The matrix of permissions. Changing it is audited.",
    "summaryTe": "అనుమతుల మాతృక.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-04-role-templates",
    "route": "/backoffice/bo-04-role-templates",
    "file": "app/backoffice/bo-04-role-templates.tsx",
    "kind": "desktop",
    "template": "detail",
    "items": [
      {
        "title": "PR_WORKER",
        "titleTe": "కూలీ",
        "subtitle": "No money actions"
      },
      {
        "title": "BY_PURCHASER",
        "titleTe": "కొనుగోలు",
        "subtitle": "Bid cap"
      },
      {
        "title": "PL_AUDIT",
        "titleTe": "ఆడిటర్",
        "subtitle": "Read only"
      }
    ]
  },
  {
    "id": "BO-05",
    "figmaFrame": "BO-05 KYC queue",
    "version": "v3",
    "title": "KYC queue",
    "titleTe": "కేవైసీ",
    "summary": "Waiting reviews.",
    "summaryTe": "వేచి ఉన్న సమీక్షలు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-05-kyc-queue",
    "route": "/backoffice/bo-05-kyc-queue",
    "file": "app/backoffice/bo-05-kyc-queue.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Transporter",
        "titleTe": "రవాణా",
        "subtitle": "New fleet",
        "badge": "Queue",
        "tone": "warning"
      }
    ]
  },
  {
    "id": "BO-06",
    "figmaFrame": "BO-06 KYC detail",
    "version": "v3",
    "title": "KYC detail",
    "titleTe": "కేవైసీ వివరం",
    "summary": "Documents and the self-approval block.",
    "summaryTe": "స్వీయ ఆమోదం నిరోధం.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-06-kyc-detail",
    "route": "/backoffice/bo-06-kyc-detail",
    "file": "app/backoffice/bo-06-kyc-detail.tsx",
    "kind": "desktop",
    "template": "kyc",
    "mode": "pending"
  },
  {
    "id": "BO-07",
    "figmaFrame": "BO-07 Orgs",
    "version": "v3",
    "title": "Orgs",
    "titleTe": "సంస్థలు",
    "summary": "Approved organisations.",
    "summaryTe": "ఆమోదించిన సంస్థలు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-07-orgs",
    "route": "/backoffice/bo-07-orgs",
    "file": "app/backoffice/bo-07-orgs.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Kotha Farm",
        "titleTe": "కొత్త",
        "subtitle": "Producer"
      },
      {
        "title": "Sai Exports",
        "titleTe": "సాయి",
        "subtitle": "Buyer"
      },
      {
        "title": "Guntur yard",
        "titleTe": "గుంటూరు",
        "subtitle": "Yard"
      }
    ]
  },
  {
    "id": "BO-08",
    "figmaFrame": "BO-08 Entities",
    "version": "v3",
    "title": "Entities",
    "titleTe": "ఎంటిటీలు",
    "summary": "Licences and yards.",
    "summaryTe": "లైసెన్స్‌లు మరియు యార్డులు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-08-entities",
    "route": "/backoffice/bo-08-entities",
    "file": "app/backoffice/bo-08-entities.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Durga Roadlines",
        "titleTe": "దుర్గా",
        "subtitle": "Transport"
      }
    ]
  },
  {
    "id": "BO-09",
    "figmaFrame": "BO-09 Disputes",
    "version": "v3",
    "title": "Disputes",
    "titleTe": "వివాదాలు",
    "summary": "Platform view of D-2041.",
    "summaryTe": "D-2041 ప్లాట్‌ఫాం వీక్షణ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-09-disputes",
    "route": "/backoffice/bo-09-disputes",
    "file": "app/backoffice/bo-09-disputes.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "D-2041",
        "titleTe": "వివాదం",
        "subtitle": "With the yard"
      }
    ]
  },
  {
    "id": "BO-10",
    "figmaFrame": "BO-10 Dispute detail",
    "version": "v3",
    "title": "Dispute detail",
    "titleTe": "వివాద వివరం",
    "summary": "Timeline and the re-weigh.",
    "summaryTe": "కాలరేఖ మరియు మళ్ళీ తూకం.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-10-dispute-detail",
    "route": "/backoffice/bo-10-dispute-detail",
    "file": "app/backoffice/bo-10-dispute-detail.tsx",
    "kind": "desktop",
    "template": "detail",
    "items": [
      {
        "title": "Next",
        "titleTe": "తర్వాత",
        "subtitle": "Yard re-weigh"
      }
    ]
  },
  {
    "id": "BO-11",
    "figmaFrame": "BO-11 Rectification",
    "version": "v3",
    "title": "Rectification",
    "titleTe": "సవరణ అభ్యర్థనలు",
    "summary": "Data fixes. Each one is audited.",
    "summaryTe": "ప్రతి సవరణ ఆడిట్.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-11-rectification",
    "route": "/backoffice/bo-11-rectification",
    "file": "app/backoffice/bo-11-rectification.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "None open",
        "titleTe": "లేవు",
        "subtitle": "Clear"
      }
    ]
  },
  {
    "id": "BO-12",
    "figmaFrame": "v5 AI decision log",
    "version": "v5",
    "title": "AI log",
    "titleTe": "AI లాగ్",
    "summary": "Suggestions that were shown, with confidence. None executed money actions.",
    "summaryTe": "డబ్బు చర్యలు ఏవీ జరగలేదు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-12-ai-log",
    "route": "/backoffice/bo-12-ai-log",
    "file": "app/backoffice/bo-12-ai-log.tsx",
    "kind": "desktop",
    "template": "assistant",
    "mode": "why"
  },
  {
    "id": "BO-13",
    "figmaFrame": "BO-13 Ledger correction",
    "version": "v3",
    "title": "Ledger correction",
    "titleTe": "లెడ్జర్ సవరణ",
    "summary": "Finance correction with a reason.",
    "summaryTe": "కారణంతో సవరణ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-13-ledger-correction",
    "route": "/backoffice/bo-13-ledger-correction",
    "file": "app/backoffice/bo-13-ledger-correction.tsx",
    "kind": "desktop",
    "template": "form"
  },
  {
    "id": "BO-14",
    "figmaFrame": "BO-14 Audit trail",
    "version": "v3",
    "title": "Audit trail",
    "titleTe": "ఆడిట్",
    "summary": "Reserve edits, waivers, role changes, shill attempts.",
    "summaryTe": "రిజర్వ్, మాఫీ, పాత్రలు, షిల్ ప్రయత్నాలు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-14-audit-trail",
    "route": "/backoffice/bo-14-audit-trail",
    "file": "app/backoffice/bo-14-audit-trail.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Shill",
        "titleTe": "షిల్",
        "subtitle": "Blocked · producer org cannot bid"
      },
      {
        "title": "Waiver",
        "titleTe": "మాఫీ",
        "subtitle": "Owner OTP"
      }
    ]
  },
  {
    "id": "BO-15",
    "figmaFrame": "BO-15 Broadcast",
    "version": "v3",
    "title": "Broadcast",
    "titleTe": "ప్రసారం",
    "summary": "Send a notice. It is not a payment.",
    "summaryTe": "నోటీసు. చెల్లింపు కాదు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-15-broadcast",
    "route": "/backoffice/bo-15-broadcast",
    "file": "app/backoffice/bo-15-broadcast.tsx",
    "kind": "desktop",
    "template": "form"
  },
  {
    "id": "BO-16",
    "figmaFrame": "BO-16 Fees",
    "version": "v3",
    "title": "Fees",
    "titleTe": "ఫీజులు",
    "summary": "Platform fee configuration. Yard fees stay on the yard.",
    "summaryTe": "ప్లాట్‌ఫాం ఫీజు. యార్డు ఫీజు యార్డుపై.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-16-fees",
    "route": "/backoffice/bo-16-fees",
    "file": "app/backoffice/bo-16-fees.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "rules"
  },
  {
    "id": "BO-17",
    "figmaFrame": "BO-17 Coins",
    "version": "v3",
    "title": "Coins",
    "titleTe": "నాణేలు",
    "summary": "Supply of loyalty coins. Reversal once, by finance.",
    "summaryTe": "నాణేల సరఫరా. ఫైనాన్స్ ఒకసారి రివర్స్.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-17-coins",
    "route": "/backoffice/bo-17-coins",
    "file": "app/backoffice/bo-17-coins.tsx",
    "kind": "desktop",
    "template": "detail",
    "items": [
      {
        "title": "Welcome",
        "titleTe": "స్వాగతం",
        "subtitle": "250"
      },
      {
        "title": "Reversal",
        "titleTe": "రివర్స్",
        "subtitle": "Once per entry"
      }
    ]
  },
  {
    "id": "BO-18",
    "figmaFrame": "v5 Grok integration",
    "version": "v5",
    "title": "Integrations",
    "titleTe": "ఇంటిగ్రేషన్లు",
    "summary": "API keys live in the host environment, never in the repo. The xAI key field is empty here.",
    "summaryTe": "కీలు రిపోజిటరీలో లేవు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-18-integrations",
    "route": "/backoffice/bo-18-integrations",
    "file": "app/backoffice/bo-18-integrations.tsx",
    "kind": "desktop",
    "template": "settings",
    "items": [
      {
        "title": "xAI key",
        "titleTe": "కీ",
        "subtitle": "Not set · env only",
        "badge": "Empty",
        "tone": "warning"
      },
      {
        "title": "SMS",
        "titleTe": "SMS",
        "subtitle": "DEV ONLY echo"
      }
    ]
  },
  {
    "id": "BO-19",
    "figmaFrame": "BO-19 System",
    "version": "v3",
    "title": "System",
    "titleTe": "సిస్టమ్",
    "summary": "Session length and OTP policy: 6 digits, 10 minutes, 5 attempts.",
    "summaryTe": "6 అంకెలు, 10 నిమిషాలు, 5 ప్రయత్నాలు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-19-system",
    "route": "/backoffice/bo-19-system",
    "file": "app/backoffice/bo-19-system.tsx",
    "kind": "desktop",
    "template": "settings",
    "items": [
      {
        "title": "OTP",
        "titleTe": "OTP",
        "subtitle": "10 min · 5 tries"
      }
    ]
  },
  {
    "id": "BO-20",
    "figmaFrame": "BO-20 Tickets",
    "version": "v3",
    "title": "Tickets",
    "titleTe": "టికెట్లు",
    "summary": "Support queue.",
    "summaryTe": "సపోర్ట్ క్యూ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-20-tickets",
    "route": "/backoffice/bo-20-tickets",
    "file": "app/backoffice/bo-20-tickets.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "T-12",
        "titleTe": "టికెట్",
        "subtitle": "Device reset"
      }
    ]
  },
  {
    "id": "BO-21",
    "figmaFrame": "BO-21 Reports",
    "version": "v3",
    "title": "Reports",
    "titleTe": "నివేదికలు",
    "summary": "Saved reports.",
    "summaryTe": "సేవ్ చేసిన నివేదికలు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-21-reports",
    "route": "/backoffice/bo-21-reports",
    "file": "app/backoffice/bo-21-reports.tsx",
    "kind": "desktop",
    "template": "list",
    "items": [
      {
        "title": "Arrivals",
        "titleTe": "రాకలు",
        "subtitle": "By yard × commodity"
      }
    ]
  },
  {
    "id": "BO-22",
    "figmaFrame": "v6 commodity master",
    "version": "v6",
    "title": "Commodity master",
    "titleTe": "సరుకు మాస్టర్",
    "summary": "Spices, fibre, rhizome, cereals. Chilli, cotton, turmeric, paddy.",
    "summaryTe": "మిరప, పత్తి, పసుపు, వరి.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-22-commodity-master",
    "route": "/backoffice/bo-22-commodity-master",
    "file": "app/backoffice/bo-22-commodity-master.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "commodity"
  },
  {
    "id": "BO-23",
    "figmaFrame": "v6 cotton master",
    "version": "v6",
    "title": "Cotton master",
    "titleTe": "పత్తి మాస్టర్",
    "summary": "Bunny and Shankar-6. Units include bale and candy.",
    "summaryTe": "బన్నీ మరియు శంకర్-6. బేల్ మరియు క్యాండీ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-23-cotton-master",
    "route": "/backoffice/bo-23-cotton-master",
    "file": "app/backoffice/bo-23-cotton-master.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "commodity"
  },
  {
    "id": "BO-24",
    "figmaFrame": "v6 add variety",
    "version": "v6",
    "title": "Add variety",
    "titleTe": "రకం జోడింపు",
    "summary": "Sheets for category, commodity, grades and units.",
    "summaryTe": "వర్గం, సరుకు, గ్రేడ్‌లు, ప్రమాణాలు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-24-add-variety",
    "route": "/backoffice/bo-24-add-variety",
    "file": "app/backoffice/bo-24-add-variety.tsx",
    "kind": "desktop",
    "template": "cascade"
  },
  {
    "id": "BO-25",
    "figmaFrame": "v6 yard master",
    "version": "v6",
    "title": "Yard master",
    "titleTe": "యార్డు మాస్టర్",
    "summary": "Guntur, Warangal, Nizamabad, Kurnool, Unjha, Rajkot.",
    "summaryTe": "ఆరు యార్డులు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-25-yard-master",
    "route": "/backoffice/bo-25-yard-master",
    "file": "app/backoffice/bo-25-yard-master.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "yard"
  },
  {
    "id": "BO-26",
    "figmaFrame": "v6 yard detail",
    "version": "v6",
    "title": "Yard detail",
    "titleTe": "యార్డు వివరం",
    "summary": "Guntur: chilli association, close 23:50, fee 1%, tolerance 0.2 kg.",
    "summaryTe": "ముగింపు 23:50, ఫీజు 1%, టాలరెన్స్ 0.2 కిలో.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-26-yard-detail",
    "route": "/backoffice/bo-26-yard-detail",
    "file": "app/backoffice/bo-26-yard-detail.tsx",
    "kind": "desktop",
    "template": "detail",
    "items": [
      {
        "title": "Association",
        "titleTe": "సంఘం",
        "subtitle": "Guntur Chillies Merchants Assn"
      },
      {
        "title": "Close",
        "titleTe": "ముగింపు",
        "subtitle": "23:50"
      },
      {
        "title": "Inspection",
        "titleTe": "తనిఖీ",
        "subtitle": "Recommended"
      }
    ]
  },
  {
    "id": "BO-27",
    "figmaFrame": "v6 payment rules config",
    "version": "v6",
    "title": "Payment rules",
    "titleTe": "చెల్లింపు నియమాలు",
    "summary": "15 days then 21% simple. Regulatory rows stay unverified until an admin checks them.",
    "summaryTe": "15 రోజులు తర్వాత 21%. నియంత్రణ వరుసలు ధృవీకరణ వరకు ఖాళీ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-27-payment-rules",
    "route": "/backoffice/bo-27-payment-rules",
    "file": "app/backoffice/bo-27-payment-rules.tsx",
    "kind": "desktop",
    "template": "master",
    "mode": "rules"
  },
  {
    "id": "BO-28",
    "figmaFrame": "v6 waivers audit",
    "version": "v6",
    "title": "Waiver audit",
    "titleTe": "మాఫీ ఆడిట్",
    "summary": "Before and after. Finance reads. Owners approve.",
    "summaryTe": "ముందు తర్వాత. ఫైనాన్స్ చదువుతుంది.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-28-waiver-audit",
    "route": "/backoffice/bo-28-waiver-audit",
    "file": "app/backoffice/bo-28-waiver-audit.tsx",
    "kind": "desktop",
    "template": "interest",
    "mode": "waiver"
  },
  {
    "id": "BO-29",
    "figmaFrame": "v7 auction settings",
    "version": "v7",
    "title": "Auction settings",
    "titleTe": "వేలం సెట్టింగులు",
    "summary": "Hidden reserve, auto-accept, proxy step, anti-shill.",
    "summaryTe": "దాచిన రిజర్వ్, ఆటో అంగీకారం, ప్రాక్సీ, షిల్ నిరోధం.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-29-auction-settings",
    "route": "/backoffice/bo-29-auction-settings",
    "file": "app/backoffice/bo-29-auction-settings.tsx",
    "kind": "desktop",
    "template": "auction",
    "mode": "offer"
  },
  {
    "id": "BO-30",
    "figmaFrame": "v7 admin live autobid",
    "version": "v7",
    "title": "Live auto-bids",
    "titleTe": "ప్రత్యక్ష ఆటో-బిడ్లు",
    "summary": "Which bids are AI. Outbid alerts included.",
    "summaryTe": "ఏవి AI బిడ్లు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-30-live-auto-bids",
    "route": "/backoffice/bo-30-live-auto-bids",
    "file": "app/backoffice/bo-30-live-auto-bids.tsx",
    "kind": "desktop",
    "template": "autobid",
    "mode": "active"
  },
  {
    "id": "BO-31",
    "figmaFrame": "v5 fraud anomaly",
    "version": "v5",
    "title": "Fraud flags",
    "titleTe": "ఫ్రాడ్ ఫ్లాగ్‌లు",
    "summary": "Anomaly suggestions. Auditor reviews. Never an automatic block.",
    "summaryTe": "సూచనలు. ఆటో బ్లాక్ లేదు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-31-fraud-flags",
    "route": "/backoffice/bo-31-fraud-flags",
    "file": "app/backoffice/bo-31-fraud-flags.tsx",
    "kind": "desktop",
    "template": "assistant",
    "mode": "alerts"
  },
  {
    "id": "BO-32",
    "figmaFrame": "v5 flow weighment",
    "version": "v5",
    "title": "Flows weighment",
    "titleTe": "తూకం ప్రవాహం",
    "summary": "Two phones, one token, bag states, OTP lock.",
    "summaryTe": "రెండు ఫోన్లు, ఒక టోకెన్.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-32-flows-weighment",
    "route": "/backoffice/bo-32-flows-weighment",
    "file": "app/backoffice/bo-32-flows-weighment.tsx",
    "kind": "desktop",
    "template": "flow",
    "notes": [
      "Gate token autofills both phones",
      "Each bag is pending, matched, mismatch, or queued",
      "Mismatch alerts both sides",
      "Offline entries compare on reconnect",
      "Both OTPs lock the summary"
    ]
  },
  {
    "id": "BO-33",
    "figmaFrame": "v6 flow interest",
    "version": "v6",
    "title": "Flows interest",
    "titleTe": "వడ్డీ ప్రవాహం",
    "summary": "Fifteen days, then simple interest on the outstanding principal.",
    "summaryTe": "15 రోజులు, తర్వాత బకాయి అసలుపై సాధారణ వడ్డీ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-33-flows-interest",
    "route": "/backoffice/bo-33-flows-interest",
    "file": "app/backoffice/bo-33-flows-interest.tsx",
    "kind": "desktop",
    "template": "flow",
    "notes": [
      "Due date is sale date plus credit days",
      "Partial payments shrink the principal",
      "Interest does not compound",
      "Waiver needs the owner OTP",
      "Regulatory rules stay unverified until entered"
    ]
  },
  {
    "id": "BO-34",
    "figmaFrame": "v7 flow auction",
    "version": "v7",
    "title": "Flows auction",
    "titleTe": "వేలం ప్రవాహం",
    "summary": "Reserve, auto-accept, proxy, anti-shill.",
    "summaryTe": "రిజర్వ్, ఆటో అంగీకారం, ప్రాక్సీ.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-34-flows-auction",
    "route": "/backoffice/bo-34-flows-auction",
    "file": "app/backoffice/bo-34-flows-auction.tsx",
    "kind": "desktop",
    "template": "flow",
    "notes": [
      "Buyers never see the reserve",
      "Below reserve: Bid not accepted",
      "First bid at the offer can auto-accept, then the producer OTP",
      "Proxy never bids above the max",
      "Equal max: earlier max wins",
      "Producer, family and linked agent cannot bid"
    ]
  },
  {
    "id": "BO-35",
    "figmaFrame": "v6 flow masters",
    "version": "v6",
    "title": "Flows masters",
    "titleTe": "మాస్టర్ ప్రవాహం",
    "summary": "Category to commodity to variety, and the yard book.",
    "summaryTe": "వర్గం నుండి రకం, మరియు యార్డు.",
    "stakeholder": "admin",
    "nav": "bo-platform",
    "group": "backoffice",
    "slug": "bo-35-flows-masters",
    "route": "/backoffice/bo-35-flows-masters",
    "file": "app/backoffice/bo-35-flows-masters.tsx",
    "kind": "desktop",
    "template": "flow",
    "notes": [
      "Platform edits the hierarchy",
      "Yard admin proposes",
      "Bills snapshot the rule at sale"
    ]
  }
];

export const catalogById: Record<string, ScreenSpec> = Object.fromEntries(catalog.map((screen) => [screen.id, screen]));

export const tabs: Record<string, TabSpec[]> = {
  "producer": [
    {
      "id": "P-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "home"
    },
    {
      "id": "P-38",
      "label": "Lots",
      "labelTe": "లాట్లు",
      "icon": "inventory-2"
    },
    {
      "id": "P-02",
      "label": "Farm",
      "labelTe": "పొలం",
      "icon": "agriculture"
    },
    {
      "id": "P-12",
      "label": "Pay",
      "labelTe": "చెల్లింపు",
      "icon": "payments"
    },
    {
      "id": "P-63",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "agent": [
    {
      "id": "A-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "home"
    },
    {
      "id": "A-02",
      "label": "Farmers",
      "labelTe": "రైతులు",
      "icon": "groups"
    },
    {
      "id": "A-21",
      "label": "Auction",
      "labelTe": "వేలం",
      "icon": "gavel"
    },
    {
      "id": "A-45",
      "label": "Ledger",
      "labelTe": "లెడ్జర్",
      "icon": "menu-book"
    },
    {
      "id": "A-07",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "onboarding": [],
  "buyer": [
    {
      "id": "B-03",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "home"
    },
    {
      "id": "B-01",
      "label": "Market",
      "labelTe": "మార్కెట్",
      "icon": "storefront"
    },
    {
      "id": "B-67",
      "label": "Auto-bid",
      "labelTe": "ఆటో",
      "icon": "smart-toy"
    },
    {
      "id": "B-59",
      "label": "Payables",
      "labelTe": "బకాయి",
      "icon": "payments"
    },
    {
      "id": "B-54",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "inspector": [
    {
      "id": "I-01",
      "label": "Jobs",
      "labelTe": "పనులు",
      "icon": "fact-check"
    },
    {
      "id": "I-05",
      "label": "Moisture",
      "labelTe": "తేమ",
      "icon": "water-drop"
    },
    {
      "id": "I-08",
      "label": "Check",
      "labelTe": "చెక్",
      "icon": "assignment"
    },
    {
      "id": "I-13",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    },
    {
      "id": "I-15",
      "label": "Empty",
      "labelTe": "ఖాళీ",
      "icon": "inbox"
    }
  ],
  "verifier": [
    {
      "id": "V-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "fact-check"
    },
    {
      "id": "V-02",
      "label": "Queue",
      "labelTe": "క్యూ",
      "icon": "inbox"
    },
    {
      "id": "V-03",
      "label": "OTP",
      "labelTe": "OTP",
      "icon": "lock"
    },
    {
      "id": "V-05",
      "label": "History",
      "labelTe": "చరిత్ర",
      "icon": "history"
    },
    {
      "id": "V-07",
      "label": "Limits",
      "labelTe": "పరిమితి",
      "icon": "admin-panel-settings"
    }
  ],
  "lab": [
    {
      "id": "L-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "science"
    },
    {
      "id": "L-02",
      "label": "Samples",
      "labelTe": "నమూనాలు",
      "icon": "biotech"
    },
    {
      "id": "L-03",
      "label": "Results",
      "labelTe": "ఫలితాలు",
      "icon": "edit"
    },
    {
      "id": "L-07",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    },
    {
      "id": "L-08",
      "label": "Empty",
      "labelTe": "ఖాళీ",
      "icon": "inbox"
    }
  ],
  "transport": [
    {
      "id": "T-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "local-shipping"
    },
    {
      "id": "T-02",
      "label": "Loads",
      "labelTe": "లోడ్లు",
      "icon": "inventory"
    },
    {
      "id": "T-12",
      "label": "Fleet",
      "labelTe": "ఫ్లీట్",
      "icon": "directions-bus"
    },
    {
      "id": "T-11",
      "label": "Earnings",
      "labelTe": "సంపాదన",
      "icon": "payments"
    },
    {
      "id": "T-13",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "storage": [
    {
      "id": "S-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "warehouse"
    },
    {
      "id": "S-02",
      "label": "Inward",
      "labelTe": "లోపలి",
      "icon": "login"
    },
    {
      "id": "S-06",
      "label": "Stock",
      "labelTe": "నిల్వ",
      "icon": "inventory-2"
    },
    {
      "id": "S-09",
      "label": "Outward",
      "labelTe": "బయటి",
      "icon": "logout"
    },
    {
      "id": "S-16",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "bank": [
    {
      "id": "F-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "account-balance"
    },
    {
      "id": "F-02",
      "label": "Files",
      "labelTe": "ఫైళ్లు",
      "icon": "folder"
    },
    {
      "id": "F-05",
      "label": "Collateral",
      "labelTe": "తాకట్టు",
      "icon": "shield"
    },
    {
      "id": "F-11",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    },
    {
      "id": "F-16",
      "label": "Why",
      "labelTe": "ఎందుకు",
      "icon": "psychology"
    }
  ],
  "insurance": [
    {
      "id": "N-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "shield"
    },
    {
      "id": "N-09",
      "label": "Policies",
      "labelTe": "పాలసీలు",
      "icon": "description"
    },
    {
      "id": "N-05",
      "label": "Claims",
      "labelTe": "క్లెయిమ్‌లు",
      "icon": "report"
    },
    {
      "id": "N-12",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    },
    {
      "id": "N-14",
      "label": "Why",
      "labelTe": "ఎందుకు",
      "icon": "psychology"
    }
  ],
  "yard": [
    {
      "id": "Y-01",
      "label": "Gate",
      "labelTe": "గేట్",
      "icon": "sensor-door"
    },
    {
      "id": "Y-04",
      "label": "Queue",
      "labelTe": "క్యూ",
      "icon": "queue"
    },
    {
      "id": "Y-05",
      "label": "Prices",
      "labelTe": "ధరలు",
      "icon": "show-chart"
    },
    {
      "id": "Y-09",
      "label": "Disputes",
      "labelTe": "వివాదాలు",
      "icon": "gavel"
    },
    {
      "id": "Y-11",
      "label": "Staff",
      "labelTe": "సిబ్బంది",
      "icon": "groups"
    }
  ],
  "seller": [
    {
      "id": "IS-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "store"
    },
    {
      "id": "IS-02",
      "label": "Catalog",
      "labelTe": "జాబితా",
      "icon": "category"
    },
    {
      "id": "IS-04",
      "label": "Orders",
      "labelTe": "ఆర్డర్లు",
      "icon": "shopping-cart"
    },
    {
      "id": "IS-07",
      "label": "Settle",
      "labelTe": "సెటిల్",
      "icon": "payments"
    },
    {
      "id": "IS-09",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "service": [
    {
      "id": "SP-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "handyman"
    },
    {
      "id": "SP-02",
      "label": "Catalog",
      "labelTe": "జాబితా",
      "icon": "category"
    },
    {
      "id": "SP-03",
      "label": "Jobs",
      "labelTe": "పనులు",
      "icon": "assignment"
    },
    {
      "id": "SP-07",
      "label": "Bill",
      "labelTe": "బిల్లు",
      "icon": "payments"
    },
    {
      "id": "SP-09",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "shared": [
    {
      "id": "SH-02",
      "label": "Alerts",
      "labelTe": "అలర్ట్లు",
      "icon": "notifications"
    },
    {
      "id": "SH-05",
      "label": "Docs",
      "labelTe": "పత్రాలు",
      "icon": "folder"
    },
    {
      "id": "SH-07",
      "label": "Help",
      "labelTe": "సహాయం",
      "icon": "help"
    },
    {
      "id": "SH-10",
      "label": "Settings",
      "labelTe": "సెట్టింగులు",
      "icon": "settings"
    },
    {
      "id": "SH-01",
      "label": "Search",
      "labelTe": "శోధన",
      "icon": "search"
    }
  ],
  "admin": [
    {
      "id": "AM-01",
      "label": "Live",
      "labelTe": "ప్రత్యక్షం",
      "icon": "dashboard"
    },
    {
      "id": "AM-03",
      "label": "KYC",
      "labelTe": "కేవైసీ",
      "icon": "badge"
    },
    {
      "id": "AM-05",
      "label": "Rules",
      "labelTe": "నియమాలు",
      "icon": "gavel"
    },
    {
      "id": "AM-04",
      "label": "Alerts",
      "labelTe": "అలర్ట్లు",
      "icon": "notifications"
    },
    {
      "id": "AM-07",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "bo-agent": [
    {
      "id": "ABO-01",
      "label": "Ledger",
      "labelTe": "లెడ్జర్",
      "icon": "menu-book"
    },
    {
      "id": "ABO-02",
      "label": "Yards",
      "labelTe": "యార్డులు",
      "icon": "store"
    },
    {
      "id": "ABO-04",
      "label": "Auctions",
      "labelTe": "వేలాలు",
      "icon": "gavel"
    },
    {
      "id": "ABO-05",
      "label": "Bills",
      "labelTe": "బిల్లులు",
      "icon": "receipt"
    },
    {
      "id": "ABO-07",
      "label": "Team",
      "labelTe": "బృందం",
      "icon": "groups"
    }
  ],
  "bo-buyer": [
    {
      "id": "TBO-01",
      "label": "Home",
      "labelTe": "హోమ్",
      "icon": "dashboard"
    },
    {
      "id": "TBO-02",
      "label": "Market",
      "labelTe": "మార్కెట్",
      "icon": "storefront"
    },
    {
      "id": "TBO-05",
      "label": "Payables",
      "labelTe": "బకాయిలు",
      "icon": "payments"
    },
    {
      "id": "TBO-06",
      "label": "Auto-bids",
      "labelTe": "ఆటో",
      "icon": "smart-toy"
    },
    {
      "id": "TBO-07",
      "label": "Approvals",
      "labelTe": "ఆమోదాలు",
      "icon": "verified"
    }
  ],
  "bo-transport": [
    {
      "id": "TRB-01",
      "label": "Fleet",
      "labelTe": "ఫ్లీట్",
      "icon": "local-shipping"
    },
    {
      "id": "TRB-02",
      "label": "Trips",
      "labelTe": "ప్రయాణాలు",
      "icon": "route"
    },
    {
      "id": "TRB-03",
      "label": "Quotes",
      "labelTe": "కోట్లు",
      "icon": "request-quote"
    },
    {
      "id": "TRB-06",
      "label": "Earnings",
      "labelTe": "సంపాదన",
      "icon": "payments"
    },
    {
      "id": "TRB-08",
      "label": "Settings",
      "labelTe": "సెట్టింగులు",
      "icon": "settings"
    }
  ],
  "bo-storage": [
    {
      "id": "SBO-01",
      "label": "Overview",
      "labelTe": "అవలోకనం",
      "icon": "warehouse"
    },
    {
      "id": "SBO-03",
      "label": "Stock",
      "labelTe": "నిల్వ",
      "icon": "inventory-2"
    },
    {
      "id": "SBO-04",
      "label": "Rent",
      "labelTe": "అద్దె",
      "icon": "payments"
    },
    {
      "id": "SBO-07",
      "label": "Finance",
      "labelTe": "ఫైనాన్స్",
      "icon": "account-balance"
    },
    {
      "id": "SBO-09",
      "label": "Settings",
      "labelTe": "సెట్టింగులు",
      "icon": "settings"
    }
  ],
  "bo-yard": [
    {
      "id": "YRB-01",
      "label": "Overview",
      "labelTe": "అవలోకనం",
      "icon": "dashboard"
    },
    {
      "id": "YRB-04",
      "label": "Audit",
      "labelTe": "ఆడిట్",
      "icon": "fact-check"
    },
    {
      "id": "YRB-05",
      "label": "Auctions",
      "labelTe": "వేలాలు",
      "icon": "gavel"
    },
    {
      "id": "YRB-06",
      "label": "Master",
      "labelTe": "మాస్టర్",
      "icon": "store"
    },
    {
      "id": "YRB-02",
      "label": "District",
      "labelTe": "జిల్లా",
      "icon": "map"
    }
  ],
  "bo-platform": [
    {
      "id": "BO-01",
      "label": "Live",
      "labelTe": "ప్రత్యక్షం",
      "icon": "dashboard"
    },
    {
      "id": "BO-22",
      "label": "Commodities",
      "labelTe": "సరుకులు",
      "icon": "category"
    },
    {
      "id": "BO-25",
      "label": "Yards",
      "labelTe": "యార్డులు",
      "icon": "store"
    },
    {
      "id": "BO-27",
      "label": "Rules",
      "labelTe": "నియమాలు",
      "icon": "gavel"
    },
    {
      "id": "BO-29",
      "label": "Auctions",
      "labelTe": "వేలాలు",
      "icon": "smart-toy"
    }
  ]
};
