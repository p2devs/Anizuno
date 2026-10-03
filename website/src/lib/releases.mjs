export const LINKS = {
  latest: 'https://github.com/p2devs/Anizuno/releases/latest',
  releases: 'https://github.com/p2devs/Anizuno/releases',
  api: 'https://api.github.com/repos/p2devs/Anizuno/releases/latest',
  testflight: 'https://testflight.apple.com/join/sV2XjUus',
  web: 'https://capacity.rocks/',
  discord: 'https://discord.gg/AqBDUDMkKa',
  donate: 'https://ko-fi.com/p2devs',
};

function releaseUrl(value, path) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      url.hostname === 'github.com' &&
      url.pathname.startsWith(`/p2devs/Anizuno/releases/${path}/`) &&
      !url.username &&
      !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export function selectApk(assets = []) {
  if (!Array.isArray(assets)) return null;
  const apks = assets.filter(
    asset =>
      asset?.state === 'uploaded' &&
      typeof asset.name === 'string' &&
      /\.apk$/i.test(asset.name) &&
      releaseUrl(asset.browser_download_url, 'download'),
  );
  // Split APKs require a device choice. Never guess an architecture.
  const universal = apks.find(asset => /universal/i.test(asset.name));
  const asset =
    universal ||
    (apks.length === 1 &&
    !/(arm64|armeabi|armv7|x86|aarch64)/i.test(apks[0].name)
      ? apks[0]
      : null);
  return asset
    ? { name: asset.name, url: asset.browser_download_url, size: asset.size }
    : null;
}

export function parseRelease(data) {
  if (
    !data ||
    data.draft ||
    data.prerelease ||
    typeof data.tag_name !== 'string' ||
    !data.tag_name.trim() ||
    !releaseUrl(data.html_url, 'tag') ||
    !data.published_at ||
    !Number.isFinite(Date.parse(data.published_at))
  ) {
    throw new Error('Invalid published release');
  }
  const highlights =
    typeof data.body === 'string'
      ? data.body
          .split(/\r?\n/)
          .filter(line => /^\s*[-*]\s+/.test(line))
          .map(line =>
            line
              .replace(/^\s*[-*]\s+/, '')
              .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
              .replace(/[*`_]/g, '')
              .trim(),
          )
          .filter(Boolean)
          .slice(0, 3)
      : [];
  return {
    version: `v${data.tag_name.replace(/^v/i, '')}`,
    publishedAt: data.published_at,
    url: data.html_url,
    apk: selectApk(data.assets),
    highlights: highlights.length
      ? highlights
      : ['See the full release notes on GitHub.'],
  };
}

export async function fetchLatestRelease({ signal, fetcher = fetch } = {}) {
  const response = await fetcher(LINKS.api, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!response.ok)
    throw new Error(`Release lookup failed: ${response.status}`);
  return parseRelease(await response.json());
}

export function formatDate(value) {
  // Locale databases disagree on abbreviations such as Sep/Sept. Keep the
  // static HTML and browser render identical, including across time zones.
  const date = new Date(value);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function formatSize(bytes) {
  return Number.isFinite(bytes) && bytes > 0
    ? `${Math.round(bytes / 1024 / 1024)} MB`
    : 'APK';
}
