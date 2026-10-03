import { useEffect, useState } from 'react';
import snapshot from './release-snapshot.json';
import { fetchLatestRelease } from './releases.mjs';

export function useRelease() {
  const [state, setState] = useState({ release: snapshot, status: 'snapshot' });
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 8000);
    setState({ release: snapshot, status: 'loading' });
    fetchLatestRelease({ signal: controller.signal })
      .then(release => {
        if (active) setState({ release, status: 'live' });
      })
      .catch(() => {
        if (active) setState({ release: snapshot, status: 'fallback' });
      })
      .finally(() => clearTimeout(timeout));
    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);
  return state;
}
