---
title: Install and update
description: Install the Android APK, download and sideload the iOS IPA on iPhone or iPad, or open Anizuno on the web.
---

# Install and update

Anizuno is available on **Android, iOS, and Web**. Choose your platform below.

## Android

1. Open the [Anizuno download section](/#download) on your Android device.
2. Download the APK from the official **p2devs/Anizuno** GitHub release. An APK is the installable Android file; source-code archives and AAB files are not direct installs.
3. Open the downloaded APK. If Android asks for installation permission, allow it for the browser or file app you are using, then return to the installer. You can turn that permission off after installation.
4. Open Anizuno and start exploring.

If a release offers separate device architectures, use its release instructions to choose the appropriate APK. A universal APK works across the architectures included in that build.

### Update an existing installation

Download the newer official APK and install it over the existing app. Keep the same app and signing source. You should not need to uninstall first; uninstalling or clearing app storage can remove your local library, progress, and downloads.

If installation fails, check free storage and the release's device requirements. Ask for help before removing your existing app data.

## iPhone and iPad

Starting with v1.2.7, Anizuno distributes iOS updates as IPA files and has stopped publishing builds to TestFlight. The IPA is the app file. A sideloading tool signs it for your device and installs it.

### Download the IPA

On your iPhone or iPad, tap **Download iOS IPA** in the [Anizuno download section](/#download). In Safari, confirm the download, then open **Files → Downloads** or the folder you chose.

You can also download it directly from [GitHub Releases](https://github.com/p2devs/Anizuno/releases). Open the newest release that includes an iOS build, expand **Assets**, and choose the file ending in `.ipa`, such as `Anizuno-v1.2.7.ipa`.

### Install with AltStore Classic

For the first installation, have your iPhone or iPad, a Mac or Windows PC, a USB cable, and your Apple Account ready.

1. **Set up AltStore Classic.** Install AltServer on your computer, connect and unlock your device, then use AltServer’s **Install AltStore** menu to select it. Follow the official setup guide for your computer. [Mac setup](https://faq.altstore.io/altstore-classic/how-to-install-altstore-macos) · [Windows setup](https://faq.altstore.io/altstore-classic/how-to-install-altstore-windows)
2. **Allow the app to run.** On your device, open **Settings → General → VPN & Device Management** and trust the developer profile for your own Apple Account. On iOS or iPadOS 16 and later, enable **Settings → Privacy & Security → Developer Mode**, restart, and confirm when prompted.
3. **Install Anizuno.** Leave AltServer running. Keep your device connected by USB or on the same Wi-Fi network as your computer with Wi-Fi sync enabled. On your device, open **AltStore Classic → My Apps**, tap **+**, and choose the Anizuno IPA from Files. Once Anizuno appears in **My Apps**, open it from your Home Screen.

### Refresh or update Anizuno

With a free Apple Account, the signing period lasts seven days. To keep the installed version working, open **AltStore Classic → My Apps → Refresh All** while AltServer is reachable. [AltStore refresh guide](https://faq.altstore.io/altstore-classic/your-altstore)

To get a **new Anizuno version**, download the newer IPA and install it through **My Apps → +** using the same Apple Account. If the app’s **Update** button opens TestFlight, use the [website download section](/#download).

If you are moving from TestFlight, keep your existing installation until you have checked your library in the sideloaded app. Anizuno stores your library, progress, and downloads locally.

## Web

Open **[Anizuno on Web](https://capacity.rocks/)** in your browser.

Bookmark capacity.rocks to return directly to the Web version. This showcase and help center is separate from the Web app.

## Choosing the latest release

The homepage checks the latest published GitHub release for an Android APK and an iOS IPA. If that lookup is unavailable, the download section shows the last verified release. You can also [check the latest release on GitHub](https://github.com/p2devs/Anizuno/releases/latest).

Android and iOS releases can differ. Read the notes for the version you are installing.
