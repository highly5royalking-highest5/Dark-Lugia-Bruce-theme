// Cardputer ADV - Google Auto
// Dark-Lugia-Bruce-theme

// This script follows the style of other scripts in /scripts (e.g., xfinity_auto.js)
// It starts a Wi-Fi portal using the Google captive-portal style page.

wifi.stop();
// Many Cardputer ADV builds trigger portal/login flows when SSID matches an open hotspot.
// Set SSID to something explicit so you can find it quickly in Wi-Fi lists.
wifi.set_ssid("Google Free WiFi");

// Start the portal using the Google portal page (create this HTML under /DarkLugia/portals/Google if needed)
wifi.start_portal("/DarkLugia/portals/Google/index.html");

display.clear();
display.print("Portal Active: Google");

audio.play("/DarkLugia/assets/roar.wav");