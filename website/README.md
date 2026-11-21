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

`src/lib/release-snapshot.json` records a verified public GitHub release. The static homepage includes its Android APK and iOS IPA links before JavaScript loads. The homepage also attempts a live refresh with an eight-second timeout. Failure keeps the snapshot and clearly labels it. Releases with only split APKs link to the release page. If the release has zero or multiple eligible IPA files, the iOS button opens GitHub Releases so visitors can check the assets.

Refresh the fallback before publishing:

```sh
npm run release:refresh
```

This command reads the public GitHub API without credentials and writes the snapshot after validation. The iOS download buttons use the uploaded IPA asset URL returned by GitHub. The sideloading and update instructions are in `docs/installation.md`.

## Content and assets

- Homepage: `src/pages/index.js` and `index.module.css`.
- Theme and navigation: `src/css/custom.css` and `docusaurus.config.js`.
- Help center: `docs/`, served at `/Anizuno/help/`.
- Policy pages: `src/pages/privacy.md` and `terms.md`.
- App screenshots: `static/img/app-screens.jpg`, optimized from the existing nine-panel `.github/readme-images/screenshot.png`. These are existing app captures, not newly captured v1.2.5 screens. The visible caption notes device/version differences. Replace the source when fresh captures are available; each panel has the same 1668:2420 aspect ratio.
- Download walkthrough: `static/media/anizuno-downloads-faq.mp4`, its poster, and English `.vtt` instructions. The shared `src/components/DownloadWalkthrough/` player appears in the homepage FAQ and playback/download guide. The 84-second recording shows real Android Sub and Dub downloads; it is silent, uses native controls, and loads video only when requested (`preload="none"`, no autoplay). Asset URLs use Docusaurus `useBaseUrl` for GitHub Pages.
- App icon: copied from the current React Native iOS asset catalog.
- Manrope fonts: self-hosted in `static/fonts/` with their OFL license. No external font or badge requests.

Policy text is based on the current app implementation and linked provider documentation. Keep it synchronized with actual telemetry, backend operations, retention settings, and available user controls. The site does not add an analytics tracker.

The companion app's `APP_LINKS` points Privacy and Terms at these routes. Its separate `website` link remains the sharing destination. Publish the website routes before distributing an app build using the new URLs.

## Hosting

The existing `.github/workflows/website-build.yml` publishes `website/build` when changes reach `main`. Local changes do not deploy automatically. Keep `baseUrl: '/Anizuno/'` aligned with the GitHub Pages project path.
