import test from 'node:test';
import assert from 'node:assert/strict';
import { selectApk, parseRelease, fetchLatestRelease, formatDate, LINKS } from '../src/lib/releases.mjs';
import snapshot from '../src/lib/release-snapshot.json' with { type: 'json' };

const asset = name => ({ name, state: 'uploaded', size: 1234, browser_download_url: `https://github.com/p2devs/Anizuno/releases/download/1.2.4/${name}` });
const release = { tag_name: '1.2.4', published_at: '2026-09-18T08:43:45Z', html_url: 'https://github.com/p2devs/Anizuno/releases/tag/1.2.4', assets: [asset('source.zip'), asset('Anizuno.apk')], body: '# Release\r\n- **Fixed** sources.\r\n- Improved [playback](https://example.com).', draft: false, prerelease: false };

test('renders release dates consistently in UTC without locale-dependent abbreviations', () => {
  assert.equal(formatDate(release.published_at), '18 Sep 2026');
  assert.equal(formatDate('2026-10-01T01:00:00+05:30'), '30 Sep 2026');
});

test('finds the APK even when it is not the first release asset', () => {
  assert.equal(selectApk(release.assets).name, 'Anizuno.apk');
});
test('prefers a universal APK over architecture-specific downloads', () => {
  assert.equal(selectApk([asset('arm64.apk'), asset('universal.apk'), asset('x86.apk')]).name, 'universal.apk');
});
test('does not guess between split APKs or select an AAB', () => {
  assert.equal(selectApk([asset('arm64.apk'), asset('x86.apk')]), null);
  assert.equal(selectApk([asset('arm64.apk')]), null);
  assert.equal(selectApk([asset('release.aab')]), null);
  assert.equal(selectApk(null), null);
});
test('rejects incomplete uploads and download links outside the official repository', () => {
  assert.equal(selectApk([{ ...asset('app.apk'), state: 'new' }]), null);
  assert.equal(selectApk([{ ...asset('app.apk'), browser_download_url: 'https://example.com/app.apk' }]), null);
  assert.equal(selectApk([{ ...asset('app.apk'), browser_download_url: 'javascript:alert(1)' }]), null);
});
test('uses the published release version and extracts plain-text highlights', () => {
  const result = parseRelease(release);
  assert.equal(result.version, 'v1.2.4');
  assert.deepEqual(result.highlights, ['Fixed sources.', 'Improved playback.']);
  assert.equal(result.apk.name, 'Anizuno.apk');
});
test('rejects draft, prerelease, malformed, and nonofficial release data', () => {
  for (const data of [null, {}, { ...release, draft: true }, { ...release, prerelease: true }, { ...release, published_at: 'invalid' }, { ...release, html_url: 'https://example.com/release' }]) {
    assert.throws(() => parseRelease(data));
  }
});
test('valid releases without APKs retain the release-page destination', () => {
  const result = parseRelease({ ...release, assets: [], body: null });
  assert.equal(result.apk, null);
  assert.equal(result.url, release.html_url);
  assert.equal(result.highlights.length, 1);
});
test('rate limiting and network failure reject without an unusable download result', async () => {
  await assert.rejects(fetchLatestRelease({ fetcher: async () => ({ ok: false, status: 403 }) }), /403/);
  await assert.rejects(fetchLatestRelease({ fetcher: async () => { throw new TypeError('Network unavailable'); } }), /Network unavailable/);
  // The hook keeps this verified, statically rendered fallback on lookup failure.
  assert.equal(snapshot.apk.url, asset('Anizuno-v1.2.4.apk').browser_download_url);
});
test('successful lookup uses the public endpoint and propagates cancellation', async () => {
  const controller = new AbortController();
  const result = await fetchLatestRelease({ signal: controller.signal, fetcher: async (url, options) => {
    assert.equal(url, LINKS.api);
    assert.equal(options.signal, controller.signal);
    return { ok: true, json: async () => release };
  } });
  assert.equal(result.version, 'v1.2.4');
});
