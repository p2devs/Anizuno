import { writeFile } from 'node:fs/promises';
import { fetchLatestRelease } from '../src/lib/releases.mjs';

// Run explicitly before publishing. A failed lookup leaves the last snapshot intact.
const release = await fetchLatestRelease({ signal: AbortSignal.timeout(15000) });
await writeFile(new URL('../src/lib/release-snapshot.json', import.meta.url), `${JSON.stringify({ ...release, checkedAt: new Date().toISOString() }, null, 2)}\n`);
console.log(`Saved verified release ${release.version}`);
