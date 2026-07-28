/**
 * MeiGaming - Centralized App Download Configuration
 * Modify these URLs to update download links studio-wide.
 */
const DOWNLOAD_URLS = {
  meitorrent: {
    name: "MeiTorrent",
    version: "1.2.0",
    platform: "Android",
    apk: "https://github.com/meigamingofficial-design/MEITORRENT/releases/download/v1.2.0/MeiTorrent-v1.2.0.apk",
    googlePlay: "https://play.google.com/store/apps/details?id=com.meigaming.meitorrent",
    githubReleases: "https://github.com/meigamingofficial-design/MEITORRENT/releases"
  },
  meiConvertor: {
    name: "Mei Convertor",
    version: "1.0.4",
    platform: "Android",
    apk: "https://github.com/meigamingofficial-design/mei_convertor/releases/download/v1.0.4/MeiConvertor-v1.0.4.apk",
    googlePlay: "https://play.google.com/store/apps/details?id=com.meigaming.meiconvertor",
    githubReleases: "https://github.com/meigamingofficial-design/mei_convertor/releases"
  },
  meidroid: {
    name: "MeiDroid",
    version: "1.0.0",
    platform: "macOS",
    dmg: "https://github.com/meigamingofficial-design/Meigaming/releases/download/v1.0.0/MeiDroid-v1.0.0.dmg",
    githubReleases: "https://github.com/meigamingofficial-design/Meigaming/releases"
  }
};

/**
 * Attaches dynamic download URL handlers to HTML elements with data-download attribute
 */
function initDownloads() {
  document.querySelectorAll('[data-download]').forEach(element => {
    const appKey = element.getAttribute('data-app');
    const type = element.getAttribute('data-download');

    if (DOWNLOAD_URLS[appKey] && DOWNLOAD_URLS[appKey][type]) {
      element.setAttribute('href', DOWNLOAD_URLS[appKey][type]);
      element.setAttribute('target', '_blank');
      element.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

document.addEventListener('DOMContentLoaded', initDownloads);
