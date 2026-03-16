/**
 * PROJECT: DARKLUGIA APEX v1.14 (BRUCE-ADV)
 * ARCHITECT: Gemini (Logic/Pathways/Evolution)
 * BUILDER: GitHub Copilot (Auto-complete/Optimizations)
 * STATUS: Aggressive Handshake Collection (Ogden Base)
 * EVOLUTIONS: [0-5] SAMOON (RED) | [5-15] RAMOON (BLUE) | [15+] DARK SHADOW APEX MOON (SHADOW)
 * TARGET HP MODERATOR: 10.0.0.244:5000
 */
#include <M5Cardputer.h>
#include <WiFi.h>
#include <HTTPClient.h>

// --- DARKLUGIA APEX GLOBAL VARS ---
const char* WIFI_SSID = "5avagely2.4";
const char* WIFI_PASS = "Fe6a46be!";
const char* MOD_URL   = "http://10.0.0.244:5000/sync";

int handshakes = 0;
String currentForm = "SAMOON";

void setup() {
    auto cfg = M5.config();
    M5Cardputer.begin(cfg);
    M5Cardputer.Display.setRotation(1);
    
    // Boot sequence: Display the "Chosen One" Splash
    // Ensure the file is at: F:/assets/splashes/chosen_one.png
    drawSplash("/assets/splashes/chosen_one.png");
    
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(">> SAMOON AWAKENED");
}

void loop() {
    M5Cardputer.update();

    // Check Evolution status
    if (handshakes >= 15 && currentForm != "DARK SHADOW APEX MOON") {
        currentForm = "DARK SHADOW APEX MOON";
        drawSplash("/assets/splashes/shadow_apex_moon.png");
    } else if (handshakes >= 5 && handshakes < 15 && currentForm != "RAMOON") {
        currentForm = "RAMOON";
        drawSplash("/assets/splashes/blue_ramoon.png");
    }

    // Capture Simulation for Testing (Press 'M' for Manual Handshake)
    if (M5Cardputer.Keyboard.isKeyPressed('m')) {
        handshakes++;
        reportToModerator();
        delay(300);
    }
}

void drawSplash(const char* path) {
    M5Cardputer.Display.fillScreen(BLACK);
    // In actual use, this calls the PNG from SD
    M5Cardputer.Display.setCursor(10, 10);
    M5Cardputer.Display.setTextColor(WHITE);
    M5Cardputer.Display.printf("FORM: %s", currentForm.c_str());
}

void reportToModerator() {
    if (WiFi.status() == WL_CONNECTED) {
        HTTPClient http;
        http.begin(MOD_URL);
        http.addHeader("Content-Type", "application/json");
        String json = "{\"lugia\":\"" + currentForm + "\", \"looted\":" + String(handshakes) + "}";
        http.POST(json);
        http.end();
    }
}
