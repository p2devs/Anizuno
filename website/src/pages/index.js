import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import Layout from '@theme/Layout';
import { useRelease } from '../lib/useRelease';
import { LINKS, formatDate, formatSize } from '../lib/releases.mjs';
import styles from './index.module.css';

function Arrow({ down = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      style={down ? { transform: 'rotate(90deg)' } : undefined}
    >
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

function AppScreen({ screen, alt, className = '' }) {
  const src = useBaseUrl('/img/app-screens.jpg');
  return (
    <div className={`${styles.appScreen} ${className}`}>
      <img
        src={src}
        width="5400"
        height="870"
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ transform: `translateX(-${(screen * 100) / 9}%)` }}
      />
    </div>
  );
}

const questions = [
  [
    'Is Anizuno free?',
    <>
      Yes. Anizuno is free to download and use. If you would like to support
      development, you can <a href={LINKS.donate}>make an optional donation</a>.
    </>,
  ],
  [
    'How do I install it?',
    <>
      On Android, download the APK and open it on your device. On iPhone or
      iPad, use the TestFlight invitation. On Web,{' '}
      <a href={LINKS.web}>open Anizuno in your browser</a> with no installation.
      Our <Link to="/help/installation">getting started guide</Link> covers all
      three platforms.
    </>,
  ],
  [
    'Can I watch offline?',
    <>
      In builds with downloads enabled, save a supported episode and wait until
      it is marked ready in Library → Downloads. Sources, subtitles, and
      background transfers can behave differently by device. See{' '}
      <Link to="/help/playback-downloads">the download guide</Link>.
    </>,
  ],
  [
    'Why does my app open an official streaming service?',
    <>
      Some builds provide a discovery and tracking experience and open an
      official service for playback. In-app playback and downloads are available
      only in builds that enable those features.
    </>,
  ],
  [
    'Does my library sync between devices?',
    <>
      Your favorites, watch history, and progress are saved on your device.
      Anizuno does not currently offer an account-based library sync or backup
      export. Keep this in mind before clearing app data or uninstalling.
    </>,
  ],
];

export default function Home() {
  const brokenLinks = useBrokenLinks();
  ['features', 'download', 'release'].forEach(id =>
    brokenLinks.collectAnchor(id),
  );
  const { release, status } = useRelease();
  const apk = release.apk;
  const androidHref = apk?.url || release.url;
  const androidLabel = apk ? 'Download Android APK' : 'Choose an Android APK';

  return (
    <Layout
      title="Your anime. Pick up where you left off."
      description="Discover anime, keep your favorites together, and follow upcoming episodes. Get Anizuno for Android, join the iOS TestFlight beta, or watch on Web."
    >
      <main className={styles.home}>
        <section
          className={`${styles.section} ${styles.hero}`}
          aria-labelledby="hero-title"
        >
          <div className={styles.heroCopy}>
            <p className={styles.intro}>
              <span aria-hidden="true" /> A little more anime. A little less
              searching.
            </p>
            <h1 id="hero-title">
              Your anime.
              <br />
              <span>
                Pick up where
                <br />
                you left off.
              </span>
            </h1>
            <p className={styles.lead}>
              Find your next series, keep your favorites close, and make room
              for the next episode. All in one app.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={androidHref}>
                {androidLabel}
                <Arrow down />
              </a>
              <a className={styles.secondaryButton} href={LINKS.testflight}>
                Join iOS TestFlight
                <Arrow />
              </a>
              <a className={styles.secondaryButton} href={LINKS.web}>
                Watch on Web
                <Arrow />
              </a>
            </div>
            <p className={styles.downloadMeta}>
              Free to use <span>·</span> Android, iOS & Web <span>·</span>{' '}
              <Link to="/help/installation">Getting started</Link>
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualTopline}>
              <span>Find something you’ll love.</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className={styles.heroScreens}>
              <AppScreen
                screen={2}
                alt="Anizuno anime details with a synopsis and episode selection"
                className={styles.heroBackScreen}
              />
              <AppScreen
                screen={0}
                alt="Anizuno Home showing continue watching and recently added anime"
                className={styles.heroFrontScreen}
              />
            </div>
            <div className={styles.visualCaption}>
              <span className={styles.playDot} aria-hidden="true">
                ▶
              </span>
              <div>
                Your next favorite is in here.
                <small>Discover. Save. Come back for more.</small>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.featureRibbon} aria-label="App highlights">
          <span>Continue watching</span>
          <span>Personal library</span>
          <span>Airing schedules</span>
          <span>English + Hindi</span>
        </div>

        <section
          id="features"
          className={`${styles.section} ${styles.discovery}`}
          aria-labelledby="discovery-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="discovery-title">
              From “what’s next?”
              <br />
              to your next favorite.
            </h2>
            <p>
              Explore new arrivals, browse Sub and Dub collections, or search
              for the series you already have in mind.
            </p>
          </div>
          <div className={styles.showcase}>
            <div className={styles.showcaseCopy}>
              <span className={styles.featureLabel}>
                Made for your watchlist
              </span>
              <h3>
                A good find deserves
                <br />a place in your library.
              </h3>
              <p>
                Save favorites in a tap. Revisit your history. When in-app
                playback is available, continue watching from your saved episode
                progress.
              </p>
              <Link className={styles.textLink} to="/help/library-settings">
                Get to know your library
                <Arrow />
              </Link>
            </div>
            <div className={styles.libraryVisual}>
              <AppScreen
                screen={6}
                alt="Anizuno Library displaying saved anime favorites"
              />
              <AppScreen
                screen={7}
                alt="Anizuno watch history organized by recently watched episodes"
              />
            </div>
          </div>
        </section>

        <section
          className={styles.playbackSection}
          aria-labelledby="playback-title"
        >
          <div className={`${styles.section} ${styles.playbackInner}`}>
            <div>
              <span className={styles.featureLabel}>
                Settle into the episode
              </span>
              <h2 id="playback-title">
                Your seat.
                <br />
                Your settings.
              </h2>
              <p className={styles.lead}>
                Pick an available Sub or Dub version, choose a source and
                quality, and keep the controls close at hand.
              </p>
              <Link className={styles.textLink} to="/help/playback-downloads">
                Playback & download guide
                <Arrow />
              </Link>
            </div>
            <div className={styles.playbackFeatures}>
              <article>
                <span aria-hidden="true">↔</span>
                <div>
                  <h3>A player that gives you space</h3>
                  <p>
                    Find source, version, quality, and download actions in the
                    playback menu. Android’s Fit/Fill control lets you choose
                    how the picture fills the screen.
                  </p>
                </div>
              </article>
              <article>
                <span aria-hidden="true">↓</span>
                <div>
                  <h3>Take an episode with you</h3>
                  <p>
                    Download supported episodes with their subtitles, then open
                    completed downloads from your Library. Retry failed
                    transfers or delete episodes when you’re done.
                  </p>
                </div>
              </article>
              <p className={styles.availability}>
                Playback and downloads depend on the installed build and source.
                Some builds open an official streaming service.{' '}
                <Link to="/help/playback-downloads#availability">
                  Check availability
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.personal}`}
          aria-labelledby="personal-title"
        >
          <div className={styles.scheduleVisual}>
            <AppScreen
              screen={4}
              alt="Anizuno airing schedule with a day selector and episodes grouped by time"
            />
          </div>
          <div className={styles.personalCopy}>
            <h2 id="personal-title">
              Make it part
              <br />
              of your day.
            </h2>
            <div className={styles.personalItem}>
              <h3>Know what’s airing</h3>
              <p>
                Browse the daily schedule and turn on schedule alerts when you
                want a reminder.
              </p>
            </div>
            <div className={styles.personalItem}>
              <h3>Find your favorite look</h3>
              <p>
                Go light, keep it dark, or try Neo Brutalism. Choose English or
                Hindi, and set your playback preferences in Settings.
              </p>
              <div
                className={styles.themeSwatches}
                aria-label="Available app themes"
              >
                <span>
                  <i className={styles.lightSwatch} />
                  Light
                </span>
                <span>
                  <i className={styles.darkSwatch} />
                  Dark
                </span>
                <span>
                  <i className={styles.neoSwatch} />
                  Neo Brutalism
                </span>
              </div>
            </div>
            <p className={styles.screenshotNote}>
              Screenshots from the app. Layout and features vary by version and
              device.
            </p>
          </div>
        </section>

        <section
          id="download"
          className={`${styles.section} ${styles.downloadSection}`}
          aria-labelledby="download-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="download-title">
              Make yourself
              <br />
              at home.
            </h2>
            <p>Choose Android, iOS, or Web. We’ll help you get started.</p>
          </div>
          <div className={styles.downloadGrid}>
            <article className={styles.downloadCard}>
              <div className={styles.platformTitle}>
                <h3>Android</h3>
                <span>APK download</span>
              </div>
              <p>Install Anizuno directly from our GitHub releases.</p>
              <a className={styles.primaryButton} href={androidHref}>
                {androidLabel}
                <Arrow down />
              </a>
              <p className={styles.downloadDetails}>
                {release.version}
                {apk
                  ? ` · ${formatSize(apk.size)}`
                  : ' · Select the APK for your device'}
              </p>
              <Link to="/help/installation#android">
                How to install on Android
                <Arrow />
              </Link>
            </article>
            <article className={styles.downloadCard}>
              <div className={styles.platformTitle}>
                <h3>iPhone & iPad</h3>
                <span>TestFlight beta</span>
              </div>
              <p>Install TestFlight, then open the Anizuno invitation.</p>
              <a className={styles.secondaryButton} href={LINKS.testflight}>
                Join iOS TestFlight
                <Arrow />
              </a>
              <p className={styles.downloadDetails}>
                Beta access depends on available testing slots.
              </p>
              <Link to="/help/installation#iphone-and-ipad">
                How to join on iOS
                <Arrow />
              </Link>
            </article>
            <article className={styles.downloadCard}>
              <div className={styles.platformTitle}>
                <h3>Web</h3>
                <span>In your browser</span>
              </div>
              <p>Open Anizuno on the web at capacity.rocks.</p>
              <a className={styles.secondaryButton} href={LINKS.web}>
                Watch on Web
                <Arrow />
              </a>
              <p className={styles.downloadDetails}>
                No download or installation needed.
              </p>
              <Link to="/help/installation#web">
                How to use the Web version
                <Arrow />
              </Link>
            </article>
          </div>
          <div className={styles.releaseRow} id="release">
            <div>
              <p className={styles.releaseLabel}>
                {status === 'live'
                  ? 'Latest GitHub release'
                  : 'Last verified GitHub release'}
              </p>
              <h3>
                {release.version}{' '}
                <span>Released {formatDate(release.publishedAt)}</span>
              </h3>
              <ul>
                {release.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.releaseStatus} role="status">
                {status === 'loading'
                  ? 'Checking for a newer release…'
                  : status === 'fallback'
                  ? 'Live updates are unavailable. You can still download this verified release or check GitHub.'
                  : status === 'live'
                  ? 'Release information updated from GitHub.'
                  : `Verified ${formatDate(
                      release.checkedAt,
                    )}. Check GitHub for newer releases.`}
              </p>
            </div>
            <a
              className={styles.textLink}
              href={
                status === 'fallback' || status === 'snapshot'
                  ? LINKS.latest
                  : release.url
              }
            >
              Read release notes
              <Arrow />
            </a>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.faq}`}
          aria-labelledby="faq-title"
        >
          <div>
            <h2 id="faq-title">
              A few things
              <br />
              you might wonder.
            </h2>
            <p>
              More answers in the <Link to="/help">help center</Link>.
            </p>
          </div>
          <div className={styles.questions}>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.community}`}
          aria-labelledby="community-title"
        >
          <div>
            <h2 id="community-title">Better with company.</h2>
            <p>
              Share a recommendation, ask for help, or tell us what you’d love
              to see next.
            </p>
          </div>
          <a className={styles.secondaryButton} href={LINKS.discord}>
            Join the Discord
            <Arrow />
          </a>
        </section>
      </main>
    </Layout>
  );
}
