# ⚡ DarkLugia Quick Start Guide

Welcome to the **DarkLugia** environment. Use these shortcuts and tips to master your Cardputer-Adv.

## ⌨️ Keyboard Shortcuts
| Key | Action |
| :--- | :--- |
| **`S`** | Toggle **Stealth Mode** (Instant Mute/Dim) |
| **`G`** | Execute **Kia Fob** Capture (315MHz) |
| **`C`** | Launch **Hybrid Card Cloner** |
| **`X`** | Start **Xfinity Evil Portal** |
| **`Esc`** | Exit Current Script / Return to Main Menu |

## 📡 Antenna & Hardware Tips
* **Sub-GHz (Kia):** For the 315MHz Optima capture, ensure clear line of sight. The internal antenna is strongest when the back of the device faces the vehicle.
* **NFC/RFID:** Hold the card or fob directly against the **stamped "M5" logo** on the bottom of the device for the most consistent read.
* **Path Integrity:** Ensure all files remain in the `/DarkLugia/` directory to maintain script links.

## 🌑 Stealth Protocols
When **Stealth Mode** is active:
1. The screen will dim to 1% brightness (appearing off).
2. All capture logs are saved silently to `/DarkLugia/logs/captures.txt`.
3. A **single green pixel** in the top-left corner is the only indicator of a successful credential capture.

## 🛠️ Installation & Troubleshooting
* **Missing Assets:** Ensure you have manually added `roar.wav` and `splash.png` to the `/DarkLugia/assets/` folder, as these binary files are skipped in the main repo push.
* **Script Triggers:** If the Xfinity portal does not launch, verify that `scripts/xfinity_auto.js` is present in your file structure.