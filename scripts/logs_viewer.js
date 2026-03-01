const path = require("path");
const BASE_DIR = path.resolve(__dirname, "..");

display.clear();
display.print("--- DARKLUGIA PASSWORDS ---");
const logsPath = path.join(BASE_DIR, "DarkLugia", "logs", "passwords.txt");
if (storage.exists(logsPath)) {
    const logs = storage.read(logsPath);
    display.print(logs);
} else {
    display.print("No credentials captured yet.");
}
