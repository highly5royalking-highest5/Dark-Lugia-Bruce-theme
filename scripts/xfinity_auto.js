const path = require("path");
const BASE_DIR = path.resolve(__dirname, "..");

wifi.stop();
wifi.set_ssid("Xfinity WiFi");
const portalPath = path.join(BASE_DIR, "DarkLugia", "portals", "Xfinity", "index.html");
wifi.start_portal(portalPath);
display.clear();
display.print("Portal Active: Xfinity");
