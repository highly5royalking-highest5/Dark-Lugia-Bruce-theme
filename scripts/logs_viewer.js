display.clear();
display.print("--- DARKLUGIA PASSWORDS ---");
let logs = storage.read("/DarkLugia/logs/passwords.txt");
display.print(logs);
