# Anizuno website

Docusaurus app showcase and help center, hosted at https://p2devs.github.io/Anizuno/.

Anizuno has three platforms: Android, iOS, and Web. The Web app is at https://capacity.rocks/; keep its homepage button and platform card separate from this showcase site's URL.

## Development

Use Node 22 or later and the repository's Yarn lockfile:

```sh
yarn install --frozen-lockfile
yarn start
```

## Checks and preview

```sh
npm test
npm run build
npm run serve -- --host 127.0.0.1 --port 4173
```

Open `http://127.0.0.1:4173/Anizuno/`. Production builds fail on broken internal links and anchors. Check desktop and narrow layouts, both color themes, mobile navigation, FAQ keyboard controls, and the help/privacy/terms routes before publishing.

## Release information

`src/lib/release-snapshot.json` is a verified public GitHub release, rendered into the static HTML so Android downloads work before JavaScript loads or when the API is unavailable. The homepage attempts a live refresh with an eight-second timeout. Failure keeps the snapshot and clearly labels it. Releases with only split APKs link to the release page rather than guessing an architecture.

Refresh the fallback before publishing:

```sh
npm run release:refresh
```

This command reads the public GitHub API without credentials. The snapshot is written only after validation. The local React Native version is not used as proof of a published release. TestFlight availability is managed by Apple and may differ from Android.

## Content and assets

- Homepage: `src/pages/index.js` and `index.module.css`.
- Theme and navigation: `src/css/custom.css` and `docusaurus.config.js`.
- Help center: `docs/`, served at `/Anizuno/help/`.
- Policy pages: `src/pages/privacy.md` and `terms.md`.
- App screenshots: `static/img/app-screens.jpg`, optimized from the existing nine-panel `.github/readme-images/screenshot.png`. These are existing app captures, not newly captured v1.2.5 screens. The visible caption notes device/version differences. Replace the source when fresh captures are available; each panel has the same 1668:2420 aspect ratio.
- App icon: copied from the current React Native iOS asset catalog.
- Manrope fonts: self-hosted in `static/fonts/` with their OFL license. No external font or badge requests.

Policy text is based on the current app implementation and linked provider documentation. Keep it synchronized with actual telemetry, backend operations, retention settings, and available user controls. The site does not add an analytics tracker.

The companion app's `APP_LINKS` points Privacy and Terms at these routes. Its separate `website` link remains the sharing destination. Publish the website routes before distributing an app build using the new URLs.

## Hosting

The existing `.github/workflows/website-build.yml` publishes `website/build` when changes reach `main`. Local changes do not deploy automatically. Keep `baseUrl: '/Anizuno/'` aligned with the GitHub Pages project path.
