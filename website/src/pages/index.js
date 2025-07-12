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
          Anizuno is a free, cross-platform mobile app that provides
          comprehensive insights into the world of anime. Discover everything
          from the latest anime releases to timeless classics, all in one
          intuitive and seamless experience.
        </p>
        <p
          style={{ fontStyle: "italic", fontWeight: "bold", color: "#ffcc00" }}
        >
          🌟 Star this repository to support the developer and encourage further
          development of the application
        </p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              alert("iOS support has been discontinued for now");
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
        </div>

        <div className={styles.features}>
          <h2>Features</h2>
          <div className={styles.featuresContainer}>
            <div className={styles.feature}>
              <h3>Extensive Anime Library</h3>
              <p>
                Browse a curated collection of anime from trusted, publicly
                available sources.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>User-Friendly Interface</h3>
              <p>
                Enjoy an intuitive navigation system and customizable settings
                on both Android and iOS devices.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Real-Time Updates & Detailed Insights</h3>
              <p>
                Stay informed with timely release information and in-depth
                analyses on your favorite series and characters.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Powerful Search & Discovery</h3>
              <p>
                Quickly locate anime titles through robust search functionality
                and thoughtfully curated collections.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Push Notifications</h3>
              <p>
                Receive alerts about new releases, updates, and key community
                events.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Community Engagement</h3>
              <p>
                Connect with fellow anime enthusiasts on Discord for support,
                discussions, and the latest news.
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
              <a href="https://firebase.google.com/">Firebase</a> - Crashlytics,
              Analytics and Push Notifications.
            </li>
            <li>
              <a href="https://docusaurus.io/">Docusaurus</a> - Documentation
            </li>
          </ul>
        </div>

        <div className={styles.disclaimer}>
          <h2>Content & Copyright Disclaimer</h2>
          <p>
            Anizuno aggregates anime insights by indexing information that is
            publicly available.
          </p>
          <ul>
            <li>
              Content Aggregation Only: We do not host any copyrighted material.
              All anime images, descriptions, and data are sourced externally
              and are not hosted by us.
            </li>
            <li>
              Copyright & Legal Considerations: Re-uploading Anizuno or any of
              its forks to commercial app stores may violate copyright laws and
              the terms of service of original content providers. Users and
              developers are advised to adhere to these guidelines to avoid
              potential legal issues.
            </li>
            <li>
              Third-Party Sources: Content links provided within the app lead to
              external sites. For copyright or infringement concerns, please
              contact the respective content owners directly.
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
