# MeiGaming Downloads Directory

This directory is designated for direct asset hosting of APK and DMG installation binaries if you choose to host files directly on GitHub Pages instead of external GitHub Releases or Google Play Store.

## Directory Layout
- `/downloads/MeiTorrent-v1.2.0.apk`
- `/downloads/MeiConvertor-v1.0.4.apk`
- `/downloads/MeiDroid-v1.0.0.dmg`

## Updating Download URLs
To point download buttons to files placed in this folder, update the `/assets/js/downloads.js` configuration file:

```javascript
const DOWNLOAD_URLS = {
  meitorrent: {
    apk: "/downloads/MeiTorrent-v1.2.0.apk",
    ...
  }
};
```
