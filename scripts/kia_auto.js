const path = require("path");
const BASE_DIR = path.resolve(__dirname, "..");

subghz.set_frequency(315000000);
display.clear();

const splashPath = path.join(BASE_DIR, "DarkLugia", "assets", "splash.png");
if (storage.exists(splashPath)) {
    display.draw_image(splashPath, 0, 0);
}
display.print("SEARCHING KIA 315MHz...");

const logsDir = path.join(BASE_DIR, "DarkLugia", "logs");
if (!storage.exists(logsDir)) {
    storage.mkdir(logsDir);
}

while (true) {
    if (subghz.receive()) {
        const rawTime = system.get_time();
        const timestamp = (rawTime != null ? String(rawTime) : Date.now().toString()).replace(/[^a-zA-Z0-9_-]/g, "_");
        const savePath = path.join(logsDir, "Kia_" + timestamp + ".sub");
        storage.save(savePath, subghz.get_data());
        const roarPath = path.join(BASE_DIR, "DarkLugia", "assets", "roar.wav");
        if (storage.exists(roarPath)) {
            audio.play(roarPath);
        }
        display.print("CAPTURED!");
        break;
    }
}
