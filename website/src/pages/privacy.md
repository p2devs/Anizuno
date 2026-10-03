---
title: Privacy Policy
description: How Anizuno handles local app data, usage information, diagnostics, and third-party services.
wrapperClassName: policy-page
---

# Privacy Policy

Updated 3 October 2026

Anizuno is maintained by P2 Devs. This page explains how the app and this website handle information. Contact [anizuno@capacity.rocks](mailto:anizuno@capacity.rocks) with privacy questions or requests.

## Information stored on your device

Anizuno stores favorites, watch history, episode progress, app preferences, and notification-inbox records on your device. Supported downloads also store episode media and subtitles locally. There is currently no account-based library sync.

You can remove favorites, clear the history list, and delete downloaded episodes from the app. These are separate actions: clearing history does not erase every saved preference or episode-progress record. Clearing the app's storage or uninstalling can remove local data. These actions do not delete information already received by external services.

## Usage information and diagnostics

Production builds normally enable Google Analytics for Firebase, Firebase Crashlytics, and Firebase Performance Monitoring. The current app does not have an in-app switch to opt out of these services.

The app uses a randomly generated installation identifier to associate usage and diagnostics across sessions. Information sent can include screens visited and time spent, anime identifiers and titles, genres, episode playback events and progress, library actions, notification interactions, and changes to preferences. Search analytics include a hash of the search text, its length, and result counts; the search service receives the text needed to perform your search.

Diagnostics can include crash traces, error messages, interaction breadcrumbs, network request performance, app and OS versions, device model, language, network type, and notification-permission status. An installation identifier is not an account or a guarantee of anonymity. Firebase services may also process their own installation identifiers and network information.

These services help us understand app use, investigate failures, and improve reliability. See [Firebase's privacy information](https://firebase.google.com/support/privacy) and [Google's Privacy Policy](https://policies.google.com/privacy) for their handling of data.

## Notifications and device authentication

The app uses notification permission for schedule reminders and supported push notifications. Firebase messaging services may process installation identifiers to deliver messages. You can turn off Schedule Alerts in Anizuno and manage notification permissions in your device settings.

Where an adult section is available, device authentication is handled through the operating system. The app receives an authentication result; it does not receive your fingerprint, facial template, or device passcode.

## External services and content

Catalog searches, anime details, schedules, playback, and downloads make requests to Anizuno's API and relevant external providers. These services receive the request information needed to respond, which can include your IP address, requested content, and device or network headers. ConfigCat is used to retrieve app configuration and feature availability.

Apple TestFlight, GitHub downloads, Discord, donation services, and external streaming providers operate under their own policies. Following a link or using their service can share information with that provider. See [ConfigCat's privacy policy](https://configcat.com/privacy/), [Apple's privacy policy](https://www.apple.com/legal/privacy/), and [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## This website

This site is hosted on GitHub Pages. GitHub handles the network requests used to serve it. The homepage requests public release information from the GitHub API so it can display the available Android download. Fonts and app screenshots are served with the site rather than requested from a third-party font or image service.

The website remembers your selected display theme in your browser. The website itself does not add an analytics tracker or advertising cookies.

## Storage, retention, and requests

Local data remains until it is removed by you, the app, or the operating system. Service-side data is handled according to the relevant service's configured retention and policies; removing the app does not automatically erase previously collected diagnostics or analytics.

For questions about access, correction, or deletion, email [anizuno@capacity.rocks](mailto:anizuno@capacity.rocks). Describe the request without sending passwords, private media URLs, or other unnecessary sensitive information. We may need additional information to identify relevant records because the app does not use a named user account.

## Age-restricted content and changes

Any section marked **18+** is for adults only. Age confirmation and device authentication do not change how external content providers handle requests.

This page will be updated when the app's data handling changes. The date above identifies the latest update to this notice.
