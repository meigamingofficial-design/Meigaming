# MeiGaming — Official Website & Studio Portal

[![Main Website](https://img.shields.io/badge/Main_Website-meigaming.github.io-0071e3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://meigaming.github.io)
[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub_Pages-Active-success?style=for-the-badge&logo=github)](https://meigaming.github.io)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)](#)

> 🌐 **Official Studio Website:** [https://meigaming.github.io](https://meigaming.github.io)

Production-ready static website for **MeiGaming**, an independent software studio founded by **Aravindh**. Everything lives under one unified GitHub Pages website at [`https://meigaming.github.io`](https://meigaming.github.io).

---

## 🔗 Associated Repositories & App Websites

All applications have been consolidated into the unified website portal. The associated repositories and individual sites are:

| Application | Platform | Unified Portal Page | Repository Link | Original / Legacy Site |
| :--- | :--- | :--- | :--- | :--- |
| **MeiGaming Studio** | Web | [meigaming.github.io](https://meigaming.github.io) | [meigamingofficial-design/Meigaming](https://github.com/meigamingofficial-design/Meigaming) | [meigaming.github.io](https://meigaming.github.io) |
| **MeiTorrent** | Android | [/apps/meitorrent/](https://meigaming.github.io/apps/meitorrent/) | [meigamingofficial-design/MEITORRENT](https://github.com/meigamingofficial-design/MEITORRENT) | [MEITORRENT Site](https://meigamingofficial-design.github.io/MEITORRENT/) |
| **Mei Convertor** | Android | [/apps/mei-convertor/](https://meigaming.github.io/apps/mei-convertor/) | [meigamingofficial-design/mei_convertor](https://github.com/meigamingofficial-design/mei_convertor) | [mei_convertor Site](https://meigamingofficial-design.github.io/mei_convertor/) |
| **MeiDroid** | macOS | [/apps/meidroid/](https://meigaming.github.io/apps/meidroid/) | [meigamingofficial-design/Meigaming](https://github.com/meigamingofficial-design/Meigaming) | New App Portal |

---

## 📁 Architecture & Folder Structure

```
/
├── index.html                  # Studio main landing page
├── about.html                  # About MeiGaming & developer story
├── contact.html                # Contact info & support links
├── privacy.html                # Website privacy policy
├── terms.html                  # Website terms of service
├── 404.html                    # Custom 404 error page
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # XML sitemap for SEO
├── manifest.json               # Web App Manifest (PWA)
├── favicon.ico                 # Root favicon icon
├── README.md                   # Project documentation
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Core UI layout & component styles
│   │   ├── variables.css       # Design tokens, Apple palette & theme vars
│   │   ├── animations.css      # Smooth CSS keyframes & transitions
│   │   └── responsive.css      # Mobile-first responsive query breakpoints
│   │
│   ├── js/
│   │   ├── main.js             # UI interactivity & utility scripts
│   │   ├── theme.js            # Dark & Light mode theme manager
│   │   ├── navigation.js       # Navigation bar & mobile drawer logic
│   │   └── downloads.js        # Centralized app download URLs
│   │
│   └── images/
│       ├── logo/               # Studio & app SVG logos
│       ├── banner/             # Hero banners & vector graphics
│       ├── apps/               # App preview screenshots & mockups
│       ├── icons/              # Favicon & interface icons
│       └── backgrounds/        # Abstract ambient background assets
│
├── apps/                       # App-specific landing pages & legal documents
│   ├── meitorrent/             # MeiTorrent (Android Torrent Downloader)
│   │   ├── index.html
│   │   ├── privacy-policy.html
│   │   └── terms.html
│   │
│   ├── mei-convertor/          # Mei Convertor (Android Offline File Converter)
│   │   ├── index.html
│   │   ├── privacy-policy.html
│   │   └── terms.html
│   │
│   └── meidroid/               # MeiDroid (macOS Android File Transfer Utility)
│       ├── index.html
│       ├── privacy-policy.html
│       └── terms.html
│
└── downloads/                  # Directory for direct APK & DMG file hosting
    └── README.md
```

---

## 🚀 GitHub Pages Deployment Guide

This project requires **zero build tools, zero Node.js dependencies, and zero compilation steps**.

### Steps to Deploy:
1. Push this repository to GitHub under your user or organization account (`meigamingofficial-design/Meigaming` or `meigaming/meigaming.github.io`).
2. Go to repository **Settings** -> **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) branch and `/ (root)` folder.
4. Click **Save**. GitHub Pages will automatically publish the site in seconds.

---

## 🔗 How to Update App Download Links

All download links across the website (APKs, DMGs, Google Play, GitHub Releases) are centrally configured in **`/assets/js/downloads.js`**.

To release a new version or change download locations:

1. Open `/assets/js/downloads.js`.
2. Update the target URL strings in `DOWNLOAD_URLS`:

```javascript
const DOWNLOAD_URLS = {
  meitorrent: {
    version: "1.3.0",
    apk: "https://github.com/meigamingofficial-design/MEITORRENT/releases/download/v1.3.0/MeiTorrent-v1.3.0.apk",
    googlePlay: "https://play.google.com/store/apps/details?id=com.meigaming.meitorrent",
    githubReleases: "https://github.com/meigamingofficial-design/MEITORRENT/releases"
  },
  ...
};
```
3. Commit and push the changes. The download buttons across the entire website will automatically point to the updated links.

---

## ➕ How to Add a New App

To add a new application to MeiGaming:

1. **Create App Folder**:
   Create a new folder in `/apps/<new-app-name>/` containing:
   - `index.html`
   - `privacy-policy.html`
   - `terms.html`

2. **Add App Logos & Screenshots**:
   Save the logo SVG in `/assets/images/logo/<new-app-name>-logo.svg` and preview mockups in `/assets/images/apps/`.

3. **Register Download URLs**:
   Add the new app configuration to `DOWNLOAD_URLS` in `/assets/js/downloads.js`:
   ```javascript
   newApp: {
     name: "New App Name",
     version: "1.0.0",
     platform: "Android",
     apk: "...",
     googlePlay: "..."
   }
   ```

4. **Update Navigation & Cards**:
   - Add a card in `/index.html` under the `#apps` section.
   - Add a dropdown link in `.dropdown-menu` in all headers.
   - Add an entry to `sitemap.xml`.

---

## 🎨 Design System

- **Aesthetics**: Apple-inspired Japanese minimal Zen design (Kanso & Shibui).
- **Themes**: Seamless Dark & Light mode toggle with `localStorage` persistence and `prefers-color-scheme` auto-detection.
- **Typography**: `-apple-system`, `SF Pro Display`, `Inter`.
- **Accessibility**: High-contrast ratios, focus ring indicators (`:focus-visible`), ARIA metadata, reduced motion media queries.

---

## ✉️ Support & Contact

- **Owner / Developer:** Aravindh
- **Studio Name:** MeiGaming
- **Email:** `meigaming.official@gmail.com`
- **GitHub:** [https://github.com/meigamingofficial-design/Meigaming](https://github.com/meigamingofficial-design/Meigaming)
