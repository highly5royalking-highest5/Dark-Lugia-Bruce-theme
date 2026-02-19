# 🌑 DarkLugia v1.0
**The Ultimate Stealth Suite for M5Stack Cardputer-Adv**

![Splash](assets/splash.png)

## 📡 Overview
**DarkLugia** is a specialized penetration testing and signals intelligence suite. It combines Sub-GHz signal acquisition, WiFi Evil Portals, and credential logging into a unified, mobile interface. Designed for security researchers and enthusiasts.

## 🛠️ Features
- **Signal Intercept:** Targeted 315MHz capture for legacy vehicle systems (Kia/Hyundai).
- **Mew-Cry Feedback:** Audible confirmation of successful captures using the classic 8-bit Mew/Lugia cry.
- **Evil Portals:** High-fidelity phishing templates for Xfinity and Google WiFi networks.
- **Integrated Logging:** On-device credential and signal data viewer.

## 📂 Installation
1. Clone this repository or download the ZIP.
2. Ensure your SD card has the following structure:
   - `/DarkLugia/menu_config.json`
   - `/DarkLugia/scripts/` (Contains .js scripts)
   - `/DarkLugia/assets/` (Contains roar.wav and splash.png)
   - `/DarkLugia/portals/` (Contains HTML templates)
3. Insert the SD card into your **Cardputer-Adv** running **Bruce Firmware**.
4. Load the `menu_config.json` via the Theme/Menu settings.

## 🔊 Audio Setup
The signature capture sound (`roar.wav`) is derived from the original 8-bit Mew cry. 
- **Format:** WAV
- **Sample Rate:** 22050Hz
- **Channels:** Mono

## ⚖️ Legal Disclaimer
This software is for **educational and authorized security testing purposes only**. Unauthorized use against systems without prior written consent is illegal. The developers assume no liability for misuse.

---
*Developed on Master Kramer Desktop*
