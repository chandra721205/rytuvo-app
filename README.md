# Rytuvo

Rytuvo is a multi-commodity agri trading app for Indian market yards. Producers, commission agents, buyers, inspectors, transport, storage, banks, insurers, yards, input sellers, service providers, and platform admins each have their own navigation. English and Telugu copy ship together.

The design source is the Figma file [Rytuvo — Stakeholder Design System & Screens](https://www.figma.com/design/g5MlDevajExftsptWA94OZ). This repo is one Expo app (SDK 57, TypeScript, expo-router). Phone screens are the default. Desktop back offices are responsive routes in `app/backoffice` on `react-native-web`.

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
npm run android    # native Android app (expo run:android; needs the SDK)
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

### Local release APK

Needs JDK 17 or 21 and the Android SDK (compile SDK 36, build-tools 36.0.0, NDK 27.1.12297006, CMake 3.22.1). Point `JAVA_HOME` and `ANDROID_HOME` at them.

Generate a release keystore **outside the repo**. Do not commit the keystore, `keystore.properties`, or the passwords.

```bash
mkdir -p "$HOME/.android"
# Choose a password and keep it out of git. Both store and key use it here.
export RYTUVO_STORE_PASSWORD='choose-a-long-password'
export RYTUVO_KEY_PASSWORD="$RYTUVO_STORE_PASSWORD"
keytool -genkeypair -v \
  -storetype PKCS12 \
  -keystore "$HOME/.android/rytuvo-release.keystore" \
  -alias rytuvo \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -dname "CN=Rytuvo, OU=Mobile, O=Rytuvo, L=Guntur, ST=Andhra Pradesh, C=IN" \
  -storepass "$RYTUVO_STORE_PASSWORD" \
  -keypass "$RYTUVO_KEY_PASSWORD"

npx expo prebuild -p android
```

`android/` is generated and gitignored. After prebuild, point the release build at that keystore. In `android/app/build.gradle`, add a `release` block inside `signingConfigs` and set `buildTypes.release.signingConfig` to `signingConfigs.release`:

```gradle
release {
    def propsFile = rootProject.file("keystore.properties")
    if (propsFile.exists()) {
        def props = new Properties()
        props.load(new FileInputStream(propsFile))
        storeFile file(props['storeFile'])
        storePassword props['storePassword']
        keyAlias props['keyAlias']
        keyPassword props['keyPassword']
    }
}
```

Write `android/keystore.properties` (mode `600`). `storeFile` is the absolute path of the keystore from the step above. `keyAlias` is `rytuvo`. The two passwords are the ones you exported. That file stays inside `android/`, so git ignores it.

Then build phone ABIs and assemble:

```bash
# android/gradle.properties
# reactNativeArchitectures=armeabi-v7a,arm64-v8a

cd android
./gradlew assembleRelease
```

The APK is `android/app/build/outputs/apk/release/app-release.apk`. Package `in.rytuvo.app`, versionName `1.0.0`, versionCode `1`. Check it with the SDK build-tools:

```bash
"$ANDROID_HOME/build-tools/36.0.0/aapt" dump badging android/app/build/outputs/apk/release/app-release.apk | head
"$ANDROID_HOME/build-tools/36.0.0/apksigner" verify --print-certs android/app/build/outputs/apk/release/app-release.apk
```

A debug-signed release is also possible: leave `signingConfig signingConfigs.debug` as prebuild wrote it, then `./gradlew assembleRelease`. That APK installs, and it is signed with the debug key (`androiddebugkey`), not a release keystore.

### Local debug APK

```bash
npx expo prebuild -p android
cd android && ./gradlew assembleDebug
```

The APK is `android/app/build/outputs/apk/debug/app-debug.apk`.

## Project structure

```
app/                  expo-router routes, one file per screen
  onboarding, producer, agent, buyer, quality, transport, storage,
  bank, insurance, yard, inputs, shared, admin
  backoffice/         desktop web routes
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
