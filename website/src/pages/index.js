import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import axios from "axios";

import styles from "./index.module.css";
import React, { useLayoutEffect, useState } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [updateLogs, setUpdateLogs] = useState({});

  useLayoutEffect(() => {
    axios
      .get("https://api.github.com/repos/p2devs/Anizuno/releases/latest")
      .then((response) => {
        setUpdateLogs(response?.data);
      })
      .catch((error) => {
        alert("Error", "Failed to fetch update logs");
        console.log(error);
      });
  }, []);

  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <div align="left">
          <a
            href="https://discord.gg/AqBDUDMkKa"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              alt="Discord Chat"
              src="https://img.shields.io/discord/1281938822275403817.svg?logo=discord&logoColor=white&logoWidth=20&labelColor=7289DA&label=Discord&color=17cf48"
            />
          </a>
          <a
            href="https://p2devs.github.io/Anizuno/"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              alt="Website"
              src="https://img.shields.io/badge/Website-000000?style=flat&logo=googlechrome&logoColor=white"
            />
          </a>
          <a
            href="https://github.com/p2devs/Anizuno/releases/latest"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              alt="GitHub release (latest by date)"
              src="https://img.shields.io/github/v/release/p2devs/Anizuno"
            />
          </a>
        </div>
        <h2 className={styles.subtitle}>{siteConfig.tagline}</h2>
        <p className={styles.description}>
          Anizuno is a free mobile app offering a vast collection of comics and
          manga across genres like superheroes, sci-fi, fantasy, and manga.
          Enjoy a seamless experience with user-friendly navigation and
          customizable settings. Stay updated with the latest releases and
          classics. With Anizuno, your favorite stories and characters are
          always at your fingertips.
        </p>
        <p
          style={{ fontStyle: "italic", fontWeight: "bold", color: "#ffcc00" }}
        >
          🌟 Star this repository to support the developer and encourage further
          development of the application
        </p>
        <p style={{ fontWeight: "bold", color: "#ff6666" }}>
          ⚠️ Warning: Please do not attempt to upload Anizuno or any of its
          forks to the Play Store, App Store, or any other stores on the
          internet. Doing so may infringe their terms and conditions,
          potentially resulting in legal action or immediate takedown of the
          app.
        </p>
        {/* <div className={styles.buttons}>
          <button
            onClick={() => {
              window.open("https://testflight.apple.com/join/sV2XjUus");
            }}
            className={styles.downloadButton}
          >
            Download iOS
          </button>
          <button
            onClick={() => {
              window.open(updateLogs?.assets?.[0]?.browser_download_url);
            }}
            className={styles.downloadButton}
          >
            Download Android
          </button>
        </div> */}

        <div className={styles.features}>
          <h2>Features</h2>
          <div className={styles.featuresContainer}>
            <div className={styles.feature}>
              <h3>Vast Anime Library</h3>
              <p>
                Access a wide range of anime across various genres including
                superheroes, sci-fi, fantasy, and more.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>User-Friendly Interface</h3>
              <p>
                Intuitive and easy-to-use navigation ensures a seamless reading
                experience.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Releases updates</h3>
              <p>Stay up-to-date with new releases.</p>
            </div>
            <div className={styles.feature}>
              <h3>Search and Discover</h3>
              <p>
                Easily find anime with search functionality and explore curated
                collections.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Push Notifications</h3>
              <p>
                We have implemented push notifications to inform users about new
                releases, updates.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Multi-Platform Support</h3>
              <p>Available on both Android and iOS devices.</p>
            </div>
            <div className={styles.feature}>
              <h3>Community Support</h3>
              <p>
                Join our community on Discord for real-time support and
                discussion.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.techStack}>
          <h2>Tech Stack</h2>
          <ul>
            <li>
              <a href="https://reactnative.dev/">React Native</a> -
              Cross-platform mobile framework
            </li>
            {/* <li>
              <a href="https://redux.js.org/">Redux</a> - State management
            </li> */}
            <li>
              <a href="https://firebase.google.com/">Firebase</a> - Backend
              services
            </li>
            <li>
              <a href="https://docusaurus.io/">Docusaurus</a> - Documentation
            </li>
          </ul>
        </div>

        <div className={styles.disclaimer}>
          <h2>Disclaimer</h2>
          <ul>
            <li>
              Content Aggregation Only: Anizuno simply scrapes links from
              various websites, helping users easily discover anime.
            </li>
            <li>
              No Hosting of Content: Neither Anizuno nor its developers or staff
              host any of the content available in the app. All images and anime
              information are sourced from publicly available APIs.
            </li>
            <li>
              Third-Party Sources: All anime links provided in Anizuno are
              obtained from external third-party anime hosting websites.
            </li>
            <li>
              Liability Disclaimer: Anizuno and its owners are not responsible
              for any misuse of the content within or outside the app and cannot
              be held accountable for its distribution.
            </li>
            <li>
              User Responsibility: By using Anizuno, you acknowledge that the
              developers are not liable for any content within the app, which
              may originate from third-party sources.
            </li>
            <li>
              Copyright Concerns: If you have any copyright or infringement
              concerns, please contact the respective source website directly.
              The developers assume no legal responsibility.
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>
            For any inquiries, feel free to reach out through one of the
            following channels:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:anizuno@mail.p2devs.engineer">
                anizuno@mail.p2devs.engineer
              </a>
            </li>
            <li>
              Discord: Join our{" "}
              <a href="https://discord.gg/AqBDUDMkKa">Discord</a> server to stay
              updated with the latest releases and updates.
            </li>
            <li>
              Github Discussions: Visit our{" "}
              <a href="https://github.com/p2devs/Anizuno/discussions">
                GitHub Discussions board
              </a>{" "}
              to engage with our community, ask questions, and find answers to
              common issues.
            </li>
          </ul>
          <p>We're here to help!</p>
        </div>

        <div className={styles.download}>
          <h2>Download</h2>
          <p>
            Get the app from our{" "}
            <a href="https://github.com/p2devs/Anizuno/releases">
              releases page
            </a>
            .
          </p>
        </div>

        <div className={styles.acknowledgements}>
          <h2>Acknowledgements</h2>
          <ul>
            <li>
              <a href="https://reactnative.dev/">React Native</a>
            </li>
            <li>
              <a href="https://docusaurus.io/">Docusaurus</a>
            </li>
            {/* <li>
              <a href="https://redux.js.org/">Redux</a>
            </li> */}
            <li>
              <a href="https://firebase.google.com/">Firebase</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
