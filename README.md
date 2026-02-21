# 🌑 DarkLugia v1.0
![Banner](assets/image_50157be3.jpg)

> "Nothing stops the chosen."

## 📡 Overview
**DarkLugia** is a specialized signals intelligence suite for the M5Stack Cardputer-Adv. It features Sub-GHz capture, WiFi Evil Portals, and a custom LUGIA-BRUCE interface.

## 🛠️ Features
- **Kia Capture:** Targeted 315MHz signal acquisition.
- **Audible Alerts:** Plays the signature **Mew cry** (`roar.wav`) upon success.
- **Phishing Portals:** Xfinity and Google templates for credential testing.

## 📂 Structure
- `/DarkLugia/menu_config.json`
- `/DarkLugia/scripts/`
- `/DarkLugia/assets/` (Place `roar.wav` and `splash.png` here)

## 🚀 GitHub Publish
- A GitHub Pages workflow is included at `.github/workflows/pages.yml`.
- Merge this branch to `main`, then in **Settings → Pages**, ensure the source is set to **GitHub Actions**.
- After the workflow runs, the repo landing page is served from `index.html`.
