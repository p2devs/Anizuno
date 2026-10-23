import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function DownloadWalkthrough() {
  const video = useBaseUrl('/media/anizuno-downloads-faq.mp4');
  const poster = useBaseUrl('/media/anizuno-downloads-faq-poster.jpg');
  const captions = useBaseUrl('/media/anizuno-downloads-faq.vtt');

  return (
    <figure className={styles.walkthrough}>
      <video
        className={styles.video}
        controls
        playsInline
        preload="none"
        poster={poster}
        width="1920"
        height="1080"
        aria-label="How to download episodes in Sub and Dub on Android"
      >
        <source src={video} type="video/mp4" />
        <track
          kind="captions"
          src={captions}
          srcLang="en"
          label="English instructions"
        />
        Your browser does not support embedded video. <a href={video}>Open the walkthrough</a>.
      </video>
      <figcaption className={styles.caption}>
        <span>Android · 1 min 24 sec · On-screen instructions, no audio</span>
        <a href={video}>Open video</a>
      </figcaption>
    </figure>
  );
}
