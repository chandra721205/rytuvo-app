# Rytuvo

Rytuvo is a multi-commodity agri trading app for Indian market yards. Producers, commission agents, buyers, inspectors, transport, storage, banks, insurers, yards, input sellers, service providers, and platform admins each have their own navigation. English and Telugu copy ship together.

The design source is the Figma file [Rytuvo — Stakeholder Design System & Screens](https://www.figma.com/design/g5MlDevajExftsptWA94OZ). This repo is one Expo app (SDK 57, TypeScript, expo-router). Phone screens are the default. Desktop back offices are responsive routes in `app/(backoffice)` on `react-native-web`.

Every screen runs against an in-memory mock, so Expo Go works with no API and no secrets.

## Setup

```bash
npm install
npm run typecheck
npm test
npm run lint
```

Node 22 is what this workspace used. Do not commit `.env` files. The demo OTP is the constant `123456` inside the mock client and is labelled DEV ONLY. It is not an SMS gateway and there is no model API key in the repo.

## Run

```bash
npm start          # Expo Go: scan the QR code
npm run android    # Android emulator or device
npm run ios        # iOS simulator (macOS)
npm run web        # browser, including desktop back office
```

Open `/` for the splash. Pick a persona to enter that stakeholder. The language chip switches English and Telugu.

## Web export

```bash
npx expo export --platform web
```

Output is `dist/` (gitignored). `app.json` sets `web.output` to `single` so the export is one bundle rather than hundreds of static HTML files.

## Android APK

Cloud build (internal APK):

```bash
npx eas login
npx eas build -p android --profile preview
```

The `preview` profile in `eas.json` sets `android.buildType` to `apk` and `distribution` to `internal`. Production uses an Android App Bundle.

Local debug APK (after the Android SDK and JDK are installed):

```bash
npx expo prebuild --platform android
cd android && ./gradlew assembleDebug
```

The APK is `android/app/build/outputs/apk/debug/app-debug.apk`. `android/` is generated and gitignored. A release APK needs a signing keystore that stays out of git.

## Project structure

```
app/                  expo-router routes, one file per screen
  (onboarding|producer|agent|buyer|quality|transport|storage|
   bank|insurance|yard|inputs|shared|admin)/
  (backoffice)/       desktop web routes
src/design-system/    tokens and shared components
src/domain/           typed model
src/rules/            pure business rules and Jest tests
src/data/             seed data and RytuvoClient mock
src/state/            Zustand store
src/i18n/             English and Telugu strings
src/screens/          catalog, screen host, interactive bodies
scripts/gen_catalog.py  regenerates routes, catalog, and SCREEN_MAP.md
assets/brand/         wordmark and icon SVGs
```

`npm run generate` rewrites the route files from the catalog script. Screen behaviour lives in `src/screens/bodies.tsx`, not in each route file.

## Docs

- [ARCHITECTURE.md](ARCHITECTURE.md) — navigation, data, rules, RBAC
- [SCREEN_MAP.md](SCREEN_MAP.md) — frame key, route, file, and what is not a route

## Quality checks

```bash
npx tsc --noEmit
npx jest
npx eslint .
npx expo-doctor
npx expo export --platform web
```
