---
title: Playback and downloads
description: Watch how to download Sub and Dub episodes, choose sources and quality, and find saved episodes in Anizuno.
---

import DownloadWalkthrough from '@site/src/components/DownloadWalkthrough';

# Playback and downloads

## Availability

In-app playback and downloads depend on your installed build and source. Some builds provide discovery and tracking and open an official streaming service instead. If you do not see these controls, check the notes for your version.

Not every source supports every language, resolution, subtitle track, or download format. Source availability can change independently of Anizuno.

## Choose how you watch

Open an anime and select an episode. Where in-app playback is enabled, choose an available Sub or Dub version and source.

In the current player, the **three-dot playback menu** contains version, source, quality, and download actions. Older releases may arrange these controls differently. Set a preferred Sub/Dub version and video quality in **Settings → Playback**.

**Auto** quality adapts to the connection when the source supports it. Selecting a resolution cannot add a quality the source does not provide. Subtitle selection depends on the tracks supplied by that source.

On Android, **Fit** shows the whole picture and **Fill** crops the edges to fill the screen. The Android player also supports pinch gestures for this setting.

## Save an episode

### Download in Sub and Dub {#download-sub-and-dub}

This Android walkthrough saves the same episode in both versions, then finds them in **Library → Downloads**. It has on-screen instructions and no audio.

<DownloadWalkthrough />

1. Open an anime and check the episode number beside **Play**. Tap the **download icon** next to it.
2. Choose **Sub sources** if the version chooser appears, or select the **Sub** tab in the source picker. Pick an available source.
3. Select a quality if choices are available, then tap **Download**. Lower quality uses less storage.
4. To save the dubbed version too, open the download picker again, switch to **Dub**, and choose a Dub source. Select its quality and tap **Download**.
5. Go back and open **Library → Downloads**. The same episode appears as separate **SUB** and **DUB** entries.
6. Wait until each entry says **Ready offline**. Tap **Watch offline** on the version you want.

You can also download the current source from **Download** in the player's three-dot menu. Check its Sub/Dub version before saving.

**Why is Dub or a quality option missing?** Available versions, sources, and quality choices vary by episode. A playback preference cannot add a Dub version or resolution that the source does not provide. The source and 360p quality shown in the video are examples; choose from the options available to you.

Downloads include the subtitles supplied by the source. Sub and Dub are separate downloads, so saving one does not save the other. Downloads use your current Wi-Fi or mobile connection, and higher quality uses more storage.

Supported MP4 and on-demand HLS sources can be saved. Live streams, embedded-only players, and unsupported protected media cannot be downloaded. Season-wide batch downloads, manual pause/resume, and external file export are not currently available.

## Watch offline

Open **Library → Downloads**, find an entry marked **Ready offline**, and tap **Watch offline**. To check an episode before travelling, turn on airplane mode, reopen the app, and test playback, sound, subtitles, and seeking.

Background transfers depend on the operating system. In particular, iOS may delay transfers while the app is suspended. If progress stalls, bring Anizuno to the foreground and check the download status. Background completion is not guaranteed on every device or source.

Use **Delete** to remove saved media. Deleting a download keeps your watch progress. Uninstalling or clearing app data can remove both.

## If something goes wrong

| What you see                           | What to try                                                   |
| -------------------------------------- | ------------------------------------------------------------- |
| Source rejected or no longer available | Retry to request a fresh link, or choose another source.      |
| Connection failed or timed out         | Check your connection, retry later, or select another source. |
| Not enough storage                     | Delete unneeded downloads or free device storage, then retry. |
| Saved media is missing                 | Reconnect and download the episode again.                     |
| Download interrupted                   | Reconnect and use Retry in Library → Downloads.               |
| Unsupported source                     | Choose another available MP4 or supported HLS source.         |

If the problem continues, share the app version, source name, episode, and error with [support](./intro.md#still-need-a-hand). Do not post signed media links or request headers.
